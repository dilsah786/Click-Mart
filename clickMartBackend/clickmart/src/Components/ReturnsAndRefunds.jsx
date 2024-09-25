import React, { useContext } from "react";
// import { ThemeContext } from "../context/ThemeContext"; // Assuming you're using ThemeContext

const ReturnsAndRefunds = () => {
//   const { theme } = useContext(ThemeContext); // Light or dark theme context

const theme = "dark"

  return (
    <div className={`min-h-screen py-12 px-6 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}>
      <div className="max-w-screen-xl mx-auto">
        
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Returns & Refunds Policy</h1>
          <p className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            We're committed to ensuring your satisfaction with our products. Please review our returns and refunds policy below.
          </p>
        </div>

        {/* Returns and Refunds Policy Sections */}
        <div className="space-y-8">

          {/* Section 1: Returns */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">1. Returns</h2>
            <p className={`text-base leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              We accept returns within 30 days of purchase. If 30 days have passed since your purchase, unfortunately, we cannot offer you a refund or exchange.
            </p>
            <p className={`text-base leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              To be eligible for a return, your item must be unused, in the same condition that you received it, and in its original packaging. Certain types of goods such as perishable items, intimate apparel, and health products are exempt from being returned.
            </p>
          </div>

          {/* Section 2: Refunds */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">2. Refunds</h2>
            <p className={`text-base leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Once your return is received and inspected, we will notify you via email. If your return is approved, then your refund will be processed, and a credit will automatically be applied to your original method of payment within 7 to 10 business days.
            </p>
            <p className={`text-base leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Please note that there are certain situations where only partial refunds are granted, such as items with obvious signs of use or that are not in their original condition, or if they are returned more than 30 days after delivery.
            </p>
          </div>

          {/* Section 3: Exchanges */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">3. Exchanges</h2>
            <p className={`text-base leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              We only replace items if they are defective or damaged. If you need to exchange it for the same item, send us an email at support@clickmart.com and we will assist you with the process.
            </p>
          </div>

          {/* Section 4: Shipping Returns */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">4. Shipping Returns</h2>
            <p className={`text-base leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              To return your product, you should mail your product to: ClickMart, 123 Shipping Lane, Suite 456, City, State, Zip Code.
            </p>
            <p className={`text-base leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.
            </p>
            <p className={`text-base leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Depending on where you live, the time it may take for your exchanged product to reach you may vary.
            </p>
          </div>

          {/* Section 5: Non-Returnable Items */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">5. Non-Returnable Items</h2>
            <p className={`text-base leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Several types of goods are exempt from being returned. These include perishable goods, intimate apparel, gift cards, downloadable software products, and some health and personal care items.
            </p>
            <p className={`text-base leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              care items.
            </p>
          </div>

          {/* Section 6: Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">6. Contact Information</h2>
            <p className={`text-base leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              If you have any questions about our returns and refunds policy, please contact our customer service team at support@clickmart.com or by phone at +1 234 567 890. We are here to help with any concerns you may have.
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

export default ReturnsAndRefunds;
