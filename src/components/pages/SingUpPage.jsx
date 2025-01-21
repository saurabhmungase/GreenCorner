// import React, { useState } from "react";
// import axios from "axios";
// import { v4 as uuidv4 } from "uuid";

// const SingUpPage = () => {
//   let [state, setUser] = useState({
//     username: "",
//     password: "",
//     email: "",
//     contact: "",
//     userId: uuidv4(),
//   });
//   let handleUsername = (e) => {
//     // console.log(e.target.value);
//     let { name, value } = e.target;
//     setUser({ ...state, [name]: value });
//   };
//   let handlePassword = (e) => {
//     let { name, value } = e.target;
//     setUser({ ...state, [name]: value });
//   };
//   let handleEmail = (e) => {
//     let { name, value } = e.target;
//     setUser({ ...state, [name]: value });
//   };
//   let handleContact = (e) => {
//     let { name, value } = e.target;
//     setUser({ ...state, [name]: value });
//     console.log(state);
//   };
//   let handleCreate = (e) => {
//     e.preventDefault();
//     axios.post("http://116.75.62.44:8000/adduser", state);
//   };

//   return (
//     <>
    
// <div className="flex justify-center items-center w-screen h-screen bg-gray-100">
// <section className="hidden lg:flex w-1/2 h-full justify-center items-center bg-white shadow-md">
//   <img
//     src="src/assets/indoor-plants-studio.png"
//     className="h-[90%] rounded-3xl"
//     alt="Indoor Plants"
//   />
// </section>

// <div className="w-full lg:w-1/2 h-full flex justify-center items-center bg-white">
//   <form

//     className="flex flex-col w-[80%] max-w-md h-auto p-8 bg-gray-50 shadow-lg rounded-lg"
//   >
//     <h1 className="text-3xl font-bold text-green-600 mb-4 text-center">GreenCorner</h1>
//     <p className="text-gray-500 text-center mb-6">Welcome back! Please enter your details to login.</p>
//     <input
//           value={state.username}
//           name="username"
//           onChange={handleUsername}
//           className="p-2 w-full mb-5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
//           placeholder="Username"
//           type="text"
//         />
//         <input
//           value={state.password}
//           name="password"
//           onChange={handlePassword}
//           className="p-2 w-full mb-5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
//           placeholder="Password"
//           type="password"
//         />
//         <input
//           value={state.email}
//           name="email"
//           onChange={handleEmail}
//           className="p-2 w-full mb-5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
//           placeholder="Email"
//           type="email"
//         />
//         <input
//           value={state.contact}
//           name="contact"
//           onChange={handleContact}
//           className="p-2 w-full mb-5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
//           placeholder="Contact"
//           type="text"
//         />
  
//     <button
//       type="submit"
//       className="bg-[#007dfa] hover:bg-[#005dfa] text-white py-2 px-4 rounded-md w-full mb-4"
//     >
//       Sign Up
//     </button>

//     <button
//       type="button"
//       className="flex items-center justify-center w-full py-2 px-4 border rounded-md mb-4 hover:bg-gray-100"
//     >
//       <img
//         src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
//         alt="Google Icon"
//         className="w-6 h-6 mr-2"
//       />
//       Sign in with Google
//     </button>

//   </form>
// </div>
// </div>
// </>
//   );
// };

// export default SingUpPage;


// import React, { useState } from "react";
// import axios from "axios";
// import { v4 as uuidv4 } from "uuid";
// import Logo from "../utils/Logo";
// import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";



// const SignUpPage = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//     email: "",
//     contact: "",
//     userId: uuidv4(),
//   });
//   const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleCreate = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://116.75.62.44:8000/adduser", formData);
//       console.log("User created successfully:", response.data);
//       alert("User created successfully!");
//     } catch (error) {
//       console.error("Error creating user:", error);
//       alert("Failed to create user. Please try again.");
//     }
//   };
//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div className="flex justify-center items-center w-screen h-screen bg-gray-100">
//       <section className="hidden lg:flex w-1/2 h-full justify-center items-center bg-white shadow-md">
//         <img
//           src="src/assets/indoor-plants-studio.png"
//           className="h-[90%] rounded-3xl"
//           alt="Indoor Plants"
//         />
//       </section>

//       <div className="w-full lg:w-1/2 h-full flex justify-center items-center bg-white">
//         <form
//           onSubmit={handleCreate}
//           className="flex flex-col w-[80%] max-w-md h-auto p-8 "
//         >
//          <h1 className="text-green-600"> <Logo></Logo> </h1>
//           <p className="text-gray-500 text-center mb-6">Sign up to create your account and explore!</p>

//           <input
//             value={formData.username}
//             name="username"
//             onChange={handleChange}
//             className="p-2 w-full mb-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
//             placeholder="Username"
//             type="text"
//           />
//           <div className="relative w-full mb-4">
//                       <input
//                         name="password"
//                         value={formData.password}
//                         onChange={handleChange}
//                         type={showPassword ? "text" : "password"} // Toggle type based on state
//                         className="p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
//                         placeholder="Password"
//                         required
//                       />
//                       <button
//                         type="button"
//                         onClick={togglePasswordVisibility}
//                         className="absolute right-2 top-2/4 transform -translate-y-2/4 text-gray-500 hover:text-gray-700"
//                       >
//                         {showPassword ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
//                       </button>
//                     </div>
//             <div className="relative w-full mb-4">
//                         <input
//                           name="password"
//                           value={formData.password}
                        
