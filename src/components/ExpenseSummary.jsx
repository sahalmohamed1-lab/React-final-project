import { useExpense } from "../hooks/UseExpense";

function ExpenseSummary() {
    const { expenses } = useExpense();

    const total = expenses.reduce((sum, e) => sum + Number(e.amount), 0);

    return (
        <div className="bg-white shadow rounded-lg p-4 mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-700">Total Spendings</h2>
            <p className="text-xl font-bold text-green-600">KES {total}</p>
        </div>
    );
}

export default ExpenseSummary;