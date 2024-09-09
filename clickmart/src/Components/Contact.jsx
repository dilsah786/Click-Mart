import React, { useContext, useState } from "react";
// import { ThemeContext } from "../context/ThemeContext"; // Assuming you're using ThemeContext

const ContactUs = () => {
//   const { theme } = useContext(ThemeContext); // Light or dark theme context
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState(null); // To track form submission status

  const theme = "dark"

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., send formData to an API
    setFormStatus('Submitting...');
    
    // Simulate a form submission process
    setTimeout(() => {
      setFormStatus('Thank you for your message. We will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <div className={`min-h-screen  py-12 px-6 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}>
      <div className="max-w-screen-xl mx-auto">

        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            We'd love to hear from you! Please fill out the form below and we'll get back to you as soon as possible.
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md ${theme === 'dark' ? 'bg-gray-800 text-white border-gray-700' : 'bg-white text-gray-900 border-gray-300'}`}
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your@gmail.com"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md ${theme === 'dark' ? 'bg-gray-800 text-white border-gray-700' : 'bg-white text-gray-900 border-gray-300'}`}
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message here..."
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className={`w-full px-4 py-2 border rounded-md ${theme === 'dark' ? 'bg-gray-800 text-white border-gray-700' : 'bg-white text-gray-900 border-gray-300'}`}
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              className={`w-full px-4 py-2 text-white font-bold rounded-md ${theme === 'dark' ? 'bg-blue-600 hover:bg-blue-500' : 'bg-blue-500 hover:bg-blue-400'}`}
            >
              Submit
            </button>
          </form>

          {/* Form Status */}
          {formStatus && (
            <div className="mt-6 text-center">
              <p className={`text-lg ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
                {formStatus}
              </p>
            </div>
          )}
        </div>

        {/* Contact Information */}
        <div className="text-center mt-12">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className={`text-base leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            If you have any questions or need immediate assistance, feel free to reach out to us directly.
          </p>
          <div className="mt-4">
            <p className="text-lg font-medium">Email:</p>
            <p className={`text-base ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>support@clickmart.com</p>
          </div>
          <div className="mt-4">
            <p className="text-lg font-medium">Phone:</p>
            <p className={`text-base ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>+1 234 567 890</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactUs;
