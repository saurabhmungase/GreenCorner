// import React from 'react'

// const Cart = () => {
//   return (
//     <div>
//       <div>
//         {/* cart item */}
//         <section>
//           <div>
//             <img src="" alt="" />
//             <div>
//               <h3>name</h3>
//               <p>price</p>
//               <div>
//               <p>quantity</p>

//               </div>
//             </div>
//           </div>
//         </section>
//         {/* bill */}
//         <section>
//           <div>
//             <h1>Order Summary</h1>
//             <hr />
//             <section>
//               <div><p>Item</p> <p>price</p></div>
//               <div><p>Delivery</p> <p>Delivery charges</p></div>
//               <div><p>Total</p> <p>price</p></div>
//               <div><p>Promotion Applied</p> <p>price</p></div>
//               <div><h2>Order Total</h2 > <h2>price</h2></div>
//             </section>
//           </div>
//         </section>
//       </div>
//     </div>
//   )
// }

// export default Cart


// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

// const Cart = () => {
//   ley [cartitem ,setcaritem] = useState()

//   useEffect(() => {
//     axios.get('http://localhost:5000/cart')
//   })
//   return (
//     <div className="min-h-screen bg-gray-50 py-8">
//       <div className="container mx-auto px-4">
//         <h1 className="text-3xl font-bold text-green-900 mb-8">Your Cart</h1>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Cart Items Section */}
//           <section className="lg:col-span-2 bg-white rounded-lg shadow-lg p-6">
//             <div className="flex flex-col space-y-6">
//               {/* Cart Item */}
//               <div className="flex items-center space-x-6">
//                 <img
//                   src="https://via.placeholder.com/150" // Replace with actual image URL
//                   alt="Product"
//                   className="w-24 h-24 object-cover rounded-lg"
//                 />
//                 <div className="flex-1">
//                   <h3 className="text-xl font-semibold text-green-900">Product Name</h3>
//                   <p className="text-gray-600">₹500.00</p>
//                   <div className="flex items-center mt-2">
//                     <button className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors">
//                       -
//                     </button>
//                     <p className="mx-4 text-lg font-semibold">2</p>
//                     <button className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors">
//                       +
//                     </button>
//                   </div>
//                 </div>
//                 <button className="text-gray-500 hover:text-red-500 transition-colors">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-6 w-6"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
//                     />
//                   </svg>
//                 </button>
//               </div>

//               {/* Add more cart items here */}
//             </div>
//           </section>

//           {/* Order Summary Section */}
//           <section className="bg-white rounded-lg shadow-lg p-6">
//             <h1 className="text-2xl font-bold text-green-900 mb-6">Order Summary</h1>
//             <hr className="mb-6" />

//             <div className="space-y-4">
//               <div className="flex justify-between">
//                 <p className="text-gray-600">Item</p>
//                 <p className="text-gray-800 font-semibold">₹500.00</p>
//               </div>
//               <div className="flex justify-between">
//                 <p className="text-gray-600">Delivery</p>
//                 <p className="text-gray-800 font-semibold">₹50.00</p>
//               </div>
//               <div className="flex justify-between">
//                 <p className="text-gray-600">Total</p>
//                 <p className="text-gray-800 font-semibold">₹550.00</p>
//               </div>
//               <div className="flex justify-between">
//                 <p className="text-gray-600">Promotion Applied</p>
//                 <p className="text-green-600 font-semibold">-₹50.00</p>
//               </div>
//               <hr className="my-4" />
//               <div className="flex justify-between">
//                 <h2 className="text-xl font-bold text-green-900">Order Total</h2>
//                 <h2 className="text-xl font-bold text-green-900">₹500.00</h2>
//               </div>
//             </div>

//             <button className="w-full mt-6 bg-green-800 hover:bg-green-900 text-white py-3 text-lg rounded-lg transition-colors">
//               Proceed to Checkout
//             </button>
//           </section>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;


// import axios from "axios";
// import React, { useEffect, useState } from "react";

// const Cart = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch cart items from backend
//   useEffect(() => {
//     const fetchCart = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/cart");
//         setCartItems(response.data);
//       } catch (err) {
//         setError("Failed to load cart items.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchCart();
//   }, []);

