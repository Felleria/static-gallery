import React from 'react';
import { RiAccountCircle2Line , FaShoppingBag } from 'react-icons/fa';


const Header = () => {
  return (
    <header className="bg-white text-black fixed top-0 left-0 w-full z-50 shadow-md flex items-center justify-between px-6 py-4">
      {}
      <form className="flex items-center border border-black rounded-lg px-4 py-1">
        <input
          type="text"
          placeholder="Search items"
          className="bg-white text-sm text-black focus:outline-none placeholder-gray-500"
        />
      </form>


      {}
      <h1 className="text-2xl font-bold font-playfair uppercase tracking-wide text-center">
        Static
      </h1>



      {}
      <nav className="flex space-x-6">
        <ul className="flex space-x-6">
          <li className="cursor-pointer hover:text-gray-500">
          <RiAccountCircle2Line />
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
