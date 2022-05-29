import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { SearchBox } from "./SearchBox";

describe("SearchBox", () => {
  it("renders input", async () => {
    const props = {
      term: "",
      onSearch: jest.fn(),
    };

    render(<SearchBox {...props} />);

    const searchInput = screen.getByTestId("search-input");

    await userEvent.type(searchInput, "domain");

    expect(props.onSearch).toHaveBeenCalled();
  });

  it("trim empty strings", async () => {
    const props = {
      term: "",
      onSearch: jest.fn(),
    };

    render(<SearchBox {...props} />);

    const searchInput = screen.getByTestId("search-input");

    await userEvent.type(searchInput, "  ");

    expect(props.onSearch).not.toHaveBeenCalled();
  });
});
