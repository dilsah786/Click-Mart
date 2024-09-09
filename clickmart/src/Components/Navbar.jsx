import React from "react";
import { navItems } from "../constData/data";
import { Link } from "react-router-dom";
import logo from "../assets/bg-4.png";
import Sidebar from "./Sidebar";
import { CgProfile } from "react-icons/cg";
import { HiHeart } from "react-icons/hi";
import { CiShoppingBasket } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="border-b-2 bg-white  fixed top-0 left-0 right-0 z-50 lg:mb-16">
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
                className="font-medium text-lg hover:underline"
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
            className="w-80 h-10 border-2 border-gray-300 rounded-md p-2 placeholder-gray-500 text-base"
            placeholder="Search for products, brands and more"
          />

          {/* Profile, Wishlist, and Cart */}
          <div className="flex items-center gap-6">
            <Link to="/login">
              <button className="font-medium hover:text-red-600"> <CgProfile/>Login </button>
            </Link>
            <Link to="/wishlist">
              <button className="font-medium hover:text-red-600"> <HiHeart/> WishList </button>
            </Link>
            <Link to="/cart-page">
              <button className="font-medium hover:text-red-600"> <FiShoppingBag/> Cart</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
