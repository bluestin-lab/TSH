import React from "react";

import { render } from "tests";

import Loader from "./Loader";

describe("Loader component", () => {
  test("render Loader icon", async () => {
    const { getByAltText } = render(<Loader />);

    expect(getByAltText("Loader")).toBeInTheDocument();
  });
});
