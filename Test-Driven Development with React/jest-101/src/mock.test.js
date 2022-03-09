const fetchUser = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
};

describe("mocking", () => {
  it("create a callable function", () => {
    const mock = jest.fn();

    mock("Daniel");

    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledWith("Daniel");
    expect(mock).toHaveBeenCalledTimes(1);
  });

  it("mock implementation", () => {
    const fakeAdd = jest.fn().mockImplementation((a, b) => 5);

    expect(fakeAdd(1, 1)).toBe(5);
    expect(fakeAdd).toHaveBeenCalledWith(1, 1);
  });
});

describe("mock api call", () => {
  const user = {
    id: 1,
    name: "Daniel Brito",
    username: "daniel",
    email: "daniel@email.com",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "danielbrito.dev",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  };

  it("mock fetch", () => {
    global.fetch = jest
      .fn()
      .mockImplementation(() => Promise.resolve({ user }));

    fetchUser(1).then((x) => console.log(x));

    expect(global.fetch).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/users/1"
    );
  });
});
