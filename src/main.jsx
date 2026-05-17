import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ExpenseProvider } from "./context/ExpenseContext.jsx";
import AuthProvider from "./context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <AuthProvider>
        <ExpenseProvider>
            <App />
        </ExpenseProvider>
    </AuthProvider>
);