/* eslint-disable */
import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import { useExpense } from "../hooks/UseExpense";
import { getExpenses, addExpense, deleteExpense, updateExpense } from "../services/expenseService";

export const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
    const [expenses, setExpenses] = useState([]);
    const { user } = useAuth();

    // Load expenses for logged-in user
    const loadExpenses = async () => {
        if (!user) {
            setExpenses([]);
            return;
        }

        const data = await getExpenses(user.email);
        setExpenses(data);
    };

    useEffect(() => {
        loadExpenses();
    }, [user]);

    const handleAddExpense = async (expense) => {
        if (!user) return;
        await addExpense({ ...expense, userEmail: user.email });
        loadExpenses();
    };

    const handleDeleteExpense = async (id) => {
        await deleteExpense(id);
        loadExpenses();
    };

    const handleUpdateExpense = async (expense) => {
        await updateExpense(expense.id, expense);
        loadExpenses();
    };

    return (
        <ExpenseContext.Provider value={{ expenses, handleAddExpense, handleDeleteExpense, handleUpdateExpense }} >
            {children}
        </ExpenseContext.Provider>
    );
};