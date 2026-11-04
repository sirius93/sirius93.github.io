// Run: node _banners/app-rails.test.js
const assert = require("assert");
const { rank } = require("../js/app-rails.js");

const apps = [
  { id: "kitaaben", keywords: ["book", "books", "reading"] },
  { id: "cloud", keywords: ["cloud", "aws", "system"] },
  { id: "dock", keywords: ["chrome", "tabs"] },
  { id: "cope", keywords: ["blog", "linkedin"] },
];
const ids = (list) => list.map((a) => a.id);
const noRandom = () => 0;

// Relevant app wins, matched on whole words only ("facebook" is not "book").
assert.equal(rank(apps, "pages books book reviews", [], [], noRandom)[0].id, "kitaaben");
assert.notEqual(rank(apps, "facebook", ["cloud", "dock", "cope"], [], noRandom)[0].id, "cloud");
assert.equal(rank(apps, "facebook", ["cloud", "dock", "cope"], [], noRandom)[0].id, "kitaaben");

// Relevance beats one recent showing, but an app shown on every recent page rotates out.
assert.equal(rank(apps, "aws", ["cloud"], [], noRandom)[0].id, "cloud");
assert.notEqual(rank(apps, "aws", ["cloud", "cloud", "cloud"], [], noRandom)[0].id, "cloud");

// Someone who already clicked through is shown something else on an untopical page.
assert.equal(ids(rank(apps, "misc", [], ["kitaaben"], noRandom)).pop(), "kitaaben");

// Never the same app twice, and an empty page or history still gives two picks.
const picks = ids(rank(apps, "", [], [], Math.random)).slice(0, 2);
assert.equal(new Set(picks).size, 2);

console.log("ok");
