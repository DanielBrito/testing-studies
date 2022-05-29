import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import "@testing-library/jest-dom/extend-expect";

import { ReviewList } from "./ReviewList";

import store from "../../store";

const renderWithProvider = (component) => {
  return { ...render(<Provider store={store}>{component}</Provider>) };
};

describe("ReviewList", () => {
  it("renders empty list", () => {
    const props = {
      reviews: [],
    };

    renderWithProvider(<ReviewList {...props} />);

    const reviews = screen.getByTestId("reviews-container");

    expect(reviews).toBeInTheDocument();
  });

  it("render List", () => {
    const props = {
      reviews: [
        {
          name: "Juntao",
          date: "2018/06/21",
          content: "Excellent work, really impressive on the efforts you put",
        },
        { name: "Abruzzi", date: "2018/06/22", content: "What a great book" },
      ],
    };

    renderWithProvider(<ReviewList {...props} />);

    const reviews = screen.getAllByTestId("review");

    const name = screen.getAllByTestId("review-name")[0].innerHTML;
    const date = screen.getAllByTestId("review-date")[0].innerHTML;
    const content = screen.getAllByTestId("review-content")[0].innerHTML;

    expect(reviews.length).toBe(2);

    expect(name).toEqual("Juntao");
    expect(date).toEqual("2018/06/21");
    expect(content).toEqual(
      "Excellent work, really impressive on the efforts you put"
    );
  });
});
