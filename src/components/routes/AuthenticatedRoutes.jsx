import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";

const AuthenticatedRoutes = ({ children }) => {
    return isAuthenticated() ? (
        children // Agar authenticated hai, to children (admin panel) render ho
    ) : (
        <Navigate to="/admin/login" replace /> // Agar authenticated nahi hai, to login page par redirect ho
    );
};

export default AuthenticatedRoutes;
