// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { BiSolidLeaf } from "react-icons/bi";
// import { MdShoppingCart } from "react-icons/md";
// import { PiShoppingCart } from "react-icons/pi";

// import { GrFavorite } from "react-icons/gr";
// import { RiLoginBoxLine } from "react-icons/ri";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <nav className="w-full h-16 bg-white flex justify-between items-center px-6 shadow-md">
//       {/* Logo Section */}
//       <div className="text-2xl font-bold text-black">
//         <Link className="flex items-center gap-1" to="/">
//           GreenCorner
//           <BiSolidLeaf className="text-green-500" />
//         </Link>
//       </div>

//       {/* Desktop Navigation Links */}
//       <div className="hidden md:flex gap-6">
//         <Link to="/home" className="text-black hover:text-green-500 transition">
//           Home
//         </Link>
//         <Link to="/plants" className="text-black hover:text-green-500 transition">
//           Plants
//         </Link>
//         <Link to="/accessories" className="text-black hover:text-green-500 transition">
//           Post & Accessories
//         </Link>
//         <Link to="/seeds" className="text-black hover:text-green-500 transition">
//           Seeds
//         </Link>
//       </div>

//       {/* Search Bar */}
//       <div className="flex items-center gap-2 bg-white border border-gray-300 rounded-3xl px-3 py-1 text-black w-full md:w-96">
//         <input
//           type="search"
//           placeholder="Search..."
//           className="outline-none text-sm w-full bg-transparent"
//         />
//         <button className="w-5 h-5">
//           <img
//             src="https://cdn-icons-png.flaticon.com/512/54/54481.png"
//             alt="Search Icon"
//             className="w-full h-full"
//           />
//         </button>
//       </div>

//       {/* Login & Icons Section */}
//       <div className="hidden md:flex items-center gap-4">
//         <Link to="/favorites" className="text-black hover:text-green-500 transition">
//           <GrFavorite />
//         </Link>
//         <Link to="/cart" className="text-black hover:text-green-500 transition">
//         <PiShoppingCart />

//         </Link>
//         <Link to="/login" className="text-black hover:text-green-500 transition">
//           <RiLoginBoxLine />
//         </Link>
//       </div>

//       {/* Mobile Menu Button */}
//       <div className="md:hidden flex items-center">
//         <button
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           className="text-xl focus:outline-none text-black"
//         >
//           &#9776;
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="absolute top-16 left-0 w-full  flex flex-col items-center  md:hidden">
//           <Link
//             to="/home"
//             className="py-2 hover:bg-green-600 w-full text-center"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             Home
//           </Link>
//           <Link
//             to="/plants"
//             className="py-2 hover:bg-green-600 w-full text-center"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             Plants
//           </Link>
//           <Link
//             to="/accessories"
//             className="py-2 hover:bg-green-600 w-full text-center"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             Post & Accessories
//           </Link>
//           <Link
//             to="/seeds"
//             className="py-2 hover:bg-green-600 w-full text-center"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             Seeds
//           </Link>
         
//         <Link to="/favorites" className="text-black hover:text-green-500 transition">
//         Favorites
//         </Link>
//         <Link to="/cart" className="text-black hover:text-green-500 transition">
//          Cart
//         </Link>
//         <Link to="/login" className="text-black hover:text-green-500 transition">
//         Login
//         </Link>
     
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;



// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { BiSolidLeaf } from "react-icons/bi";
// import { MdShoppingCart } from "react-icons/md";
// import { GrFavorite } from "react-icons/gr";
// import { RiLoginBoxLine } from "react-icons/ri";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <nav className="w-full h-16 bg-white flex justify-between items-center px-4 md:px-6 shadow-md">
//       {/* Logo Section */}
//       <div className="text-xl md:text-2xl font-bold text-black">
//         <Link className="flex items-center gap-1" to="/">
//           GreenCorner
//           <BiSolidLeaf className="text-green-500" />
//         </Link>
//       </div>

