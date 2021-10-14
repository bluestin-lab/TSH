import React from "react";

import { render } from "tests";

import Search from "./Search";

describe("Search components", () => {
  test("renders text input", async () => {
    const { getByRole } = render(<Search />);

    expect(getByRole("textbox")).toBeInTheDocument();
  });
});
