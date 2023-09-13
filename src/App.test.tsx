/* eslint-disable testing-library/no-unnecessary-act */
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";

test("renders Hero section title", async () => {
  render(<App />);
  const titleElement = screen.getByText(
    /A safe space for girls to learn and grow/i
  );
  expect(titleElement).toBeInTheDocument();
  const articlesDisplayed1 = screen.queryAllByTestId("ArticleGridCell");
  expect(articlesDisplayed1).toHaveLength(12);
  const categoryButton = screen.getByText("Periods & hormones");
  act(() => {
    userEvent.click(categoryButton);
  });
  const articlesDisplayed2 = screen.queryAllByTestId("ArticleGridCell");
  expect(articlesDisplayed2).toHaveLength(3);
});
