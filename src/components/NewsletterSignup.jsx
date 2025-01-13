import React from 'react';

const NewsletterSignup = () => {
  return (
    <section className="bg-white text-black py-12 px-6 md:px-20">
      <div className="max-w-5xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-6">
          Stay in the Loop
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 text-lg md:text-xl mb-8">
          Be the first to know about new arrivals, exclusive offers, and the latest trends.
        </p>

        {/* Form */}
        <form className="flex flex-col md:flex-row justify-center items-center">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full md:w-2/3 p-4 mb-4 md:mb-0 md:mr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-gray-800"
          />
          <button
            type="submit"
            className="bg-black text-white font-medium py-4 px-8 rounded-lg hover:bg-gray-800 transition-all"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSignup;
