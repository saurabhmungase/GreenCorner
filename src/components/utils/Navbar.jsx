import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiSolidLeaf } from "react-icons/bi";
import { GrFavorite, GrCart } from "react-icons/gr";
import { gsap } from "gsap";
import LoginDropdown from "./LoginDropDown";
import { debounce } from "lodash";

const Navbar = ({searchHandler}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    if (isMenuOpen) {
      gsap.to(mobileMenuRef.current, {
        maxHeight: "500px",
        duration: 0.5,
        ease: "power3.out",
      });
    } else {
      gsap.to(mobileMenuRef.current, {
        maxHeight: "0px",
        duration: 0.5,
        ease: "power3.in",
      });
    }
  }, [isMenuOpen]);

  const debouncedSearch = debounce((value) => {
    searchHandler(value);
  }, 500); // Executes after 500ms of no typing

  

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:py-4 lg:px-8">
        {/* Logo Section */}
        <div className="text-xl md:text-2xl font-bold text-black hover:text-green-500 transition duration-300">
          <Link to="/" className="flex items-center gap-1">
            GreenCorner
            <BiSolidLeaf className="text-green-500 hover:text-green-600 transition duration-300" />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              `hover:text-green-500 transition duration-300 ${
                isActive ? "text-green-500 underline" : "text-black"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/plants"
            className={({ isActive }) =>
              `hover:text-green-500 transition duration-300 ${
                isActive ? "text-green-500 underline" : "text-black"
              }`
            }
          >
            Plants
          </NavLink>
          <NavLink
            to="/plantcare"
            className={({ isActive }) =>
              `hover:text-green-500 transition duration-300 ${
                isActive ? "text-green-500 underline" : "text-black"
              }`
            }
          >
           Plant Care
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `hover:text-green-500 transition duration-300 ${
                isActive ? "text-green-500 underline" : "text-black"
              }`
            }
          >
            About
          </NavLink>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center gap-2 bg-gray-100 border border-gray-300 rounded-full px-3 py-1 w-full max-w-md lg:max-w-lg hover:border-green-500 transition duration-300">
          <input
            type="search"
            placeholder="Search..."
            onChange={(e) => debouncedSearch(e.target.value)}
            className="flex-grow outline-none bg-transparent text-sm text-gray-800"
          />
          <button className="w-5 h-5 hover:opacity-80 transition duration-300">
            <img
              src="https://cdn-icons-png.flaticon.com/512/54/54481.png"
              alt="Search Icon"
              className="w-full h-full"
            />
          </button>
        </div>

        {/* Login & Icons Section */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/wishlist"
            className="text-gray-700 text-2xl hover:text-green-500 transition duration-300"
          >
            <GrFavorite />
          </Link>
          <Link
            to="/cart"
            className="text-gray-700 text-2xl hover:text-green-500 transition duration-300"
          >
            <GrCart />
          </Link>
         <div className="text-gray-700 text-3xl hover:text-green-500 transition duration-300">
            {/* <MdOutlinePersonOutline /> */}
            <LoginDropdown></LoginDropdown>
            </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-xl text-gray-800 focus:outline-none hover:text-green-500 transition duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className="overflow-hidden bg-green-700 md:hidden"
        style={{ maxHeight: "0px" }}
      >
        <div className="flex flex-col items-center text-white">
          {/* Search Bar for Mobile Menu */}
          <div className="flex items-center gap-2 bg-gray-100 border border-gray-300 rounded-full px-3 py-1 w-full max-w-md my-3 hover:border-green-500 transition duration-300">
            <input
              type="search"
              placeholder="Search..."
              onChange={(e) => debouncedSearch(e.target.value)}
              className="flex-grow outline-none bg-transparent text-sm text-gray-800"
            />
            <button className="w-5 h-5 hover:opacity-80 transition duration-300">
              <img
                src="https://cdn-icons-png.flaticon.com/512/54/54481.png"
                alt="Search Icon"
                className="w-full h-full"
              />
            </button>
          </div>

          <Link
            to="/home"
            className="py-3 w-full text-center hover:bg-green-600 transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/plants"
            className="py-3 w-full text-center hover:bg-green-600 transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Plants
          </Link>
          <Link
            to="/plantcare"
            className="py-3 w-full text-center hover:bg-green-600 transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Plant Care
          </Link>
          <Link
            to="/about"
            className="py-3 w-full text-center hover:bg-green-600 transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            About 
          </Link>
          <Link
            to="/favorites"
            className="py-3 w-full text-center hover:bg-green-600 transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Favorites
          </Link>
          <Link
            to="/cart"
            className="py-3 w-full text-center hover:bg-green-600 transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Cart
          </Link>
          <Link
            to="/login"
            className="py-3 w-full text-center hover:bg-green-600 transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;