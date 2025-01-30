import React from 'react'
import { useLocation } from 'react-router-dom';
import { MdOutlineCurrencyRupee } from "react-icons/md";


const ProductDetails = () => {
  let location = useLocation();
let product=location.state.item

  return (
  <div className="min-h-screen flex justify-center ">
  
        
      <div className="min-h-screen w-[95%] ">
        {/* Product Section */}
        <div className="flex flex-wrap">
          {/* Image Section */}
          <section className="w-full md:w-1/2 h-[90vh] flex justify-center items-center bg-white">
            <img
              src={product.primaryImage}
              alt="Indoor Plant"
              className="h-[90%] object-contain"
            />
          </section>
  
          {/* Details Section */}
          <section className="w-full md:w-1/2 h-[90vh] flex flex-col text-green-900 p-8 justify-evenly bg-white">
            <div>
              <h1 className="text-3xl font-bold ">{product.name}</h1>
              {/* <span className="text-yellow-500 flex">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        fill={
                          index < review.rating ? "currentColor" : "none"
                        }
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                    ))}
                  </span> */}
            </div>
  
            <div className="">
              <h4 className="text-lg font-semibold mb-2">Select Size</h4>
              <div className="flex gap-4">
                <button className="px-4 py-2 border rounded-lg hover:bg-gray-200">
                  Small
                </button>
                <button className="px-4 py-2 border rounded-lg hover:bg-gray-200">
                  Medium
                </button>
                <button className="px-4 py-2 border rounded-lg hover:bg-gray-200">
                  Large
                </button>
              </div>
              <hr className="mt-8 text-black" />
            </div>
  
            <div>
              <h2 className="text-2xl font-bold flex mb-2">
              
                <MdOutlineCurrencyRupee />
                {product.price}
              </h2>
              <p className="text-gray-700">
              {product.description}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex mb-3">
                <button className="p-2 rounded-l-3xl w-20  border-b bg-gray-100 hover:bg-gray-200">-</button>
                <div className="w-24 text-center text-2xl border items-center">{0}</div>
                <button className="p-2 rounded-r-3xl w-20 border-b bg-gray-100 hover:bg-gray-200">+</button>
              </div>
              <div className="flex gap-2">
                <button className=" p-4 w-48 bg-gray-100 border text-green-900 rounded-l-3xl hover:bg-gray-200">
                  Add to Cart
                </button>
                <button className=" p-4 w-48 bg-gray-100  border   text-green-900 rounded-r-3xl  hover:bg-gray-200">
                  Buy Now
                </button>
              </div>
            </div>
          </section>
        </div>
  
        {/* Tabs Section */}
        <div className="w-full text-green-800 border-b py-4">
          <nav className="flex justify-evenly gap-8 text-gray-700">
            <button className="px-4 py-2 border-b-2 border-transparent hover:border-gray-500">
              Plant Care
            </button>
            <button className="px-4 py-2 border-b-2 border-transparent hover:border-gray-500">
              Plant Requirements
            </button>
            <button className="px-4 py-2 border-b-2 border-transparent hover:border-gray-500">
              Other Details
            </button>
          </nav>
        </div>
  
        {/* Details Content */}
        <div className="w-full py-8 px-4 text-center space-y-4 text-gray-600">
        <div>Categories: {product.categories}</div>
        <div>Sunlight Requirement: {product.sunlightRequirement}</div>
        <div>Moisture Requirement: {product.moistureRequirement}</div>
        <div>Soil Type: {product.soilType}</div>
        <div>Season: {product.season}</div>
        <div>Growth Rate: {product.growthRate}</div>
        <div>Pot Size Required: {product.potSizeRequired}</div>
        <div>Genus: {product.genus}</div>
        <div>Local Name: {product.localName}</div>
      </div>
  
        <div className="w-full  py-8 px-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-3xl font-bold text-gray-800">Customer Review</h3>
        <button className="bg-green-700 text-white py-2 px-4 rounded-full hover:bg-green-800 transition">
          Write Review
        </button>
      </div>
      <div className="space-y-8">
        {product.reviews.map((review, i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow duration-300 flex  gap-4"
          >
            {/* Profile Avatar */}
            <div className="flex items-center justify-center bg-pink-200 text-pink-700 font-bold w-12 h-12 rounded-full ">
              {review.username[0].toUpperCase()}
              
            </div>
            {/* Review Content */}
            <div >
              <div className="flex-col  items-center">
                <h4 className="text-lg font-semibold text-gray-900">
                  {review.username}
                </h4>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-500 flex">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        fill={
                          index < review.rating ? "currentColor" : "none"
                        }
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                    ))}
                  </span>
                  <span className="text-gray-700 text-sm font-medium ml-1">
                    {review.rating}.0
                  </span>
                </div>
              </div>
              <p className="text-gray-700 my-2">{review.comment}</p>
              <div className="flex items-center gap-6 text-gray-600 text-sm">
                <div className="flex items-center gap-2">
                  <button className="text-gray-500 hover:text-green-500">
                    👍
                  </button>
                  <span>{review.likes}</span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="text-gray-500 hover:text-red-500">
                    👎
                  </button>
                  <span>{review.dislikes}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
      </div>
      </div>
  )
}

export default ProductDetails

// // import React from "react";
// // import { useLocation } from "react-router-dom";

// // const ProductDetails = () => {
// //   const location = useLocation();

// //   // Ensure location.state exists
// //   const productDetails = location.state || [];

// //   if (productDetails.length === 0) {
// //     return (
// //       <div className="min-h-screen flex justify-center items-center">
// //         <p className="text-lg text-gray-600">No product details available.</p>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="min-h-screen p-6">
// //       {productDetails.map((item) => (
// //         <div key={item.id}>
// //           <h1>{item.name}</h1>
// //           <img src={item.image} alt={item.name} />
// //           <p>{item.description}</p>
// //           <p>Price: {item.price}</p>
// //           <p>Category: {item.category}</p>
// //           <p>Rating: {item.rating}</p>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default ProductDetails;


