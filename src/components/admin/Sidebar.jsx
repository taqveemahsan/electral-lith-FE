// src/components/admin/Sidebar.js
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-1/4 bg-gray-800 text-white h-screen p-4">
      <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
      <ul>
        <li>
          <Link to="/admin/banner" className="block py-2 px-4 hover:bg-gray-600">
            Manage Banner
          </Link>
        </li>
        <li>
          <Link to="/admin/news" className="block py-2 px-4 hover:bg-gray-600">
            Manage News
          </Link>
        </li>
        <li>
          <Link to="/admin/contact" className="block py-2 px-4 hover:bg-gray-600">
            Manage Contact List
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
