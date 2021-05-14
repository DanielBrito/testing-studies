import React from "react";
import ReactDOM from "react-dom";
import { fireEvent, getByText, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useRouter } from "next/router";

import { Tabs } from "./Tabs";

jest.mock("next/router");

beforeEach(() => {
  useRouter.mockReturnValue({
    push: () => {},
  });
});

// TEST =======================================================
test("<Tabs /> matches snapshot", () => {
  const component = render(
    <Tabs initialTab={{ tab: "tab-3" }}>
      <div label="Tab 1">Testing</div>
      <div label="Tab 2">React</div>
      <div label="Tab 3">Components</div>
    </Tabs>
  );
  expect(component.container).toMatchSnapshot();
});

// TEST =======================================================
test("<Tabs /> renders without crashing", () => {
  const div = document.createElement("div");

  render(
    <Tabs initialTab={{ tab: "tab-3" }}>
      <div label="Tab 1">Testing</div>
      <div label="Tab 2">React</div>
      <div label="Tab 3">Components</div>
    </Tabs>,
    div
  );
});

// TEST =======================================================
test("Defaults to the first tab's content", () => {
  const div = document.createElement("div");

  const { getByTestId } = render(
    <Tabs>
      <div label="Tab 1">Testing</div>
      <div label="Tab 2">React</div>
      <div label="Tab 3">Components</div>
    </Tabs>,
    div
  );

  const content = getByTestId("content");
  expect(content.textContent).toBe("Testing");
});

// TEST =======================================================
test("Can set a different tab as the initial state", () => {
  const div = document.createElement("div");

  const { getByTestId } = render(
    <Tabs initialTab={{ tab: "tab-3" }}>
      <div label="Tab 1">Testing</div>
      <div label="Tab 2">React</div>
      <div label="Tab 3">Components</div>
    </Tabs>,
    div
  );

  const content = getByTestId("content");
  expect(content.textContent).toBe("Components");
});

// TEST (Not working properly with classes)
/*
test("Click from one tab to the next", () => {
  const div = document.createElement("div");

  const { getByTestId } = render(
    <Tabs initialTab={{ tab: "tab-3" }}>
      <div label="Tab 1">Testing</div>
      <div label="Tab 2">React</div>
      <div label="Tab 3">Components</div>
    </Tabs>,
    div
  );

  let content = getByTestId("content");
  expect(content.textContent).toBe("Components");

  // Differentiate the current tab:
  const li = getByTestId("tab-3");
  expect(li).toHaveClass("current"); // Not working with classes

  // Click on a new tab:
  const differentTab = getByText("Tab 2");
  fireEvent.click(differentTab);

  const differentLi = getByTestId("tab-2");
  expect(differentLi).toHaveClass("current");

  // Check the new content:
  content = getByTestId("content");
  expect(content.textContent).toBe("React");
});
*/
