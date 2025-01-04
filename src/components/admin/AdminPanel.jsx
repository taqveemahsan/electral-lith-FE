// src/components/admin/AdminPanel.js
import React from "react";
import { Outlet } from "react-router-dom"; // Outlet is used to render nested routes (e.g., AdminBanner, AdminNews)
import Sidebar from "./Sidebar"; // Sidebar component for admin navigation

const AdminPanel = () => {
  return (
    <div className="admin-panel flex">
      <Sidebar /> {/* Sidebar for navigation */}
      <div className="admin-content w-full p-4">
        <h2 className="text-2xl font-semibold mb-4">Admin Panel</h2>

        {/* Nested routes (AdminBanner, AdminNews) will be displayed here */}
        <Outlet />
      </div>
    </div>
  );
};

export default AdminPanel;