//       {/* Desktop Navigation Links */}
//       <div className="hidden md:flex gap-4 lg:gap-6">
//         <Link to="/home" className="text-black hover:text-green-500 transition">
//           Home
//         </Link>
//         <Link to="/plants" className="text-black hover:text-green-500 transition">
//           Plants
//         </Link>
//         <Link to="/accessories" className="text-black hover:text-green-500 transition">
//           Post & Accessories
//         </Link>
//         <Link to="/seeds" className="text-black hover:text-green-500 transition">
//           Seeds
//         </Link>
//       </div>

//       {/* Search Bar */}
//       <div className="flex items-center gap-2 bg-white border border-gray-300 rounded-3xl px-3 py-1 text-black w-full sm:w-72 md:w-96 lg:w-[28rem]">
//         <input
//           type="search"
//           placeholder="Search..."
//           className="outline-none text-sm w-full bg-transparent"
//         />
//         <button className="w-5 h-5">
//           <img
//             src="https://cdn-icons-png.flaticon.com/512/54/54481.png"
//             alt="Search Icon"
//             className="w-full h-full"
//           />
//         </button>
//       </div>

//       {/* Login & Icons Section */}
//       <div className="hidden md:flex items-center gap-3 lg:gap-4">
//         <Link to="/favorites" className="text-black hover:text-green-500 transition">
//           <GrFavorite />
//         </Link>
//         <Link to="/cart" className="text-black hover:text-green-500 transition">
//           <MdShoppingCart />
//         </Link>
//         <Link to="/login" className="text-black hover:text-green-500 transition">
//           <RiLoginBoxLine />
//         </Link>
//       </div>

//       {/* Mobile Menu Button */}
//       <div className="md:hidden flex items-center">
//         <button
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           className="text-xl focus:outline-none text-black"
//         >
//           &#9776;
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="absolute top-16 left-0 w-full bg-green-700 flex flex-col items-center text-white md:hidden">
//           <Link
//             to="/home"
//             className="py-2 hover:bg-green-600 w-full text-center"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             Home
//           </Link>
//           <Link
//             to="/plants"
//             className="py-2 hover:bg-green-600 w-full text-center"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             Plants
//           </Link>
//           <Link
//             to="/accessories"
//             className="py-2 hover:bg-green-600 w-full text-center"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             Post & Accessories
//           </Link>
//           <Link
//             to="/seeds"
//             className="py-2 hover:bg-green-600 w-full text-center"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             Seeds
//           </Link>
//           <Link
//             to="/favorites"
//             className="py-2 hover:bg-green-600 w-full text-center"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             Favorites
//           </Link>
//           <Link
//             to="/cart"
//             className="py-2 hover:bg-green-600 w-full text-center"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             Cart
//           </Link>
//           <Link
//             to="/login"
//             className="py-2 hover:bg-green-600 w-full text-center"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             Login
//           </Link>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { BiSolidLeaf } from "react-icons/bi";
// import { MdShoppingCart } from "react-icons/md";
// import { GrFavorite } from "react-icons/gr";
// import { RiLoginBoxLine } from "react-icons/ri";
// import { MdOutlinePersonOutline } from "react-icons/md";
// import { GrCart } from "react-icons/gr";



// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <nav className="w-full h-16 bg-white flex justify-between items-center px-4 md:px-6 shadow-md  sticky">
//       {/* Logo Section */}
//       <div className="text-xl md:text-2xl font-bold text-black">
//         <Link className="flex items-center gap-1" to="/">
//           GreenCorner
//           <BiSolidLeaf className="text-green-500" />
//         </Link>
//       </div>

//       {/* Desktop Navigation Links */}
//       <div className="hidden md:flex gap-4 lg:gap-6">
//         <Link to="/home" className="text-black hover:text-gray-500 transition">
//           Home
//         </Link>
//         <Link to="/plants" className="text-black hover:text-gray-500 transition">
//           Plants
//         </Link>
//         <Link to="/accessories" className="text-black hover:text-gray-500 transition">
//           Post & Accessories
//         </Link>
//         <Link to="/seeds" className="text-black hover:text-gray-500 transition">
//           Seeds
//         </Link>
//       </div>

