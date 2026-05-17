import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { ExpenseContext } from "../context/ExpenseContext";

export function renderWithProviders(ui) {
  const mockAuth = {
    user: { email: "test@test.com" },
    login: () => {},
    signup: () => {},
  };

  const mockExpense = {
    expenses: [],
    handleAddExpense: () => {},
  };

  return render(
    <BrowserRouter>
      <AuthContext.Provider value={mockAuth}>
        <ExpenseContext.Provider value={mockExpense}>
          {ui}
        </ExpenseContext.Provider>
      </AuthContext.Provider>
    </BrowserRouter>
  );
}