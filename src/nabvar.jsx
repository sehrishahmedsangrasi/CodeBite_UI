import React, { useState } from "react";
import { Menu } from "lucide-react"; // Or use a plain div with ≡ if you don’t want this

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 py-2 bg-white shadow-md h-[3.5rem] relative">
      {/* left portion of nav */}
      <div className="flex w-[50%]">
        {/* Logo */}
        <div className="pr-9 pt-[0.4rem]">
          <img src="./wrapp.png" alt="loading" className="h-[1.2rem]" />
        </div>

        {/* Navigation Links - only for desktop */}
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium text-[0.95rem]">
          <a href="#" className="hover:text-purple-600">Products</a>
          <a href="#" className="hover:text-purple-600">Solutions</a>
          <a href="#" className="hover:text-purple-600">Pricing</a>
          <a href="#" className="hover:text-purple-600">Resources</a>
        </div>
      </div>

      {/* Buttons - only for desktop */}
      <div className="hidden md:flex space-x-4">
        <button className="bg-white text-[0.95rem] text-purple-700 hover:border hover:border-purple-500 px-6 py-1 rounded-full hover:bg-purple-50 transition">
          Log In
        </button>
        <button className="bg-purple-700 text-[0.95rem] text-white px-4 py-1.5 rounded-full hover:bg-purple-800 transition">
          Start for free
        </button>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          <Menu className="text-purple-700 w-6 h-6" />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden flex flex-col items-start px-7 py-4 space-y-4 text-gray-700 text-[0.95rem] z-15">
          <a href="#" className="hover:text-purple-600">Products</a>
          <a href="#" className="hover:text-purple-600">Solutions</a>
          <a href="#" className="hover:text-purple-600">Pricing</a>
          <a href="#" className="hover:text-purple-600">Resources</a>
          <hr className="w-full border-t border-gray-200" />
          <div>
          <button className="bg-white mr-2 text-purple-700 hover:border hover:border-purple-500 px-6 py-1 rounded-full hover:bg-purple-50 transition w-[8rem] text-left">
            Log In
          </button>
          <button className="bg-purple-700 text-white px-4 py-1.5 rounded-full hover:bg-purple-800 transition w-[8rem] text-left">
            Start for free
          </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
