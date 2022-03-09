const users = ["Daniel", "Henrique", "Brito"];
const people = [{ name: "Daniel" }, { name: "Brito" }];
const person = {
  name: "Daniel",
  address: "Ceará, Brazil",
};

describe("array and object", () => {
  it("match arrays", () => {
    expect(users).toContainEqual("Daniel");
    /* Checks if the item is in the list by strictly comparing elements using ===: */
    expect(users).toContain(users[0]);
  });

  it("object in array", () => {
    expect(people).toContainEqual({ name: "Daniel" });
    // expect(people).toContain({ name: "Daniel" }); /* Fail */
    expect(people).not.toContain({ name: "Daniel" });
  });

  it("match object", () => {
    expect(person.name).toBeDefined();
    expect(person.age).not.toBeDefined();
  });
});
