import React from "react";

import { render } from "tests";

import Modal from "./Modal";

const modalComponent = (
  <Modal
    modalData={{
      image: "https://picsum.photos/640/480?random=4946",
      name: "Awesome Steel Fish",
      description: "Example description",
    }}
    setIsModal={() => {}}
  />
);

describe("Modal component", () => {
  test("render image", async () => {
    const { getByAltText } = render(modalComponent);

    expect(getByAltText("Random")).toBeInTheDocument();
  });

  test("render 'Awesome Steel Fish' text", async () => {
    const { getByText } = render(modalComponent);

    expect(getByText("Awesome Steel Fish")).toBeInTheDocument();
  });

  test("render 'Example description' text", async () => {
    const { getByText } = render(modalComponent);

    expect(getByText("Example description")).toBeInTheDocument();
  });

  test("render close icon", async () => {
    const { getByAltText } = render(modalComponent);

    expect(getByAltText("Close icon")).toBeInTheDocument();
  });
});
