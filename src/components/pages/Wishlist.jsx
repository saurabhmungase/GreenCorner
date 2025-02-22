


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
      const itemToRemove = wishlist.find((item) => item.itemId === id);

      if (!itemToRemove) {
        console.log("Item not found in wishlist");
        return;
      }

      console.log("Item found in wishlist, deleting:", itemToRemove);

      await axios.delete(`http://localhost:5000/wishlist/${itemToRemove.id}`);
      console.log("Item successfully deleted");

      // Update wishlist state to remove the item
      setWishlist((prevWishlist) =>
        prevWishlist.filter((item) => item.itemId !== id)
      );
    } catch (error) {
      console.error("Error removing from wishlist:", error);
      setError("Failed to remove item from wishlist. Please try again.");
    }
  };

  const handleAddToBasket = async (name, price, image, id) => {
    console.log("Adding to cart:", name, price, image, id);

    try {
      // Add item to cart
      await axios.post("http://localhost:5000/cart", {
        name,
        price,
        image,
        quantity: 1,
      });

      alert("Item added to cart!");

      // Remove from wishlist (Make sure to wait for it to complete)
      await handleRemoveFromWishlist(id);
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

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
      <h1 className="text-4xl font-bold text-green-900 mb-8 text-center">
        Your Wishlist
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredData.map((item) => {
          const discountedPrice = (item.price * 1.12).toFixed(2);

          return (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 relative"
            >
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
                  onClick={() =>
                    handleAddToBasket(item.name, item.price, item.primaryImage, item.id)
                  }
                  className="w-full bg-green-800 hover:bg-green-900 text-white py-3 text-lg rounded-full transition-colors"
                >
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
