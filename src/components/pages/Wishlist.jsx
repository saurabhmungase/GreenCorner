// import axios from "axios";
// import React, { useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { RxCross2 } from "react-icons/rx";
// import { context } from "../../context/AppContext";

// const Wishlist = () => {
//   const Contextdata = useContext(context);
//   const navigate = useNavigate();

//   const [data, setData] = useState([]); // Stores all plants
//   const [wishlist, setWishlist] = useState([]); // Stores wishlist items

//   // Fetch wishlist data from backend
//   useEffect(() => {
//     axios.get("http://localhost:5000/wishlist")
//       .then((res) => {
//         console.log("Fetched wishlist data:", res.data);
//         setWishlist(res.data || []);
//       })
//       .catch((err) => console.error("Error fetching wishlist:", err));
//   }, []);

//   // Fetch all plants data from Context
//   useEffect(() => {
//     if (Array.isArray(Contextdata.Allplants)) {
//       setData(Contextdata.Allplants);
//     } else {
//       setData([]);
//     }
//   }, [Contextdata]);

//   // Extract wishlist item IDs
//   const wishlistIds = wishlist.map(item => item.itemId);

//   // Filter only wishlist items
//   const filteredData = data.filter((item) => wishlistIds.includes(item.id));

//   // Handle removing item from wishlist
//   const handleRemoveFromWishlist = async (id) => {
//     console.log("Removing from wishlist, ID:", id); // Debugging log

//     try {
//       // Find the correct item to delete from the wishlist based on its "id"
//       const itemToRemove = wishlist.find(item => item.itemId === id);
//       if (itemToRemove) {
//         console.log("Item found in wishlist, deleting:", itemToRemove); // Debugging log
//         await axios.delete(`http://localhost:5000/wishlist/${itemToRemove.id}`);
        
//         // Remove item from the wishlist in the local state as well
//         setWishlist(prevWishlist => prevWishlist.filter(item => item.id !== itemToRemove.id));
//       } else {
//         console.log("Item not found in wishlist"); // Debugging log
//       }
//     } catch (error) {
//       console.error("Error removing from wishlist:", error);
//     }
//   };

//   return (
//     <div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 m-8 xl:grid-cols-4 gap-8 h-[90vh] overflow-auto [&::-webkit-scrollbar]:hidden">
//         {filteredData.map((item) => {
//           const discountedPrice = (item.price * 1.12).toFixed(2);

//           return (
//             <div
//               key={item.id}
//               className="bg-transparent rounded-md p-2 flex flex-col items-center relative"
//             >
//               {/* Remove from Wishlist Button */}
//               <button 
//                 onClick={() => handleRemoveFromWishlist(item.id)} 
//                 className="absolute top-2 right-2 p-2 text-black rounded-full shadow-md hover:bg-gray-100 transition-colors"
//               >
//                 <RxCross2 />
//               </button>

//               {/* Product Image */}
//               <img
//                 src={item.primaryImage}
//                 alt={item.name}
//                 className="w-full h-64 object-cover mb-4 cursor-pointer shadow-md hover:shadow-lg transition-shadow rounded-md"
//                 onClick={() => navigate("/details", { state: { item } })}
//               />

//               {/* Product Details */}
//               <h1 className="text-xl font-medium text-green-800 mb-2 text-center">
//                 {item.name}
//               </h1>
//               <div className="flex items-center gap-2 mb-4">
//                 <span className="text-l font-bold text-green-600">
//                   ₹{item.price}
//                 </span>
//                 <span className="text-l text-gray-500 line-through">
//                   ₹{discountedPrice}
//                 </span>
//                 <span className="bg-[#83C026] text-white text-xs px-2 py-1 rounded-full">
//                   12% OFF
//                 </span>
//               </div>
//               <button className="w-10/12 bg-green-900 hover:bg-green-950 text-white p-1 text-lg rounded-full transition-colors">
//                 Add to Basket
//               </button>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Wishlist;


