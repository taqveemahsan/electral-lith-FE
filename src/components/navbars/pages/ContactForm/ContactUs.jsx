import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    category: "general",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const categoryOptions = [
    { value: "general", label: "General" },
    { value: "support", label: "Support" },
    { value: "business", label: "Business" },
  ];

  return (
    <section className="container mx-auto px-4 mt-4">
      <h1 className="text-2xl font-bold mb-2 text-[#1C170D]">Contact Us</h1>
      <p className="text-xl text-gray-600 mb-8 mt-4">Send us a message</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Category Select */}
        <label className="block text-gray-700 font-medium">
          Select a category
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border rounded-md"
          >
            {categoryOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        {/* Email Input */}
        <label className="block text-gray-700 font-medium">
          Email address
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border rounded-md"
          />
        </label>

        {/* Message Textarea */}
        <label className="block text-gray-700 font-medium">
          Your message
          <textarea
            name="message"
            placeholder="Type your message here"
            value={formData.message}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border rounded-md"
            rows="4"
          />
        </label>

        {/* Submit Button */}
        <button
          type="submit"
          className="px-4 bg-green-600 text-white font-medium py-2 rounded-md hover:bg-green-700 transition"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default ContactUs;
