import { screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { renderWithProviders } from "./testUtils";
import ExpenseForm from "../components/ExpenseForm";

describe("Expense Form", () => {
  it("renders expense form", () => {
    renderWithProviders(<ExpenseForm />);
    expect(screen.getByText(/add expense/i)).toBeInTheDocument();
  });
});