//       {/* Search Bar */}
//       <div className="flex items-center gap-2 bg-white border border-gray-300 rounded-3xl px-3 py-1 text-black w-full sm:w-72 md:w-96 lg:w-[28rem]">
//         <input
//           type="search"
//           placeholder="Search..."
//           className="outline-none text-sm w-full bg-transparent"
//         />
//         <button className="w-5 h-5">
//           <img
//             src="https://cdn-icons-png.flaticon.com/512/54/54481.png"
//             alt="Search Icon"
//             className="w-full h-full"
//           />
//         </button>
//       </div>

//       {/* Login & Icons Section */}
//       <div className="hidden md:flex items-center gap-3 lg:gap-4">
//         <Link to="/favorites" className="text-black text-2xl hover:text-gray-600 transition">
//           <GrFavorite />
//         </Link>
//         <Link to="/cart" className="text-black text-2xl hover:text-gray-600 transition">
//         <GrCart />
//       </Link>
//         <Link to="/login" className="text-black hover:text-gay-500 text-3xl transition">
//         <MdOutlinePersonOutline />

//         </Link>
//       </div>

//       {/* Mobile Menu Button */}
//       <div className="md:hidden flex items-center">
//         <button
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           className="text-xl focus:outline-none text-black"
//         >
//           &#9776;
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="absolute top-16 left-0 w-full bg-green-700 flex flex-col items-center text-white md:hidden">
//           <Link
//             to="/home"
//             className="py-2 hover:bg-green-600 w-full text-center"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             Home
//           </Link>
//           <Link
//             to="/plants"
//             className="py-2 hover:bg-green-600 w-full text-center"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             Plants
//           </Link>
//           <Link
//             to="/accessories"
//             className="py-2 hover:bg-green-600 w-full text-center"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             Post & Accessories
//           </Link>
//           <Link
//             to="/seeds"
//             className="py-2 hover:bg-green-600 w-full text-center"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             Seeds
//           </Link>
//           <Link
//             to="/favorites"
//             className="py-2 hover:bg-green-600 w-full text-center"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             Favorites
//           </Link>
//           <Link
//             to="/cart"
//             className="py-2 hover:bg-green-600 w-full text-center"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             Cart
//           </Link>
//           <Link
//             to="/login"
//             className="py-2 hover:bg-green-600 w-full text-center"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             Login
//           </Link>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { BiSolidLeaf } from "react-icons/bi";
// import { GrFavorite } from "react-icons/gr";
// import { MdOutlinePersonOutline } from "react-icons/md";
// import { GrCart } from "react-icons/gr";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <nav className="w-full bg-white shadow-md sticky top-0 z-50">
//       <div className="container mx-auto flex items-center justify-between px-4 py-3 md:py-4 lg:px-8">
//         {/* Logo Section */}
//         <div className="text-xl md:text-2xl font-bold text-black">
//           <Link to="/" className="flex items-center gap-1">
//             GreenCorner
//             <BiSolidLeaf className="text-green-500" />
//           </Link>
//         </div>

       

//         {/* Desktop Navigation Links */}
//         <div className="hidden md:flex items-center gap-6">
//           <Link to="/home" className="text-gray-700 hover:text-green-500 transition">
//             Home
//           </Link>
//           <Link to="/plants" className="text-gray-700 hover:text-green-500 transition">
//             Plants
//           </Link>
//           <Link to="/accessories" className="text-gray-700 hover:text-green-500 transition">
//             Post & Accessories
//           </Link>
//           <Link to="/seeds" className="text-gray-700 hover:text-green-500 transition">
//             Seeds
//           </Link>
//         </div>
//          {/* Search Bar */}
//          <div className="hidden md:flex items-center gap-2 bg-gray-100 border border-gray-300 rounded-full px-3 py-1 w-full max-w-md lg:max-w-lg">
//           <input
//             type="search"
//             placeholder="Search..."
//             className="flex-grow outline-none bg-transparent text-sm text-gray-800"
//           />
//           <button className="w-5 h-5">
//             <img
//               src="https://cdn-icons-png.flaticon.com/512/54/54481.png"
//               alt="Search Icon"
//               className="w-full h-full"
//             />
//           </button>
//         </div>