//   // Update item quantity
//   const updateQuantity = async (id, quantity) => {
//     if (quantity < 1) return;
//     try {
//       await axios.put(`http://localhost:5000/cart/${id}`, { quantity });
//       setCartItems((prev) =>
//         prev.map((item) =>
//           item.id === id ? { ...item, quantity } : item
//         )
//       );
//     } catch (err) {
//       alert("Failed to update quantity.");
//     }
//   };

//   // Remove item from cart
//   const removeItem = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/cart/${id}`);
//       setCartItems((prev) => prev.filter((item) => item.id !== id));
//     } catch (err) {
//       alert("Failed to remove item.");
//     }
//   };

//   // Calculate total price
//   const calculateTotal = () => {
//     return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
//   };

//   if (loading) return <p className="text-center mt-10 text-xl">Loading...</p>;
//   if (error) return <p className="text-center text-red-600">{error}</p>;

//   return (
//     <div className="min-h-screen bg-gray-50 py-8">
//       <div className="container mx-auto px-4">
//         <h1 className="text-3xl font-bold text-green-900 mb-8">Your Cart</h1>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Cart Items Section */}
//           <section className="lg:col-span-2 bg-white rounded-lg shadow-lg p-6">
//             {cartItems.length === 0 ? (
//               <p className="text-center text-gray-600">Your cart is empty.</p>
//             ) : (
//               <div className="flex flex-col space-y-6">
//                 {cartItems.map((item) => (
//                   <div key={item.id} className="flex items-center space-x-6">
//                     <img
//                       src={item.image || "https://via.placeholder.com/150"}
//                       alt={item.name}
//                       className="w-24 h-24 object-cover rounded-lg"
//                     />
//                     <div className="flex-1">
//                       <h3 className="text-xl font-semibold text-green-900">
//                         {item.name}
//                       </h3>
//                       <p className="text-gray-600">₹{item.price.toFixed(2)}</p>
//                       <div className="flex items-center mt-2">
//                         <button
//                           onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                           className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition"
//                         >
//                           -
//                         </button>
//                         <p className="mx-4 text-lg font-semibold">{item.quantity}</p>
//                         <button
//                           onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                           className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition"
//                         >
//                           +
//                         </button>
//                       </div>
//                     </div>
//                     <button
//                       onClick={() => removeItem(item.id)}
//                       className="text-gray-500 hover:text-red-500 transition"
//                     >
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-6 w-6"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
//                         />
//                       </svg>
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </section>

//           {/* Order Summary Section */}
//           <section className="bg-white rounded-lg shadow-lg p-6">
//             <h1 className="text-2xl font-bold text-green-900 mb-6">Order Summary</h1>
//             <hr className="mb-6" />

//             <div className="space-y-4">
//               <div className="flex justify-between">
//                 <p className="text-gray-600">Subtotal</p>
//                 <p className="text-gray-800 font-semibold">₹{calculateTotal().toFixed(2)}</p>
//               </div>
//               <div className="flex justify-between">
//                 <p className="text-gray-600">Delivery</p>
//                 <p className="text-gray-800 font-semibold">₹50.00</p>
//               </div>
//               <div className="flex justify-between">
//                 <p className="text-gray-600">Promotion Applied</p>
//                 <p className="text-green-600 font-semibold">-₹50.00</p>
//               </div>
//               <hr className="my-4" />
//               <div className="flex justify-between">
//                 <h2 className="text-xl font-bold text-green-900">Order Total</h2>
//                 <h2 className="text-xl font-bold text-green-900">
//                   ₹{calculateTotal().toFixed(2)}
//                 </h2>
//               </div>
//             </div>

//             <button className="w-full mt-6 bg-green-800 hover:bg-green-900 text-white py-3 text-lg rounded-lg transition">
//               Proceed to Checkout
//             </button>
//           </section>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;


// import axios from "axios";
// import React, { useEffect, useState } from "react";

// const Cart = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   let [Subtotal, setSubtotal] = useState(0);
//   let [Delivery, setDelivery] = useState(50);
//   let [Promotion, setPromotion] = useState(50);
//   let [total, setTotal] = useState(0);

//   // Fetch cart items from backend
//   useEffect(() => {
//     const fetchCart = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/cart");
//         setCartItems(response.data);
//       } catch (err) {
//         setError("Failed to load cart items. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchCart();
//   }, []);

