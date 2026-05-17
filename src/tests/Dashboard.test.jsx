import { screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { renderWithProviders } from "./testUtils";
import Dashboard from "../pages/Dashboard";

describe("Dashboard Page", () => {
  it("renders dashboard page", () => {
    renderWithProviders(<Dashboard />);
    expect(screen.getByText(/dashboard/i)).toBeInTheDocument();
  });
});