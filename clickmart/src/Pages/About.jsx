import React, { useContext } from "react";
// import { ThemeContext } from "../context/ThemeContext"; // Assuming a ThemeContext is in use
import aboutImage from "../assets/bg-1.png"; // Replace with an appropriate image
import teamImage from "../assets/dil.png"

const About = () => {
  const theme  = "dark" 

  return (
    <div className={`min-h-screen py-12 px-6 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}>
      <div className="max-w-screen-xl mx-auto">

        {/* Company Overview Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About ClickMart</h1>
          <p className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            Welcome to ClickMart, your one-stop online shop for the latest and greatest products at unbeatable prices.
            We pride ourselves on delivering exceptional customer service and an unparalleled shopping experience.
          </p>
        </div>

        {/* Image and Intro Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <img src={aboutImage} alt="About Us" className="w-full rounded-lg shadow-lg" />
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
            <p className={`text-base leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Founded in 2023, ClickMart was born out of a desire to create a platform where people can shop effortlessly,
              whether for fashion, electronics, or home essentials. Our journey began with a small team and a big dream.
              Today, we are proud to serve thousands of customers across the globe.
            </p>
          </div>
        </div>

        {/* Mission and Vision Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            At ClickMart, our mission is to revolutionize online shopping by offering an extensive collection of products,
            all at competitive prices, without compromising on quality. We aim to build a trustworthy community of buyers
            and sellers through transparency, innovation, and passion.
          </p>
        </div>

        {/* Team Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-semibold mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Example team member */}
            <div className="flex flex-col items-center">
              <img src={teamImage} alt="Team Member" className="rounded-full h-32 w-32 mb-4" />
              <h3 className="text-xl font-medium">Md Dilnawaz Alam</h3>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>CEO & Founder</p>
            </div>
            {/* Repeat similar blocks for other team members */}
          </div>
        </div>

        {/* Closing Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-semibold mb-4">Why Choose Us?</h2>
          <p className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            Whether you're shopping for yourself or someone else, ClickMart guarantees a hassle-free shopping experience with fast shipping, easy returns, and top-notch customer service. 
            Shop with confidence and enjoy exclusive deals at ClickMart.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
