import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "../utils/auth"; // Custom function to check token

const AuthenticatedRoutes = ({ children }) => {
    if (isAuthenticated()) return children;

    return <Navigate to="/" replace />;
};

export default AuthenticatedRoutes;
