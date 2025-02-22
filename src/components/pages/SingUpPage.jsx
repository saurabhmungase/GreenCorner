import React, { useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Logo from "../utils/Logo";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { ImSad } from "react-icons/im";

const SignUpPage = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    contact: "",
    
    userId: uuidv4(),
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  // Validate form inputs
  const validateInputs = () => {
    const newErrors = {};

    if (!formData.username) newErrors.username = "Username is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.contact) newErrors.contact = "Contact number is required.";
    if (!formData.password) newErrors.password = "Password is required.";
    if (!formData.confirmPassword)
      newErrors.confirmPassword = "Please confirm your password.";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Form submission handler
  const handleCreate = async (e) => {
    e.preventDefault();

    if (!validateInputs()) {
      return;
    }

    const { confirmPassword, ...userData } = formData; // Exclude confirmPassword from payload

    try {
      const response = await axios.post("http://116.75.62.44:8000/adduser", userData);
      console.log("User created successfully:", response.data);
      alert("User created successfully!");
    } catch (error) {
      console.error("Error creating user:", error.response?.data || error.message);
      alert(
        `Failed to create user. ${
          error.response?.data?.message || "Please try again later."
        }`
      );
    }
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-gray-100">
      {/* Left Section */}
      <section className="hidden lg:flex w-1/2 h-full justify-center items-center bg-white shadow-md">
        <img
          src="src\assets\plant-8360681_1920.png"
          className="h-[90%] rounded-3xl"
          alt="Indoor Plants"
        />
      </section>

      {/* Form Section */}
      <div className="w-full lg:w-1/2 h-full flex justify-center items-center bg-white">
        <form
          onSubmit={handleCreate}
          className="flex flex-col w-[80%] max-w-md h-auto p-8"
        >
          <h1 className="text-green-600">
            <Logo />
          </h1>
          <p className="text-gray-500 text-center mb-6">
            Sign up to create your account and explore!
          </p>

          {/* Username Field */}
          <div className="mb-4">
            <input
              value={formData.username}
              name="username"
              onChange={handleChange}
              className="p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Username"
              type="text"
              aria-label="Username"
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">{errors.username}</p>
            )}
          </div>

          {/* Password and Confirm Password Fields */}
          {["password", "confirmPassword"].map((field, index) => (
            <div className="relative w-full mb-4" key={field}>
              <input
                name={field}
                value={formData[field]}
                onChange={handleChange}
                type={showPassword ? "text" : "password"}
                className="p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder={index === 0 ? "Password" : "Confirm Password"}
                aria-label={index === 0 ? "Password" : "Confirm Password"}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-2 top-2/4 transform -translate-y-2/4 text-gray-500 hover:text-gray-700"
                aria-label="Toggle Password Visibility"
              >
                {showPassword ? (
                  <AiFillEye size={20} />
                ) : (
                  <AiFillEyeInvisible size={20} />
                )}
              </button>
              {errors[field] && (
                <p className="text-red-500 text-sm mt-1">{errors[field]}</p>
              )}
            </div>
          ))}

          {/* Email Field */}
          <div className="mb-4">
            <input
              value={formData.email}
              name="email"
              onChange={handleChange}
              className="p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Email"
              type="email"
              aria-label="Email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Contact Number Field */}
          <div className="mb-4">
            <input
              value={formData.contact}
              name="contact"
              onChange={handleChange}
              className="p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Contact Number"
              type="text"
              aria-label="Contact Number"
            />
            {errors.contact && (
              <p className="text-red-500 text-sm mt-1">{errors.contact}</p>
            )}
          </div>
          <div>
            <label htmlFor="">Login as admin</label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md w-full mb-4"
          >
            Sign Up
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

          {/* Login Link */}
          <p className="text-center text-sm text-gray-600">
            Already have an account?&nbsp;
            <a href="/login" className="text-green-500 hover:underline">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};


export default SignUpPage;
