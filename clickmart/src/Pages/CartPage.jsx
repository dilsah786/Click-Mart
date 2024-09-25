import React, { useState, useEffect } from "react";
import axios from "axios";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]); // Store cart items
  const [loading, setLoading] = useState(true); // Loader
  const [error, setError] = useState(""); // Error message
  const [totalPrice, setTotalPrice] = useState(0); // Total price

  // Fetch cart items from the API on component mount
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const token = JSON.parse(localStorage.getItem("authToken")); // Get token from localStorage

        const response = await axios.get("http://localhost:8080/products/cart/all_cart_items", {
          headers: {
            Authorization: `Bearer ${token}`, // Bearer token for authentication
          },
        });

        setCartItems(response.data.items); // Set the cart items from API response
        calculateTotal(response.data.items); // Calculate total price
        setLoading(false);
      } catch (error) {
        setError("Error fetching cart data");
        setLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  // Calculate total price based on cart items
  const calculateTotal = (items) => {
    const total = items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotalPrice(total);
  };

  // Increase quantity of a specific item
  const handleIncreaseQuantity = async (id) => {
    const updatedItems = cartItems.map((item) => {
      if (item._id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    setCartItems(updatedItems);
    calculateTotal(updatedItems);

    // Update quantity on the backend
    try {
      const token = JSON.parse(localStorage.getItem("authToken"));
      await axios.put(
        `http://localhost:8080/products/cart/update_items_in_cart/${id}`,
        { quantity: 1 }, // Add 1 to quantity
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      setError("Error updating item quantity");
    }
  };

  // Decrease quantity of a specific item
  const handleDecreaseQuantity = async (id) => {
    const updatedItems = cartItems.map((item) => {
      if (item._id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });

    setCartItems(updatedItems);
    calculateTotal(updatedItems);

    // Update quantity on the backend
    try {
      const token = JSON.parse(localStorage.getItem("authToken"));
      await axios.put(
        `http://localhost:8080/cart/update/${id}`,
        { quantity: -1 }, // Subtract 1 from quantity
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      setError("Error updating item quantity");
    }
  };

  // Remove item from cart
  const handleRemoveItem = async (id) => {
    const updatedItems = cartItems.filter((item) => item._id !== id);
    setCartItems(updatedItems);
    calculateTotal(updatedItems);

    // Remove item from backend
    try {
      const token = JSON.parse(localStorage.getItem("authToken"));
      await axios.delete(`http://localhost:8080/cart/remove/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      setError("Error removing item from cart");
    }
  };

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center mt-4">{error}</div>;
  }

  return (
    <div className="container mx-auto p-4 mt-20">
      <h1 className="text-3xl font-semibold mb-6">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center text-lg">Your cart is empty</div>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item._id} className="flex justify-between items-center border-b py-4">
              {/* Product Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 object-cover"
              />

              {/* Product Info */}
              <div className="flex-1 ml-4">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-500">${item.price}</p>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleDecreaseQuantity(item._id)}
                  className="px-2 py-1 bg-gray-200 rounded-md"
                >
                  -
                </button>
                <p>{item.quantity}</p>
                <button
                  onClick={() => handleIncreaseQuantity(item._id)}
                  className="px-2 py-1 bg-gray-200 rounded-md"
                >
                  +
                </button>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => handleRemoveItem(item._id)}
                className="text-red-600 hover:underline"
              >
                Remove
              </button>
            </div>
          ))}

          {/* Total Price */}
          <div className="mt-6">
            <h2 className="text-2xl font-bold">Total: ${totalPrice.toFixed(2)}</h2>
            <button className="bg-red-600 text-white px-6 py-2 rounded-md font-medium mt-4">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
