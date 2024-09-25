import React from "react";
import { navItems } from "../constData/data";
import { Link } from "react-router-dom";
import logo from "../assets/bg-4.png";
import Sidebar from "./Sidebar";
import { CgProfile } from "react-icons/cg";
import { HiHeart } from "react-icons/hi";
import { FiShoppingBag } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="border-b-2 bg-white fixed top-0 left-0 right-0 z-50 shadow-md">
      {/* Sidebar for smaller screens */}
      <Sidebar className="lg:hidden" />

      {/* Navbar for larger screens */}
      <div className="hidden lg:flex justify-between items-center px-8 py-4">
        {/* Left Section - Logo and Navigation Links */}
        <div className="flex items-center gap-16">
          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="ClickMart Logo" className="h-16 w-16" />
          </Link>

          {/* Navigation Links */}
          <div className="flex gap-8">
            {navItems?.map((navItem, index) => (
              <Link
                key={index}
                to={navItem.path}
                className="font-medium text-lg hover:underline hover:text-yellow-600 transition duration-300"
                aria-label={navItem.title}
              >
                {navItem.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Right Section - Search Bar and Profile Buttons */}
        <div className="flex items-center gap-8">
          {/* Search Bar */}
          <input
            type="text"
            className="w-80 h-10 border-2 border-gray-300 rounded-md p-2 placeholder-gray-500 text-base focus:outline-none focus:border-yellow-600 transition duration-300"
            placeholder="Search for products, brands and more"
            aria-label="Search products"
          />

          {/* Profile, Wishlist, and Cart */}
          <div className="flex items-center gap-6">
            <Link to="/login">
              <button className="font-medium flex items-center gap-2 hover:text-red-600 transition duration-300">
                <CgProfile size={20} aria-hidden="true" />
                Login
              </button>
            </Link>
            <Link to="/wishlist">
              <button className="font-medium flex items-center gap-2 hover:text-red-600 transition duration-300">
                <HiHeart size={20} aria-hidden="true" />
                Wishlist
              </button>
            </Link>
            <Link to="/cart-page">
              <button className="font-medium flex items-center gap-2 hover:text-red-600 transition duration-300">
                <FiShoppingBag size={20} aria-hidden="true" />
                Cart
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
