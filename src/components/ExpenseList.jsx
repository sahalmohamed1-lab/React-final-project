import { useExpense } from "../hooks/UseExpense";
import { useState } from "react";

function ExpenseList() {
    const { expenses, handleDeleteExpense, handleUpdateExpense } = useExpense();
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");
    const [editingExpense, setEditingExpense] = useState(null);
    const [formData, setFormData] = useState({ title: "", amount: "", category: "", date: "" });

    const categories = ["All", ...new Set(expenses.map(expense => expense.category))];

    const startEdit = expense => {
        setEditingExpense(expense);
        setFormData({ title: expense.title, amount: expense.amount, category: expense.category, date: expense.date });
    };

    const updateField = (name, value) => setFormData(prevData => ({ ...prevData, [name]: value }));

    const handleUpdate = async (e) => {
    e.preventDefault();
    if (!editingExpense) return;
    await handleUpdateExpense({
        ...formData,
        amount: Number(formData.amount),
        id: editingExpense.id
    });
    setEditingExpense(null);
    setFormData({ title: "", amount: "", category: "", date: "" });
};

    const filtered = expenses.filter(expense =>
        (selectedCategory === "All" || expense.category === selectedCategory) &&
        expense.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-4">
            <h2 className="text-gray-600 font-bold mb-4">Expenses</h2>
            {editingExpense && (
                <form onSubmit={handleUpdate} className="bg-white p-4 mb-4 rounded shadow space-y-2">
                    {["title","amount","category","date"].map(name => (
                        <input key={name}
                            type={name==="date"?"date":name==="amount"?"number":"text"}
                            placeholder={name}
                            value={formData[name]}
                            onChange={e => updateField(name, e.target.value)}
                            className="w-full p-2 border rounded" />
                    ))}
                    <button className="w-full bg-blue-500 text-white p-2 rounded">
                        Update Expense
                    </button>
                </form>
            )}
            <div className="flex gap-2 mb-4">
                <input className="border p-2 w-full text-black" placeholder="Search"
                    value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
                <select className="border p-2"
                    value={selectedCategory}
                    onChange={e => setSelectedCategory(e.target.value)}>
                    {categories.map(category => <option key={category}>{category}</option>)}
                </select>
            </div>
            <div className="space-y-3">
                {filtered.length === 0 ? (
                    <p className="text-gray-500">No expenses found.</p>
                ) : (
                    filtered.map(expense => (
                        <div key={expense.id} className="bg-white p-4 rounded-xl shadow flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                            <div>
                                <h3 className="font-semibold">{expense.title}</h3>
                                <p className="text-sm text-gray-500">{expense.category} • {expense.date}</p>
                            </div>
                            <div className="font-bold text-green-600">KES {expense.amount}</div>
                            <div className="flex gap-2">
                                <button className="text-blue-500" onClick={() => startEdit(expense)}>Edit</button>
                                <button className="text-red-500" onClick={() => handleDeleteExpense(expense.id)}>Delete</button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default ExpenseList;