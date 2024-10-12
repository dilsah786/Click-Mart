import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Authentications/Login";
import Signup from "../Authentications/Signup";
import HomePage from "../Pages/HomePage";
import CartPage from "../Pages/CartPage";
import WIshListPage from "../Pages/WIshListPage";
import AddressPage from "../Pages/AddressPage";
import ProductPage from "../Pages/ProductPage";
import SingleProduct from "../Pages/SingleProduct";
import About from "../Pages/About";
import TermsAndConditions from "../Components/TermsAndConditions";
import PrivacyPolicy from "../Components/PrivacyPolicy";
import ShippingPolicy from "../Components/ShippingPolicy";
import ReturnsAndRefunds from "../Components/ReturnsAndRefunds";
import ContactUs from "../Components/Contact";
import FAQs from "../Components/FAQs";
import WishlistPage from "../Pages/WIshListPage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/cart-page" element={<CartPage />} />
      <Route path="/wishlist" element={<WishlistPage />} />
      <Route path="/addresses" element={<AddressPage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/products/:id" element={<SingleProduct />} />
      {/* Footer Routings */}
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/terms-conditions" element={<TermsAndConditions />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/shipping-policy" element={<ShippingPolicy />} />
      <Route path="/returns-refunds" element={<ReturnsAndRefunds />} />
      <Route path="/faqs" element={<FAQs />} />

    </Routes>
  );
};

export default AllRoutes;
