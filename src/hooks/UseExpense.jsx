import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

export const useExpense = () => useContext(ExpenseContext);