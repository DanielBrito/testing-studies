describe("comparison", () => {
  it("toEqual", () => {
    expect(1 + 1).toEqual(2);
    expect("Daniel").toEqual("Daniel");
    /* Pass because it compares the value of each field: */
    expect({ name: "Daniel" }).toEqual({ name: "Daniel" });
  });

  it("toBe", () => {
    expect(1 + 1).toBe(2);
    expect("Daniel").toBe("Daniel");
    expect({ name: "Daniel" }).not.toBe({ name: "Daniel" });
    /* Fails because it compares the memory address: */
    // expect({ name: "Daniel" }).tobe({ name: "Daniel" });
  });

  it("not", () => {
    expect(1 + 2).not.toEqual(2);
  });

  it("toMatch", () => {
    expect("Daniel").toMatch(/\w+/);
    expect("185-3345-3343").toMatch(/^\d{3}-\d{4}-\d{4}$/);
    expect("1853-3345-3343").toMatch(/^\d{4}-\d{4}-\d{4}$/);
  });

  it("inequality", () => {
    expect(1 + 2).toBeGreaterThan(2);
    expect(1 + 2).toBeGreaterThanOrEqual(2);

    expect(1 + 2).toBeLessThan(4);
    expect(1 + 2).toBeLessThanOrEqual(4);
  });
});
