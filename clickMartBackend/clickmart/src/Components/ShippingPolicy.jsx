import React, { useContext } from "react";
// import { ThemeContext } from "../context/ThemeContext"; // Assuming you're using ThemeContext

const ShippingPolicy = () => {
//   const { theme } = useContext(ThemeContext); // Theme state, could be 'light' or 'dark'
const theme = "dark"
  return (
    <div className={`min-h-screen py-12 px-6 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}>
      <div className="max-w-screen-xl mx-auto">
        
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Shipping Policy</h1>
          <p className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            Thank you for shopping with us. Below is our shipping policy to ensure transparency and a great experience for our customers.
          </p>
        </div>

        {/* Shipping Policy Sections */}
        <div className="space-y-8">

          {/* Section 1: Domestic Shipping */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">1. Domestic Shipping</h2>
            <p className={`text-base leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              We offer standard and express shipping options across the country. Domestic shipping times typically range from 3 to 7 business days, depending on the destination and the shipping method selected at checkout.
            </p>
            <p className={`text-base leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Shipping charges are calculated based on the total weight of your order and will be displayed at checkout.
            </p>
          </div>

          {/* Section 2: International Shipping */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">2. International Shipping</h2>
            <p className={`text-base leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              We currently offer international shipping to selected countries. Shipping times and charges vary based on the destination and the shipping method selected. Delivery times may range from 7 to 21 business days, depending on your location.
            </p>
            <p className={`text-base leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Please note that customs duties and taxes may apply to your order, and customers are responsible for paying these fees upon delivery.
            </p>
          </div>

          {/* Section 3: Order Processing */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">3. Order Processing</h2>
            <p className={`text-base leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Orders are typically processed within 1 to 2 business days (excluding weekends and holidays) after receiving your order confirmation email. You will receive another notification when your order has shipped.
            </p>
          </div>

          {/* Section 4: Shipping Delays */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">4. Shipping Delays</h2>
            <p className={`text-base leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Shipping delays can occasionally occur due to unforeseen circumstances such as weather conditions, natural disasters, or carrier issues. We do our best to minimize delays and will keep you updated if any arise.
            </p>
          </div>

          {/* Section 5: Tracking Your Order */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">5. Tracking Your Order</h2>
            <p className={`text-base leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Once your order has shipped, you will receive a tracking number via email. You can use this number to monitor your order's progress through our shipping carrier's website. Please allow up to 48 hours for the tracking information to update.
            </p>
          </div>

          {/* Section 6: Lost or Stolen Packages */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">6. Lost or Stolen Packages</h2>
            <p className={`text-base leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              We are not responsible for lost or stolen packages that have been marked as delivered by the carrier. Please ensure that the delivery location is secure. If your package is missing, please contact the carrier or our customer support team for further assistance.
            </p>
          </div>

          {/* Section 7: Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">7. Contact Information</h2>
            <p className={`text-base leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              If you have any questions about our shipping policy, please contact us at support@clickmart.com or by phone at +1 234 567 890. We are here to assist you with any concerns regarding your order.
            </p>
          </div>

        </div>

        {/* Last Updated */}
        <div className={`text-center mt-12 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>
          <p>Last updated: September 2024</p>
        </div>
      </div>
    </div>
  );
};

export default ShippingPolicy;
