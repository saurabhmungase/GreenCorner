// import { useState } from "react";
// import { FaArrowRight } from "react-icons/fa";

// export default function CheckoutForm() {
//   const [promo, setPromo] = useState("");
//   const [address, setAddress] = useState({
//     firstname: "",
//     lastname: "",
//     phone: "",
//     email: "",
//     country: "",
//     address: "",
//     apartment: "",
//     pincode: "",
//   });
//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setAddress({
//       ...address,
//       [name]: value,
//     });
//     // Clear errors when user starts typing
//     if (errors[name]) {
//       setErrors({
//         ...errors,
//         [name]: "",
//       });
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!address.firstname) newErrors.firstname = "First Name is required";
//     if (!address.lastname) newErrors.lastname = "Last Name is required";
//     if (!address.phone) newErrors.phone = "Phone is required";
//     if (!address.email) newErrors.email = "Email is required";
//     if (!address.country) newErrors.country = "Country is required";
//     if (!address.address) newErrors.address = "Address is required";
//     if (!address.pincode) newErrors.pincode = "Pincode is required";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0; // Return true if no errors
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       // Proceed with form submission (e.g., API call)
//       console.log("Form submitted successfully:", address);
//     } else {
//       console.log("Form has errors");
//     }
//   };

//   return (
//     <div className="container mx-auto p-6 grid md:grid-cols-2 gap-10 max-w-6xl">
//       {/* Left Section: Contact & Shipping */}
//       <div className="bg-white p-8 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact & Shipping</h2>
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <input
//                 type="text"
//                 name="firstname"
//                 placeholder="First Name"
//                 value={address.firstname}
//                 onChange={handleChange}
//                 className={`w-full p-3 border ${
//                   errors.firstname ? "border-red-500" : "border-gray-300"
//                 } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
//               />
//               {errors.firstname && (
//                 <p className="text-red-500 text-sm mt-1">{errors.firstname}</p>
//               )}
//             </div>
//             <div>
//               <input
//                 type="text"
//                 name="lastname"
//                 placeholder="Last Name"
//                 value={address.lastname}
//                 onChange={handleChange}
//                 className={`w-full p-3 border ${
//                   errors.lastname ? "border-red-500" : "border-gray-300"
//                 } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
//               />
//               {errors.lastname && (
//                 <p className="text-red-500 text-sm mt-1">{errors.lastname}</p>
//               )}
//             </div>
//           </div>
//           <div>
//             <input
//               type="text"
//               name="phone"
//               placeholder="Phone"
//               value={address.phone}
//               onChange={handleChange}
//               className={`w-full p-3 border ${
//                 errors.phone ? "border-red-500" : "border-gray-300"
//               } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
//             />
//             {errors.phone && (
//               <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
//             )}
//           </div>
//           <div>
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter your email"
//               value={address.email}
//               onChange={handleChange}
//               className={`w-full p-3 border ${
//                 errors.email ? "border-red-500" : "border-gray-300"
//               } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
//             />
//             {errors.email && (
//               <p className="text-red-500 text-sm mt-1">{errors.email}</p>
//             )}
//           </div>

//           <div>
//             <h2 className="text-xl font-semibold mb-4 text-gray-800">Shipping Address</h2>
//             <div className="space-y-4">
//               <div>
//                 <input
//                   type="text"
//                   name="country"
//                   placeholder="Country / Region"
//                   value={address.country}
//                   onChange={handleChange}
//                   className={`w-full p-3 border ${
//                     errors.country ? "border-red-500" : "border-gray-300"
//                   } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
//                 />
//                 {errors.country && (
//                   <p className="text-red-500 text-sm mt-1">{errors.country}</p>
//                 )}
//               </div>
//               <div>
//                 <input
//                   type="text"
//                   name="address"
//                   placeholder="Address"
//                   value={address.address}
//                   onChange={handleChange}
//                   className={`w-full p-3 border ${
//                     errors.address ? "border-red-500" : "border-gray-300"
//                   } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
//                 />
//                 {errors.address && (
//                   <p className="text-red-500 text-sm mt-1">{errors.address}</p>
//                 )}
//               </div>
//               <div>
//                 <input
//                   type="text"
//                   name="apartment"
//                   placeholder="Apartment, suite, etc"
//                   value={address.apartment}
//                   onChange={handleChange}
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
//               <div>
//                 <input
//                   type="text"
//                   name="pincode"
//                   placeholder="Pincode"
//                   value={address.pincode}
//                   onChange={handleChange}
//                   className={`w-full p-3 border ${
//                     errors.pincode ? "border-red-500" : "border-gray-300"
//                   } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
//                 />
//                 {errors.pincode && (
//                   <p className="text-red-500 text-sm mt-1">{errors.pincode}</p>
//                 )}
//               </div>