// import axios from "axios";
// import React, { useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { RxCross2 } from "react-icons/rx";
// import { context } from "../../context/AppContext";
// import { motion } from "framer-motion"; // For animations

// const Wishlist = () => {
//   const Contextdata = useContext(context);
//   const navigate = useNavigate();

//   const [data, setData] = useState([]); // Stores all plants
//   const [wishlist, setWishlist] = useState([]); // Stores wishlist items
//   const [loading, setLoading] = useState(true); // Loading state
//   const [error, setError] = useState(null); // Error state

//   // Fetch wishlist data from backend
//   useEffect(() => {
//     const fetchWishlist = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/wishlist");
//         console.log("Fetched wishlist data:", res.data);
//         setWishlist(res.data || []);
//       } catch (err) {
//         console.error("Error fetching wishlist:", err);
//         setError("Failed to fetch wishlist data. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchWishlist();
//   }, []);

//   // Fetch all plants data from Context
//   useEffect(() => {
//     if (Array.isArray(Contextdata.Allplants)) {
//       setData(Contextdata.Allplants);
//     } else {
//       setData([]);
//     }
//   }, [Contextdata]);

//   // Extract wishlist item IDs
//   const wishlistIds = wishlist.map(item => item.itemId);

//   // Filter only wishlist items
//   const filteredData = data.filter((item) => wishlistIds.includes(item.id));

//   // Handle removing item from wishlist
//   const handleRemoveFromWishlist = async (id) => {
//     console.log("Removing from wishlist, itemId:", id); // Debugging log
  
//     try {
//       // Find the wishlist entry that contains this itemId
//       const itemToRemove = wishlist.find(item => item.itemId === id);
  
//       if (!itemToRemove) {
//         console.log("Item not found in wishlist");
//         return;
//       }
  
//       console.log("Item found in wishlist, deleting:", itemToRemove); // Debugging log
  
//       // Send DELETE request using the wishlist item's `id`, NOT itemId
//       const response = await axios.delete(`http://localhost:5000/wishlist/${itemToRemove.id}`);
  
//       if (response.status === 200 || response.status === 204) {
//         console.log("Item successfully deleted");
  
//         // Update state after successful deletion
//         setWishlist(prevWishlist => prevWishlist.filter(item => item.id !== itemToRemove.id));
//       } else {
//         console.log("Unexpected response from server:", response);
//         setError("Failed to remove item from wishlist.");
//       }
//     } catch (error) {
//       console.error("Error removing from wishlist:", error);
//       setError("Failed to remove item from wishlist. Please try again.");
//     }
//   };
  
  

//   // Loading state
//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-green-500"></div>
//       </div>
//     );
//   }

//   // Error state
//   if (error) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <p className="text-red-500 text-lg">{error}</p>
//       </div>
//     );
//   }

//   return (
//     <div className="p-8">
//       <h1 className="text-3xl font-bold text-green-800 mb-8">Your Wishlist</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//         {filteredData.map((item) => {
//           const discountedPrice = (item.price * 1.12).toFixed(2);

//           return (
//             <motion.div
//               key={item.id}
//               className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               {/* Remove from Wishlist Button */}
//               <button 
//                 onClick={() => handleRemoveFromWishlist(item.id)} 
//                 className="absolute top-2 right-2 p-2 text-black rounded-full shadow-md hover:bg-gray-100 transition-colors"
//               >
//                 <RxCross2 />
//               </button>

//               {/* Product Image */}
//               <img
//                 src={item.primaryImage}
//                 alt={item.name}
//                 className="w-full h-64 object-cover cursor-pointer"
//                 onClick={() => navigate("/details", { state: { item } })}
//               />

