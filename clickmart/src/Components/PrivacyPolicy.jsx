import React, { useContext } from "react";
// import { ThemeContext } from "../context/ThemeContext"; // Assuming you're using ThemeContext

const PrivacyPolicy = () => {
//   const { theme } = useContext(ThemeContext); // Theme state, could be 'light' or 'dark'
const theme = "dark"
  return (
    <div className={`min-h-screen py-12 px-6 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}>
      <div className="max-w-screen-xl mx-auto">
        
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            Your privacy is important to us. This privacy policy explains how we collect, use, and protect your personal
            information when you use our website and services.
          </p>
        </div>

        {/* Privacy Policy Sections */}
        <div className="space-y-8">

          {/* Section 1: Information We Collect */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
            <p className={`text-base leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              We collect information that you provide to us directly, such as when you create an account, make a purchase,
              or contact us for support. This may include your name, email address, phone number, shipping address,
              payment details, and other information necessary to process your order.
            </p>
          </div>

          {/* Section 2: How We Use Your Information */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
            <p className={`text-base leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              We use your information to provide, maintain, and improve our services. This includes processing transactions,
              shipping products, sending notifications, and offering customer support. Additionally, we may use your
              information to personalize your experience, such as showing you relevant products or promotional offers.
            </p>
          </div>

          {/* Section 3: Sharing Your Information */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">3. Sharing Your Information</h2>
            <p className={`text-base leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              We do not sell or rent your personal information to third parties. However, we may share your information
              with trusted partners to help us operate our business, such as payment processors, shipping companies, and
              marketing partners, in accordance with applicable privacy laws.
            </p>
          </div>

          {/* Section 4: Your Rights and Choices */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">4. Your Rights and Choices</h2>
            <p className={`text-base leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              You have the right to access, correct, or delete your personal information at any time. You may also opt out
              of receiving marketing emails by following the instructions in the email or by contacting us directly.
              Please note that even if you opt out of marketing emails, we may still need to send you transactional
              communications.
            </p>
          </div>

          {/* Section 5: Data Security */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
            <p className={`text-base leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              We take appropriate measures to protect your personal information from unauthorized access, disclosure,
              alteration, and destruction. This includes implementing encryption and other security technologies.
              However, no method of transmission over the internet or method of electronic storage is 100% secure.
            </p>
          </div>

          {/* Section 6: Cookies and Tracking Technologies */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">6. Cookies and Tracking Technologies</h2>
            <p className={`text-base leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              We use cookies and other tracking technologies to improve your experience on our website, analyze website
              usage, and assist in our marketing efforts. You can control cookies through your browser settings and opt out
              of certain tracking technologies through available tools.
            </p>
          </div>

          {/* Section 7: Changes to This Privacy Policy */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">7. Changes to This Privacy Policy</h2>
            <p className={`text-base leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              We may update this privacy policy from time to time to reflect changes in our practices or for other
              operational, legal, or regulatory reasons. We will notify you of any significant changes by posting the new
              policy on our website.
            </p>
          </div>

          {/* Section 8: Contact Us */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
            <p className={`text-base leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              If you have any questions or concerns about this privacy policy or our privacy practices, please contact us at
              privacy@clickmart.com or by phone at +1 234 567 890.
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

export default PrivacyPolicy;