//                           type={showPassword ? "text" : "password"} // Toggle type based on state
//                           className="p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
//                           placeholder="Confirm Password"
//                           required
//                         />
//                         <button
//                           type="button"
//                           onClick={togglePasswordVisibility}
//                           className="absolute right-2 top-2/4 transform -translate-y-2/4 text-gray-500 hover:text-gray-700"
//                         >
//                           {showPassword ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
//                         </button>
//                       </div>
          
//           <input
//             value={formData.email}
//             name="email"
//             onChange={handleChange}
//             className="p-2 w-full mb-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
//             placeholder="Email"
//             type="email"
//           />
//           <input
//             value={formData.contact}
//             name="contact"
//             onChange={handleChange}
//             className="p-2 w-full mb-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
//             placeholder="Contact Number"
//             type="text"
//           />

//           <button
//             type="submit"
//             className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md w-full mb-4"
//           >
//             Sign Up
//           </button>

//           <button
//             type="button"
//             className="flex items-center justify-center w-full py-2 px-4 border rounded-md mb-4 hover:bg-gray-100"
//           >
//             <img
//               src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
//               alt="Google Icon"
//               className="w-6 h-6 mr-2"
//             />
//             Sign in with Google
//           </button>

//           <p className="text-center text-sm text-gray-600">
//             Already have an account?&nbsp;
//             <a href="/login" className="text-green-500 hover:underline">
//               Login
//             </a>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUpPage;

// import React, { useState } from "react";
// import axios from "axios";
// import { v4 as uuidv4 } from "uuid";
// import Logo from "../utils/Logo";
// import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

// const SignUpPage = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//     email: "",
//     contact: "",
//     userId: uuidv4(),
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [confirmPassword, setConfirmPassword] = useState({confirmPassword: ""});

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };
//   // const handleConfirmPassword = (e) => {
    
//   // }

//   // Toggle password visibility
//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   // Form submission handler
//   const handleCreate = async (e) => {
//     e.preventDefault();

//     // Validate form inputs
//     if (
//       !formData.username ||
//       !formData.password ||
//       !formData.confirmPassword ||
//       !formData.email ||
//       !formData.contact
//     ) {
//       alert("Please fill in all fields.");
//       return;
//     }

//     // Check if passwords match
//     if (formData.password !== formData.confirmPassword) {
//       alert("Passwords do not match.");
//       return;
//     }

//     try {
//       const response = await axios.post("http://116.75.62.44:8000/adduser", formData);
//       console.log("User created successfully:", response.data);
//       alert("User created successfully!");
//     } catch (error) {
//       console.error("Error creating user:", error.response?.data || error.message);
//       alert(
//         `Failed to create user. ${
//           error.response?.data?.message || "Please try again later."
//         }`
//       );
//     }
//   };

//   return (
//     <div className="flex justify-center items-center w-screen h-screen bg-gray-100">
//       <section className="hidden lg:flex w-1/2 h-full justify-center items-center bg-white shadow-md">
//         <img
//           src="src/assets/indoor-plants-studio.png"
//           className="h-[90%] rounded-3xl"
//           alt="Indoor Plants"
//         />
//       </section>

//       <div className="w-full lg:w-1/2 h-full flex justify-center items-center bg-white">
//         <form
//           onSubmit={handleCreate}
//           className="flex flex-col w-[80%] max-w-md h-auto p-8 "
//         >
//           <h1 className="text-green-600">
//             <Logo />
//           </h1>
//           <p className="text-gray-500 text-center mb-6">
//             Sign up to create your account and explore!
//           </p>

//           <input
//             value={formData.username}
//             name="username"
//             onChange={handleChange}
//             className="p-2 w-full mb-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
//             placeholder="Username"
//             type="text"
//           />

//           {/* Password and Confirm Password Fields */}
//           {["password", "confirmPassword"].map((field, index) => (
//             <div className="relative w-full mb-4" key={field}>
//               <input
//                 name={field}
//                 value={formData[field]}
//                 onChange={handleChange}
//                 type={showPassword ? "text" : "password"}
//                 className="p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
//                 placeholder={index === 0 ? "Password" : "Confirm Password"}
//                 required
//               />
//               <button
//                 type="button"
//                 onClick={togglePasswordVisibility}
//                 className="absolute right-2 top-2/4 transform -translate-y-2/4 text-gray-500 hover:text-gray-700"
//                 aria-label={`Toggle ${index === 0 ? "Password" : "Confirm Password"} Visibility`}
//               >
//                 {showPassword ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
//               </button>
//             </div>
//           ))}

//           <input
//             value={formData.email}
//             name="email"
//             onChange={handleChange}
//             className="p-2 w-full mb-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
//             placeholder="Email"
//             type="email"
//           />
//           <input
//             value={formData.contact}
//             name="contact"
//             onChange={handleChange}
//             className="p-2 w-full mb-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
//             placeholder="Contact Number"
//             type="text"
//           />

//           <button
//             type="submit"
//             className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md w-full mb-4"
//           >
//             Sign Up
//           </button>

//           <button
//             type="button"
//             className="flex items-center justify-center w-full py-2 px-4 border rounded-md mb-4 hover:bg-gray-100"
//           >
//             <img
//               src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
//               alt="Google Icon"
//               className="w-6 h-6 mr-2"
//             />
//             Sign in with Google
//           </button>

//           <p className="text-center text-sm text-gray-600">
//             Already have an account?&nbsp;
//             <a href="/login" className="text-green-500 hover:underline">
//               Login
//             </a>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUpPage;




import React, { useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Logo from "../utils/Logo";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const SignUpPage = () => {
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
          src="src/assets/indoor-plants-studio.png"
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
