import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import BookDetail from "./BookDetail";

describe("BookDetail", () => {
  it("renders title", () => {
    const props = {
      book: {
        name: "Refactoring",
      },
    };

    render(<BookDetail {...props} />);

    const title = screen.getByTestId("book-title");

    expect(title.innerHTML).toEqual(props.book.name);
  });

  it("renders description", () => {
    const props = {
      book: {
        name: "Refactoring",
        description:
          "Martin Fowler's Refactoring defined core ideas and techniques that hundreds of thousands of developers have used to improve their software.",
      },
    };

    render(<BookDetail {...props} />);

    const title = screen.getByTestId("book-description");
    expect(title.innerHTML).toEqual(props.book.description);
  });

  it("displays the book name when no description is given", () => {
    const props = {
      book: {
        name: "Refactoring",
      },
    };

    render(<BookDetail {...props} />);

    const description = screen.getByTestId("book-description");
    expect(description.innerHTML).toEqual(props.book.name);
  });
});
