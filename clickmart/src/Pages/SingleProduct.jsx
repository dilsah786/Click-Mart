import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Toast from "../Components/Toast";

const SingleProduct = () => {
  const [product, setProduct] = useState(null); // Product data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(""); // Error state
  const [message, setMessage] = useState("Item Added to Cart");

  const { id } = useParams(); // Get the product ID from the URL
  const notify = () => toast(message);

  useEffect(() => {
    const fetchSingleProduct = async () => {
      try {
        const token = JSON.parse(localStorage.getItem("authToken")); // Retrieve token from local storage

        const response = await axios.get(
          `http://localhost:8080/products/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`, // Send token in the header
            },
          }
        );

        setProduct(response.data.data); // Set the product data
        setLoading(false); // Stop loading
      } catch (error) {
        setError("Error fetching product data"); // Set error message
        setLoading(false); // Stop loading
      }
    };

    fetchSingleProduct();
  }, [id]);

  const addItemToCart = async (id, notify) => {
    try {
      const token = JSON.parse(localStorage.getItem("authToken")); // Retrieve token from local storage

      const response = await fetch(
        `http://localhost:8080/products/cart/add_item_in_cart`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Send token in the header
          },
          body: JSON.stringify({ id }),
        }
      );

      const res = await response.json();

      setMessage(res.message);
      notify();
      setLoading(false); // Stop loading
      message;
    } catch (error) {
      setError("Error fetching product data"); // Set error message
      setLoading(false); // Stop loading
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    ); // Show loader when fetching data
  }

  if (error) {
    return <div className="text-red-500 text-center mt-4">{error}</div>; // Show error if there's an issue
  }

  return (
    <div className="container mx-auto  lg:mt-36 mt-20 p-4">
      {product ? (
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* Product Image */}
          <div className="flex-1">
            <img
              src={product.image}
              alt={product.title}
              className="w-full lg:w-96 h-auto object-cover mb-4 rounded-md shadow-lg p-2"
            />
          </div>

          {/* Product Details */}
          <div className="flex-1 space-y-4">
            <h1 className="text-3xl font-semibold">{product.title}</h1>
            <p className="text-gray-500">{product.category}</p>

            {/* Pricing */}
            <div className="flex items-center space-x-2">
              <p className="text-xl font-semibold text-gray-500 line-through">
                ${product.oldPrice}
              </p>
              <p className="text-2xl font-bold text-red-600">
                ${product.price}
              </p>
            </div>

            {/* Product Description */}
            <p className="text-gray-700">{product.description}</p>

            {/* Add to Cart Button */}
            <button
              onClick={() => addItemToCart(id, notify)}
              key={id}
              className="bg-red-600 text-white px-6 py-2 rounded-md font-medium hover:bg-red-700 transition duration-300"
            >
              Add to Cart
            </button>
            <Toast />
          </div>
        </div>
      ) : (
        <div>Product not found.</div>
      )}
    </div>
  );
};

export default SingleProduct;
