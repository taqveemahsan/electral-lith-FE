import { useState } from "react";
import Input from "./Ui/Input";
import Select from "./Ui/Select";
import Textarea from "./Ui/TextArea";
import Button from "./Ui/Button";

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
        <section className="container mx-auto px-4 mt-4 ">
            <h1 style={{ fontSize: "2rem" }} className="font-bold mb-2 text-[#1C170D]">
                Contact Us
            </h1>
            <p className="text-xl text-gray-600 mb-8 mt-4">Send us a message</p>

            <form onSubmit={handleSubmit} className="mt-4">
                <Select
                    label="Select a category"
                    options={categoryOptions}
                    value={formData.category}
                    onChange={(e) =>
                        handleChange({ target: { name: "category", value: e.target.value } })
                    }
                />

                <Input
                    label="Email address"
                    type="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={(e) =>
                        handleChange({ target: { name: "email", value: e.target.value } })
                    }
                />

                <Textarea
                    label="Your message"
                    placeholder="Type your message here"
                    value={formData.message}
                    onChange={(e) =>
                        handleChange({ target: { name: "message", value: e.target.value } })
                    }
                />

                <Button type="submit">Submit</Button>
            </form>
        </section>
    );
};

export default ContactUs;
