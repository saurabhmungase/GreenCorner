
import React, { useContext, useEffect, useState } from "react";
import { context } from "../../context/AppContext";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import FilterSection from "./FilterSection";
import axios from "axios";

const Plants = () => {
  const Contextdata = useContext(context);
  console.log(Contextdata);
  
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState("");
  const [wishlist, setWishlist] = useState({});
  const [AddToCart, setAddToCart] = useState({
    name: "",
    price: "",
    image: "",
    quantity: 1,
  });
  const [filteredData, setFilteredData] = useState([]);
  const [Data, setData] = useState([]);
  const [plantcategory, setPlantCategory] = useState([]);
  const [sortprice, setSortPrice] = useState(1000);

  useEffect(() => {
    setData(Contextdata.Allplants);
    setFilteredData(Contextdata.Allplants);
  }, [Contextdata]);

  const handleCategory = (selectedCategories) => {
    setPlantCategory(selectedCategories);
    setSortBy(""); // Reset sorting
  };

  const handlePrice = (price) => {
    setSortPrice(price);
    setSortBy(""); // Reset sorting
  };

  useEffect(() => {
    let filtered = Data;

    if (plantcategory.length > 0) {
      filtered = filtered.filter((item) => {
        const categories = item.categories || [];
        return categories.some((category) =>
          plantcategory.includes(category.toLowerCase())
        );
      });
    }

    filtered = filtered.filter((item) => item.price <= sortprice);
    setFilteredData(filtered);
  }, [plantcategory, sortprice, Data]);

  const handleSort = (type) => {
    setSortBy(type);
  };

  useEffect(() => {
    let sortedData = [...filteredData];

    if (sortBy === "Price") {
      sortedData.sort((a, b) => a.price - b.price);
    } else if (sortBy === "Most New") {
      sortedData.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
    }

    setFilteredData(sortedData);
  }, [sortBy]);

  useEffect(() => {
    axios.get("http://localhost:5000/wishlist")
      .then((res) => {
        const initialWishlist = {};
        res.data.forEach((item) => {
          initialWishlist[item.itemId] = item.id;
        });
        setWishlist(initialWishlist);
      })
      .catch((err) => console.error("Error fetching wishlist:", err));
  }, []);

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
    console.log("Adding to cart:", name, price, image);
  
    const itemToAdd = {
      name: name,
      price: price,
      image: image,
      quantity: 1,
    };
  
    try {
      await axios.post("http://localhost:5000/cart", itemToAdd);
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };
  

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-6">
      <FilterSection handleCategory={handleCategory} handlePrice={handlePrice} />

      <section className="flex-1 bg-transparent">
        <div className="flex justify-between items-center bg-transparent mb-2">
          <h2 className="text-sm font-bold">Sort:</h2>
          <div className="flex gap-2">
            <button
              className={`px-3 py-1 border text-sm rounded-md ${
                sortBy === "Price" ? "bg-green-700 text-white" : "bg-gray-100 hover:bg-gray-200"
              } transition-colors`}
              onClick={() => handleSort("Price")}
            >
              Price
            </button>
            <button
              className={`px-3 py-1 border text-sm rounded-md ${
                sortBy === "Most New" ? "bg-green-700 text-white" : "bg-gray-100 hover:bg-gray-200"
              } transition-colors`}
              onClick={() => handleSort("Most New")}
            >
              Most New
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 h-[90vh] overflow-auto [&::-webkit-scrollbar]:hidden">
          {filteredData.map((item, i) => {
            const discountedPrice = (item.price * 1.12).toFixed(2);
            const isWishlisted = !!wishlist[item.id];

            return (
              <div key={i} className="bg-transparent rounded-md p-2 flex flex-col items-center relative">
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
                onClick={() => handleAddToBasket(item.name , item.price , item.primaryImage)}
                 className="w-10/12 bg-green-900 hover:bg-green-950 text-white p-1 text-lg rounded-full transition-colors">
                  Add to Basket
                </button>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Plants;





// import React, { useContext, useEffect, useState } from "react";
// import { context } from "../../context/AppContext";
// import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
// import { useNavigate } from "react-router-dom";
// import FilterSection from "./FilterSection";
// import axios from "axios";

// const Plants = () => {
//   const Contextdata = useContext(context);
//   const navigate = useNavigate();
//   const [sortBy, setSortBy] = useState("");
//   const [wishlist, setWishlist] = useState({});
//   const [filteredData, setFilteredData] = useState([]);
//   const [Data, setData] = useState([]);
//   const [plantcategory, setPlantCategory] = useState([]);
//   const [sortprice, setSortPrice] = useState(1000);

//   // Fetch initial data from context
//   useEffect(() => {
//     setData(Contextdata.Allplants);
//     setFilteredData(Contextdata.Allplants);
//   }, [Contextdata.Allplants]);

//   // Fetch wishlist data
//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/wishlist")
//       .then((res) => {
//         const initialWishlist = {};
//         res.data.forEach((item) => {
//           initialWishlist[item.itemId] = item.id;
//         });
//         setWishlist(initialWishlist);
//       })
//       .catch((err) => console.error("Error fetching wishlist:", err));
//   }, []);

//   // Handle category filter
//   const handleCategory = (selectedCategories) => {
//     setPlantCategory(selectedCategories);
//     setSortBy(""); // Reset sorting
//   };

//   // Handle price filter
//   const handlePrice = (price) => {
//     setSortPrice(price);
//     setSortBy(""); // Reset sorting
//   };

//   // Apply filters and sorting
//   useEffect(() => {
//     let filtered = Data;

//     if (plantcategory.length > 0) {
//       filtered = filtered.filter((item) => {
//         const categories = item.categories || [];
//         return categories.some((category) =>
//           plantcategory.includes(category.toLowerCase())
//         );
//       });
//     }

//     filtered = filtered.filter((item) => item.price <= sortprice);

//     if (sortBy === "Price") {
//       filtered.sort((a, b) => a.price - b.price);
//     } else if (sortBy === "Most New") {
//       filtered.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
//     }

//     setFilteredData(filtered);
//   }, [plantcategory, sortprice, Data, sortBy]);

//   // Toggle wishlist
//   const toggleWishlist = async (itemId) => {
//     const isWishlisted = wishlist[itemId];

//     try {
//       if (isWishlisted) {
//         await axios.delete(`http://localhost:5000/wishlist/${isWishlisted}`);
//         setWishlist((prev) => {
//           const updatedWishlist = { ...prev };
//           delete updatedWishlist[itemId];
//           return updatedWishlist;
//         });
//       } else {
//         const response = await axios.post("http://localhost:5000/wishlist", { itemId });
//         setWishlist((prev) => ({
//           ...prev,
//           [itemId]: response.data.id,
//         }));
//       }
//     } catch (error) {
//       console.error("Error toggling wishlist:", error);
//     }
//   };

//   // Add to cart
//   const handleAddToBasket = async (name, price, image) => {
//     try {
//       await axios.post("http://localhost:5000/cart", { name, price, image, quantity: 1 });
//       alert("Item added to cart!");
//     } catch (error) {
//       console.error("Error adding to cart:", error);
//     }
//   };

//   return (
//     <div className="flex flex-col lg:flex-row gap-6 p-6">
//       <FilterSection handleCategory={handleCategory} handlePrice={handlePrice} />

//       <section className="flex-1 bg-transparent">
//         <div className="flex justify-between items-center bg-transparent mb-2">
//           <h2 className="text-sm font-bold">Sort:</h2>
//           <div className="flex gap-2">
//             <button
//               className={`px-3 py-1 border text-sm rounded-md ${
//                 sortBy === "Price" ? "bg-green-700 text-white" : "bg-gray-100 hover:bg-gray-200"
//               } transition-colors`}
//               onClick={() => handleSort("Price")}
//             >
//               Price
//             </button>
//             <button
//               className={`px-3 py-1 border text-sm rounded-md ${
//                 sortBy === "Most New" ? "bg-green-700 text-white" : "bg-gray-100 hover:bg-gray-200"
//               } transition-colors`}
//               onClick={() => handleSort("Most New")}
//             >
//               Most New
//             </button>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 h-[90vh] overflow-auto [&::-webkit-scrollbar]:hidden">
//           {filteredData.map((item, i) => {
//             const discountedPrice = (item.price * 1.12).toFixed(2);
//             const isWishlisted = !!wishlist[item.id];

//             return (
//               <div key={i} className="bg-transparent rounded-md p-2 flex flex-col items-center relative">
//                 <button
//                   className="absolute top-2 right-2 p-2 text-black rounded-full shadow-md hover:bg-gray-100 transition-colors"
//                   onClick={() => toggleWishlist(item.id)}
//                   aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
//                 >
//                   {isWishlisted ? <MdFavorite className="text-red-500" /> : <MdFavoriteBorder className="text-gray-500" />}
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
//       </section>
//     </div>
//   );
// };

// export default Plants;















// import React, { useContext, useEffect, useState } from "react";
// import { context } from "../../context/AppContext";
// import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
// import { useNavigate } from "react-router-dom";
// import FilterSection from "./FilterSection";
// import axios from "axios";

// const Plants = () => {
//   const Contextdata = useContext(context);
//   const navigate = useNavigate();
//   const [sortBy, setSortBy] = useState("");
//   const [wishlist, setWishlist] = useState({});
//   const [filteredData, setFilteredData] = useState([]);
//   const [Data, setData] = useState([]);
//   const [plantcategory, setPlantCategory] = useState([]);
//   const [sortprice, setSortPrice] = useState(1000);

//   useEffect(() => {
//     setData(Contextdata.Allplants);
//     setFilteredData(Contextdata.Allplants);
//   }, [Contextdata]);

//   const handleCategory = (selectedCategories) => {
//     setPlantCategory(selectedCategories);
//     setSortBy(""); // Reset sorting
//   };

//   const handlePrice = (price) => {
//     setSortPrice(price);
//     setSortBy(""); // Reset sorting
//   };

//   useEffect(() => {
//     let filtered = Data;

//     if (plantcategory.length > 0) {
//       filtered = filtered.filter((item) => {
//         const categories = item.categories || [];
//         return categories.some((category) =>
//           plantcategory.includes(category.toLowerCase())
//         );
//       });
//     }

//     filtered = filtered.filter((item) => item.price <= sortprice);
//     setFilteredData(filtered);
//   }, [plantcategory, sortprice, Data]);

//   const handleSort = (type) => {
//     setSortBy(type);
//   };

//   useEffect(() => {
//     let sortedData = [...filteredData];

//     if (sortBy === "Price") {
//       sortedData.sort((a, b) => a.price - b.price);
//     } else if (sortBy === "Most New") {
//       sortedData.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
//     }

//     setFilteredData(sortedData);
//   }, [sortBy]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/wishlist")
//       .then((res) => {
//         const initialWishlist = {};
//         res.data.forEach((item) => {
//           initialWishlist[item.itemId] = item.id;
//         });
//         setWishlist(initialWishlist);
//       })
//       .catch((err) => console.error("Error fetching wishlist:", err));
//   }, []);

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

//   const handleAddToBasket = async (item) => {
//     try {
//       await axios.post("http://localhost:5000/cart", item);
//       alert("Item added to cart!");
//     } catch (error) {
//       console.error("Error adding to cart:", error);
//     }
//   };

//   return (
//     <div className="flex flex-col lg:flex-row gap-6 p-6 bg-gray-50 min-h-screen">
//       {/* Filter Section */}
//       <FilterSection handleCategory={handleCategory} handlePrice={handlePrice} />

//       {/* Main Content */}
//       <section className="flex-1">
//         {/* Sorting Controls */}
//         <div className="flex justify-between items-center mb-6 p-4 bg-white rounded-lg shadow-sm">
//           <h2 className="text-lg font-semibold text-green-900">Sort By:</h2>
//           <div className="flex gap-3">
//             <button
//               className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
//                 sortBy === "Price"
//                   ? "bg-green-700 text-white"
//                   : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//               }`}
//               onClick={() => handleSort("Price")}
//             >
//               Price
//             </button>
//             <button
//               className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
//                 sortBy === "Most New"
//                   ? "bg-green-700 text-white"
//                   : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//               }`}
//               onClick={() => handleSort("Most New")}
//             >
//               Most New
//             </button>
//           </div>
//         </div>

//         {/* Plant Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {filteredData.map((item, i) => {
//             const discountedPrice = (item.price * 1.12).toFixed(2);
//             const isWishlisted = !!wishlist[item.id];

//             return (
//               <div
//                 key={i}
//                 className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 flex flex-col items-center relative"
//               >
//                 {/* Wishlist Button */}
//                 <button
//                   className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
//                   onClick={() => toggleWishlist(item.id)}
//                 >
//                   {isWishlisted ? (
//                     <MdFavorite className="text-red-500 text-xl" />
//                   ) : (
//                     <MdFavoriteBorder className="text-gray-500 text-xl" />
//                   )}
//                 </button>

//                 {/* Plant Image */}
//                 <img
//                   src={item.primaryImage}
//                   alt={item.name}
//                   className="w-full h-48 object-cover rounded-md mb-4 cursor-pointer"
//                   onClick={() => navigate("/details", { state: { item } })}
//                 />

//                 {/* Plant Name */}
//                 <h1 className="text-xl font-semibold text-green-900 mb-2 text-center">
//                   {item.name}
//                 </h1>

//                 {/* Price and Discount */}
//                 <div className="flex items-center gap-2 mb-4">
//                   <span className="text-lg font-bold text-green-700">₹{item.price}</span>
//                   <span className="text-lg text-gray-500 line-through">₹{discountedPrice}</span>
//                   <span className="bg-[#83C026] text-white text-xs px-2 py-1 rounded-full">
//                     12% OFF
//                   </span>
//                 </div>

//                 {/* Add to Basket Button */}
//                 <button
//                   onClick={() => handleAddToBasket(item)}
//                   className="w-full bg-green-800 hover:bg-green-900 text-white py-2 text-lg rounded-lg transition-colors"
//                 >
//                   Add to Basket
//                 </button>
//               </div>
//             );
//           })}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Plants;


// import React, { useContext, useEffect, useState } from "react";
// import { context } from "../../context/AppContext";
// import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
// import { useNavigate } from "react-router-dom";
// import FilterSection from "./FilterSection";
// import axios from "axios";
// import useLazyLoad from "../../hooks/useLazyLoad"; // Import the lazy loading hook

// const Plants = () => {
//   const Contextdata = useContext(context);
//   const navigate = useNavigate();
//   const [sortBy, setSortBy] = useState("");
//   const [wishlist, setWishlist] = useState({});
//   const [filteredData, setFilteredData] = useState([]);
//   const [Data, setData] = useState([]);
//   const [plantcategory, setPlantCategory] = useState([]);
//   const [sortprice, setSortPrice] = useState(1000);

//   useEffect(() => {
//     setData(Contextdata.Allplants);
//     setFilteredData(Contextdata.Allplants);
//   }, [Contextdata]);

//   const handleCategory = (selectedCategories) => {
//     setPlantCategory(selectedCategories);
//     setSortBy(""); // Reset sorting
//   };

//   const handlePrice = (price) => {
//     setSortPrice(price);
//     setSortBy(""); // Reset sorting
//   };

//   useEffect(() => {
//     let filtered = Data;

//     if (plantcategory.length > 0) {
//       filtered = filtered.filter((item) => {
//         const categories = item.categories || [];
//         return categories.some((category) =>
//           plantcategory.includes(category.toLowerCase())
//         );
//       });
//     }

//     filtered = filtered.filter((item) => item.price <= sortprice);
//     setFilteredData(filtered);
//   }, [plantcategory, sortprice, Data]);

//   const handleSort = (type) => {
//     setSortBy(type);
//   };

//   useEffect(() => {
//     let sortedData = [...filteredData];

//     if (sortBy === "Price") {
//       sortedData.sort((a, b) => a.price - b.price);
//     } else if (sortBy === "Most New") {
//       sortedData.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
//     }

//     setFilteredData(sortedData);
//   }, [sortBy]);

//   useEffect(() => {
//     axios.get("http://localhost:5000/wishlist")
//       .then((res) => {
//         const initialWishlist = {};
//         res.data.forEach((item) => {
//           initialWishlist[item.itemId] = item.id;
//         });
//         setWishlist(initialWishlist);
//       })
//       .catch((err) => console.error("Error fetching wishlist:", err));
//   }, []);

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

//   return (
//     <div className="flex flex-col lg:flex-row gap-6 p-6">
//       <FilterSection handleCategory={handleCategory} handlePrice={handlePrice} />

//       <section className="flex-1 bg-transparent">
//         <div className="flex justify-between items-center bg-transparent mb-2">
//           <h2 className="text-sm font-bold">Sort:</h2>
//           <div className="flex gap-2">
//             <button
//               className={`px-3 py-1 border text-sm rounded-md ${
//                 sortBy === "Price" ? "bg-green-700 text-white" : "bg-gray-100 hover:bg-gray-200"
//               } transition-colors`}
//               onClick={() => handleSort("Price")}
//             >
//               Price
//             </button>
//             <button
//               className={`px-3 py-1 border text-sm rounded-md ${
//                 sortBy === "Most New" ? "bg-green-700 text-white" : "bg-gray-100 hover:bg-gray-200"
//               } transition-colors`}
//               onClick={() => handleSort("Most New")}
//             >
//               Most New
//             </button>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 h-[90vh] overflow-auto [&::-webkit-scrollbar]:hidden">
//           {filteredData.map((item, i) => {
//             const discountedPrice = (item.price * 1.12).toFixed(2);
//             const isWishlisted = !!wishlist[item.id];

//             const isVisible = useLazyLoad(); // Lazy load hook

//             return (
//               <div key={i} className="bg-transparent rounded-md p-2 flex flex-col items-center relative">
//                 <button
//                   className="absolute top-2 right-2 p-2 text-black rounded-full shadow-md hover:bg-gray-100 transition-colors"
//                   onClick={() => toggleWishlist(item.id)}
//                 >
//                   {isWishlisted ? <MdFavorite className="text-red-500" /> : <MdFavoriteBorder className="text-gray-500" />}
//                 </button>

//                 {isVisible ? (
//                   <img
//                     src={item.primaryImage}
//                     alt={item.name}
//                     className="w-full h-64 object-cover mb-4 cursor-pointer shadow-md hover:shadow-lg transition-shadow rounded-md"
//                     onClick={() => navigate("/details", { state: { item } })}
//                   />
//                 ) : (
//                   <div className="w-full h-64 bg-gray-300 rounded-md mb-4"></div>
//                 )}

//                 <h1 className="text-xl font-medium text-green-800 mb-2 text-center">{item.name}</h1>
//                 <div className="flex items-center gap-2 mb-4">
//                   <span className="text-l font-bold text-green-600">₹{item.price}</span>
//                   <span className="text-l text-gray-500 line-through">₹{discountedPrice}</span>
//                   <span className="bg-[#83C026] text-white text-xs px-2 py-1 rounded-full">12% OFF</span>
//                 </div>
//                 <button className="w-10/12 bg-green-900 hover:bg-green-950 text-white p-1 text-lg rounded-full transition-colors">
//                   Add to Basket
//                 </button>
//               </div>
//             );
//           })}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Plants;


// import React, { useContext, useEffect, useState } from "react";
// import { context } from "../../context/AppContext";
// import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
// import { useNavigate } from "react-router-dom";
// import FilterSection from "./FilterSection";
// import axios from "axios";
// import LazyLoad from "react-lazyload"; // Import the react-lazyload library

// const Plants = () => {
//   const Contextdata = useContext(context);
//   const navigate = useNavigate();
//   const [sortBy, setSortBy] = useState("");
//   const [wishlist, setWishlist] = useState({});
//   const [filteredData, setFilteredData] = useState([]);
//   const [Data, setData] = useState([]);
//   const [plantcategory, setPlantCategory] = useState([]);
//   const [sortprice, setSortPrice] = useState(1000);

//   useEffect(() => {
//     setData(Contextdata.Allplants);
//     setFilteredData(Contextdata.Allplants);
//   }, [Contextdata]);

//   const handleCategory = (selectedCategories) => {
//     setPlantCategory(selectedCategories);
//     setSortBy(""); // Reset sorting
//   };

//   const handlePrice = (price) => {
//     setSortPrice(price);
//     setSortBy(""); // Reset sorting
//   };

//   useEffect(() => {
//     let filtered = Data;

//     if (plantcategory.length > 0) {
//       filtered = filtered.filter((item) => {
//         const categories = item.categories || [];
//         return categories.some((category) =>
//           plantcategory.includes(category.toLowerCase())
//         );
//       });
//     }

//     filtered = filtered.filter((item) => item.price <= sortprice);
//     setFilteredData(filtered);
//   }, [plantcategory, sortprice, Data]);

//   const handleSort = (type) => {
//     setSortBy(type);
//   };

//   useEffect(() => {
//     let sortedData = [...filteredData];

//     if (sortBy === "Price") {
//       sortedData.sort((a, b) => a.price - b.price);
//     } else if (sortBy === "Most New") {
//       sortedData.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
//     }

//     setFilteredData(sortedData);
//   }, [sortBy]);

//   useEffect(() => {
//     axios.get("http://localhost:5000/wishlist")
//       .then((res) => {
//         const initialWishlist = {};
//         res.data.forEach((item) => {
//           initialWishlist[item.itemId] = item.id;
//         });
//         setWishlist(initialWishlist);
//       })
//       .catch((err) => console.error("Error fetching wishlist:", err));
//   }, []);

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

//   return (
//     <div className="flex flex-col lg:flex-row gap-6 p-6">
//       <FilterSection handleCategory={handleCategory} handlePrice={handlePrice} />

//       <section className="flex-1 bg-transparent">
//         <div className="flex justify-between items-center bg-transparent mb-2">
//           <h2 className="text-sm font-bold">Sort:</h2>
//           <div className="flex gap-2">
//             <button
//               className={`px-3 py-1 border text-sm rounded-md ${
//                 sortBy === "Price" ? "bg-green-700 text-white" : "bg-gray-100 hover:bg-gray-200"
//               } transition-colors`}
//               onClick={() => handleSort("Price")}
//             >
//               Price
//             </button>
//             <button
//               className={`px-3 py-1 border text-sm rounded-md ${
//                 sortBy === "Most New" ? "bg-green-700 text-white" : "bg-gray-100 hover:bg-gray-200"
//               } transition-colors`}
//               onClick={() => handleSort("Most New")}
//             >
//               Most New
//             </button>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 h-[90vh] overflow-auto [&::-webkit-scrollbar]:hidden">
//           {filteredData.map((item, i) => {
//             const discountedPrice = (item.price * 1.12).toFixed(2);
//             const isWishlisted = !!wishlist[item.id];

//             return (
//               <div key={i} className="bg-transparent rounded-md p-2 flex flex-col items-center relative">
//                 <button
//                   className="absolute top-2 right-2 p-2 text-black rounded-full shadow-md hover:bg-gray-100 transition-colors"
//                   onClick={() => toggleWishlist(item.id)}
//                 >
//                   {isWishlisted ? <MdFavorite className="text-red-500" /> : <MdFavoriteBorder className="text-gray-500" />}
//                 </button>

//                 {/* Lazy load the image using react-lazyload */}
//                 <LazyLoad height={250} offset={100} once>
//                   <img
//                     src={item.primaryImage}
//                     alt={item.name}
//                     className="w-full h-64 object-cover mb-4 cursor-pointer shadow-md hover:shadow-lg transition-shadow rounded-md"
//                     onClick={() => navigate("/details", { state: { item } })}
//                   />
//                 </LazyLoad>

//                 <h1 className="text-xl font-medium text-green-800 mb-2 text-center">{item.name}</h1>
//                 <div className="flex items-center gap-2 mb-4">
//                   <span className="text-l font-bold text-green-600">₹{item.price}</span>
//                   <span className="text-l text-gray-500 line-through">₹{discountedPrice}</span>
//                   <span className="bg-[#83C026] text-white text-xs px-2 py-1 rounded-full">12% OFF</span>
//                 </div>
//                 <button className="w-10/12 bg-green-900 hover:bg-green-950 text-white p-1 text-lg rounded-full transition-colors">
//                   Add to Basket
//                 </button>
//               </div>
//             );
//           })}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Plants;


// import React, { useContext, useEffect, useState } from "react";
// import { context } from "../../context/AppContext";
// import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
// import { useNavigate } from "react-router-dom";
// import FilterSection from "./FilterSection";
// import axios from "axios";
// import LazyLoad from "react-lazyload"; // Import the react-lazyload library

// const Plants = () => {
//   const Contextdata = useContext(context);
//   const navigate = useNavigate();
//   const [sortBy, setSortBy] = useState("");
//   const [wishlist, setWishlist] = useState({});
//   const [filteredData, setFilteredData] = useState([]);
//   const [Data, setData] = useState([]);
//   const [plantcategory, setPlantCategory] = useState([]);
//   const [sortprice, setSortPrice] = useState(1000);

//   useEffect(() => {
//     setData(Contextdata.Allplants);
//     setFilteredData(Contextdata.Allplants);
//   }, [Contextdata]);

//   const handleCategory = (selectedCategories) => {
//     setPlantCategory(selectedCategories);
//     setSortBy(""); // Reset sorting
//   };

//   const handlePrice = (price) => {
//     setSortPrice(price);
//     setSortBy(""); // Reset sorting
//   };

//   useEffect(() => {
//     let filtered = Data;

//     if (plantcategory.length > 0) {
//       filtered = filtered.filter((item) => {
//         const categories = item.categories || [];
//         return categories.some((category) =>
//           plantcategory.includes(category.toLowerCase())
//         );
//       });
//     }

//     filtered = filtered.filter((item) => item.price <= sortprice);
//     setFilteredData(filtered);
//   }, [plantcategory, sortprice, Data]);

//   const handleSort = (type) => {
//     setSortBy(type);
//   };

//   useEffect(() => {
//     let sortedData = [...filteredData];

//     if (sortBy === "Price") {
//       sortedData.sort((a, b) => a.price - b.price);
//     } else if (sortBy === "Most New") {
//       sortedData.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
//     }

//     setFilteredData(sortedData);
//   }, [sortBy]);

//   useEffect(() => {
//     axios.get("http://localhost:5000/wishlist")
//       .then((res) => {
//         const initialWishlist = {};
//         res.data.forEach((item) => {
//           initialWishlist[item.itemId] = item.id;
//         });
//         setWishlist(initialWishlist);
//       })
//       .catch((err) => console.error("Error fetching wishlist:", err));
//   }, []);

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

//   return (
//     <div className="flex flex-col lg:flex-row gap-6 p-6">
//       <FilterSection handleCategory={handleCategory} handlePrice={handlePrice} />

//       <section className="flex-1 bg-transparent">
//         <div className="flex justify-between items-center bg-transparent mb-2">
//           <h2 className="text-sm font-bold">Sort:</h2>
//           <div className="flex gap-2">
//             <button
//               className={`px-3 py-1 border text-sm rounded-md ${
//                 sortBy === "Price" ? "bg-green-700 text-white" : "bg-gray-100 hover:bg-gray-200"
//               } transition-colors`}
//               onClick={() => handleSort("Price")}
//             >
//               Price
//             </button>
//             <button
//               className={`px-3 py-1 border text-sm rounded-md ${
//                 sortBy === "Most New" ? "bg-green-700 text-white" : "bg-gray-100 hover:bg-gray-200"
//               } transition-colors`}
//               onClick={() => handleSort("Most New")}
//             >
//               Most New
//             </button>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 h-[90vh] overflow-auto [&::-webkit-scrollbar]:hidden">
//           {filteredData.map((item, i) => {
//             const discountedPrice = (item.price * 1.12).toFixed(2);
//             const isWishlisted = !!wishlist[item.id];

//             return (
//               <div key={i} className="bg-transparent rounded-md p-2 flex flex-col items-center relative">
//                 <button
//                   className="absolute top-2 right-2 p-2 text-black rounded-full shadow-md hover:bg-gray-100 transition-colors"
//                   onClick={() => toggleWishlist(item.id)}
//                 >
//                   {isWishlisted ? <MdFavorite className="text-red-500" /> : <MdFavoriteBorder className="text-gray-500" />}
//                 </button>

//                 {/* Lazy load the image using react-lazyload */}
//                 <LazyLoad height={300} offset={200}>
//                   <img
//                     src={item.primaryImage}
//                     alt={item.name}
//                     className="w-full h-64 object-cover mb-4 cursor-pointer shadow-md hover:shadow-lg transition-shadow rounded-md"
//                     onClick={() => navigate("/details", { state: { item } })}
//                   />
//                 </LazyLoad>

//                 <h1 className="text-xl font-medium text-green-800 mb-2 text-center">{item.name}</h1>
//                 <div className="flex items-center gap-2 mb-4">
//                   <span className="text-l font-bold text-green-600">₹{item.price}</span>
//                   <span className="text-l text-gray-500 line-through">₹{discountedPrice}</span>
//                   <span className="bg-[#83C026] text-white text-xs px-2 py-1 rounded-full">12% OFF</span>
//                 </div>
//                 <button className="w-10/12 bg-green-900 hover:bg-green-950 text-white p-1 text-lg rounded-full transition-colors">
//                   Add to Basket
//                 </button>
//               </div>
//             );
//           })}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Plants;


// import { useContext, useEffect, useState, useCallback } from "react"
// import { context } from "../../context/AppContext"
// import { MdFavorite, MdFavoriteBorder } from "react-icons/md"
// import { useNavigate } from "react-router-dom"
// import FilterSection from "./FilterSection"
// import axios from "axios"
// import { FixedSizeList as List } from "react-window"
// import InfiniteLoader from "react-window-infinite-loader"
// import AutoSizer from "react-virtualized-auto-sizer"

// const Plants = () => {
//   const Contextdata = useContext(context)
//   const navigate = useNavigate()
//   const [sortBy, setSortBy] = useState("")
//   const [wishlist, setWishlist] = useState({})
//   const [filteredData, setFilteredData] = useState([])
//   const [Data, setData] = useState([])
//   const [plantcategory, setPlantCategory] = useState([])
//   const [sortprice, setSortPrice] = useState(1000)
//   const [hasNextPage, setHasNextPage] = useState(true)
//   const [isNextPageLoading, setIsNextPageLoading] = useState(false)

//   useEffect(() => {
//     loadInitialData()
//   }, [])

//   const loadInitialData = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/plants?_page=1&_limit=20")
//       setData(response.data)
//       setFilteredData(response.data)
//       setHasNextPage(response.data.length === 20)
//     } catch (error) {
//       console.error("Error fetching initial data:", error)
//     }
//   }

//   const loadMoreItems = useCallback(
//     async (startIndex, stopIndex) => {
//       if (isNextPageLoading) return
//       setIsNextPageLoading(true)
//       try {
//         const response = await axios.get(
//           `http://localhost:5000/plants?_start=${startIndex}&_limit=${stopIndex - startIndex + 1}`,
//         )
//         setFilteredData((prevData) => [...prevData, ...response.data])
//         setHasNextPage(response.data.length === stopIndex - startIndex + 1)
//       } catch (error) {
//         console.error("Error fetching more items:", error)
//       }
//       setIsNextPageLoading(false)
//     },
//     [isNextPageLoading],
//   )

//   const handleCategory = (selectedCategories) => {
//     setPlantCategory(selectedCategories)
//     setSortBy("") // Reset sorting
//     applyFilters(selectedCategories, sortprice)
//   }

//   const handlePrice = (price) => {
//     setSortPrice(price)
//     setSortBy("") // Reset sorting
//     applyFilters(plantcategory, price)
//   }

//   const applyFilters = async (categories, price) => {
//     try {
//       let url = `http://localhost:5000/plants?_page=1&_limit=20&price_lte=${price}`
//       if (categories.length > 0) {
//         url += `&categories=${categories.join(",")}`
//       }
//       const response = await axios.get(url)
//       setFilteredData(response.data)
//       setHasNextPage(response.data.length === 20)
//     } catch (error) {
//       console.error("Error applying filters:", error)
//     }
//   }

//   const handleSort = (type) => {
//     setSortBy(type)
//     const sortedData = [...filteredData]
//     if (type === "Price") {
//       sortedData.sort((a, b) => a.price - b.price)
//     } else if (type === "Most New") {
//       sortedData.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded))
//     }
//     setFilteredData(sortedData)
//   }

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/wishlist")
//       .then((res) => {
//         const initialWishlist = {}
//         res.data.forEach((item) => {
//           initialWishlist[item.itemId] = item.id
//         })
//         setWishlist(initialWishlist)
//       })
//       .catch((err) => console.error("Error fetching wishlist:", err))
//   }, [])

//   const toggleWishlist = async (itemId) => {
//     const isWishlisted = wishlist[itemId]

//     try {
//       const updatedWishlist = { ...wishlist }
//       if (isWishlisted) {
//         await axios.delete(`http://localhost:5000/wishlist/${isWishlisted}`)
//         delete updatedWishlist[itemId]
//       } else {
//         const response = await axios.post("http://localhost:5000/wishlist", { itemId })
//         updatedWishlist[itemId] = response.data.id
//       }
//       setWishlist(updatedWishlist)
//     } catch (error) {
//       console.error("Error toggling wishlist:", error)
//     }
//   }

//   const itemCount = hasNextPage ? filteredData.length + 1 : filteredData.length
//   const loadMoreItems = isNextPageLoading ? () => {} : loadMoreItems
//   const isItemLoaded = (index) => !hasNextPage || index < filteredData.length

//   const PlantItem = ({ index, style }) => {
//     if (!isItemLoaded(index)) {
//       return <div style={style}>Loading...</div>
//     }

//     const item = filteredData[index]
//     const discountedPrice = (item.price * 1.12).toFixed(2)
//     const isWishlisted = !!wishlist[item.id]

//     return (
//       <div style={style} className="p-2 flex flex-col items-center relative">
//         <button
//           className="absolute top-2 right-2 p-2 text-black rounded-full shadow-md hover:bg-gray-100 transition-colors"
//           onClick={() => toggleWishlist(item.id)}
//         >
//           {isWishlisted ? <MdFavorite className="text-red-500" /> : <MdFavoriteBorder className="text-gray-500" />}
//         </button>

//         <img
//           src={item.primaryImage || "/placeholder.svg"}
//           alt={item.name}
//           className="w-full h-64 object-cover mb-4 cursor-pointer shadow-md hover:shadow-lg transition-shadow rounded-md"
//           onClick={() => navigate("/details", { state: { item } })}
//           loading="lazy"
//         />

//         <h1 className="text-xl font-medium text-green-800 mb-2 text-center">{item.name}</h1>
//         <div className="flex items-center gap-2 mb-4">
//           <span className="text-l font-bold text-green-600">₹{item.price}</span>
//           <span className="text-l text-gray-500 line-through">₹{discountedPrice}</span>
//           <span className="bg-[#83C026] text-white text-xs px-2 py-1 rounded-full">12% OFF</span>
//         </div>
//         <button className="w-10/12 bg-green-900 hover:bg-green-950 text-white p-1 text-lg rounded-full transition-colors">
//           Add to Basket
//         </button>
//       </div>
//     )
//   }

//   return (
//     <div className="flex flex-col lg:flex-row gap-6 p-6">
//       <FilterSection handleCategory={handleCategory} handlePrice={handlePrice} />

//       <section className="flex-1 bg-transparent">
//         <div className="flex justify-between items-center bg-transparent mb-2">
//           <h2 className="text-sm font-bold">Sort:</h2>
//           <div className="flex gap-2">
//             <button
//               className={`px-3 py-1 border text-sm rounded-md ${
//                 sortBy === "Price" ? "bg-green-700 text-white" : "bg-gray-100 hover:bg-gray-200"
//               } transition-colors`}
//               onClick={() => handleSort("Price")}
//             >
//               Price
//             </button>
//             <button
//               className={`px-3 py-1 border text-sm rounded-md ${
//                 sortBy === "Most New" ? "bg-green-700 text-white" : "bg-gray-100 hover:bg-gray-200"
//               } transition-colors`}
//               onClick={() => handleSort("Most New")}
//             >
//               Most New
//             </button>
//           </div>
//         </div>

//         <div className="h-[90vh]">
//           <AutoSizer>
//             {({ height, width }) => (
//               <InfiniteLoader isItemLoaded={isItemLoaded} itemCount={itemCount} loadMoreItems={loadMoreItems}>
//                 {({ onItemsRendered, ref }) => (
//                   <List
//                     className="List"
//                     height={height}
//                     itemCount={itemCount}
//                     itemSize={400}
//                     onItemsRendered={onItemsRendered}
//                     ref={ref}
//                     width={width}
//                   >
//                     {PlantItem}
//                   </List>
//                 )}
//               </InfiniteLoader>
//             )}
//           </AutoSizer>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default Plants



// import React, { useContext, useEffect, useState } from "react";
// import { context } from "../../context/AppContext";
// import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
// import { useNavigate } from "react-router-dom";
// import FilterSection from "./FilterSection";
// import axios from "axios";
// // import LazyLoad from "src\components\utils\LazyLoad.jsx"; // Import the custom LazyLoad component
// import LazyLoad from "src/components/utils/LazyLoad.jsx"; // Corrected path
// import LazyLoad from "../components/utils/LazyLoad.jsx";  // Relative path


// const Plants = () => {
//   const Contextdata = useContext(context);
//   const navigate = useNavigate();
//   const [sortBy, setSortBy] = useState("");
//   const [wishlist, setWishlist] = useState({});
//   const [filteredData, setFilteredData] = useState([]);
//   const [Data, setData] = useState([]);
//   const [plantcategory, setPlantCategory] = useState([]);
//   const [sortprice, setSortPrice] = useState(1000);

//   useEffect(() => {
//     setData(Contextdata.Allplants);
//     setFilteredData(Contextdata.Allplants);
//   }, [Contextdata]);

//   const handleCategory = (selectedCategories) => {
//     setPlantCategory(selectedCategories);
//     setSortBy(""); // Reset sorting
//   };

//   const handlePrice = (price) => {
//     setSortPrice(price);
//     setSortBy(""); // Reset sorting
//   };

//   useEffect(() => {
//     let filtered = Data;

//     if (plantcategory.length > 0) {
//       filtered = filtered.filter((item) => {
//         const categories = item.categories || [];
//         return categories.some((category) =>
//           plantcategory.includes(category.toLowerCase())
//         );
//       });
//     }

//     filtered = filtered.filter((item) => item.price <= sortprice);
//     setFilteredData(filtered);
//   }, [plantcategory, sortprice, Data]);

//   const handleSort = (type) => {
//     setSortBy(type);
//   };

//   useEffect(() => {
//     // Create a copy of the filtered data
//     let sortedData = [...filteredData];
  
//     // Apply sorting based on the selected sort type
//     if (sortBy === "Price") {
//       sortedData.sort((a, b) => a.price - b.price);
//     } else if (sortBy === "Most New") {
//       sortedData.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
//     }
  
//     // Update the state using a functional update
//     setFilteredData((prevData) => {
//       // Only update if the sorted data is different from the previous state
//       if (JSON.stringify(prevData) !== JSON.stringify(sortedData)) {
//         return sortedData;
//       }
//       return prevData; // No change if the data is the same
//     });
//   }, [sortBy]); // Only depend on `sortBy`

//   useEffect(() => {
//     axios.get("http://localhost:5000/wishlist")
//       .then((res) => {
//         const initialWishlist = {};
//         res.data.forEach((item) => {
//           initialWishlist[item.itemId] = item.id;
//         });
//         setWishlist(initialWishlist);
//       })
//       .catch((err) => console.error("Error fetching wishlist:", err));
//   }, []);

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

//   return (
//     <div className="flex flex-col lg:flex-row gap-6 p-6">
//       <FilterSection handleCategory={handleCategory} handlePrice={handlePrice} />

//       <section className="flex-1 bg-transparent">
//         <div className="flex justify-between items-center bg-transparent mb-2">
//           <h2 className="text-sm font-bold">Sort:</h2>
//           <div className="flex gap-2">
//             <button
//               className={`px-3 py-1 border text-sm rounded-md ${
//                 sortBy === "Price" ? "bg-green-700 text-white" : "bg-gray-100 hover:bg-gray-200"
//               } transition-colors`}
//               onClick={() => handleSort("Price")}
//             >
//               Price
//             </button>
//             <button
//               className={`px-3 py-1 border text-sm rounded-md ${
//                 sortBy === "Most New" ? "bg-green-700 text-white" : "bg-gray-100 hover:bg-gray-200"
//               } transition-colors`}
//               onClick={() => handleSort("Most New")}
//             >
//               Most New
//             </button>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 h-[90vh] overflow-auto [&::-webkit-scrollbar]:hidden">
//           {filteredData.map((item, i) => {
//             const discountedPrice = (item.price * 1.12).toFixed(2);
//             const isWishlisted = !!wishlist[item.id];

//             return (
//               <div key={i} className="bg-transparent rounded-md p-2 flex flex-col items-center relative">
//                 <button
//                   className="absolute top-2 right-2 p-2 text-black rounded-full shadow-md hover:bg-gray-100 transition-colors"
//                   onClick={() => toggleWishlist(item.id)}
//                 >
//                   {isWishlisted ? <MdFavorite className="text-red-500" /> : <MdFavoriteBorder className="text-gray-500" />}
//                 </button>

//                 {/* Use the custom LazyLoad component */}
//                 <LazyLoad>
//                   <img
//                     src={item.primaryImage}
//                     alt={item.name}
//                     className="w-full h-64 object-cover mb-4 cursor-pointer shadow-md hover:shadow-lg transition-shadow rounded-md"
//                     onClick={() => navigate("/details", { state: { item } })}
//                   />
//                 </LazyLoad>

//                 <h1 className="text-xl font-medium text-green-800 mb-2 text-center">{item.name}</h1>
//                 <div className="flex items-center gap-2 mb-4">
//                   <span className="text-l font-bold text-green-600">₹{item.price}</span>
//                   <span className="text-l text-gray-500 line-through">₹{discountedPrice}</span>
//                   <span className="bg-[#83C026] text-white text-xs px-2 py-1 rounded-full">12% OFF</span>
//                 </div>
//                 <button className="w-10/12 bg-green-900 hover:bg-green-950 text-white p-1 text-lg rounded-full transition-colors">
//                   Add to Basket
//                 </button>
//               </div>
//             );
//           })}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Plants;