//         {/* Login & Icons Section */}
//         <div className="hidden md:flex items-center gap-4">
//           <Link
//             to="/favorites"
//             className="text-gray-700 text-2xl hover:text-green-500 transition"
//           >
//             <GrFavorite />
//           </Link>
//           <Link
//             to="/cart"
//             className="text-gray-700 text-2xl hover:text-green-500 transition"
//           >
//             <GrCart />
//           </Link>
//           <Link
//             to="/login"
//             className="text-gray-700 text-3xl hover:text-green-500 transition"
//           >
//             <MdOutlinePersonOutline />
//           </Link>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-xl text-gray-800 focus:outline-none"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           aria-label="Toggle menu"
//         >
//           {isMenuOpen ? "✕" : "☰"}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`${
//           isMenuOpen ? "max-h-screen" : "max-h-0"
//         } overflow-hidden transition-[max-height] duration-300 ease-in-out bg-green-700 md:hidden`}
//       >
//         <div className="flex flex-col items-center text-white">
//           <Link
//             to="/home"
//             className="py-3 w-full text-center hover:bg-green-600"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             Home
//           </Link>
//           <Link
//             to="/plants"
//             className="py-3 w-full text-center hover:bg-green-600"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             Plants
//           </Link>
//           <Link
//             to="/accessories"
//             className="py-3 w-full text-center hover:bg-green-600"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             Post & Accessories
//           </Link>
//           <Link
//             to="/seeds"
//             className="py-3 w-full text-center hover:bg-green-600"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             Seeds
//           </Link>
//           <Link
//             to="/favorites"
//             className="py-3 w-full text-center hover:bg-green-600"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             Favorites
//           </Link>
//           <Link
//             to="/cart"
//             className="py-3 w-full text-center hover:bg-green-600"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             Cart
//           </Link>
//           <Link
//             to="/login"
//             className="py-3 w-full text-center hover:bg-green-600"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             Login
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import { BiSolidLeaf } from "react-icons/bi";
// import { GrFavorite, GrCart } from "react-icons/gr";
// import { MdOutlinePersonOutline } from "react-icons/md";
// import { gsap } from "gsap";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const mobileMenuRef = useRef(null);

//   useEffect(() => {
//     if (isMenuOpen) {
//       gsap.to(mobileMenuRef.current, {
//         maxHeight: "500px",
//         duration: 0.5,
//         ease: "power3.out",
//       });
//     } else {
//       gsap.to(mobileMenuRef.current, {
//         maxHeight: "0px",
//         duration: 0.5,
//         ease: "power3.in",
//       });
//     }
//   }, [isMenuOpen]);

//   return (
//     <nav className="w-full bg-white shadow-md sticky top-0 z-50">
//       <div className="container mx-auto flex items-center justify-between px-4 py-3 md:py-4 lg:px-8">
//         {/* Logo Section */}
//         <div className="text-xl md:text-2xl font-bold text-black">
//           <Link to="/" className="flex items-center gap-1">
//             GreenCorner
//             <BiSolidLeaf className="text-green-500" />
//           </Link>
//         </div>

//         {/* Desktop Navigation Links */}
//         <div className="hidden md:flex items-center gap-6">
//           <Link to="/home" className="text-gray-700 hover:text-green-500 transition duration-300">
//             Home
//           </Link>
//           <Link to="/plants" className="text-gray-700 hover:text-green-500 transition duration-300">
//             Plants
//           </Link>
//           <Link to="/accessories" className="text-gray-700 hover:text-green-500 transition duration-300">
//             Post & Accessories
//           </Link>
//           <Link to="/seeds" className="text-gray-700 hover:text-green-500 transition duration-300">
//             Seeds
//           </Link>
//         </div>

//         {/* Search Bar */}
//         <div className="hidden md:flex items-center gap-2 bg-gray-100 border border-gray-300 rounded-full px-3 py-1 w-full max-w-md lg:max-w-lg">
//           <input
//             type="search"
//             placeholder="Search..."
//             className="flex-grow outline-none bg-transparent text-sm text-gray-800"
//           />
//           <button className="w-5 h-5">
//             <img
//               src="https://cdn-icons-png.flaticon.com/512/54/54481.png"
//               alt="Search Icon"
//               className="w-full h-full"
//             />
//           </button>
//         </div>

