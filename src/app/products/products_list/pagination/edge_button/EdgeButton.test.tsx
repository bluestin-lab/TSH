import React from "react";

import { render } from "tests";

import EdgeButton from "./EdgeButton";

describe("EdgeButton component", () => {
  test("render First text", async () => {
    const { getByText } = render(<EdgeButton label="First" page={1} />);

    expect(getByText("First")).toBeInTheDocument();
  });

  test("render Last text", async () => {
    const { getByText } = render(<EdgeButton label="Last" page={1} />);

    expect(getByText("Last")).toBeInTheDocument();
  });
});
