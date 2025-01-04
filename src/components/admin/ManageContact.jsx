// src/components/admin/ManageContact.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ManageContact = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4001/api/auth/contactus/list?page=1&limit=5"
      );
      if (response.data.success) {
        setContacts(response.data.data);
      } else {
        setError("Failed to fetch contacts.");
      }
    } catch (err) {
      setError("Error fetching contacts.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-extrabold text-center text-indigo-700 mb-6 underline decoration-indigo-500 decoration-4">
        Manage Contact List
      </h2>

      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : contacts.length > 0 ? (
        <div className="overflow-x-auto shadow-lg rounded-lg">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white">
                <th className="px-6 py-4 text-left text-lg font-semibold uppercase tracking-wide border-b border-gray-300">
                  Name
                </th>
                <th className="px-6 py-4 text-left text-lg font-semibold uppercase tracking-wide border-b border-gray-300">
                  Email
                </th>
                <th className="px-6 py-4 text-left text-lg font-semibold uppercase tracking-wide border-b border-gray-300">
                  Message
                </th>
                <th className="px-6 py-4 text-left text-lg font-semibold uppercase tracking-wide border-b border-gray-300">
                  Date
                </th>
                <th className="px-6 py-4 text-left text-lg font-semibold uppercase tracking-wide border-b border-gray-300">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, index) => (
                <tr
                  key={contact.id}
                  className={`${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-blue-50 transition-colors`}
                >
                  <td className="px-6 py-4 border-t text-gray-800">{contact.name}</td>
                  <td className="px-6 py-4 border-t text-gray-800">{contact.email}</td>
                  <td className="px-6 py-4 border-t text-gray-800">{contact.message}</td>
                  <td className="px-6 py-4 border-t text-gray-800">
                    {new Date(contact.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 border-t text-gray-800">
                    <Link
                      to={`/admin/contact/${contact.id}`}
                      className="text-indigo-600 font-semibold hover:underline"
                    >
                      View Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-gray-500">No contacts found.</p>
      )}
    </div>
  );
};

export default ManageContact;
