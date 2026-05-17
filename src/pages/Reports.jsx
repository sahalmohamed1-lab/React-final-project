import { useExpense } from "../hooks/UseExpense";

function Reports() {
    const { expenses } = useExpense();

    const categoryTotals = expenses.reduce((acc, expense) => {
        const category = expense.category;
        acc[category] = (acc[category] || 0) + Number(expense.amount);
        return acc;
    }, {});

    return (
        <div className="max-w-xl mx-auto p-4">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Reports</h2>
            {Object.keys(categoryTotals).length === 0 ? (
                <p className="text-gray-500">No expenses found.</p>
            ) : (
                <div className="space-y-3 max-w-md">
                    {Object.entries(categoryTotals).map(([category, total]) => (
                        <div key={category} className="flex justify-between bg-white p-4 rounded-lg shadow" >
                            <span className="font-medium text-gray-700">{category}</span>
                            <span className="font-bold text-blue-600">KES {total}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Reports;