//   // Update item quantity
//   const updateQuantity = async (id, quantity) => {
//     if (quantity < 1) return;
//     try {
//       await axios.put(`http://localhost:5000/cart/${id}`, { quantity });
//       setCartItems((prev) =>
//         prev.map((item) =>
//           item.id === id ? { ...item, quantity } : item
//         )
//       );
//     } catch (err) {
//       alert("Failed to update quantity. Please try again.");
//     }
//   };

//   // Remove item from cart
//   const removeItem = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/cart/${id}`);
//       setCartItems((prev) => prev.filter((item) => item.id !== id));
//     } catch (err) {
//       alert("Failed to remove item. Please try again.");
//     }
//   };

//   // Calculate total price
//   // const calculateTotal = () => {
//   //   return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
//   // };
//   let calculate=()=>{

//   }


//   let handleAddToBasket = async (item) => {
//   try {
//     await axios.post("http://localhost:5000/cart", item);
//     alert("Item added to cart!");
//   } catch (error) {
//     console.error("Error adding to cart:", error);
//   }
//  }

//   if (loading) return <p className="text-center mt-10 text-xl">Loading...</p>;
//   if (error) return <p className="text-center text-red-600">{error}</p>;

//   return (
//     <div className="min-h-screen bg-gray-50 py-8">
//       <div className="container mx-auto px-4">
//         <h1 className="text-3xl font-bold text-green-900 mb-8">Your Cart</h1>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Cart Items Section */}
//           <section className="lg:col-span-2 bg-white rounded-lg shadow-lg p-6">
//             {cartItems.length === 0 ? (
//               <p className="text-center text-gray-600">Your cart is empty.</p>
//             ) : (
//               <div className="flex flex-col space-y-6">
//                 {cartItems.map((item) => (
//                   <div key={item.id} className="flex items-center space-x-6">
//                     <img
//                       src={item.primaryImage || "https://via.placeholder.com/150"}
//                       alt={item.name}
//                       className="w-24 h-24 object-cover rounded-lg"
//                       onError={(e) => {
//                         e.target.src = "https://via.placeholder.com/150";
//                       }}
//                     />
//                     <div className="flex-1">
//                       <h3 className="text-xl font-semibold text-green-900">
//                         {item.name}
//                       </h3>
//                       <p className="text-gray-600">₹{item.price.toFixed(2)}</p>
//                       <div className="flex items-center mt-2">
//                         <button
//                           onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                           className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition"
//                           aria-label="Decrease quantity"
//                         >
//                           -
//                         </button>
//                         <p className="mx-4 text-lg font-semibold">{item.quantity}</p>
//                         <button
//                           onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                           className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition"
//                           aria-label="Increase quantity"
//                         >
//                           +
//                         </button>
//                       </div>
//                     </div>
//                     <button
//                       onClick={() => removeItem(item.id)}
//                       className="text-gray-500 hover:text-red-500 transition"
//                       aria-label="Remove item"
//                     >
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-6 w-6"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
//                         />
//                       </svg>
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </section>

//           {/* Order Summary Section */}
//           <section className="bg-white rounded-lg shadow-lg p-6">
//             <h1 className="text-2xl font-bold text-green-900 mb-6">Order Summary</h1>
//             <hr className="mb-6" />

//             <div className="space-y-4">
//               <div className="flex justify-between">
//                 <p className="text-gray-600">Subtotal</p>
//                 <p className="text-gray-800 font-semibold">₹{}</p>
//               </div>
//               <div className="flex justify-between">
//                 <p className="text-gray-600">Delivery</p>
//                 <p className="text-gray-800 font-semibold">₹50.00</p>
//               </div>
//               <div className="flex justify-between">
//                 <p className="text-gray-600">Promotion Applied</p>
//                 <p className="text-green-600 font-semibold">-₹50.00</p>
//               </div>
//               <hr className="my-4" />
//               <div className="flex justify-between">
//                 <h2 className="text-xl font-bold text-green-900">Order Total</h2>
//                 <h2 className="text-xl font-bold text-green-900">
//                   ₹{}
//                 </h2>
//               </div>
//             </div>

//             <button className="w-full mt-6 bg-green-800 hover:bg-green-900 text-white py-3 text-lg rounded-lg transition">
//               Proceed to Checkout
//             </button>
//           </section>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;


// import axios from "axios";
// import React, { useEffect, useState } from "react";

