

import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
  
  const [error, setError] = useState(null);
  const [delivery, setDelivery] = useState(50);
  const [promotion, setPromotion] = useState(50);
  const [odersummary, setOdersummary] = useState({

  });

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

  // Update item quantity or add item if it doesn't exist
  const updateQuantity = useCallback(async (id, name, price, image, newQuantity) => {
    if (newQuantity < 1) return; // Prevent negative quantities

    try {
      // Check if item exists in cart
      const response = await axios.get(`http://localhost:5000/cart?id=${id}`);
      const existingItem = response.data[0]; // JSON Server returns an array

      if (existingItem) {
        // If item exists, update quantity using PATCH
        await axios.patch(`http://localhost:5000/cart/${id}`, { quantity: newQuantity });

        // Update local state
        setCartItems((prev) =>
          prev.map((item) =>
            item.id === id ? { ...item, quantity: newQuantity } : item
          )
        );
      } else {
        // If item doesn't exist, add it to cart using POST
        const newItem = { id, name, price, image, quantity: newQuantity };
        const postResponse = await axios.post("http://localhost:5000/cart", newItem);

        setCartItems((prev) => [...prev, postResponse.data]);
      }
    } catch (err) {
      alert("Failed to update cart. Please try again.");
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
                          onClick={() => updateQuantity(item.id, item.name, item.price, item.image, item.quantity - 1)}
                          className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition"
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>
                        <p className="mx-4 text-lg font-semibold">{item.quantity}</p>
                        <button
                          onClick={() => updateQuantity(item.id, item.name, item.price, item.image, item.quantity + 1)}
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
            <Link to='/shipping'>
              <button 
              onClick={()=>{navigate('/shipping', {state: {cartItems, total}})}}
              className="w-full mt-6 bg-green-800 hover:bg-green-900 text-white py-3 text-lg rounded-lg transition">
                Proceed to Checkout
              </button>
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Cart;


// import axios from "axios";
// import React, { useEffect, useState, useCallback } from "react";
// import { Link } from "react-router-dom";

// // Reusable Cart Item Component
// const CartItem = React.memo(({ item, updateQuantity, removeItem }) => {
//   return (
//     <div className="flex items-center space-x-6">
//       <img
//         src={item.image || "https://via.placeholder.com/150"}
//         alt={item.name}
//         className="w-24 h-24 object-cover rounded-lg"
//         onError={(e) => {
//           e.target.src = "https://via.placeholder.com/150";
//         }}
//       />
//       <div className="flex-1">
//         <h3 className="text-xl font-semibold text-green-900">{item.name}</h3>
//         <p className="text-gray-600">₹{item.price.toFixed(2)}</p>
//         <div className="flex items-center mt-2">
//           <button
//             onClick={() => updateQuantity(item.id, item.quantity - 1)}
//             className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition"
//             aria-label="Decrease quantity"
//           >
//             -
//           </button>
//           <p className="mx-4 text-lg font-semibold">{item.quantity}</p>
//           <button
//             onClick={() => updateQuantity(item.id, item.quantity + 1)}
//             className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition"
//             aria-label="Increase quantity"
//           >
//             +
//           </button>
//         </div>
//       </div>
//       <button
//         onClick={() => removeItem(item.id)}
//         className="text-gray-500 hover:text-red-500 transition"
//         aria-label="Remove item"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-6 w-6"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
//           />
//         </svg>
//       </button>
//     </div>
//   );
// });

// // Reusable Order Summary Component
// const OrderSummary = ({ subtotal, delivery, promotion, total }) => {
//   return (
//     <section className="bg-white rounded-lg shadow-lg p-6">
//       <h1 className="text-2xl font-bold text-green-900 mb-6">Order Summary</h1>
//       <hr className="mb-6" />

//       <div className="space-y-4">
//         <div className="flex justify-between">
//           <p className="text-gray-600">Subtotal</p>
//           <p className="text-gray-800 font-semibold">₹{subtotal.toFixed(2)}</p>
//         </div>
//         <div className="flex justify-between">
//           <p className="text-gray-600">Delivery</p>
//           <p className="text-gray-800 font-semibold">₹{delivery.toFixed(2)}</p>
//         </div>
//         <div className="flex justify-between">
//           <p className="text-gray-600">Promotion Applied</p>
//           <p className="text-green-600 font-semibold">-₹{promotion.toFixed(2)}</p>
//         </div>
//         <hr className="my-4" />
//         <div className="flex justify-between">
//           <h2 className="text-xl font-bold text-green-900">Order Total</h2>
//           <h2 className="text-xl font-bold text-green-900">₹{total.toFixed(2)}</h2>
//         </div>
//       </div>
//       <Link to="/shipping">
//         <button className="w-full mt-6 bg-green-800 hover:bg-green-900 text-white py-3 text-lg rounded-lg transition">
//           Proceed to Checkout
//         </button>
//       </Link>
//     </section>
//   );
// };

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
//   const updateQuantity = useCallback(async (id, newQuantity) => {
//     if (newQuantity < 1) return; // Prevent negative quantities

//     try {
//       await axios.patch(`http://localhost:5000/cart/${id}`, { quantity: newQuantity });
//       setCartItems((prev) =>
//         prev.map((item) =>
//           item.id === id ? { ...item, quantity: newQuantity } : item
//         )
//       );
//     } catch (err) {
//       alert("Failed to update cart. Please try again.");
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
//                   <CartItem
//                     key={item.id}
//                     item={item}
//                     updateQuantity={updateQuantity}
//                     removeItem={removeItem}
//                   />
//                 ))}
//               </div>
//             )}
//           </section>

//           {/* Order Summary Section */}
//           <OrderSummary
//             subtotal={subtotal}
//             delivery={delivery}
//             promotion={promotion}
//             total={total}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;


