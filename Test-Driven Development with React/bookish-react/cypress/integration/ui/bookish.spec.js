import {
  checkAppTitle,
  checkBookDetail,
  checkBookListWith,
  cleanUpStubBooks,
  feedStubBooks,
  goToApp,
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
    cleanUpStubBooks();
  });

  beforeEach(() => {
    goToApp();
    feedStubBooks();
  });

  afterEach(() => {
    cleanUpStubBooks();
  });

  it("Visits the Bookish", function () {
    checkAppTitle();
  });

  it("Shows a book list", () => {
    checkBookListWith(BOOK_NAMES);
  });

  it("Goes to the detail page", () => {
    gotoNthBookInTheList(0);
    checkBookDetail();
  });

  it("Searches for a title", () => {
    checkBookListWith(BOOK_NAMES);
    performSearch("design");
    checkBookListWith(["Domain-driven design"]);
  });
});
