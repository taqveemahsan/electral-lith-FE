import React from "react";
import { navItems } from "../../constants/InvestorNavItemsData";

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center">
                <span className="text-xl font-bold">ElectraLith</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
                {navItems.map((item) => (
                    <a
                        key={item.id}
                        href={item.href}
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                        {item.label}
                    </a>
                ))}
            </div>
        </nav>
    );
}
