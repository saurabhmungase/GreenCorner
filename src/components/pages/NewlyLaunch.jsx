import React, { useContext } from "react";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { context } from "../../context/AppContext";

const NewlyLaunch = () => {
  const data = useContext(context);

  // Fetch the first 4 items from the API data
  const products = data.Allplants.slice(9, 13);
  console.log(products);

  return (
    <div className="bg-[#F5F5F5] rounded-lg w-[90%] mx-auto my-8 p-6 shadow-lg">
      <h1 className="text-3xl font-bold text-center text-[#21543D] mb-6">
        Newly Launched Products
      </h1>

      {products.length === 0 ? (
        <p className="text-center text-gray-500">
          No products available right now.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={item.primaryImage}
                alt={item.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h2>
                <div className="text-green-700 font-bold text-lg flex items-center gap-1 mb-2">
                  <MdOutlineCurrencyRupee />
                  {item.price}
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  <span className="font-semibold">Availability:</span>{" "}
                  {item.availability}
                </p>
                <button
                  className="w-full bg-[#21543D] text-white py-2 px-4 rounded-lg hover:bg-[#1A4031] transition"
                  onClick={() => alert(`Buying ${item.name}`)} // Replace with actual logic
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NewlyLaunch;
