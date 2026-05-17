function Home() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="text-center bg-white p-8 rounded-lg shadow max-w-md">
                <h1 className="text-3xl font-bold text-gray-800 mb-3">Welcome to Expense Tracker</h1>
                <p className="text-gray-600 mb-6">Track your expenses and manage your budget with ease!</p>
                <p className="text-sm text-gray-400">Start by logging in and adding your first expense.</p>
            </div>
        </div>
    );
}

export default Home;