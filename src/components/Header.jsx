import React from 'react';
import { RiAccountCircleLine } from 'react-icons/ri'; 
import { FaShoppingBag } from 'react-icons/fa';
import { BsSearchHeart } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { ImFacebook2 } from "react-icons/im";
import { IoLogoYoutube } from "react-icons/io";
import { FaXTwitter, FaPinterest, FaTiktok, FaLinkedinIn } from "react-icons/fa6";

const Header = () => {
  return (
    <>
      {/* Fixed Header Container */}
      <div className="bg-white text-black w-full fixed top-0 left-0 z-50 shadow-md">
        
        {/* Social Media Links Bar */}
        <div className="flex flex-wrap justify-center sm:justify-end space-x-3 sm:space-x-4 px-4 sm:px-6 py-2 border-b border-gray-300">
          <GrInstagram className="cursor-pointer hover:text-gray-500" size={18} />
          <ImFacebook2 className="cursor-pointer hover:text-gray-500" size={18} />
          <IoLogoYoutube className="cursor-pointer hover:text-gray-500" size={18} />
          <FaXTwitter className="cursor-pointer hover:text-gray-500" size={18} />
          <FaPinterest className="cursor-pointer hover:text-gray-500" size={18} />
          <FaTiktok className="cursor-pointer hover:text-gray-500" size={18} />
          <FaLinkedinIn className="cursor-pointer hover:text-gray-500" size={18} />
        </div>

        {/* Main Header */}
        <header className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 py-3">
          {/* Search Bar */}
          <form className="flex items-center border border-black rounded-lg px-4 py-1 relative w-full max-w-[250px] sm:max-w-[300px] md:max-w-[400px]">
            <BsSearchHeart className="text-gray-500 absolute left-2" size={20} />
            <input
              type="text"
              placeholder="Search items"
              className="bg-white text-sm text-black focus:outline-none placeholder-gray-500 pl-8 w-full"
            />
          </form>

          {/* Brand Name */}
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold font-playfair uppercase tracking-wide text-center mt-2 sm:mt-0">
            Static
          </h1>

          {/* Icons */}
          <nav className="mt-2 sm:mt-0">
            <ul className="flex space-x-3 sm:space-x-6">
              <li className="cursor-pointer hover:text-gray-500">
                <RiAccountCircleLine size={24} />
              </li>
              <li className="cursor-pointer hover:text-gray-500">
                <FaShoppingBag size={20} />
              </li>
            </ul>
          </nav>
        </header>
      </div>

      {/* Push Content Down to Prevent Overlap */}
      <div className="h-[88px]"></div> 
    </>
  );
};

export default Header;
