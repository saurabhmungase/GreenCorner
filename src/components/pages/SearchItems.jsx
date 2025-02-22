// import React, { useContext, useState } from 'react'
// import { context } from '../../context/AppContext';
// import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
// import { useNavigate } from "react-router-dom";

// export const SearchItems = ({searchData}) => {
//       const Contextdata = useContext(context);
//   const [wishlist, setWishlist] = useState({});
//   const navigate = useNavigate();

//       const [AddToCart, setAddToCart] = useState({
//         name: "",
//         price: "",
//         image: "",
//         quantity: 1,
//       });
//       let [dataSearch, setDataSearch] = useState([])
//      let filterSearch = Contextdata.Allplants.filter((item) => {
//       const name = item.name || [];
//       return name.some((name) =>
//         name.includes(name.toLowerCase())
//      });
     
//   const toggleWishlist = async (itemId) => {
//     const isWishlisted = wishlist[itemId];

//     try {
//       const updatedWishlist = { ...wishlist };
//       if (isWishlisted) {
//         await axios.delete(`http://localhost:5000/wishlist/${isWishlisted}`);
//         delete updatedWishlist[itemId];
//       } else {
//         const response = await axios.post("http://localhost:5000/wishlist", { itemId });
//         updatedWishlist[itemId] = response.data.id;
//       }
//       setWishlist(updatedWishlist);
//     } catch (error) {
//       console.error("Error toggling wishlist:", error);
//     }
//   };
//   const handleAddToBasket = async (name, price, image) => {
//     console.log("Adding to cart:", name, price, image);
  
//     const itemToAdd = {
//       name: name,
//       price: price,
//       image: image,
//       quantity: 1,
//     };
  
//     try {
//       await axios.post("http://localhost:5000/cart", itemToAdd);
//     } catch (error) {
//       console.error("Error adding to cart:", error);
//     }
//   };
  
       
    
//   return (
//     <div className='h-screen'>
//         <div>
//            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 h-[90vh] overflow-auto [&::-webkit-scrollbar]:hidden">
//                      {filterSearch.map((item, i) => {
//                        const discountedPrice = (item.price * 1.12).toFixed(2);
//                        const isWishlisted = !!wishlist[item.id];
           
//                        return (
//                          <div key={i} className="bg-transparent rounded-md p-2 flex flex-col items-center relative">
//                            <button
//                              className="absolute top-2 right-2 p-2 text-black rounded-full shadow-md hover:bg-gray-100 transition-colors"
//                              onClick={() => toggleWishlist(item.id)}
//                            >
//                              {isWishlisted ? <MdFavorite className="text-red-500" /> : <MdFavoriteBorder className="text-gray-500" />}
//                            </button>
           
//                            <img
//                              src={item.primaryImage}
//                              alt={item.name}
//                              className="w-full h-64 object-cover mb-4 cursor-pointer shadow-md hover:shadow-lg transition-shadow rounded-md"
//                              onClick={() => navigate("/details", { state: { item } })}
//                            />
           
//                            <h1 className="text-xl font-medium text-green-800 mb-2 text-center">{item.name}</h1>
//                            <div className="flex items-center gap-2 mb-4">
//                              <span className="text-l font-bold text-green-600">₹{item.price}</span>
//                              <span className="text-l text-gray-500 line-through">₹{discountedPrice}</span>
//                              <span className="bg-[#83C026] text-white text-xs px-2 py-1 rounded-full">12% OFF</span>
//                            </div>
//                            <button
//                            onClick={() => handleAddToBasket(item.name , item.price , item.primaryImage)}
//                             className="w-10/12 bg-green-900 hover:bg-green-950 text-white p-1 text-lg rounded-full transition-colors">
//                              Add to Basket
//                            </button>
//                          </div>
//                        );
//                      })}
//                    </div>
//         </div>
        
//     </div>
//   )
// }


// import React, { useContext, useEffect, useState } from "react";
// import { context } from "../../context/AppContext";
// import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
// import { useNavigate } from "react-router-dom";
// import axios from "axios"; // Import axios

// export const SearchItems = ({ searchData }) => {
//   const Contextdata = useContext(context);
//   const [wishlist, setWishlist] = useState({});
//   const [data , setData] = useState([]);
//   const navigate = useNavigate();

// useEffect(() => {
//   setData(Contextdata.Allplants)

// }, []);

//   // Filter search items based on searchData
//   const filterSearch =data.filter((item) =>
//     item.name.toLowerCase().includes(searchData.toLowerCase())
//   );

//   const toggleWishlist = async (itemId) => {
//     const isWishlisted = wishlist[itemId];

//     try {
//       const updatedWishlist = { ...wishlist };
//       if (isWishlisted) {
//         await axios.delete(`http://localhost:5000/wishlist/${isWishlisted}`);
//         delete updatedWishlist[itemId];
//       } else {
//         const response = await axios.post("http://localhost:5000/wishlist", {
//           itemId,
//         });
//         updatedWishlist[itemId] = response.data.id;
//       }
//       setWishlist(updatedWishlist);
//     } catch (error) {
//       console.error("Error toggling wishlist:", error);
//     }
//   };

//   const handleAddToBasket = async (name, price, image) => {
//     console.log("Adding to cart:", name, price, image);

