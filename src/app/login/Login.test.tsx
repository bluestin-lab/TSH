import React from "react";

import { render } from "tests";

import { Login } from "./Login";

describe("Login component", () => {
  test('render "join.tsh.io" as a logo text', async () => {
    const { getByText } = render(<Login />);

    expect(getByText("join.tsh.io")).toBeInTheDocument();
  });

  test('render "Login" text', async () => {
    const { getByText } = render(<Login />);

    expect(getByText("Login")).toBeInTheDocument();
  });

  test('render "Username" text', async () => {
    const { getByLabelText } = render(<Login />);

    expect(getByLabelText("Username")).toBeInTheDocument();
  });

  test('render "Log in" button', async () => {
    const { getByText } = render(<Login />);

    expect(getByText("Log in")).toBeInTheDocument();
  });

  test('render "Forgot password?" button', async () => {
    const { getByText } = render(<Login />);

    expect(getByText("Forgot password?")).toBeInTheDocument();
  });
});