//               {/* Product Details */}
//               <div className="p-4">
//                 <h1 className="text-xl font-semibold text-green-800 mb-2">
//                   {item.name}
//                 </h1>
//                 <div className="flex items-center gap-2 mb-4">
//                   <span className="text-lg font-bold text-green-600">
//                     ₹{item.price}
//                   </span>
//                   <span className="text-lg text-gray-500 line-through">
//                     ₹{discountedPrice}
//                   </span>
//                   <span className="bg-[#83C026] text-white text-xs px-2 py-1 rounded-full">
//                     12% OFF
//                   </span>
//                 </div>
//                 <button className="w-full bg-green-900 hover:bg-green-950 text-white py-2 text-lg rounded-full transition-colors">
//                   Add to Basket
//                 </button>
//               </div>
//             </motion.div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Wishlist;


// import axios from "axios";
// import React, { useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { RxCross2 } from "react-icons/rx";
// import { context } from "../../context/AppContext";

// const Wishlist = () => {
//   const Contextdata = useContext(context);
//   const navigate = useNavigate();

//   const [data, setData] = useState([]); // Stores all plants
//   const [wishlist, setWishlist] = useState([]); // Stores wishlist items
//   const [loading, setLoading] = useState(true); // Loading state
//   const [error, setError] = useState(null); // Error state

//   // Fetch wishlist data from backend
//   useEffect(() => {
//     const fetchWishlist = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/wishlist");
//         console.log("Fetched wishlist data:", res.data);
//         setWishlist(res.data || []);
//       } catch (err) {
//         console.error("Error fetching wishlist:", err);
//         setError("Failed to fetch wishlist data. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchWishlist();
//   }, []);

//   // Fetch all plants data from Context
//   useEffect(() => {
//     setData(Array.isArray(Contextdata.Allplants) ? Contextdata.Allplants : []);
//   }, [Contextdata]);

//   // Extract wishlist item IDs
//   const wishlistIds = new Set(wishlist.map((item) => item.itemId));

//   // Filter only wishlist items
//   const filteredData = data.filter((item) => wishlistIds.has(item.id));

//   // Handle removing item from wishlist
//   const handleRemoveFromWishlist = async (itemId) => {
//     console.log("Attempting to remove item from wishlist, itemId:", itemId);

//     const itemToRemove = wishlist.find((item) => item.itemId === itemId);

//     if (!itemToRemove) {
//       console.warn("Item not found in wishlist");
//       return;
//     }

//     try {
//       await axios.delete(`http://localhost:5000/wishlist/${itemToRemove.id}`);
//       console.log("Successfully removed item from wishlist");
      
//       // Update local wishlist state
//       setWishlist((prev) => prev.filter((item) => item.id !== itemToRemove.id));
//     } catch (error) {
//       console.error("Error removing item from wishlist:", error);
//       setError("Failed to remove item from wishlist. Please try again.");
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-green-500"></div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <p className="text-red-500 text-lg">{error}</p>
//       </div>
//     );
//   }

//   return (
//     <div className="p-8">
//       <h1 className="text-3xl font-bold text-green-800 mb-8">Your Wishlist</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//         {filteredData.map((item) => {
//           const discountedPrice = (item.price * 1.12).toFixed(2);

//           return (
             
//               <div  key={item.id} >
//               {/* Remove from Wishlist Button */}
//               <button 
//                 onClick={() => {
//                   console.log("hello");
//                   handleRemoveFromWishlist(item.id)
//                 }}
//                 className="absolute top-2 right-2 p-2 bg-white text-black rounded-full shadow-md hover:bg-gray-100 transition-colors"
//               >
//                 <RxCross2 />
//               </button>

//               {/* Product Image */}
//               <img
//                 src={item.primaryImage}
//                 alt={item.name}
//                 className="w-full h-64 object-cover cursor-pointer"
//                 onClick={() => navigate("/details", { state: { item } })}
//               />

