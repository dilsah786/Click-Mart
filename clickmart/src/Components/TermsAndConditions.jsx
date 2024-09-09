import React, { useContext } from "react";
// import { ThemeContext } from "../context/ThemeContext"; // Assuming you're using ThemeContext

const TermsAndConditions = () => {
//   const { theme } = useContext(ThemeContext); // Theme state, could be 'light' or 'dark'
const theme = "dark"
  return (
    <div className={`min-h-screen py-12 px-6 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}>
      <div className="max-w-screen-xl mx-auto">

        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Terms and Conditions</h1>
          <p className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            Please read these Terms and Conditions carefully before using our website and services.
          </p>
        </div>

        {/* Terms and Conditions Sections */}
        <div className="space-y-8">
          {/* Section 1: Introduction */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className={`text-base leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              These Terms and Conditions govern your use of our website, ClickMart, and all related services. By accessing
              or using our website, you agree to be bound by these Terms. If you do not agree with any part of these
              Terms, you may not access or use our website or services.
            </p>
          </div>

          {/* Section 2: User Responsibilities */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">2. User Responsibilities</h2>
            <p className={`text-base leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              As a user, you are responsible for ensuring that your use of the website complies with all applicable laws
              and regulations. You agree not to engage in any conduct that may damage or impair the functionality or
              security of the website or services, including, but not limited to, distributing harmful code, viruses,
              or unauthorized access.
            </p>
          </div>

          {/* Section 3: Intellectual Property */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">3. Intellectual Property</h2>
            <p className={`text-base leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              All content on the website, including but not limited to text, images, logos, graphics, and designs, are
              the intellectual property of ClickMart. Unauthorized use of any intellectual property found on the
              website is strictly prohibited.
            </p>
          </div>

          {/* Section 4: Limitation of Liability */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">4. Limitation of Liability</h2>
            <p className={`text-base leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              ClickMart will not be liable for any direct, indirect, incidental, or consequential damages resulting from
              your use of, or inability to use, the website or services, even if we have been advised of the possibility
              of such damages. We are not responsible for any errors, interruptions, or losses of data resulting from
              your use of the website.
            </p>
          </div>

          {/* Section 5: Changes to Terms */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">5. Changes to Terms</h2>
            <p className={`text-base leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              We reserve the right to modify these Terms and Conditions at any time. Any changes will be effective
              immediately upon posting on the website. Your continued use of the website and services after such
              changes indicates your acceptance of the revised Terms.
            </p>
          </div>

          {/* Section 6: Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">6. Contact Information</h2>
            <p className={`text-base leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              If you have any questions or concerns regarding these Terms and Conditions, please feel free to contact us
              at support@clickmart.com or by phone at +1 234 567 890.
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

export default TermsAndConditions;
