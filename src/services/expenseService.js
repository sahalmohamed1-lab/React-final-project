import { db } from "./firebase";
import { collection, addDoc, getDocs, query, where, doc, deleteDoc, updateDoc } from "firebase/firestore";

const expensesRef = collection(db, "expenses");

export const addExpense = async (expense) => {
    return await addDoc(expensesRef, expense);
};

export const getExpenses = async (userEmail) => {
    const q = query(expensesRef, where("userEmail", "==", userEmail));

    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    }));
};

export const deleteExpense = async (id) => {
    const expenseDoc = doc(db, "expenses", id);
    return await deleteDoc(expenseDoc);
};

export const updateExpense = async (id, updatedData) => {
    const expenseDoc = doc(db, "expenses", id);
    return await updateDoc(expenseDoc, updatedData);
};