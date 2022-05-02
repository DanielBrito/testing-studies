import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

import BookList from "./BookList";

describe("BookList", () => {
  it("loading", () => {
    const props = {
      loading: true,
    };

    render(<BookList {...props} />);

    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  });

  it("error", () => {
    const props = {
      error: true,
    };

    render(<BookList {...props} />);

    expect(screen.getByText(/Error/i)).toBeInTheDocument();
  });

  it("render books", () => {
    const props = {
      books: [
        {
          name: "Refactoring",
          id: 1,
        },
        {
          name: "Domain-driven design",
          id: 2,
        },
      ],
    };

    render(
      <BrowserRouter>
        <BookList {...props} />
      </BrowserRouter>
    );

    // const titles = screen
    //   .getAllByRole("heading", { level: 2 })
    //   .map((item) => item.innerHTML);

    // OR

    const titles = screen
      .getAllByTestId("book-title")
      .map((item) => item.innerHTML);

    expect(titles).toEqual(["Refactoring", "Domain-driven design"]);
  });
});
