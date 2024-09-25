import React, { useState, useEffect } from "react";
import axios from "axios"; // You can also use fetch, but axios is used here for simplicity
import { json, Link } from "react-router-dom";
import { useContext } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import BannerCarousel from "../Components/BannerCrousel";
// import { ThemeContext } from "../context/ThemeContext"; // Assuming you're using a theme context

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const theme = "dark";
  // const { theme } = useContext(ThemeContext); // Using theme context for light and dark mode

  useEffect(() => {
    AOS.init()
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const token = JSON.parse(localStorage.getItem("authToken")); // You will need to replace this with the actual token
        console.log(token);

        const response = await axios.get("http://localhost:8080/products", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProducts(response.data.data);
        setLoading(false);
      } catch (error) {
        setError("Error fetching products");
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div
      className={`${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-800"
      } min-h-screen`}
    >
      {/* Banner Section */}
      {/* <div className="w-full bg-gray-300 h-64 flex items-center justify-center">
        <h1 className="text-4xl font-bold">Welcome to ClickMart</h1>
      </div> */}
      <BannerCarousel/>

      {/* Categories Section */}
      <div className="max-w-screen-xl mx-auto py-8 px-4">
        <h2 className="text-2xl font-semibold mb-6">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Example category links */}
          <Link
            to="/category/electronics"
            className="bg-blue-100 p-4 rounded-lg text-center"
          >
            Electronics
          </Link>
          <Link
            to="/category/fashion"
            className="bg-blue-100 p-4 rounded-lg text-center"
          >
            Fashion
          </Link>
          <Link
            to="/category/home-appliances"
            className="bg-blue-100 p-4 rounded-lg text-center"
          >
            Home Appliances
          </Link>
          <Link
            to="/category/books"
            className="bg-blue-100 p-4 rounded-lg text-center"
          >
            Books
          </Link>
        </div>
      </div>

      {/* Product Section */}
      <div className="max-w-screen-xl mx-auto py-8 px-4">
        <h2 className="text-2xl font-semibold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products?.map((product) => (
            <div
              
              key={product._id}
              className="border p-4 rounded-lg hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            >
            <div key={product._id} data-aos="fade-up">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 object-cover mb-4"
                
              />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">{product.category}</p>
              <p className="text-xl font-bold line-through">
                ${product.oldPrice}
              </p>
              <p className="text-xl font-bold">${product.price}</p>
              <Link
                to={`/products/${product._id}`}
                className="block mt-4 bg-blue-500 text-white text-center py-2 rounded-md hover:bg-blue-600"
              >
                View Details
              </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
