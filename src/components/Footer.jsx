import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Company Info */}
        <div className="text-center md:text-left">
          <p className="text-lg font-semibold">Static</p>
          <p className="text-sm">© 2025 Static. All rights reserved.</p>
        </div>

        {/* Quick Links */}
        <div className="flex space-x-8">
          <a href="#" className="text-sm hover:text-gray-400">Privacy Policy</a>
          <a href="#" className="text-sm hover:text-gray-400">Terms & Conditions</a>
          <a href="#" className="text-sm hover:text-gray-400">Returns & Exchanges</a>
        </div>

        {/* Social Links */}
        <div className="flex space-x-6">
          <a href="#" className="text-xl hover:text-gray-400">Facebook</a>
          <a href="#" className="text-xl hover:text-gray-400">Instagram</a>
          <a href="#" className="text-xl hover:text-gray-400">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
