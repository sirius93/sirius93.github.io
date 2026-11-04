/* Picks two apps for the side rails: relevant to this page first, then whatever
   this reader has seen least. Apps come from _data/app_rails.yml via the layout. */
(function () {
  var KEY = "appRails";
  var RECENT = 6; // about three page views, so nothing sticks around on untopical pages

  // A keyword hit is worth more than the penalty for one recent showing, but an
  // app shown on every recent page (3 x 1.5) loses to a one-hit rival, so it rotates.
  function rank(apps, text, seen, clicked, random) {
    var words = new Set(text.toLowerCase().match(/[a-z0-9]+/g) || []);
    return apps
      .map(function (app) {
        var hits = app.keywords.filter(function (k) { return words.has(k); }).length;
        var shown = seen.filter(function (id) { return id === app.id; }).length;
        var score = 4 * Math.min(hits, 3) - 1.5 * shown - (clicked.indexOf(app.id) > -1 ? 3 : 0) + random();
        return { app: app, score: score };
      })
      .sort(function (a, b) { return b.score - a.score; })
      .map(function (r) { return r.app; });
  }

  if (typeof module !== "undefined") { module.exports = { rank: rank }; return; }

  function load() {
    try {
      var h = JSON.parse(localStorage.getItem(KEY)) || {};
      return { seen: h.seen || [], clicked: h.clicked || [] };
    } catch (e) { return { seen: [], clicked: [] }; }
  }
  function save(h) {
    try { localStorage.setItem(KEY, JSON.stringify(h)); } catch (e) { /* private mode: no rotation */ }
  }
  function track(name, app, slot) {
    if (window.gtag) window.gtag("event", name, { app: app.id, slot: slot, page_path: location.pathname });
  }

  function pageText() {
    var heads = document.querySelectorAll(".content h1, .content h2, .content h3");
    return location.pathname.replace(/\.html$/, "") + " " + document.title + " " +
      Array.prototype.map.call(heads, function (h) { return h.textContent; }).join(" ");
  }

  function banner(app, slot) {
    var url = new URL(app.url);
    url.searchParams.set("utm_source", "nandan.dev");
    url.searchParams.set("utm_medium", "side_rail");
    url.searchParams.set("utm_content", slot);

    var img = document.createElement("img");
    img.src = "/images/rail/" + app.id + ".webp";
    img.alt = app.name + ": " + app.pitch;
    img.width = 160;
    img.height = 600;

    var a = document.createElement("a");
    a.href = url.href;
    a.target = "_blank";
    a.rel = "noopener";
    a.appendChild(img);
    a.addEventListener("click", function () {
      track("app_rail_click", app, slot);
      var h = load();
      if (h.clicked.indexOf(app.id) < 0) h.clicked.push(app.id);
      save(h);
    });

    var rail = document.createElement("aside");
    rail.className = "app-rail app-rail--" + slot;
    rail.setAttribute("aria-label", "Apps by Nandan");
    rail.appendChild(a);
    return rail;
  }

  var fits = window.matchMedia(document.getElementById("app-rails-css").media);
  var done = false;

  // Injected only when it fits, so phones never download the images.
  function render() {
    if (done || !fits.matches) return;
    done = true;
    var main = document.getElementById("content");
    var apps = JSON.parse(document.getElementById("app-rails-data").textContent);
    var h = load();
    var picks = rank(apps, pageText(), h.seen, h.clicked, Math.random).slice(0, 2);
    ["left", "right"].forEach(function (slot, i) {
      main.appendChild(banner(picks[i], slot));
      track("app_rail_view", picks[i], slot);
    });
    h.seen = h.seen.concat(picks[0].id, picks[1].id).slice(-RECENT);
    save(h);
  }

  render();
  fits.addEventListener("change", render);
})();
