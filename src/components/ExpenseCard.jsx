function ExpenseCard({ expense, onDelete, onEdit }) {
    return (
        <div className="flex justify-between items-center bg-white p-4 mb-3 rounded-lg shadow hover:shadow-md transition">
            <div>
                <h3 className="font-semibold text-lg text-gray-800">{expense.title}</h3>
                <p className="text-sm text-gray-500">{expense.category} • {expense.date}</p>
            </div>
            <div className="text-green-600 font-bold">
                KES {expense.amount}
            </div>
            <div className="flex gap-2">
                <button onClick={() => onEdit(expense)} className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600" >
                    Edit
                </button>
                <button onClick={() => onDelete(expense.id)} className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600" >
                    Delete
                </button>
            </div>
        </div>
    );
}

export default ExpenseCard;