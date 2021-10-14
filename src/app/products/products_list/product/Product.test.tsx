import React from "react";

import { render } from "tests";

import Product from "./Product";

const productComponent = (
  <Product
    product={{
      id: 1,
      name: "Awesome Steel Fish",
      description:
        "Quam soluta et consequuntur velit ipsa sint facere occaecati fugiat.",
      rating: 2,
      image: "https://picsum.photos/640/480?random=4946",
      promo: true,
      active: true,
    }}
    setIsModal={() => {}}
    setModalData={() => {}}
  />
);

describe("Product component", () => {
  test("render image", async () => {
    const { getByAltText } = render(productComponent);

    expect(getByAltText("Random")).toBeInTheDocument();
  });

  test("render 'Awesome Steel Fish' name", async () => {
    const { getByText } = render(productComponent);

    expect(getByText("Awesome Steel Fish")).toBeInTheDocument();
  });

  test("render 'Quam soluta et consequuntur velit ipsa sint facere occaecati fugiat.' description", async () => {
    const { getByText } = render(productComponent);

    expect(
      getByText(
        "Quam soluta et consequuntur velit ipsa sint facere occaecati fugiat."
      )
    ).toBeInTheDocument();
  });

  test("render 'Promo' text", async () => {
    const { getByText } = render(productComponent);

    expect(getByText("Promo")).toBeInTheDocument();
  });

  test("render 'Show details' button", async () => {
    const { getByText } = render(productComponent);

    expect(getByText("Show details")).toBeInTheDocument();
  });
});
