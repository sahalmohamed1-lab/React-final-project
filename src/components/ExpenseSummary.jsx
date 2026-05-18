import { useExpense } from "../hooks/UseExpense";

function ExpenseSummary() {
    const { expenses } = useExpense();

    const total = expenses.reduce((sum, e) => sum + Number(e.amount), 0);

    return (
        <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-gray-500">Total Spendings</h2>
            <p className="text-2xl font-bold text-purple-600">KES {total}</p>
        </div>
    );
}

export default ExpenseSummary;