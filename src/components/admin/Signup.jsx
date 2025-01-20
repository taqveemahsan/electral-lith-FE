import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminSignup = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        setErrorMessage("");
        setLoading(true);

        try {
            const response = await axios.post("http://localhost:4001/api/auth/user/signup", {
                name,
                email,
                password,
            });
            console.log("🚀 ~ handleSignup ~ response:", response);

            if (response.status === 201) {
                navigate("/"); // Redirect to login page after signup
            } else {
                setErrorMessage("Something went wrong. Please try again.");
            }
        } catch (error) {
            setErrorMessage(
                error.response?.data?.message || "Something went wrong. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md sm:max-w-lg lg:max-w-xl bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">
                    Admin Signup
                </h2>
                <form onSubmit={handleSignup} className="space-y-6">
                    {/* Name Input */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            required
                            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full py-2 text-white font-semibold rounded-lg ${
                                loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
                            } transition duration-200`}
                        >
                            {loading ? "Signing up..." : "Sign Up"}
                        </button>
                    </div>
                    {errorMessage && (
                        <p className="text-center text-red-500 text-sm mt-2">{errorMessage}</p>
                    )}
                </form>
                <p className="mt-4 text-center text-sm text-gray-500">
                    Already have an account?{" "}
                    <a href="/login" className="text-blue-600 hover:text-blue-700">
                        Login here
                    </a>
                </p>
            </div>
        </div>
    );
};

export default AdminSignup;
