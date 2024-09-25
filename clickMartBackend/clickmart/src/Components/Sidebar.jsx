import React, { useState } from "react";
import { sideBarItems } from "../constData/data";
import { Link } from "react-router-dom";
import { IoIosMenu, IoIosSearch } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi";
import logo from "../assets/bg-4.png";
import { CgProfile } from "react-icons/cg";

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="border-b-2 p-2">
      <div className="flex items-center justify-between px-4 lg:hidden">
        {/* Hamburger Menu & Logo */}
        <div className="flex items-center cursor-pointer">
          {isMenuOpen ? (
            <IoClose size={30} onClick={toggleMenu} />
          ) : (
            <IoIosMenu size={30} onClick={toggleMenu} />
          )}
          <img src={logo} alt="Logo" className="w-10 h-10 ml-4" />
        </div>

        {/* Icons (Search, Heart, Cart) */}
        <div className="flex gap-4">
         <Link to={"/login"} > <CgProfile size={20} /></Link>
          <IoIosSearch size={20} />
         <Link to={"/wishlist"}>  <CiHeart size={20} /> </Link>
         <Link to="/cart-page" >  <HiOutlineShoppingBag size={20} /></Link>
        </div>
      </div>

      {/* Menu Items - Show when Menu is Open */}
      {isMenuOpen && (
        <div className="flex flex-col items-center mt-4 space-y-4 lg:hidden mb-4">
          {sideBarItems?.map((navItem, index) => (
            <Link
              key={index}
              to={navItem.path}
              className="text-xl text-black font-medium"
              onClick={toggleMenu}
            >
              {navItem.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
