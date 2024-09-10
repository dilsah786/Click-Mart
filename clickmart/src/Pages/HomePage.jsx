import React, { useEffect, useState, useContext } from "react";
import Landing from "./Landing";
// import { ThemeContext } from "../context/ThemeContext"; // Assuming you're using ThemeContext

const HomePage = () => {
  // const { theme } = useContext(ThemeContext); // Light or dark theme context
  const theme = "light";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [token, setToken] = useState(null);

  // const token = localStorage.getItem('authToken'); // Replace with your token storage logic

  const fetchData = async (token) => {
    try {
      const result = await fetch("http://localhost:8080/products?page=1&limit=12", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const res = await result.json();
      console.log(res);
      setData(res.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

 

  useEffect(() => {
    let localToken = JSON.parse(localStorage.getItem("authToken"));
    if(!localToken){
      return alert("Please login first")
    }
    if (localToken) {
      setToken(localToken);
    } 

    fetchData(token);

  }, [token]);

  console.log(token);

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error)
    return <div className="text-center py-10">Error: {error.message}</div>;

  return (
    <div
      className={`min-h-screen py-12 lg:mt-28 md:mt-24 mt-16 px-6 ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-gray-800"
      }`}
    >
    <Landing/>
      <div className="max-w-screen-xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Shop</h1>
          <p
            className={`text-lg leading-relaxed ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Discover our latest products and offers. Shop now and enjoy
            exclusive discounts!
          </p>
        </div>

        {/* Featured Products */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data?.map((product) => {
              return (
                <div className="" key={product._id}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-40 h-40 object-cover rounded-t-md"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{product.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {product.price}
                    </p>
                    <button
                      className={`mt-4 w-full px-4 py-2 text-white font-bold rounded-md ${
                        theme === "dark"
                          ? "bg-blue-600 hover:bg-blue-500"
                          : "bg-blue-500 hover:bg-blue-400"
                      }`}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Promotional Section */}
        <div className="bg-blue-500 text-white rounded-lg py-6 px-8 text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">Special Offer</h2>
          <p className="text-lg">
            Don't miss out on our special promotion! Enjoy 20% off on all
            products for a limited time.
          </p>
          <button
            className={`mt-4 px-4 py-2 bg-white text-blue-500 font-bold rounded-md ${
              theme === "dark"
                ? "bg-gray-700 text-white"
                : "bg-gray-100 text-gray-900"
            }`}
          >
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
