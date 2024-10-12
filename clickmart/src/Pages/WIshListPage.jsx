// src/components/WishlistPage.jsx

import React, { useState, useEffect } from "react";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";

const WishlistPage = () => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch wishlist items from the backend
  const fetchWishlistItems = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("authToken"));
      const response = await axios.get(
        "http://localhost:8080//user/wishlist/all_wishlists_items",
        id,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setWishlistItems(response.data.items);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch wishlist items. Please try again.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWishlistItems();
  }, []);

  // Handle removing an item from the wishlist
  const handleRemoveFromWishlist = async (id) => {
    try {
      const token = JSON.parse(localStorage.getItem("authToken"));
      await axios.delete(
        `http://localhost:8080/user/wishlist/delete_item_in_wishlist`,
        id,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setWishlistItems(wishlistItems.filter((item) => item._id !== id));
    } catch (err) {
      setError("Failed to remove item from wishlist. Please try again.");
    }
  };

  if (loading) {
    return <p>Loading your wishlist...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="max-w-screen-xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">Your Wishlist</h1>

      {wishlistItems.length === 0 ? (
        <div className="text-center">
          <FiHeart size={60} className="mx-auto mb-4" />
          <p className="text-xl">Your wishlist is empty</p>
          <Link
            to="/shop"
            className="text-blue-500 hover:underline mt-4 inline-block"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlistItems.map((item) => (
            <div
              key={item._id}
              className="p-4 bg-white shadow rounded-lg flex flex-col justify-between"
            >
              <div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
                <p className="text-gray-500 mb-2">{item.category}</p>
                <p className="text-xl font-bold text-red-600">${item.price}</p>
              </div>
              <div className="flex justify-between items-center mt-4">
                <Link
                  to={`/product/${item._id}`}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  View Product
                </Link>
                <button
                  onClick={() => handleRemoveFromWishlist(item._id)}
                  className="text-red-500 hover:text-red-700"
                  aria-label={`Remove ${item.title} from wishlist`}
                >
                  <MdDelete size={24} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
