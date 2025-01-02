import React from "react";
import { Link } from "react-router-dom";

const AuthenticatedNavbar = () => {
  return (
    <nav className="bg-blue-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Dashboard</h1>
        <ul className="flex space-x-4">
          <li>
            <Link to="/dashboard" className="hover:text-yellow-400">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/profile" className="hover:text-yellow-400">
              Profile
            </Link>
          </li>
          <li>
            <Link to="/settings" className="hover:text-yellow-400">
              Settings
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default AuthenticatedNavbar;
