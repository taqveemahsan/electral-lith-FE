import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ManageContact = () => {
  const [contacts, setContacts] = useState([]); // Holds the list of contacts
  const [loading, setLoading] = useState(false); // Indicates loading state
  const [error, setError] = useState(null); // Holds error messages if any
  const navigate = useNavigate();

  // Fetch contacts when the component mounts
  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        "http://localhost:4001/api/auth/contactus/list?page=1&limit=5"
      );

      if (response.data.success) {
        setContacts(response.data.data.contacts || []); // Ensure contacts is an array
      } else {
        setError("Failed to fetch contacts.");
      }
    } catch (err) {
      setError("An error occurred while fetching contacts.");
    } finally {
      setLoading(false);
    }
  };

  const handleViewDetails = (id) => {
    // Navigate to the contact details page
    navigate(`/admin/contact/${id}`);
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">Manage Contact List</h2>

      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 bg-white">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Name</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Email</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Message</th>
                <th className="px-4 py-2 text-center text-sm font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(contacts) && contacts.length > 0 ? (
                contacts.map((contact) => (
                  <tr key={contact.id} className="border-b">
                    <td className="px-4 py-2 text-sm text-gray-700">{contact.name}</td>
                    <td className="px-4 py-2 text-sm text-gray-700">{contact.email}</td>
                    <td className="px-4 py-2 text-sm text-gray-700 truncate">{contact.message}</td>
                    <td className="px-4 py-2 text-center">
                      <button
                        onClick={() => handleViewDetails(contact.id)}
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="px-4 py-6 text-center text-gray-500">
                    No contacts found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ManageContact;
