import React from "react";

import { render } from "tests";

import Header from "./Header";

describe("Header component", () => {
  test('render "join.tsh.io" as a logo text', async () => {
    const { getByText } = render(<Header />);

    expect(getByText("join.tsh.io")).toBeInTheDocument();
  });
});
