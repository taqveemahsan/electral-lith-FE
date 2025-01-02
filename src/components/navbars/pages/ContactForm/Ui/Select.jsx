const Select = ({ label, options, value, onChange, className = "" }) => {
    return (
        <div className="mb-6">
            <label className="block   text-black font-semibold mb-2">{label}</label>
            <select
                value={value}
                onChange={onChange}
                className={`w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-gray-400 appearance-none bg-white ${className}`}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;
