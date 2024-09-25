import React, { useContext, useState } from "react";
// import { ThemeContext } from "../context/ThemeContext"; // Assuming you're using ThemeContext
import { faqsItems } from "../constData/data";

const FAQs = () => {
  //   const { theme } = useContext(ThemeContext); // Light or dark theme context
  const [openIndex, setOpenIndex] = useState(null);

  const theme = "dark";

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className={`min-h-screen py-12 px-6 ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-gray-800"
      }`}
    >
      <div className="max-w-screen-xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p
            className={`text-lg leading-relaxed ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Find answers to some of the most common questions we receive. If you
            have any other questions, feel free to contact us.
          </p>
        </div>

        {/* FAQs List */}
        <div className="space-y-4">
          {faqsItems.map((faq, index) => (
            <div
              key={index}
              className={`border rounded-md ${
                theme === "dark"
                  ? "bg-gray-800 text-white border-gray-700"
                  : "bg-white text-gray-900 border-gray-300"
              }`}
            >
              <button
                onClick={() => toggleAnswer(index)}
                className={`w-full px-4 py-2 text-left font-semibold ${
                  theme === "dark"
                    ? "bg-gray-700 text-white"
                    : "bg-gray-200 text-gray-800"
                } flex justify-between items-center`}
              >
                <span>{faq.question}</span>
                <span
                  className={`ml-2 ${openIndex === index ? "rotate-180" : ""}`}
                >
                  &#9662;
                </span>{" "}
                {/* Arrow down */}
              </button>
              {openIndex === index && (
                <div
                  className={`px-4 py-2 ${
                    theme === "dark" ? "bg-gray-900" : "bg-gray-100"
                  }`}
                >
                  <p
                    className={`text-base ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
