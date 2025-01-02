import React from "react";
import { Outlet } from "react-router-dom";
// import PublicNavbar from "../navbars/PublicNavbar";
// import Footer from "../../Footer";
import PublicNavbar from "../navbars/PublicNavbar";
import Footer from "../Footer";

const PublicRoutes = () => {
  return (
    <>
      <PublicNavbar />
      <Outlet />
      {/* <Footer />   */}
    </>
  );
};

export default PublicRoutes;
