import React from "react";
import { render, screen } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { Provider } from "react-redux";
import { MemoryRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

import { BookListPage } from "./BookListPage";

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

describe("BookListContainer", () => {
  it("renders", async () => {
    const mock = new MockAdapter(axios);

    const data = [
      { name: "Refactoring", id: 1 },
      { name: "Acceptance tests driven development with React", id: 2 },
    ];

    mock.onGet("http://localhost:8080/books?q=").reply(200, data);

    renderWithProvider(<BookListPage />);

    expect(await screen.findByText(data[0].name)).toBeInTheDocument();
    expect(await screen.findByText(data[1].name)).toBeInTheDocument();
  });

  it("something went wrong", async () => {
    const mock = new MockAdapter(axios);

    mock.onGet("http://localhost:8080/books?q=").networkError();

    renderWithProvider(<BookListPage />);

    expect(await screen.findByText(/Error/)).toBeInTheDocument();
  });
});
