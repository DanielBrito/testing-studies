// Triangulation:
// https://www.oreilly.com/library/view/professional-test-driven-development/9780470643204/ch007-sec010.html

function orderTotal(order) {
  return order.items.reduce(
    (prev, cur) => cur.price * (cur.quantity || 1) + prev,
    0
  );
}

if (
  orderTotal({
    items: [
      {
        name: "Dragon candy",
        price: 2,
        quantity: 3,
      },
    ],
  }) !== 6
) {
  throw new Error("Check fail: Quantity");
}

if (
  orderTotal({
    items: [{ name: "Dragon clothe", price: 3 }],
  }) !== 3
) {
  throw new Error("Check fail: No quantity specified");
}

if (
  orderTotal({
    items: [
      { name: "Dragon food", price: 8, quantity: 1 },
      { name: "Dragon cage", price: 800, quantity: 1 },
    ],
  }) !== 808
) {
  throw new Error("Check fail: Happy path (Example 1)");
}

if (
  orderTotal({
    items: [
      { name: "Dragon collar", price: 20, quantity: 1 },
      { name: "Dragon toy", price: 40, quantity: 1 },
    ],
  }) !== 60
) {
  throw new Error("Check fail: Happy path (Example 2)");
}
