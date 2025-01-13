import React from 'react';
import { FaHome, FaSearch, FaShoppingBag } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-white text-black flex items-center justify-between px-6 py-4 shadow-md">
      {/* Logo */}
      <h1 className="text-2xl font-bold uppercase tracking-wide">Static</h1>

      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-6">
        <ul className="flex space-x-6">
          <li className="cursor-pointer hover:text-gray-500">
            <FaHome size={20} />
          </li>
          <li className="cursor-pointer hover:text-gray-500">
            <FaShoppingBag size={20} />
          </li>
          <li className="cursor-pointer hover:text-gray-500 uppercase text-sm">
            About Us
          </li>
          <li className="cursor-pointer hover:text-gray-500 uppercase text-sm">
            Contact Us
          </li>
        </ul>
      </nav>

      {/* Search Bar */}
      <form className="flex items-center border border-black rounded-lg px-4 py-1">
        <input
          type="text"
          placeholder="Search items"
          className="bg-white text-sm text-black focus:outline-none placeholder-gray-500"
        />
        <button type="submit" className="ml-2 text-black hover:text-gray-500">
          <FaSearch />
        </button>
      </form>
    </header>
  );
};

export default Header;
