import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";

import { BookList } from "./BookList";

const renderWithRouter = (component) => {
  return { ...render(<Router>{component}</Router>) };
};

describe("BookList", () => {
  it("loading", () => {
    const props = {
      loading: true,
    };

    render(<BookList {...props} />);

    const content = screen.getByTestId("loading-status");

    expect(content.innerHTML).toContain("Loading");
  });

  it("error", () => {
    const props = {
      error: true,
    };

    render(<BookList {...props} />);

    const content = screen.getByTestId("error-status");

    expect(content.innerHTML).toContain("Error");
  });

  it("render books", () => {
    const props = {
      books: [
        { name: "Refactoring", id: 1 },
        { name: "Domain-driven design", id: 2 },
      ],
    };

    renderWithRouter(<BookList {...props} />);

    const titles = [...screen.getAllByTestId("book-title")].map(
      (x) => x.innerHTML
    );

    expect(titles).toEqual(["Refactoring", "Domain-driven design"]);
  });
});
