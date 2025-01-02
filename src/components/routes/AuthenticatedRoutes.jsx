import React from "react";
import { Navigate, Outlet } from "react-router-dom";
// import AuthenticatedNavbar from "../../../components/src/navbars/AuthenticatedNavbar";
// import Footer from "../../../components/Footer";
import { isAuthenticated } from "../utils/auth";
import AuthenticatedNavbar from "../../components/navbars/AuthenticatedNavbar";
import Footer from "../../components/Footer";

const AuthenticatedRoutes = () => {
  return isAuthenticated() ? (
    <>
      <AuthenticatedNavbar />
      <Outlet />
      <Footer />
    </>
  ) : (
    <Navigate to="/" />
  );
};

export default AuthenticatedRoutes;
