import { useState } from "react";
import axios from "axios";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [responseMessage, setResponseMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");

    try {
      const { data } = await axios.post(
        "http://localhost:4001/api/auth/contactus/add",
        formData, // Send the whole formData object directly
        { headers: { "Content-Type": "application/json" } }
      );

      setResponseMessage(
        data.success ? "Your message has been sent successfully!" : `Error: ${data.message}`
      );
      if (data.success) setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setResponseMessage("Failed to send the message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="container mx-auto px-4 mt-4">
      <h1 className="text-2xl font-bold mb-2 text-[#1C170D]">Contact Us</h1>
      <p className="text-xl text-gray-600 mb-8 mt-4">Send us a message</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Input */}
        <label className="block text-gray-700 font-medium">
          Name
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border rounded-md"
            required
          />
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
            required
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
            required
          />
        </label>

        {/* Submit Button */}
        <button
          type="submit"
          className="px-4 bg-green-600 text-white font-medium py-2 rounded-md hover:bg-green-700 transition"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>

      {/* Response Message */}
      {responseMessage && (
        <p
          className={`mt-4 text-lg ${
            responseMessage.startsWith("Error") ? "text-red-600" : "text-green-600"
          }`}
        >
          {responseMessage}
        </p>
      )}
    </section>
  );
};

export default ContactUs;