//               {/* Product Details */}
//               <div className="p-4">
//                 <h1 className="text-xl font-semibold text-green-800 mb-2">{item.name}</h1>
//                 <div className="flex items-center gap-2 mb-4">
//                   <span className="text-lg font-bold text-green-600">₹{item.price}</span>
//                   <span className="text-lg text-gray-500 line-through">₹{discountedPrice}</span>
//                   <span className="bg-[#83C026] text-white text-xs px-2 py-1 rounded-full">12% OFF</span>
//                 </div>
//                 <button className="w-full bg-green-900 hover:bg-green-950 text-white py-2 text-lg rounded-full transition-colors">
//                   Add to Basket
//                 </button>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Wishlist;


  // import axios from "axios";
  // import React, { useContext, useEffect, useState } from "react";
  // import { useNavigate } from "react-router-dom";
  // import { RxCross2 } from "react-icons/rx";
  // import { context } from "../../context/AppContext";

  // const Wishlist = () => {
  //   const Contextdata = useContext(context);
  //   const navigate = useNavigate();

  //   const [data, setData] = useState([]);
  //   const [wishlist, setWishlist] = useState([]);
  //   const [loading, setLoading] = useState(true);
  //   const [error, setError] = useState(null);

  //   useEffect(() => {
  //     const fetchWishlist = async () => {
  //       try {
  //         const res = await axios.get("http://localhost:5000/wishlist");
  //         console.log("Fetched wishlist data:", res.data);
  //         setWishlist(res.data || []);
  //       } catch (err) {
  //         console.error("Error fetching wishlist:", err);
  //         setError("Failed to fetch wishlist data. Please try again later.");
  //       } finally {
  //         setLoading(false);
  //       }
  //     };

  //     fetchWishlist();
  //   }, []);

  //   useEffect(() => {
  //     setData(Array.isArray(Contextdata.Allplants) ? Contextdata.Allplants : []);
  //   }, [Contextdata]);

  //   const wishlistIds = new Set(wishlist.map((item) => item.itemId));
  //   const filteredData = data.filter((item) => wishlistIds.has(item.id));

  //   const handleRemoveFromWishlist = async (id) => {
  //     console.log("Removing from wishlist, itemId:", id);
    
  //     try {
  //       const itemToRemove = wishlist.find(item => item.itemId === id);
    
  //       if (!itemToRemove) {
  //         console.log("Item not found in wishlist");
  //         return;
  //       }
    
  //       console.log("Item found in wishlist, deleting:", itemToRemove);
    
  //       await axios.delete(`http://localhost:5000/wishlist/${itemToRemove.id}`);
  //       console.log("Item successfully deleted");
  //       setWishlist(prevWishlist => prevWishlist.filter(item => item.id !== itemToRemove.id));
  //     } catch (error) {
  //       console.error("Error removing from wishlist:", error);
  //       setError("Failed to remove item from wishlist. Please try again.");
  //     }
  //   };

  //   if (loading) {
  //     return (
  //       <div className="flex justify-center items-center h-screen">
  //         <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-green-500"></div>
  //       </div>
  //     );
  //   }

  //   if (error) {
  //     return (
  //       <div className="flex justify-center items-center h-screen">
  //         <p className="text-red-500 text-lg">{error}</p>
  //       </div>
  //     );
  //   }

  //   return (
  //     <div className="p-8">
  //       <h1 className="text-3xl font-bold text-green-800 mb-8">Your Wishlist</h1>
  //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
  //         {filteredData.map((item) => {
  //           const discountedPrice = (item.price * 1.12).toFixed(2);

  //           return (
  //             <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
  //               <button 
  //                 onClick={() => handleRemoveFromWishlist(item.id)} 
  //                 className="relative top-4 right-1 p-2 text-black rounded-full shadow-md hover:bg-gray-100 transition-colors"
  //               >
  //                 <RxCross2 />
  //               </button>

  //               <img
  //                 src={item.primaryImage}
  //                 alt={item.name}
  //                 className="w-full h-64 object-cover cursor-pointer"
  //                 onClick={() => navigate("/details", { state: { item } })}
  //               />

  //               <div className="p-4">
  //                 <h1 className="text-xl font-semibold text-green-800 mb-2">
  //                   {item.name}
  //                 </h1>
  //                 <div className="flex items-center gap-2 mb-4">
  //                   <span className="text-lg font-bold text-green-600">
  //                     ₹{item.price}
  //                   </span>
  //                   <span className="text-lg text-gray-500 line-through">
  //                     ₹{discountedPrice}
  //                   </span>
  //                   <span className="bg-[#83C026] text-white text-xs px-2 py-1 rounded-full">
  //                     12% OFF
  //                   </span>
  //                 </div>
  //                 <button className="w-full bg-green-900 hover:bg-green-950 text-white py-2 text-lg rounded-full transition-colors">
  //                   Add to Basket
  //                 </button>
  //               </div>
  //             </div>
  //           );
  //         })}
  //       </div>
  //     </div>
  //   );
  // };

  // export default Wishlist;

  import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { context } from "../../context/AppContext";

