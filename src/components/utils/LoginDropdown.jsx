
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdOutlinePersonOutline } from "react-icons/md";
import axios from "axios";
import { Link } from "react-router-dom";

const LoginDropdown = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [userData, setUserData] = useState(null); // Set initial state to null
  const timeoutId = useRef(null);

  console.log("UserData:", userData); // Debugging output

  const handleMouseEnter = () => {
    if (timeoutId.current) clearTimeout(timeoutId.current);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    timeoutId.current = setTimeout(() => {
      setIsHovered(false);
    }, 300);
  };

  const handleLogout = async () => {
    try {
      // Fetch the user data first
      const response = await axios.get("http://localhost:5000/loginUser");
      if (response.data.length > 0) {
        const userId = response.data[0].id; // Assuming the user object has an 'id'
  
        // Delete the user by ID
        await axios.delete(`http://localhost:5000/loginUser/${userId}`);
        setUserData(null); // Clear user data
        console.log("User logged out successfully");
      } else {
        console.log("No user found to log out");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };
  

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/loginUser");
        console.log("Fetched User Data:", response.data); // Debugging output
        
        if (response.data.length > 0) {
          setUserData(response.data[0].username); // Fix: Use first object from the array
        } else {
          setUserData(null);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();

    return () => {
      if (timeoutId.current) clearTimeout(timeoutId.current);
    };
  }, []);

  const renderDropdownContent = () => {
    if (userData) {
      return (
        <>
          <div className="p-4 text-gray-700 font-semibold text-sm border-b bg-gray-100">
            {userData}
          </div>
          <button
            className="w-full text-left px-4 py-3 text-red-500 text-sm hover:bg-gray-100 transition duration-200"
            onClick={handleLogout}
          >
            Logout
          </button>
        </>
      );
    } else {
      return (
        <>
          <Link to="/login">
            <button className="w-full text-left px-4 py-3 text-black text-sm hover:bg-gray-100 transition duration-200">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="w-full text-left px-4 py-3 text-black text-sm hover:bg-gray-100 transition duration-200">
              Signup
            </button>
          </Link>
        </>
      );
    }
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Login Icon */}
      <MdOutlinePersonOutline
        className="text-3xl cursor-pointer text-gray-600 hover:text-blue-500 transition duration-300"
        aria-label="User menu"
      />

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 z-50"
            role="menu"
          >
            {renderDropdownContent()}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LoginDropdown;
