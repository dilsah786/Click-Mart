import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from "../assets/bg-3.png";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-screen-xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Section */}
        <div className="flex flex-col items-start">
          <img src={logo} alt="ClickMart Logo" className="h-20 w-20 mb-4" />
          <p className="text-gray-400 text-sm">
            Your go-to platform for all your shopping needs. Get the latest products at the best prices!
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link to="/about-us" className="hover:text-white">About Us</Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-white">Shop</Link>
            </li>
            <li>
              <Link to="/faqs" className="hover:text-white">FAQs</Link>
            </li>
            <li>
              <Link to="/contact-us" className="hover:text-white">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Customer Service Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link to="/terms-conditions" className="hover:text-white">Terms & Conditions</Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/shipping-policy" className="hover:text-white">Shipping Policy</Link>
            </li>
            <li>
              <Link to="/returns-refunds" className="hover:text-white">Returns & Refunds</Link>
            </li>
          </ul>
        </div>

        {/* Contact Information Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="text-gray-400 space-y-2">
            <li>Email: support@clickmart.com</li>
            <li>Phone: +1 234 567 890</li>
            <li>Address: 123 Main St, Anytown, USA</li>
          </ul>
          <div className="flex gap-4 mt-4">
            <FaFacebookF className="cursor-pointer hover:text-white" />
            <FaTwitter className="cursor-pointer hover:text-white" />
            <FaInstagram className="cursor-pointer hover:text-white" />
            <FaLinkedinIn className="cursor-pointer hover:text-white" />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-600 mt-8 pt-4 text-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} ClickMart. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
