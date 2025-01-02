const Button = ({ children, variant = "primary", className = "", ...props }) => {
    const variants = {
        primary: "bg-emerald-600 hover:bg-emerald-700 text-white",
        secondary: "bg-stone-100 hover:bg-stone-200 text-gray-900",
    };

    return (
        <button
            className={`px-4 py-2 rounded-md transition-colors ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
