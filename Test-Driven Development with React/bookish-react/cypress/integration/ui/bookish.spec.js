import {
  checkAppTitle,
  checkBookDetail,
  checkBookListWith,
  checkReview,
  cleanUpStubBooks,
  composeReview,
  feedStubBooks,
  goToApp,
  gotoNthBookInTheList,
  performSearch,
} from "../../helpers";

const BOOK_NAMES = [
  "Refactoring",
  "Domain-driven design",
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

  it("Write a review for a book", () => {
    gotoNthBookInTheList(0);
    checkBookDetail();
    composeReview("Juntao Qiu", "Excellent works!");
    checkReview();
  });
});
