import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import ExpenseSummary from "../components/ExpenseSummary";
import { useExpense } from "../hooks/UseExpense";

function Dashboard() {
    const { expenses } = useExpense();

    const highest = expenses.length
        ? Math.max(...expenses.map(e => Number(e.amount)))
        : 0;

    return (
        <div className="p-4 sm:p-6 bg-gray-100 min-h-screen">
            <h2 className="text-3xl font-bold mb-6 text-gray-600">Dashboard</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg shadow">
                    <ExpenseSummary />
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                    <p className="text-gray-500">Highest Expense</p>
                    <h3 className="text-2xl font-bold text-purple-600">KES {highest}</h3>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                    <p className="text-gray-500">Total Items</p>
                    <h3 className="text-2xl font-bold text-purple-600">{expenses.length}</h3>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg shadow">
                    <ExpenseForm />
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                    <ExpenseList />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;