//             </div>
//           </div>

//         </form>
//       </div>

//       {/* Right Section: Order Summary */}
//       <div className="bg-white p-8 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold mb-6 text-gray-800">Order Summary</h2>
//         <div className="space-y-4">
//           <div className="border-b pb-4">
//             <div className="flex justify-between mb-2">
//               <span className="text-gray-700">Anthurium Flower</span>
//               <span className="text-gray-900 font-medium">&#8377; 1500</span>
//             </div>
//             <div className="flex justify-between">
//               <span className="text-gray-700">Lily Plant</span>
//               <span className="text-gray-900 font-medium">&#8377; 1500</span>
//             </div>
//           </div>

//           <div className="border-b py-4">
//             <div className="flex justify-between mb-2">
//               <span className="text-gray-700">Subtotal</span>
//               <span className="text-gray-900 font-medium">&#8377; 3000</span>
//             </div>
//             <div className="flex justify-between">
//               <span className="text-gray-700">Shipping</span>
//               <span className="text-gray-900 font-medium">&#8377; 50</span>
//             </div>
//           </div>

//           <div className="flex justify-between text-lg font-semibold py-4">
//             <span className="text-gray-800">Total</span>
//             <span className="text-blue-600">&#8377; 3050</span>
//           </div>

//           <div className="flex items-center justify-between border border-gray-300 p-2 rounded-lg mb-4">
//             <input
//               type="text"
//               placeholder="Have a Promo Code?"
//               value={promo}
//               onChange={(e) => setPromo(e.target.value)}
//               className="flex-1 p-2 focus:outline-none"
//             />
//             <button className="text-xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
//               +
//             </button>
//             <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 text-lg hover:bg-blue-700 transition-colors"
//           >
//             Continue <FaArrowRight />
//           </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useState } from "react";
// import { FaArrowRight } from "react-icons/fa";
// import { useLocation } from "react-router-dom";

// export default function CheckoutForm() {
//   const location = useLocation();
//   const cartItems = location.state.cartItems;
//   const total = location.state.total;

