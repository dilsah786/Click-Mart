// src/components/CartPage.jsx

import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
// import { ThemeContext } from "../context/ThemeContext"; // Assuming you have a ThemeContext
import { FiShoppingBag } from "react-icons/fi"; // Cart icon
import { MdDelete } from "react-icons/md"; // Delete icon
import { Link } from "react-router-dom";

const CartPage = () => {
  // const { theme } = useContext(ThemeContext); // Access the current theme
  const [cartItems, setCartItems] = useState([]); // State to store cart items
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const [totalPrice, setTotalPrice] = useState(0); // Total price
  const [random, setRandom] = useState(0); // Generating rancdom number to continuous update of cart page

  const theme = "dark";

  // Fetch cart items from the API when the component mounts
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const token = JSON.parse(localStorage.getItem("authToken")); // Retrieve token from localStorage

        const response = await axios.get(
          "http://localhost:8080/products/cart/all_cart_items",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response);
        setCartItems(response.data.items); // Assuming the API returns { items: [...] }
        calculateTotal(response.data.items);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch cart items. Please try again.");
        setLoading(false);
      }
    };

    fetchCartItems();
  }, [random]);

  // Calculate the total price of the cart
  const calculateTotal = (items) => {
    const total = items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotalPrice(total);
  };

  // Handle increasing the quantity of an item
  const handleIncrease = async (id, fetchCartItems) => {
    try {
      const token = JSON.parse(localStorage.getItem("authToken"));

      await axios.patch(
        `http://localhost:8080/products/cart/update_item_in_cart`,
        { count: 1, id }, // Assuming the API expects { quantity: number }
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Update the cart items locally
      const updatedItems = cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedItems);
      calculateTotal(updatedItems);

      const val = Math.random() * 10;
      setRandom(val);
    } catch (err) {
      setError("Failed to update item quantity. Please try again.");
    }
  };

  // Handle decreasing the quantity of an item
  const handleDecrease = async (id, fetchCartItems) => {
    const item = cartItems.find((item) => item.id === id);
    console.log(item);
    if (item?.quantity === 1) {
      // If quantity is 1, removing the item instead of decreasing
      handleRemove(id);
      return;
    }

    try {
      const token = JSON.parse(localStorage.getItem("authToken"));

      await axios.patch(
        `http://localhost:8080/products/cart/update_item_in_cart`,
        { count: -1, id }, // Decrease by 1
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Update the cart items locally
      const updatedItems = cartItems.map((item) =>
        item._id === id ? { ...item, quantity: item.quantity - 1 } : item
      );
      setCartItems(updatedItems);
      calculateTotal(updatedItems);
      const val = Math.random() * 10;
      setRandom(val);
    } catch (err) {
      setError("Failed to update item quantity. Please try again.");
    }

    fetchCartItems();
  };

  // Handle removing an item from the cart
  const handleRemove = async (id) => {
    try {
      const token = JSON.parse(localStorage.getItem("authToken"));

      await axios.delete(
        `http://localhost:8080/products/cart/delete_item_in_cart`,
        { id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Update the cart items locally
      const updatedItems = cartItems.filter((item) => item._id !== id);
      setCartItems(updatedItems);
      calculateTotal(updatedItems);
      const val = Math.random() * 10;
      setRandom(val);
    } catch (err) {
      setError("Failed to remove item from cart. Please try again.");
    }
  };

  // Handle proceeding to checkout
  const handleCheckout = () => {
    // Implement checkout logic or navigate to the checkout page
    // For example:
    // history.push("/checkout");
    alert("Proceeding to checkout...");
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl">Loading your cart...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen py-20 px-4 ${
        theme === "dark"
          ? "bg-gray-800 text-white"
          : "bg-gray-100 text-gray-800"
      }`}
    >
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center">
            <FiShoppingBag size={60} className="mx-auto mb-4" />
            <p className="text-xl">Your cart is empty</p>
            <Link
              to="/shop"
              className="text-blue-500 hover:underline mt-4 inline-block"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items */}
            <div className="flex-1">
              {cartItems.map((item) => (
                <div
                  key={item._id}
                  className={`flex flex-col sm:flex-row items-center gap-4 p-4 mb-4 rounded-md ${
                    theme === "dark" ? "bg-gray-700" : "bg-white"
                  } shadow`}
                >
                  {/* Product Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-24 object-cover rounded-md"
                  />

                  {/* Product Details */}
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold">{item.title}</h2>
                    <p className="text-gray-500">{item.category}</p>
                    <p className="text-xl font-bold text-red-600">
                      ${item.price}
                    </p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleDecrease(item.id)}
                      className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300 text-black"
                    >
                      -
                    </button>
                    <span className="px-3 py-1">{item.quantity}</span>
                    <button
                      onClick={() => handleIncrease(item.id)}
                      className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300 text-black"
                    >
                      +
                    </button>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => handleRemove(item._id)}
                    className="text-red-500 hover:text-red-700"
                    aria-label={`Remove ${item.title} from cart`}
                  >
                    <MdDelete size={24} />
                  </button>
                </div>
              ))}
            </div>

            {/* Summary and Checkout */}
            <div className="w-full lg:w-1/3 p-4 rounded-md bg-white shadow">
              <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Tax</span>
                <span>${(totalPrice * 0.1).toFixed(2)}</span>{" "}
                {/* Example tax calculation */}
              </div>
              <div className="flex justify-between mb-4">
                <span>Total</span>
                <span className="font-bold">
                  ${(totalPrice * 1.1).toFixed(2)}
                </span>
              </div>
              <button
                onClick={handleCheckout}
                className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition duration-300"
              >
                Proceed to Checkout
              </button>
              <Link
                to="/shop"
                className="block text-center mt-4 text-blue-500 hover:underline"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