// const Cart = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [Subtotal, setSubtotal] = useState(0);
//   const [Delivery, setDelivery] = useState(50);
//   const [Promotion, setPromotion] = useState(50);
//   const [total, setTotal] = useState(0);

//   // Fetch cart items from backend
//   useEffect(() => {
//     const fetchCart = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/cart");
//         setCartItems(response.data);
//       } catch (err) {
//         setError("Failed to load cart items. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchCart();
//   }, []);

//   // Update item quantity
//   const updateQuantity = async (id, quantity) => {
//     if (quantity < 1) return;
//     try {
//       await axios.put(`http://localhost:5000/cart/${id}`, { quantity });
//       setCartItems((prev) =>
//         prev.map((item) =>
//           item.id === id ? { ...item, quantity } : item
//         )
//       );
//     } catch (err) {
//       alert("Failed to update quantity. Please try again.");
//     }
//   };

//   // Remove item from cart
//   const removeItem = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/cart/${id}`);
//       setCartItems((prev) => prev.filter((item) => item.id !== id));
//     } catch (err) {
//       alert("Failed to remove item. Please try again.");
//     }
//   };

//   // Calculate Subtotal
//   useEffect(() => {
//     const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
//     setSubtotal(subtotal);
//   }, [cartItems]);

//   // Calculate Total (Subtotal + Delivery - Promotion)
//   useEffect(() => {
//     setTotal(Subtotal + Delivery - Promotion);
//   }, [Subtotal, Delivery, Promotion]);

//   // Add item to the cart
//   let handleAddToBasket = async (item) => {
//     try {
//       await axios.post("http://localhost:5000/cart", item);
//       alert("Item added to cart!");
//     } catch (error) {
//       console.error("Error adding to cart:", error);
//     }
//   };

//   if (loading) return <p className="text-center mt-10 text-xl">Loading...</p>;
//   if (error) return <p className="text-center text-red-600">{error}</p>;

//   return (
//     <div className="min-h-screen bg-gray-50 py-8">
//       <div className="container mx-auto px-4">
//         <h1 className="text-3xl font-bold text-green-900 mb-8">Your Cart</h1>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Cart Items Section */}
//           <section className="lg:col-span-2 bg-white rounded-lg shadow-lg p-6">
//             {cartItems.length === 0 ? (
//               <p className="text-center text-gray-600">Your cart is empty.</p>
//             ) : (
//               <div className="flex flex-col space-y-6">
//                 {cartItems.map((item) => (
//                   <div key={item.id} className="flex items-center space-x-6">
//                     <img
//                       src={item.image || "https://via.placeholder.com/150"}
//                       alt={item.name}
//                       className="w-24 h-24 object-cover rounded-lg"
//                       onError={(e) => {
//                         e.target.src = "https://via.placeholder.com/150";
//                       }}
//                     />
//                     <div className="flex-1">
//                       <h3 className="text-xl font-semibold text-green-900">
//                         {item.name}
//                       </h3>
//                       <p className="text-gray-600">₹{item.price.toFixed(2)}</p>
//                       <div className="flex items-center mt-2">
//                         <button
//                           onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                           className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition"
//                           aria-label="Decrease quantity"
//                         >
//                           -
//                         </button>
//                         <p className="mx-4 text-lg font-semibold">{item.quantity}</p>
//                         <button
//                           onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                           className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition"
//                           aria-label="Increase quantity"
//                         >
//                           +
//                         </button>
//                       </div>
//                     </div>
//                     <button
//                       onClick={() => removeItem(item.id)}
//                       className="text-gray-500 hover:text-red-500 transition"
//                       aria-label="Remove item"
//                     >
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-6 w-6"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
//                         />
//                       </svg>
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </section>

//           {/* Order Summary Section */}
//           <section className="bg-white rounded-lg shadow-lg p-6">
//             <h1 className="text-2xl font-bold text-green-900 mb-6">Order Summary</h1>
//             <hr className="mb-6" />

//             <div className="space-y-4">
//               <div className="flex justify-between">
//                 <p className="text-gray-600">Subtotal</p>
//                 <p className="text-gray-800 font-semibold">₹{Subtotal.toFixed(2)}</p>
//               </div>
//               <div className="flex justify-between">
//                 <p className="text-gray-600">Delivery</p>
//                 <p className="text-gray-800 font-semibold">₹{Delivery.toFixed(2)}</p>
//               </div>
//               <div className="flex justify-between">
//                 <p className="text-gray-600">Promotion Applied</p>
//                 <p className="text-green-600 font-semibold">-₹{Promotion.toFixed(2)}</p>
//               </div>
//               <hr className="my-4" />
//               <div className="flex justify-between">
//                 <h2 className="text-xl font-bold text-green-900">Order Total</h2>
//                 <h2 className="text-xl font-bold text-green-900">
//                   ₹{total.toFixed(2)}
//                 </h2>
//               </div>
//             </div>

