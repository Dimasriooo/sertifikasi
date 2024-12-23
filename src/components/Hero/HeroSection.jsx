import React from 'react';
import './Hero.css';

// src/components/Hero/Hero.jsx
import heroImage from '/laragon/www/Glamorist-project/src/assets/technova.jpg'; // Pastikan gambar sudah ada di folder assets

const Hero = () => {
  return (
    <section id="home" className="pt-20 min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to TechNova</h1>
            <p className="text-xl mb-8">Your technology partner for the future</p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition-colors">
              Get Started
            </button>
          </div>
          
          {/* Image */}
          <div className="order-first lg:order-last">
            <img 
              src={heroImage} 
              alt="Technology illustration" 
              className="rounded-lg shadow-xl w-full max-w-lg mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
