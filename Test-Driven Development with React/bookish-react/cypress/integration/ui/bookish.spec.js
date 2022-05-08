const axios = require("axios");

import {
  checkAppTitle,
  checkBookDetail,
  checkBookListWith,
  cleanUpStubBooks,
  feedStubBooks,
  gotoApp,
  gotoNthBookInTheList,
  performSearch,
} from "../../helpers";

const BOOK_NAMES = [
  "Domain-driven design",
  "Refactoring",
  "Building microservices",
];

describe("Bookish application", function () {
  before(() => {
    return axios
      .delete("http://localhost:8080/books?_cleanup=true")
      .catch((err) => err);
  });

  afterEach(() => {
    return axios
      .delete("http://localhost:8080/books?_cleanup=true")
      .catch((err) => err);
  });

  beforeEach(() => {
    const books = [
      {
        name: "Refactoring",
        id: 1,
      },
      {
        name: "Domain-driven design",
        id: 2,
      },
      {
        name: "Building microservices",
        id: 3,
      },
    ];

    return books.map((item) => {
      axios.post("http://localhost:8080/books", item, {
        headers: { "Content-Type": "application/json" },
      });
    });
  });

  it("Visits the Bookish", function () {
    gotoApp();
    checkAppTitle();
  });

  it("Shows a book list", () => {
    gotoApp();
    checkBookListWith(BOOK_NAMES);
  });

  it("Goes to the detail page", () => {
    gotoApp();
    gotoNthBookInTheList(0);
    checkBookDetail();
  });

  it("Searches for a title", () => {
    gotoApp();
    checkBookListWith(BOOK_NAMES);
    performSearch("design");
    checkBookListWith(["Domain-driven design"]);
  });
});
