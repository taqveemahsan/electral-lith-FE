import { Search, User, Menu } from "react";

const Navbar = () => {
    const navItems = ["About", "Technology", "Products", "Investors", "News & Events"];

    return (
        <nav className="border-b border-gray-100">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <div className="text-xl font-bold">ElectraLith</div>

                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <a key={item} href="#" className="text-gray-600 hover:text-gray-900">
                                {item}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center space-x-4">
                        <button className="p-2 hover:bg-gray-100 rounded-full">
                            <Search size={20} />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-full">
                            <User size={20} />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-full md:hidden">
                            <Menu size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
