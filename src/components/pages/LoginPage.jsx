


import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiSolidLeaf } from "react-icons/bi";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import axios from "axios";

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [userdata, setUserdata] = useState([]); // Store user data from API
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // Fetch user data on component mount
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://116.75.62.44:8000/auth");
        setUserdata(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
        alert("Unable to load user data. Please try again later.");
      }
    };

    fetchUserData();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    // Find the user in fetched data
    const user = userdata.find(
      (data) => data.email === formData.email && data.password === formData.password
    );

    if (user) {
      alert("Login Successful");

      // Extract only required details
      const { username, email, contact, userId } = user;

      try {
        // Store the user details in local storage
        localStorage.setItem("user", JSON.stringify({ username, email, contact , userId}));

        // Send user data to local backend
        await axios.post("http://localhost:5000/loginUser", { username, email, contact });

        navigate("/"); // Redirect to home page
      } catch (error) {
        console.error("Error posting user data:", error);
        alert("Error storing user data. Please try again.");
      }
    } else {
      alert("Invalid Credentials");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-gray-100">
      {/* Left Section */}
      <section className="hidden lg:flex w-1/2 h-full justify-center items-center bg-white shadow-md">
        <img
          src="src/assets/plant-8360681_1920.png"
          className="h-[90%] rounded-3xl"
          alt="Indoor Plants"
        />
      </section>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 h-full flex justify-center items-center bg-white">
        <form
          onSubmit={handleLogin}
          className="flex flex-col w-[80%] max-w-md h-auto p-8"
        >
          <h1 className="text-3xl font-bold text-green-600 mb-4 text-center flex justify-center items-center">
            GreenCorner <BiSolidLeaf />
          </h1>

          <p className="text-gray-500 text-center mb-6">
            Welcome back! Please enter your details to login.
          </p>

          {/* Email Input */}
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            className="p-2 w-full mb-5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Email"
            required
          />

          {/* Password Input with Show/Hide Password */}
          <div className="relative w-full mb-4">
            <input
              name="password"
              value={formData.password}
              onChange={handleChange}
              type={showPassword ? "text" : "password"}
              className="p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Password"
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-2 top-2/4 transform -translate-y-2/4 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <AiFillEye size={20}/> : <AiFillEyeInvisible size={20} /> }
            </button>
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end mb-4">
            <a href="#" className="text-sm text-green-600 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md w-full mb-6"
          >
            Login
          </button>

          {/* Google Sign-In */}
          <button
            type="button"
            className="flex items-center justify-center w-full py-2 px-4 border rounded-md mb-4 hover:bg-gray-100"
          >
            <img
              src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
              alt="Google Icon"
              className="w-6 h-6 mr-2"
            />
            Sign in with Google
          </button>

          {/* Sign Up Redirect */}
          <p className="text-center text-sm text-gray-600">
            Don’t have an account?&nbsp;
            <Link to="/signup" className="text-green-600 hover:underline">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
