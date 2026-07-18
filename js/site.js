(function () {
  "use strict";

  /* Theme toggle — persisted, defaults to OS preference */
  var root = document.documentElement;
  var stored = localStorage.getItem("theme");
  if (stored) root.setAttribute("data-theme", stored);

  var themeBtn = document.querySelector(".theme-toggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var current = root.getAttribute("data-theme") ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
      var next = current === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
    });
  }

  /* Mobile nav */
  var burger = document.querySelector(".nav-burger");
  var navLinks = document.querySelector(".nav-links");

  function setMenu(open) {
    if (!burger || !navLinks) return;
    navLinks.classList.toggle("open", open);
    burger.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", open ? "true" : "false");
    document.documentElement.classList.toggle("nav-open", open);
  }

  if (burger && navLinks) {
    burger.addEventListener("click", function () {
      setMenu(!navLinks.classList.contains("open"));
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setMenu(false);
    });

    document.addEventListener("click", function (e) {
      if (!navLinks.classList.contains("open")) return;
      if (navLinks.contains(e.target) || burger.contains(e.target)) return;
      setMenu(false);
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        if (window.innerWidth > 900) return;
        if (link.closest(".nav-item") && link.parentElement.tagName === "LI" && link.nextElementSibling) return;
        setMenu(false);
      });
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 900) setMenu(false);
    });
  }

  document.querySelectorAll(".nav-item > a").forEach(function (toggle) {
    toggle.addEventListener("click", function (e) {
      if (window.innerWidth > 900) return;
      var parent = toggle.closest(".nav-item");
      if (!parent) return;
      e.preventDefault();
      parent.classList.toggle("open");
    });
  });

  /* Back to top */
  var toTop = document.querySelector(".to-top");
  if (toTop) {
    window.addEventListener("scroll", function () {
      toTop.classList.toggle("visible", window.scrollY > 500);
    }, { passive: true });
    toTop.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* Reveal-on-scroll */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }
})();
