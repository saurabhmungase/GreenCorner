


import React, { useContext, useState, useEffect } from "react";
import { context } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import axios from "axios";
import { motion } from "framer-motion"; // For animations

const HomeAllProduct = () => {
  const Contextdata = useContext(context);
  const navigate = useNavigate();
  const [wishlist, setWishlist] = useState({});
  const [AddToCart, setAddToCart] = useState({
    name: "",
    price: "",
    image: "",
    quantity: 1,
  });

  useEffect(() => {
    axios
      .get("http://localhost:5000/wishlist")
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
        const response = await axios.post("http://localhost:5000/wishlist", {
          itemId,
        });
        updatedWishlist[itemId] = response.data.id;
      }
      setWishlist(updatedWishlist);
    } catch (error) {
      console.error("Error toggling wishlist:", error);
    }
  };

  const handleAddToBasket = async (name, price, image) => {
    setAddToCart({ name, price, image, quantity: 1 });

    try {
      await axios.post("http://localhost:5000/cart", {
        name,
        price,
        image,
        quantity: 1,
      });
      alert("Item added to cart!");
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  // Ensure Allplants exists before slicing
  const filteredData = Contextdata.Allplants
    ? Contextdata.Allplants.slice(16, 24)
    : [];

  return (
    <div className="max-w-7xl mx-auto mb-14 py-8 px-6">
      <h1 className="text-4xl font-bold text-center text-green-900 mb-10">
        🌱 Discover Our Best Picks 🌿
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {filteredData.map((item, i) => {
          const discountedPrice = (item.price * 1.12).toFixed(2);
          const isWishlisted = !!wishlist[item.id];

          return (
            <motion.div
              key={i}
              className="bg-white rounded-2xl p-5 flex flex-col items-center relative shadow-xl transition-shadow hover:shadow-2xl border border-gray-200 backdrop-blur-lg bg-opacity-80"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {/* Floating Wishlist Button */}
              <motion.button
                className="absolute top-5 right-5 p-2 rounded-full bg-white shadow-lg transition-all hover:scale-110"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => toggleWishlist(item.id)}
              >
                {isWishlisted ? (
                  <MdFavorite className="text-red-500 text-3xl" />
                ) : (
                  <MdFavoriteBorder className="text-gray-500 text-3xl" />
                )}
              </motion.button>

              {/* Product Image */}
              <img
                src={item.primaryImage}
                alt={item.name}
                className="w-full h-64 object-cover mb-5 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => navigate("/details", { state: { item } })}
              />

              {/* Product Name */}
              <h1 className="text-2xl font-semibold text-green-800 mb-2 text-center">
                {item.name}
              </h1>

              {/* Price & Discount */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xl font-bold text-green-700">
                  ₹{item.price}
                </span>
                <span className="text-lg text-gray-500 line-through">
                  ₹{discountedPrice}
                </span>
                <span className="bg-[#83C026] text-white text-sm px-3 py-1 rounded-full shadow">
                  12% OFF
                </span>
              </div>

              {/* Add to Basket Button */}
              <motion.button
                onClick={() =>
                  handleAddToBasket(item.name, item.price, item.primaryImage)
                }
                className="w-full bg-gradient-to-r from-green-700 to-green-900 text-white py-3 text-lg rounded-full shadow-md transform transition-all hover:scale-105 hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                🛒 Add to Basket
              </motion.button>
            </motion.div>
          );
        })}
      </div>

      {/* Shop Now Button */}
      <div className="flex justify-center mt-12">
        <motion.button
          onClick={() => navigate("/plants")}
          className="bg-gradient-to-r from-[#21543D] to-[#1A4031] text-white py-3 px-10 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
        >
          🌿 View All Products 🌿
        </motion.button>
      </div>
    </div>
  );
};

export default HomeAllProduct;
  