const Wishlist = () => {
  const Contextdata = useContext(context);
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const res = await axios.get("http://localhost:5000/wishlist");
        console.log("Fetched wishlist data:", res.data);
        setWishlist(res.data || []);
      } catch (err) {
        console.error("Error fetching wishlist:", err);
        setError("Failed to fetch wishlist data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchWishlist();
  }, []);

  useEffect(() => {
    setData(Array.isArray(Contextdata.Allplants) ? Contextdata.Allplants : []);
  }, [Contextdata]);

  const wishlistIds = new Set(wishlist.map((item) => item.itemId));
  const filteredData = data.filter((item) => wishlistIds.has(item.id));

  const handleRemoveFromWishlist = async (id) => {
    console.log("Removing from wishlist, itemId:", id);

    try {
      const itemToRemove = wishlist.find(item => item.itemId === id);

      if (!itemToRemove) {
        console.log("Item not found in wishlist");
        return;
      }

      console.log("Item found in wishlist, deleting:", itemToRemove);

      await axios.delete(`http://localhost:5000/wishlist/${itemToRemove.id}`);
      console.log("Item successfully deleted");
      setWishlist(prevWishlist => prevWishlist.filter(item => item.id !== itemToRemove.id));
    } catch (error) {
      console.error("Error removing from wishlist:", error);
      setError("Failed to remove item from wishlist. Please try again.");
    }
  };
  let handleAddToBasket = async (item) => {
    try {
      await axios.post("http://localhost:5000/cart", item);
      alert("Item added to cart!");
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
   }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500 text-lg">{error}</p>
      </div>
    );
  }

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-green-900 mb-8 text-center">Your Wishlist</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredData.map((item) => {
          const discountedPrice = (item.price * 1.12).toFixed(2);

          return (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
              <button 
                onClick={() => handleRemoveFromWishlist(item.id)} 
                className="absolute top-4 right-4 p-2 bg-white text-gray-600 rounded-full shadow-md hover:bg-gray-100 transition-colors"
              >
                <RxCross2 className="w-5 h-5" />
              </button>

              <img
                src={item.primaryImage}
                alt={item.name}
                className="w-full h-64 object-cover cursor-pointer"
                onClick={() => navigate("/details", { state: { item } })}
              />

              <div className="p-6">
                <h1 className="text-xl font-semibold text-green-900 mb-2">
                  {item.name}
                </h1>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-lg font-bold text-green-700">
                    ₹{item.price}
                  </span>
                  <span className="text-lg text-gray-500 line-through">
                    ₹{discountedPrice}
                  </span>
                  <span className="bg-[#83C026] text-white text-xs px-2 py-1 rounded-full">
                    12% OFF
                  </span>
                </div>
                <button 
                onClick={() => handleAddToBasket(item)}
                className="w-full bg-green-800 hover:bg-green-900 text-white py-3 text-lg rounded-full transition-colors">
                  Add to Basket
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Wishlist;