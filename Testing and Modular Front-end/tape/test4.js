var test = require("tape");

test("this test has a name", function (t) {
  t.plan(3);
  t.equal(1 + 1, 2);
  t.equal(1 + 2, 3);

  setTimeout(function () {
    t.ok(true, "true is ok");
  }, 100);
});

test("this is a secont test", function (t) {
  t.equal(1 + 5, 6, "six");
  t.end();
});
