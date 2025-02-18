import React from 'react';
import { RiAccountCircleLine } from 'react-icons/ri'; 
import { FaShoppingBag } from 'react-icons/fa';
import { BsSearchHeart } from "react-icons/bs";

const Header = () => {
  return (
    <header className="bg-white text-black fixed top-0 left-0 w-full z-50 shadow-md flex items-center justify-between px-6 py-4">
      {/* Search Bar */}
      <form className="flex items-center border border-black rounded-lg px-4 py-1 relative">
        <BsSearchHeart className="text-gray-500 absolute left-2" size={20} />
        <input
          type="text"
          placeholder="Search items"
          className="bg-white text-sm text-black focus:outline-none placeholder-gray-500 pl-8"
        />
      </form>

      {/* Brand Name */}
      <h1 className="text-2xl font-bold font-playfair uppercase tracking-wide text-center">
        Static
      </h1>

      {/* Icons */}
      <nav className="flex space-x-6">
        <ul className="flex space-x-6">
          <li className="cursor-pointer hover:text-gray-500">
            <RiAccountCircleLine size={24} />
          </li>
          <li className="cursor-pointer hover:text-gray-500">
            <FaShoppingBag size={20} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