//     const itemToAdd = {
//       name: name,
//       price: price,
//       image: image,
//       quantity: 1,
//     };

//     try {
//       await axios.post("http://localhost:5000/cart", itemToAdd);
//     } catch (error) {
//       console.error("Error adding to cart:", error);
//     }
//   };

//   return (
//     <div className="h-screen">
//       <div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 h-[90vh] overflow-auto [&::-webkit-scrollbar]:hidden">
//           {filterSearch.map((item, i) => {
//             const discountedPrice = (item.price * 1.12).toFixed(2);
//             const isWishlisted = !!wishlist[item.id];

//             return (
//               <div key={i} className="bg-transparent rounded-md p-2 flex flex-col items-center relative">
//                 <button
//                   className="absolute top-2 right-2 p-2 text-black rounded-full shadow-md hover:bg-gray-100 transition-colors"
//                   onClick={() => toggleWishlist(item.id)}
//                 >
//                   {isWishlisted ? (
//                     <MdFavorite className="text-red-500" />
//                   ) : (
//                     <MdFavoriteBorder className="text-gray-500" />
//                   )}
//                 </button>

//                 <img
//                   src={item.primaryImage}
//                   alt={item.name}
//                   className="w-full h-64 object-cover mb-4 cursor-pointer shadow-md hover:shadow-lg transition-shadow rounded-md"
//                   onClick={() => navigate("/details", { state: { item } })}
//                 />

//                 <h1 className="text-xl font-medium text-green-800 mb-2 text-center">{item.name}</h1>
//                 <div className="flex items-center gap-2 mb-4">
//                   <span className="text-l font-bold text-green-600">₹{item.price}</span>
//                   <span className="text-l text-gray-500 line-through">₹{discountedPrice}</span>
//                   <span className="bg-[#83C026] text-white text-xs px-2 py-1 rounded-full">12% OFF</span>
//                 </div>
//                 <button
//                   onClick={() => handleAddToBasket(item.name, item.price, item.primaryImage)}
//                   className="w-10/12 bg-green-900 hover:bg-green-950 text-white p-1 text-lg rounded-full transition-colors"
//                 >
//                   Add to Basket
//                 </button>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };


import React, { useContext, useEffect, useState } from "react";
import { context } from "../../context/AppContext";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import axios from "axios"; 

export const SearchItems = ({ searchData = "" }) => {
  const Contextdata = useContext(context);
  const [wishlist, setWishlist] = useState({});
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (Contextdata?.Allplants) {
      setData(Contextdata.Allplants);
    }
  }, [Contextdata.Allplants]); // ✅ Now updates when Allplants changes

  // ✅ Ensure data is an array & searchData is a string
  const filterSearch = (data || []).filter((item) =>
    item.name?.toLowerCase().includes(searchData.toLowerCase().trim())
  );

  const toggleWishlist = async (itemId) => {
    const isWishlisted = wishlist[itemId];

    try {
      const updatedWishlist = { ...wishlist };
      if (isWishlisted) {
        await axios.delete(`http://localhost:5000/wishlist/${isWishlisted}`);
        delete updatedWishlist[itemId];
      } else {
        const response = await axios.post("http://localhost:5000/wishlist", { itemId });
        updatedWishlist[itemId] = response.data.id;
      }
      setWishlist(updatedWishlist);
    } catch (error) {
      console.error("Error toggling wishlist:", error);
    }
  };

  const handleAddToBasket = async (name, price, image) => {
    try {
      await axios.post("http://localhost:5000/cart", {
        name,
        price,
        image,
        quantity: 1,
      });
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  return (
    <div className="h-auto mt-11 ml-11 mr-11 mb-40">
      {data.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">Loading plants...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 ">
          {filterSearch.map((item, i) => {
            const discountedPrice = (item.price * 1.12).toFixed(2);
            const isWishlisted = !!wishlist[item.id];

            return (
              <div key={item.id || i} className="bg-transparent rounded-md p-2 flex flex-col items-center relative">
                <button
                  className="absolute top-2 right-2 p-2 text-black rounded-full shadow-md hover:bg-gray-100 transition-colors"
                  onClick={() => toggleWishlist(item.id)}
                >
                  {isWishlisted ? <MdFavorite className="text-red-500" /> : <MdFavoriteBorder className="text-gray-500" />}
                </button>

                <img
                  src={item.primaryImage}
                  alt={item.name}
                  className="w-full h-64 object-cover mb-4 cursor-pointer shadow-md hover:shadow-lg transition-shadow rounded-md"
                  onClick={() => navigate("/details", { state: { item } })}
                />

                <h1 className="text-xl font-medium text-green-800 mb-2 text-center">{item.name}</h1>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-l font-bold text-green-600">₹{item.price}</span>
                  <span className="text-l text-gray-500 line-through">₹{discountedPrice}</span>
                  <span className="bg-[#83C026] text-white text-xs px-2 py-1 rounded-full">12% OFF</span>
                </div>
                <button
                  onClick={() => handleAddToBasket(item.name, item.price, item.primaryImage)}
                  className="w-10/12 bg-green-900 hover:bg-green-950 text-white p-1 text-lg rounded-full transition-colors"
                >
                  Add to Basket
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
