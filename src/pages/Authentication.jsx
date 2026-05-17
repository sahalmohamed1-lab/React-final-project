import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Authentication() {
    const { login, signup } = useAuth();
    const navigate = useNavigate();

    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isLogin) {
                await login(formData.email, formData.password);
            } else {
                await signup(formData.email, formData.password);
            }
            navigate("/Dashboard");
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-xl shadow">
            <h2 className="text-2xl font-bold mb-4 text-center color-black">
                {isLogin ? "Login" : "Create Account"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border p-2 rounded color-black" />
                <input
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full border p-2 rounded color-black" />
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded" >
                    {isLogin ? "Login" : "Sign Up"}
                </button>
            </form>
            <p onClick={() => setIsLogin(!isLogin)} className="mt-4 text-center text-blue-500 cursor-pointer" >
                {isLogin
                    ? "Don't have an account? Sign Up"
                    : "Already have an account? Login"}
            </p>
        </div>
    );
}

export default Authentication;