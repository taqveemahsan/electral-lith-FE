const Input = ({ label, type = "text", placeholder, value, onChange, className = "" }) => {
    return (
        <div className="mb-6">
            <label className="block   text-black font-semibold mb-2">{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-gray-400 ${className}`}
            />
        </div>
    );
};

export default Input;
