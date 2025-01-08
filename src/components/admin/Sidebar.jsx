import React from "react";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  { title: "Dashboard", path: "/admin", icon: "📊" },
  { title: "Manage Banner", path: "/admin/banner", icon: "🖼️" },
  { title: "Manage News", path: "/admin/news", icon: "📰" },
  { title: "Manage Contact List", path: "/admin/contact", icon: "📋" },
  { title: "Manage Careers", path: "/admin/careers", icon: "💼" }, // New Item
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen flex flex-col">
      <div className="p-4 border-b border-gray-800">
        <h2 className="text-2xl font-bold">Admin Panel</h2>
      </div>
      <nav className="mt-6 flex-1">
        <ul>
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`
                  flex items-center px-6 py-3 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors font-sans
                  ${location.pathname === item.path ? "bg-gray-800 border-l-4 border-blue-500" : ""}
                `}
              >
                <span className="mr-3 text-lg">{item.icon}</span>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-auto w-full p-4 border-t border-gray-800">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-xl">
            👤
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium">Admin User</p>
            <p className="text-xs text-gray-500">admin@example.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
