import { useState} from "react";
import { useAuth } from "../context/AuthContext";
import { useExpense } from "../hooks/UseExpense";

function ExpenseForm() {
    const { user } = useAuth();
    const { handleAddExpense } = useExpense();
    const [formData, setFormData] = useState({ title: '', amount: '', category: '', date: '' })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.title || ! formData.amount || ! formData.category || ! formData.date) {
            alert('Please fill in all fields');
            return;
        }

        const newExpense = {
            title: formData.title,
            amount: Number(formData.amount),
            category: formData.category,
            date: formData.date,
            userEmail: user.email
        }
        await handleAddExpense(newExpense);
        setFormData({ title: '', amount: '', category: '', date: '' });
    };

    return (
    <form className="bg-white p-4 rounded-xl shadow w-full max-w-xl mx-auto space-y-3" onSubmit={handleSubmit} >
        <input
            className="w-full p-2 mb-2 border rounded text-black"
            placeholder="Title"
            name="title"
            value={formData.title}
            onChange={handleChange} />
        <input
            className="w-full p-2 mb-2 border rounded text-black"
            placeholder="Amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            type="number" />
        <input
            className="w-full p-2 mb-2 border rounded text-black"
            placeholder="Category"
            name="category"
            value={formData.category}
            onChange={handleChange} />
        <input
            className="w-full p-2 mb-2 border rounded text-black"
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange} />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600" >
            Add Expense
        </button>
    </form>
);
}

export default ExpenseForm;