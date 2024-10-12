// src/components/AddressPage.jsx

import React, { useState, useEffect } from "react";
import axios from "axios";
import { MdEdit, MdDelete } from "react-icons/md";

const AddressPage = () => {
  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newAddress, setNewAddress] = useState({
    street: "",
    city: "",
    state: "",
    zip: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  // Fetch the addresses from the backend when the component mounts
  const fetchAddresses = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("authToken"));
      const response = await axios.get(
        "http://localhost:8080/user/address/all_addresses",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setAddresses(response.data.addresses);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch addresses. Please try again.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAddresses();
  }, []);

  // Handle adding a new address
  const handleAddAddress = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("authToken"));
      const response = await axios.post(
        "http://localhost:8080/user/address/add_new_address",
        newAddress,
        id,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setAddresses([...addresses, response.data.address]);
      setNewAddress({ street: "", city: "", state: "", zip: "" });
    } catch (err) {
      setError("Failed to add address. Please try again.");
    }
  };

  // Handle editing an address
  const handleEditAddress = async (id) => {
    try {
      const token = JSON.parse(localStorage.getItem("authToken"));
      const response = await axios.patch(
        `http://localhost:8080/user/address/update_address`,
        newAddress,
        id,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const updatedAddresses = addresses.map((address) =>
        address._id === id ? { ...address, ...response.data.address } : address
      );
      setAddresses(updatedAddresses);
      setIsEditing(false);
      setNewAddress({ street: "", city: "", state: "", zip: "" });
    } catch (err) {
      setError("Failed to edit address. Please try again.");
    }
  };

  // Handle deleting an address
  const handleDeleteAddress = async (id) => {
    try {
      const token = JSON.parse(localStorage.getItem("authToken"));
      await axios.delete(
        `http://localhost:8080/user/address/delete_address`,
        id,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setAddresses(addresses.filter((address) => address._id !== id));
    } catch (err) {
      setError("Failed to delete address. Please try again.");
    }
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAddress((prevState) => ({ ...prevState, [name]: value }));
  };

  if (loading) {
    return <p>Loading addresses...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="max-w-screen-md mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">Manage Addresses</h1>

      {/* Address Form */}
      <div className="bg-white p-4 mb-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">
          {isEditing ? "Edit Address" : "Add New Address"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="street"
            value={newAddress.street}
            onChange={handleInputChange}
            placeholder="Street"
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="city"
            value={newAddress.city}
            onChange={handleInputChange}
            placeholder="City"
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="state"
            value={newAddress.state}
            onChange={handleInputChange}
            placeholder="State"
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="zip"
            value={newAddress.zip}
            onChange={handleInputChange}
            placeholder="ZIP Code"
            className="border p-2 rounded"
          />
        </div>
        <div className="mt-4">
          {isEditing ? (
            <button
              onClick={() => handleEditAddress(editingId)}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Update Address
            </button>
          ) : (
            <button
              onClick={handleAddAddress}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Add Address
            </button>
          )}
        </div>
      </div>

      {/* List of Addresses */}
      <div className="space-y-4">
        {addresses.map((address) => (
          <div
            key={address._id}
            className="p-4 bg-white shadow rounded-lg flex justify-between items-center"
          >
            <div>
              <p>{address.street}</p>
              <p>
                {address.city}, {address.state} {address.zip}
              </p>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => {
                  setIsEditing(true);
                  setEditingId(address._id);
                  setNewAddress({
                    street: address.street,
                    city: address.city,
                    state: address.state,
                    zip: address.zip,
                  });
                }}
                className="text-blue-500 hover:text-blue-700"
              >
                <MdEdit size={20} />
              </button>
              <button
                onClick={() => handleDeleteAddress(address._id)}
                className="text-red-500 hover:text-red-700"
              >
                <MdDelete size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddressPage;