//         {/* Login & Icons Section */}
//         <div className="hidden md:flex items-center gap-4">
//           <Link
//             to="/favorites"
//             className="text-gray-700 text-2xl hover:text-green-500 transition duration-300"
//           >
//             <GrFavorite />
//           </Link>
//           <Link
//             to="/cart"
//             className="text-gray-700 text-2xl hover:text-green-500 transition duration-300"
//           >
//             <GrCart />
//           </Link>
//           <Link
//             to="/login"
//             className="text-gray-700 text-3xl hover:text-green-500 transition duration-300"
//           >
//             <MdOutlinePersonOutline />
//           </Link>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-xl text-gray-800 focus:outline-none"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           aria-label="Toggle menu"
//         >
//           {isMenuOpen ? "✕" : "☰"}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         ref={mobileMenuRef}
//         className="overflow-hidden bg-green-700 md:hidden"
//         style={{ maxHeight: "0px" }}
//       >
//         <div className="flex flex-col items-center text-white">
//           <Link
//             to="/home"
//             className="py-3 w-full text-center hover:bg-green-600 transition duration-300"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             Home
//           </Link>
//           <Link
//             to="/plants"
//             className="py-3 w-full text-center hover:bg-green-600 transition duration-300"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             Plants
//           </Link>
//           <Link
//             to="/accessories"
//             className="py-3 w-full text-center hover:bg-green-600 transition duration-300"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             Post & Accessories
//           </Link>
//           <Link
//             to="/seeds"
//             className="py-3 w-full text-center hover:bg-green-600 transition duration-300"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             Seeds
//           </Link>
//           <Link
//             to="/favorites"
//             className="py-3 w-full text-center hover:bg-green-600 transition duration-300"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             Favorites
//           </Link>
//           <Link
//             to="/cart"
//             className="py-3 w-full text-center hover:bg-green-600 transition duration-300"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             Cart
//           </Link>
//           <Link
//             to="/login"
//             className="py-3 w-full text-center hover:bg-green-600 transition duration-300"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             Login
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { BiSolidLeaf } from "react-icons/bi";
import { GrFavorite, GrCart } from "react-icons/gr";
import { MdOutlinePersonOutline } from "react-icons/md";
import { gsap } from "gsap";

const Navbar = () => {
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

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:py-4 lg:px-8">
        {/* Logo Section */}
        <div className="text-xl md:text-2xl font-bold text-black">
          <Link to="/" className="flex items-center gap-1">
            GreenCorner
            <BiSolidLeaf className="text-green-500" />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/home" className="text-gray-700 hover:text-green-500 transition duration-300">
            Home
          </Link>
          <Link to="/plants" className="text-gray-700 hover:text-green-500 transition duration-300">
            Plants
          </Link>
          <Link to="/accessories" className="text-gray-700 hover:text-green-500 transition duration-300">
            Post & Accessories
          </Link>
          <Link to="/seeds" className="text-gray-700 hover:text-green-500 transition duration-300">
            Seeds
          </Link>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center gap-2 bg-gray-100 border border-gray-300 rounded-full px-3 py-1 w-full max-w-md lg:max-w-lg">
          <input
            type="search"
            placeholder="Search..."
            className="flex-grow outline-none bg-transparent text-sm text-gray-800"
          />
          <button className="w-5 h-5">
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
            to="/favorites"
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
          <Link
            to="/login"
            className="text-gray-700 text-3xl hover:text-green-500 transition duration-300"
          >
            <MdOutlinePersonOutline />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-xl text-gray-800 focus:outline-none"
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
          <div className="flex items-center gap-2 bg-gray-100 border border-gray-300 rounded-full px-3 py-1 w-full max-w-md my-3">
            <input
              type="search"
              placeholder="Search..."
              className="flex-grow outline-none bg-transparent text-sm text-gray-800"
            />
            <button className="w-5 h-5">
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
            to="/accessories"
            className="py-3 w-full text-center hover:bg-green-600 transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Post & Accessories
          </Link>
          <Link
            to="/seeds"
            className="py-3 w-full text-center hover:bg-green-600 transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Seeds
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
