import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import BookList from "../components/BookList";

describe("BookList", () => {
  it("loading", () => {
    const props = {
      loading: true,
    };

    render(<BookList {...props} />);

    expect(screen.getByText(/Loading/)).toBeInTheDocument();
  });

  it("error", () => {
    const props = {
      error: true,
    };

    render(<BookList {...props} />);

    expect(screen.getByText(/Error/)).toBeInTheDocument();
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

    render(<BookList {...props} />);

    const titles = screen
      .getAllByRole("heading", { level: 2 })
      .map((item) => item.innerHTML);

    expect(titles).toEqual(["Refactoring", "Domain-driven design"]);
  });
});