//   const [promo, setPromo] = useState("");
//   const [address, setAddress] = useState({
//     firstname: "",
//     lastname: "",
//     phone: "",
//     email: "",
//     country: "",
//     address: "",
//     apartment: "",
//     pincode: "",
//   });
//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setAddress((prevAddress) => ({
//       ...prevAddress,
//       [name]: value,
//     }));
//     if (errors[name]) {
//       setErrors((prevErrors) => ({
//         ...prevErrors,
//         [name]: "",
//       }));
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     ["firstname", "lastname", "phone", "email", "country", "address", "pincode"].forEach((field) => {
//       if (!address[field]) newErrors[field] = `${field.replace(/^[a-z]/, (c) => c.toUpperCase())} is required`;
//     });
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       console.log("Form submitted successfully:", address);
//     } else {
//       console.log("Form has errors");
//     }
//   };

//   return (
//     <div className="container mx-auto p-6 grid md:grid-cols-2 gap-10 max-w-6xl">
//       <div className="bg-white p-8 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact & Shipping</h2>
//         <form onSubmit={handleSubmit} className="space-y-6">
//           {["firstname", "lastname", "phone", "email", "country", "address", "pincode"].map((field) => (
//             <div key={field}>
//               <input
//                 type={field === "email" ? "email" : "text"}
//                 name={field}
//                 placeholder={field.replace(/^[a-z]/, (c) => c.toUpperCase())}
//                 value={address[field]}
//                 onChange={handleChange}
//                 className={`w-full p-3 border ${errors[field] ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
//               />
//               {errors[field] && <p className="text-red-500 text-sm mt-1">{errors[field]}</p>}
//             </div>
//           ))}
//           <input
//             type="text"
//             name="apartment"
//             placeholder="Apartment, suite, etc"
//             value={address.apartment}
//             onChange={handleChange}
//             className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </form>
//       </div>

//       <div className="bg-white p-8 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold mb-6 text-gray-800">Order Summary</h2>
//         <div className="space-y-4">
//           {cartItems.map((item, index) => (
//             <div className="flex justify-between" key={index}>
//               <span className="text-gray-700">{item.name}</span>
//               <span className="text-gray-900 font-medium">{item.price}</span>
//             </div>
//           ))}
//           <div className="border-b py-4">
//             <div className="flex justify-between">
//               <span className="text-gray-700">Subtotal</span>
//               <span className="text-gray-900 font-medium">{total-50}</span>
//             </div>
//             <div className="flex justify-between">
//               <span className="text-gray-700">Shipping</span>
//               <span className="text-gray-900 font-medium">₹50</span>
//             </div>
//             <div className="flex justify-between">
//               <span className="text-gray-700">Discount</span>
//               <span className="text-red-400 font-medium">-₹50</span>
//             </div>
//           </div>
//           <div className="flex justify-between text-lg font-semibold py-4">
//             <span className="text-gray-800">Total</span>
//             <span className="text-blue-600">{total}</span>
//           </div>
//           <div className="flex items-center justify-between border border-gray-300 p-2 rounded-lg mb-4">
//             <input
//               type="text"
//               placeholder="Have a Promo Code?"
//               value={promo}
//               onChange={(e) => setPromo(e.target.value)}
//               className="flex-1 p-2 focus:outline-none"
//             />
//             <button className="text-xl font-bold text-blue-600 hover:text-blue-700 transition-colors">+</button>
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 text-lg hover:bg-blue-700 transition-colors"
//           >
//             Continue <FaArrowRight />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// import axios from "axios";
// import { useEffect, useState } from "react";
// import { FaArrowRight } from "react-icons/fa";
// import { useLocation } from "react-router-dom";

// export default function CheckoutForm() {
//   const location = useLocation();
//   const cartItems = location.state?.cartItems || [];
//   const total = location.state?.total || 0;
//   console.log(cartItems);

//   const [promo, setPromo] = useState("");
//   const [address, setAddress] = useState({
//     firstname: "",
//     lastname: "",
//     phone: "",
//     email: "",
//     country: "",
//     address: "",
//     apartment: "",
//     pincode: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [order, setOrder] = useState([]);
  
//   useEffect(() => {
//     setOrder(cartItems)
//     axios.get("http://localhost:5000/loginUser").then((res) => {
//       console.log(res.data);
//       setOrder(res.data);
//     });
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setAddress((prevAddress) => ({
//       ...prevAddress,
//       [name]: value,
//     }));
//     if (errors[name]) {
//       setErrors((prevErrors) => ({
//         ...prevErrors,
//         [name]: "",
//       }));
//     }
//     setOrder(address);
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     [
//       "firstname",
//       "lastname",
//       "phone",
//       "email",
//       "country",
//       "address",
//       "pincode",
//     ].forEach((field) => {
//       if (!address[field])
//         newErrors[field] = `${field.replace(/^[a-z]/, (c) =>
//           c.toUpperCase()
//         )} is required`;
//     });
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       console.log("Form submitted successfully:", address);
//     } else {
//       console.log("Form has errors");
//     }
//   };
//   console.log(order);
  

//   return (
//     <div className="container mx-auto p-6 grid md:grid-cols-2 gap-12 max-w-5xl">
//       <div className="bg-white p-8 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold mb-6 text-gray-800">
//           Contact & Shipping
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           {Object.keys(address).map((field) => (
//             <div key={field} className="w-full">
//               <input
//                 type={field === "email" ? "email" : "text"}
//                 name={field}
//                 placeholder={field.replace(/^[a-z]/, (c) => c.toUpperCase())}
//                 value={address[field]}
//                 onChange={handleChange}
//                 className={`w-full p-3 border ${
//                   errors[field] ? "border-red-500" : "border-gray-300"
//                 } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
//               />
//               {errors[field] && (
//                 <p className="text-red-500 text-sm mt-1">{errors[field]}</p>
//               )}
//             </div>
//           ))}
//         </form>
//       </div>

//       <div className="bg-white p-8 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold mb-6 text-gray-800">Order Summary</h2>
//         <div className="space-y-4">
//           {cartItems.map((item, index) => (
//             <div className="flex justify-between border-b pb-2" key={index}>
//               <span className="text-gray-700">
//                 {item.name} ({item.quantity})
//               </span>
//               <span className="text-gray-900 font-medium">
//                 ₹{item.price * item.quantity}
//               </span>
//             </div>
//           ))}
//           <div className=" pt-4">
//             <div className="flex justify-between">
//               <span className="text-gray-700">Subtotal</span>
//               <span className="text-gray-900 font-medium">₹{total}</span>
//             </div>
//             <div className="flex justify-between">
//               <span className="text-gray-700">Shipping</span>
//               <span className="text-gray-900 font-medium">₹50</span>
//             </div>
//             <div className="flex justify-between">
//               <span className="text-gray-700">Discount</span>
//               <span className="text-red-500 font-medium">-₹50</span>
//             </div>
//           </div>
//           <div className="flex justify-between text-lg font-semibold py-4 border-t">
//             <span className="text-gray-800">Total</span>
//             <span className="text-blue-600">₹{total}</span>
//           </div>
//           <div className="flex items-center justify-between border border-gray-300 p-2 rounded-lg mb-4">
//             <input
//               type="text"
//               placeholder="Have a Promo Code?"
//               value={promo}
//               onChange={(e) => setPromo(e.target.value)}
//               className="flex-1 p-2 focus:outline-none"
//             />
//             <button className="text-xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
//               +
//             </button>
//           </div>
//           <button
//             type="submit"
//             onClick={handleSubmit}
//             className="w-full bg-blue-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 text-lg hover:bg-blue-700 transition-all"
//           >
//             Continue <FaArrowRight />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


import axios from "axios";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useLocation } from "react-router-dom";

export default function CheckoutForm() {
  const location = useLocation();
  const cartItems = location.state?.cartItems || [];
  const total = location.state?.total || 0;

  const [promo, setPromo] = useState("");
  const [address, setAddress] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    country: "",
    address: "",
    apartment: "",
    pincode: "",
  });
  const [errors, setErrors] = useState({});
  const [order, setOrder] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch user data on component mount
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/loginUser");
        setOrder(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));

    // Clear error for the field if it exists
    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  // Validate form fields
  const validateForm = () => {
    const newErrors = {};
    const requiredFields = [
      "firstname",
      "lastname",
      "phone",
      "email",
      "country",
      "address",
      "pincode",
    ];

    requiredFields.forEach((field) => {
      if (!address[field]) {
        newErrors[field] = `${field.replace(/^[a-z]/, (c) =>
          c.toUpperCase()
        )} is required`;
      }
    });

    // Validate email format
    if (address.email && !/\S+@\S+\.\S+/.test(address.email)) {
      newErrors.email = "Invalid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (validateForm()) {
      try {
        // Simulate API call for order submission
        const response = await axios.post("http://localhost:5000/checkout", {
          address,
          cartItems,
          total,
          promo,
        });
        console.log("Order submitted successfully:", response.data);
        // Redirect or show success message
      } catch (error) {
        console.error("Error submitting order:", error);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      console.log("Form has errors");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto p-6 grid md:grid-cols-2 gap-12 max-w-5xl">
      {/* Contact & Shipping Section */}
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Contact & Shipping
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {Object.keys(address).map((field) => (
            <div key={field} className="w-full">
              <input
                type={field === "email" ? "email" : "text"}
                name={field}
                placeholder={field.replace(/^[a-z]/, (c) => c.toUpperCase())}
                value={address[field]}
                onChange={handleChange}
                className={`w-full p-3 border ${
                  errors[field] ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
                disabled={isSubmitting}
              />
              {errors[field] && (
                <p className="text-red-500 text-sm mt-1">{errors[field]}</p>
              )}
            </div>
          ))}
        </form>
      </div>

      {/* Order Summary Section */}
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Order Summary</h2>
        <div className="space-y-4">
          {cartItems.map((item, index) => (
            <div className="flex justify-between border-b pb-2" key={index}>
              <span className="text-gray-700">
                {item.name} ({item.quantity})
              </span>
              <span className="text-gray-900 font-medium">
                ₹{item.price * item.quantity}
              </span>
            </div>
          ))}
          <div className="pt-4">
            <div className="flex justify-between">
              <span className="text-gray-700">Subtotal</span>
              <span className="text-gray-900 font-medium">₹{total}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">Shipping</span>
              <span className="text-gray-900 font-medium">₹50</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">Discount</span>
              <span className="text-red-500 font-medium">-₹50</span>
            </div>
          </div>
          <div className="flex justify-between text-lg font-semibold py-4 border-t">
            <span className="text-gray-800">Total</span>
            <span className="text-blue-600">₹{total}</span>
          </div>
          <div className="flex items-center justify-between border border-gray-300 p-2 rounded-lg mb-4">
            <input
              type="text"
              placeholder="Have a Promo Code?"
              value={promo}
              onChange={(e) => setPromo(e.target.value)}
              className="flex-1 p-2 focus:outline-none"
              disabled={isSubmitting}
            />
            <button
              type="button"
              className="text-xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
              disabled={isSubmitting}
            >
              +
            </button>
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full bg-blue-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 text-lg hover:bg-blue-700 transition-all"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Processing..." : "Continue"} <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}