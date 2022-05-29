import axios from "axios";

export const cleanUpStubBooks = async () => {
  return axios
    .delete("http://localhost:8080/books?_cleanup=true")
    .catch((err) => err);
};

export const feedStubBooks = () => {
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

  return books.forEach((item) => {
    axios.post("http://localhost:8080/books", item, {
      headers: { "Content-Type": "application/json" },
    });
  });
};

export const goToApp = () => {
  cy.visit("http://localhost:3000/");
};

export const checkAppTitle = () => {
  cy.get("[data-cy=heading]").contains("Bookish");
};

export const checkBookListWith = (expectation = []) => {
  cy.get("[data-cy=book-list]").should("exist");
  cy.get("[data-cy=book-item]").should((books) => {
    expect(books).to.have.length(expectation.length);

    const titles = [...books].map((x) => x.querySelector("h2").innerHTML);

    expect(titles).to.have.members(expectation);
  });
};

export const gotoNthBookInTheList = (nth) => {
  cy.get("[data-cy=book-item]").contains("View Details").eq(nth).click();

  cy.url().should("include", `/books/${nth + 1}`);
};

export const checkBookDetail = () => {
  cy.get("[data-cy=book-title]").contains("Refactoring");
};

export const performSearch = (term) => {
  cy.get("[data-cy=search-input] input").type(term);
};

export const composeReview = (name, content) => {
  cy.get("[data-cy=name-input]").type(name);
  cy.get("[data-cy=content-input]").type(content);
  cy.get("[data-cy=review-button]").click();
};

export const checkReview = () => {
  cy.get("[data-cy=reviews-container]").should("have.length", 1);
};
