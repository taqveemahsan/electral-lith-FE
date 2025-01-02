import Container from "./Ui/Container";
import Button from "./Ui/Button";

const Navbar = () => {
    const navItems = ["About", "Technology", "Sustainability", "Careers", "Contact"];

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
                        <Button variant="primary">Log in</Button>
                    </div>

                    <button className="md:hidden p-2">
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </Container>
        </nav>
    );
};

export default Navbar;
