var test = require("tape");
var elevenizer = require("../");

test("single digits", function (t) {
  t.plan(6);

  elevenizer(0, function (err, n) {
    t.error(err);
    t.equal(n, 0, "n=" + n);
  });

  elevenizer(3, function (err, n) {
    t.error(err);
    t.equal(n, 333, "n=" + n);
  });

  elevenizer(7, function (err, n) {
    t.error(err);
    t.equal(n, 777, "n=" + n);
  });
});
