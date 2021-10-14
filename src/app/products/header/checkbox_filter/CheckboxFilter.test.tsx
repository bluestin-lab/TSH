import React from "react";

import { render } from "tests";

import CheckboxFilter from "./CheckboxFilter";

describe("CheckboxFilter component", () => {
  test("render Active checkbox", async () => {
    const { getByLabelText } = render(
      <CheckboxFilter label={"Active"} filterName={"active"} />
    );

    expect(getByLabelText("Active")).toBeInTheDocument();
  });

  test("render Promo checkbox", async () => {
    const { getByLabelText } = render(
      <CheckboxFilter label={"Promo"} filterName={"promo"} />
    );

    expect(getByLabelText("Promo")).toBeInTheDocument();
  });
});