//             <button className="w-full mt-6 bg-green-800 hover:bg-green-900 text-white py-3 text-lg rounded-lg transition">
//               Proceed to Checkout
//             </button>
//           </section>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;



// import axios from "axios";
// import React, { useEffect, useState, useCallback } from "react";

// const Cart = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [delivery, setDelivery] = useState(50);
//   const [promotion, setPromotion] = useState(50);

//   // Fetch cart items from backend
//   useEffect(() => {
//     const fetchCart = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/cart");
//         setCartItems(response.data);
//       } catch (err) {
//         setError("Failed to load cart items. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchCart();
//   }, []);

//   // Update item quantity
//   const updateQuantity = useCallback(async (id, quantity) => {
//     if (quantity < 1) return;
//     try {
//       await axios.put(`http://localhost:5000/cart/${id}`, { quantity });
//       setCartItems((prev) =>
//         prev.map((item) =>
//           item.id === id ? { ...item, quantity } : item
//         )
//       );
//     } catch (err) {
//       alert("Failed to update quantity. Please try again.");
//     }
//   }, []);

//   // Remove item from cart
//   const removeItem = useCallback(async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/cart/${id}`);
//       setCartItems((prev) => prev.filter((item) => item.id !== id));
//     } catch (err) {
//       alert("Failed to remove item. Please try again.");
//     }
//   }, []);

//   // Calculate Subtotal
//   const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

//   // Calculate Total (Subtotal + Delivery - Promotion)
//   const total = subtotal + delivery - promotion;

//   // Add item to the cart
//   const handleAddToBasket = useCallback(async (item) => {
//     try {
//       await axios.post("http://localhost:5000/cart", item);
//       alert("Item added to cart!");
//     } catch (error) {
//       console.error("Error adding to cart:", error);
//     }
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center min-h-screen">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-900"></div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex justify-center items-center min-h-screen">
//         <p className="text-red-600 text-xl">{error}</p>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 py-8">
//       <div className="container mx-auto px-4">
//         <h1 className="text-3xl font-bold text-green-900 mb-8">Your Cart</h1>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Cart Items Section */}
//           <section className="lg:col-span-2 bg-white rounded-lg shadow-lg p-6">
//             {cartItems.length === 0 ? (
//               <p className="text-center text-gray-600">Your cart is empty.</p>
//             ) : (
//               <div className="flex flex-col space-y-6">
//                 {cartItems.map((item) => (
//                   <div key={item.id} className="flex items-center space-x-6">
//                     <img
//                       src={item.image || "https://via.placeholder.com/150"}
//                       alt={item.name}
//                       className="w-24 h-24 object-cover rounded-lg"
//                       onError={(e) => {
//                         e.target.src = "https://via.placeholder.com/150";
//                       }}
//                     />
//                     <div className="flex-1">
//                       <h3 className="text-xl font-semibold text-green-900">
//                         {item.name}
//                       </h3>
//                       <p className="text-gray-600">₹{item.price.toFixed(2)}</p>
//                       <div className="flex items-center mt-2">
//                         <button
//                           onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                           className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition"
//                           aria-label="Decrease quantity"
//                         >
//                           -
//                         </button>
//                         <p className="mx-4 text-lg font-semibold">{item.quantity}</p>
//                         <button
//                           onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                           className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition"
//                           aria-label="Increase quantity"
//                         >
//                           +
//                         </button>
//                       </div>
//                     </div>
//                     <button
//                       onClick={() => removeItem(item.id)}
//                       className="text-gray-500 hover:text-red-500 transition"
//                       aria-label="Remove item"
//                     >
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-6 w-6"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
//                         />
//                       </svg>
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </section>

//           {/* Order Summary Section */}
//           <section className="bg-white rounded-lg shadow-lg p-6">
//             <h1 className="text-2xl font-bold text-green-900 mb-6">Order Summary</h1>
//             <hr className="mb-6" />

