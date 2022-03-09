const users = ["Daniel", "Henrique", "Brito"];
const author = {
  name: "Juntao Qiu",
  address: "Xian, Shaanxi, China",
  projects: [
    { name: "ThoughtWorks University" },
    { name: "ThoughtWorks Core Business Beach" },
  ],
};

describe("function expect", () => {
  it("string contains", () => {
    const givenName = expect.stringContaining("Daniel");
    expect("Daniel Brito").toEqual(givenName);
  });
});

describe("array", () => {
  it("array containing", () => {
    const userSet = expect.arrayContaining(["Daniel", "Brito"]);
    expect(users).toEqual(userSet);
  });

  it("containing family functions", () => {
    const matcher = expect.objectContaining({
      name: expect.stringContaining("Juntao"),
      projects: expect.arrayContaining([
        { name: expect.stringContaining("ThoughtWorks") },
      ]),
    });
    expect(author).toEqual(matcher);
  });
});
