import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "../utils/auth"; // Custom function to check token

const AuthenticatedRoutes = () => {
    return isAuthenticated() ? (
        <Outlet /> // If authenticated, render the nested routes (Admin Panel etc.)
    ) : (
        <Navigate to="/login" replace /> // Redirect to login page if not authenticated
    );
};

export default AuthenticatedRoutes;
