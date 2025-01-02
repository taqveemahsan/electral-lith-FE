import { Settings, User, HelpCircle } from "lucide-react";
import Container from "./Ui/Container";

const Navbar = () => {
    const navItems = ["Overview", "Technology", "Investors", "Resources"];

    return (
        <nav className="border-b border-gray-100 bg-white">
            <Container>
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <a href="/" className="text-xl font-semibold">
                            ElectraLith
                        </a>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <a key={item} href="#" className="text-gray-600 hover:text-gray-900">
                                {item}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center space-x-4">
                        <button className="p-2 hover:bg-gray-100 rounded-full">
                            <Settings className="w-5 h-5" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-full">
                            <User className="w-5 h-5" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-full">
                            <HelpCircle className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </Container>
        </nav>
    );
};

export default Navbar;
