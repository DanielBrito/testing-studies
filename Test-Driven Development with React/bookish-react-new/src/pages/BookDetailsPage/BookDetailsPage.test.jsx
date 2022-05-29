import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { MemoryRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

import { BookDetailsPage } from "./BookDetailsPage";

import store from "../../store";

const renderWithProvider = (component) => {
  return {
    ...render(
      <Provider store={store}>
        <Router>{component}</Router>
      </Provider>
    ),
  };
};

describe("BookDetailsContainer", () => {
  it("renders", async () => {
    const mock = new MockAdapter(axios);

    mock.onGet("http://localhost:8080/books/2").reply(200, {
      name: "Acceptance tests driven development with React",
      id: 2,
    });

    renderWithProvider(<BookDetailsPage />);

    const book = screen.getByRole(
      "heading",
      { level: 2 },
      "Acceptance tests driven development with React"
    );

    expect(book).toBeInTheDocument();
  });
});
