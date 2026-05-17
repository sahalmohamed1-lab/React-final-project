import { screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { renderWithProviders } from "./testUtils";
import Authentication from "../pages/Authentication";

describe("Authentication Page", () => {
  it("renders authentication page", () => {
    renderWithProviders(<Authentication />);
    expect(
      screen.getByRole("heading", { name: /login/i })
    ).toBeInTheDocument();
  });
});