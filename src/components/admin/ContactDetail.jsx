// src/components/admin/ContactDetail.js
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ContactDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [contact, setContact] = useState(null);

  useEffect(() => {
    fetchContactDetail();
  }, []);

  const fetchContactDetail = async () => {
    try {
      const response = await axios.get(`http://localhost:4001/api/contacts/${id}`);
      if (response.data.success) {
        setContact(response.data.data);
      } else {
        console.error("Failed to fetch contact details:", response.data.message);
      }
    } catch (error) {
      console.error("Error fetching contact details:", error);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">Contact Details</h2>
      {contact ? (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-lg font-bold text-gray-900 mb-4">Name: {contact.name}</p>
          <p className="text-lg text-gray-700 mb-4">Email: {contact.email}</p>
          <p className="text-lg text-gray-700 mb-4">Message: {contact.message}</p>
          <button
            onClick={() => navigate("/admin/contact")}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Back to List
          </button>
        </div>
      ) : (
        <p className="text-center text-gray-500">Loading contact details...</p>
      )}
    </div>
  );
};

export default ContactDetail;
