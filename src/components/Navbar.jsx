import { Link } from "react-router-dom";

function Navbar() {
    return (
        <header className="bg-gray-900 text-black px-6 py-4 flex items-center justify-between">
            <h1 className="text-gray-600 font-bold">Expense Tracker</h1>
            <nav>
                <ul className="flex gap-4 text-sm">
                    <li><Link className="hover:text-blue-600" to="/">Home</Link></li>
                    <li><Link className="hover:text-blue-600" to="/Authentication">Auth</Link></li>
                    <li><Link className="hover:text-blue-600" to="/Dashboard">Dashboard</Link></li>
                    <li><Link className="hover:text-blue-600" to="/Reports">Reports</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;