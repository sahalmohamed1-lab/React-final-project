import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Authentication from "./pages/Authentication";
import Reports from "./pages/Reports";
import Header from "./components/Header";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";

function App() {
    return (
        <BrowserRouter basename="/React-final-project/Expense-tracker">
        <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                <Route path="/Authentication" element={<Authentication />} />
                <Route path="/Reports" element={<ProtectedRoute><Reports /></ProtectedRoute>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;