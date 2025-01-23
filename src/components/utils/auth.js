// src/utils/auth.js
export const isAuthenticated = () => {
    // Replace with your actual logic (e.g., checking localStorage or cookies for a token)

    const token = localStorage.getItem("authToken");

    return !!token; // Returns true if token exists, false otherwise
};
