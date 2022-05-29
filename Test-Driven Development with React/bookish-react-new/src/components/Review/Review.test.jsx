import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

import { Review } from "./Review";

import * as actions from "../../redux/actions/actions";
import store from "../../store";

const renderWithProvider = (component) => {
  return { ...render(<Provider store={store}>{component}</Provider>) };
};

describe("Review", () => {
  it("renders", () => {
    const props = {
      review: {
        name: "Juntao",
        date: "2018/06/21",
        content: "Excellent work, really impressive on the efforts you put",
      },
    };

    renderWithProvider(<Review {...props} />);

    const name = screen.getByTestId("review-name").innerHTML;
    const date = screen.getByTestId("review-date").innerHTML;
    const content = screen.getByTestId("review-content").innerHTML;

    expect(name).toEqual("Juntao");
    expect(date).toEqual("2018/06/21");
    expect(content).toEqual(
      "Excellent work, really impressive on the efforts you put"
    );
  });

  it("editing", () => {
    const props = {
      review: {
        name: "Juntao",
        date: "2018/06/21",
        content: "Excellent work, really impressive on the efforts you put",
      },
    };

    renderWithProvider(<Review {...props} />);

    const button = screen.getByTestId("review-button");

    expect(button.textContent).toEqual("Edit");

    fireEvent.click(button);

    expect(button.textContent).toEqual("Submit");
  });

  it("copy content to a textarea for editing", () => {
    const props = {
      review: {
        name: "Juntao",
        date: "2018/06/21",
        content: "Excellent work, really impressive on the efforts you put",
      },
    };

    renderWithProvider(<Review {...props} />);

    const button = screen.getByTestId("review-button");
    const content = screen.getByTestId("review-content");

    expect(content).toBeInTheDocument();
    expect(screen.queryByTestId("review-input")).not.toBeInTheDocument();

    fireEvent.click(button);

    const reviewInput = screen.getByTestId("review-input");

    expect(content).not.toBeInTheDocument();
    expect(reviewInput).toBeInTheDocument();
    expect(reviewInput.textContent).toEqual(
      "Excellent work, really impressive on the efforts you put"
    );
  });

  it("send requests", async () => {
    const fakeUpdateReview = () => {
      return () => {
        return Promise.resolve({});
      };
    };

    jest
      .spyOn(actions, "updateReview")
      .mockImplementation(() => fakeUpdateReview);

    const props = {
      review: {
        id: 123,
        name: "Juntao",
        date: "2018/06/21",
        content: "Excellent work, really impressive on the efforts you put",
      },
    };

    renderWithProvider(<Review {...props} />);

    const button = screen.getByTestId("review-button");

    fireEvent.click(button);

    const reviewInput = screen.getByTestId("review-input");

    await userEvent.clear(reviewInput);
    await userEvent.type(reviewInput, "Fantastic work");

    fireEvent.click(button);

    expect(actions.updateReview).toHaveBeenCalledWith(123, {
      ...props.review,
      content: "Fantastic work",
    });
  });
});
