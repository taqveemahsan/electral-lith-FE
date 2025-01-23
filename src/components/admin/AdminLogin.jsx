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
            const response = await axios.post(
                "http://localhost:4001/api/auth/user/login",
                {
                    email,
                    password,
                },
                {
                    headers: {
                        "Content-Type": "application/json", // Add Content-Type header
                    },
                }
            );

            console.log("Response received:", response);
            console.log("Response data:", response.data);
            console.log("Token:", response.data?.data?.token);

            // Check if token exists
            if (response.status === 200 && response.data?.data?.token) {
                const token = response.data.data.token;
                console.log("🚀 ~ Token received:", token);

                // Save token to local storage
                localStorage.setItem("authToken", token);

                // Navigate to admin page
                navigate("/admin");
            } else {
                // Handle invalid credentials or unexpected responses
                setErrorMessage(
                    response.data?.message || "Invalid email or password. Please try again."
                );
            }
        } catch (error) {
            console.error("Error occurred:", error);

            // Handle error response or fallback to generic message
            setErrorMessage(
                error.response?.data?.message || "Something went wrong. Please try again."
            );
        } finally {
            setLoading(false); // Hide loading state
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">
                    Admin Login
                </h2>
                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 disabled:bg-gray-400"
                        >
                            {loading ? "Logging in..." : "Login"}
                        </button>
                    </div>
                    {errorMessage && (
                        <p className="text-red-500 text-center mt-2 text-sm">{errorMessage}</p>
                    )}
                </form>
                <p className="mt-4 text-center text-sm text-gray-500">
                    Already have an account?{" "}
                    <a href="/signup" className="text-blue-600 hover:text-blue-700">
                        Signup here
                    </a>
                </p>
            </div>
        </div>
    );
};

export default AdminLogin;
