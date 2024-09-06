import React from "react";
import { navItems } from "../constData/data";
import { Link } from "react-router-dom";
import logo from "../assets/bg-4.png";
const Navbar = () => {
  return (
    <div className="flex flex-row justify-center gap-32 p-5 border border-b-2 text-xl ">
      <div className="flex flex-row justify-evenly gap-10">
        <div>
          {/* Logo */}
          <img src={logo} alt="ClickMart Logo" className="h-20 w-20" />
        </div>
        <div className="flex flex-row gap-10 items-center ">
          {navItems?.map((navItem) => {
            return (
              <div>
                <Link to={navItem.path}>
                  {" "}
                  <h1>{navItem.title}</h1>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-row gap-10 items-center">
        <div>
        
          <input
            className="w-80 border-b-2 h-10 rounded-md p-2 placeholder:text-[16px] place-content-center text-[16px] "
            placeholder="Search for products, brands and more"
          />
        </div>
        {/* SearchBar , Profile wishlist cart */}

        <Link to="/login">
          {" "}
          <button>Login</button>
        </Link>
        <Link to="/wishlist">
          <button>Wishlist</button>
        </Link>
        <Link to="/cart-page">
          <button>Cart</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
