import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

function Header() {
    const { user, logout } = useAuth();

    return (
        <header className="bg-white shadow px-4 py-3 flex flex-col md:flex-row md:justify-between md:items-center gap-3">
            <h1 className="font-bold text-gray-600 text-center md:text-left">Expense Tracker</h1>
            <nav className="flex flex-wrap justify-center gap-3 text-sm">
                <Link to="/" className="hover:text-blue-500">Home</Link>
                <Link to="/Dashboard" className="hover:text-blue-500">Dashboard</Link>
                <Link to="/Reports" className="hover:text-blue-500">Reports</Link>
            </nav>
            <div className="flex items-center gap-3">
                <span className="text-black">{user?.email}</span>
                <button onClick={logout} className="bg-red-500 text-white px-3 py-1 rounded text-sm" >Logout</button>
            </div>
        </header>
    );
}

export default Header;