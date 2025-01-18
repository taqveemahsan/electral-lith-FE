import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setErrorMessage("");
        setLoading(true);

        try {
            console.log("Sending request to backend...");
            const response = await axios.post("http://localhost:4001/api/auth/user/login", {
                email,
                password,
            });
            console.log("Response received:", response);

            if (response.status === 200 && response.data.data.token) {
                localStorage.setItem("token", response.data.data.token); // Save token
                navigate("/admin"); // Redirect
            } else {
                setErrorMessage("Invalid email or password. Please try again.");
            }
        } catch (error) {
            console.error("Error response:", error.response);
            setErrorMessage(
                error.response?.data?.message || "Something went wrong. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            {/* Login form */}
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <button type="submit" disabled={loading}>
                    {loading ? "Logging in..." : "Login"}
                </button>
                {errorMessage && <p>{errorMessage}</p>}
            </form>
        </div>
    );
};

export default AdminLogin;
