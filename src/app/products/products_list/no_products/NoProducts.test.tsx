import React from "react";

import { render } from "tests";

import NoProducts from "./NoProducts";

describe("NoProducts component", () => {
  test("render Task List icon", async () => {
    const { getByAltText } = render(<NoProducts />);

    expect(getByAltText("Task list icon")).toBeInTheDocument();
  });

  test("render 'Ooops… It’s empty here'", async () => {
    const { getByText } = render(<NoProducts />);

    expect(getByText("Ooops… It’s empty here")).toBeInTheDocument();
  });

  test("render 'There are no products on the list'", async () => {
    const { getByText } = render(<NoProducts />);

    expect(getByText("There are no products on the list")).toBeInTheDocument();
  });
});