//             <div className="space-y-4">
//               <div className="flex justify-between">
//                 <p className="text-gray-600">Subtotal</p>
//                 <p className="text-gray-800 font-semibold">₹{subtotal.toFixed(2)}</p>
//               </div>
//               <div className="flex justify-between">
//                 <p className="text-gray-600">Delivery</p>
//                 <p className="text-gray-800 font-semibold">₹{delivery.toFixed(2)}</p>
//               </div>
//               <div className="flex justify-between">
//                 <p className="text-gray-600">Promotion Applied</p>
//                 <p className="text-green-600 font-semibold">-₹{promotion.toFixed(2)}</p>
//               </div>
//               <hr className="my-4" />
//               <div className="flex justify-between">
//                 <h2 className="text-xl font-bold text-green-900">Order Total</h2>
//                 <h2 className="text-xl font-bold text-green-900">
//                   ₹{total.toFixed(2)}
//                 </h2>
//               </div>
//             </div>

//             <button
//               className="w-full mt-6 bg-green-800 hover:bg-green-900 text-white py-3 text-lg rounded-lg transition"
//               aria-label="Proceed to checkout"
//             >
//               Proceed to Checkout
//             </button>
//           </section>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;


import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [delivery, setDelivery] = useState(50);
  const [promotion, setPromotion] = useState(50);

  // Fetch cart items from backend
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get("http://localhost:5000/cart");
        setCartItems(response.data);
      } catch (err) {
        setError("Failed to load cart items. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchCart();
  }, []);

  // Update item quantity
  const updateQuantity = useCallback(async (id, quantity) => {
    if (quantity < 1) return; // Ensure quantity is at least 1
    try {
      const response = await axios.put(`http://localhost:5000/cart/${id}`, { quantity });
      const updatedItem = response.data; // Updated item returned by the API

      // Update the state with the new quantity
      setCartItems((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, quantity: updatedItem.quantity } : item
        )
      );
    } catch (err) {
      alert("Failed to update quantity. Please try again.");
    }
  }, []);

  // Remove item from cart
  const removeItem = useCallback(async (id) => {
    try {
      await axios.delete(`http://localhost:5000/cart/${id}`);
      setCartItems((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      alert("Failed to remove item. Please try again.");
    }
  }, []);

  // Calculate Subtotal
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Calculate Total (Subtotal + Delivery - Promotion)
  const total = subtotal + delivery - promotion;

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-red-600 text-xl">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-green-900 mb-8">Your Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items Section */}
          <section className="lg:col-span-2 bg-white rounded-lg shadow-lg p-6">
            {cartItems.length === 0 ? (
              <p className="text-center text-gray-600">Your cart is empty.</p>
            ) : (
              <div className="flex flex-col space-y-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center space-x-6">
                    <img
                      src={item.image || "https://via.placeholder.com/150"}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg"
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/150";
                      }}
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-green-900">
                        {item.name}
                      </h3>
                      <p className="text-gray-600">₹{item.price.toFixed(2)}</p>
                      <div className="flex items-center mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition"
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>
                        <p className="mx-4 text-lg font-semibold">{item.quantity}</p>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-gray-500 hover:text-red-500 transition"
                      aria-label="Remove item"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* Order Summary Section */}
          <section className="bg-white rounded-lg shadow-lg p-6">
            <h1 className="text-2xl font-bold text-green-900 mb-6">Order Summary</h1>
            <hr className="mb-6" />

            <div className="space-y-4">
              <div className="flex justify-between">
                <p className="text-gray-600">Subtotal</p>
                <p className="text-gray-800 font-semibold">₹{subtotal.toFixed(2)}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-600">Delivery</p>
                <p className="text-gray-800 font-semibold">₹{delivery.toFixed(2)}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-600">Promotion Applied</p>
                <p className="text-green-600 font-semibold">-₹{promotion.toFixed(2)}</p>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between">
                <h2 className="text-xl font-bold text-green-900">Order Total</h2>
                <h2 className="text-xl font-bold text-green-900">
                  ₹{total.toFixed(2)}
                </h2>
              </div>
            </div>

            <button
              className="w-full mt-6 bg-green-800 hover:bg-green-900 text-white py-3 text-lg rounded-lg transition"
              aria-label="Proceed to checkout"
            >
              Proceed to Checkout
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Cart;