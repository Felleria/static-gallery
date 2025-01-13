import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage :"url('/images/hero.jpg')"  }}>
      {/* Overlay for luxury feel */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white space-y-6">
        <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-wide">
          Discover Your Style
        </h2>
        <div className="flex space-x-4">
          <button className="px-8 py-3 bg-white text-black text-sm font-medium uppercase rounded-lg hover:bg-gray-200 transition duration-300">
            For Her
          </button>
          <button className="px-8 py-3 bg-white text-black text-sm font-medium uppercase rounded-lg hover:bg-gray-200 transition duration-300">
            For Him
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
