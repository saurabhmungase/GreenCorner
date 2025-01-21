// import React from 'react'

// const NewlyLaunch = () => {
//   return (
//     <div className='bg-gray-200 w-[90%] m-7 h-[50vh]'>NewlyLaunch</div>
//   )
// }

// export default NewlyLaunch

// import React from "react";

// const NewlyLaunch = () => {
//   return (
//     <div className="bg-[#f5f5f5] rounded-lg w-[90%] mx-auto my-8 p-6 shadow-lg">
//       {/* Header */}
//       <h1 className="text-2xl font-bold text-center text-[#21543D] mb-6">
//         Newly Launched Products
//       </h1>

//       {/* Products Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {/* Product Card Example */}
//         <div className="bg-white rounded-lg shadow-md overflow-hidden">
//           <img
//             src="src/assets/new_product1.webp"
//             alt="Product 1"
//             className="w-full h-40 object-cover"
//           />
//           <div className="p-4">
//             <h2 className="text-lg font-semibold text-gray-800">
//               Product Name
//             </h2>
//             <p className="text-sm text-gray-600 mt-2">Short product description.</p>
//             <button className="mt-4 w-full bg-[#21543D] text-white py-2 px-4 rounded-lg hover:bg-[#1a4031] transition">
//               Buy Now
//             </button>
//           </div>
//         </div>

//         {/* Add more product cards as needed */}
//         <div className="bg-white rounded-lg shadow-md overflow-hidden">
//           <img
//             src="src/assets/new_product2.webp"
//             alt="Product 2"
//             className="w-full h-40 object-cover"
//           />
//           <div className="p-4">
//             <h2 className="text-lg font-semibold text-gray-800">
//               Product Name
//             </h2>
//             <p className="text-sm text-gray-600 mt-2">Short product description.</p>
//             <button className="mt-4 w-full bg-[#21543D] text-white py-2 px-4 rounded-lg hover:bg-[#1a4031] transition">
//               Buy Now
//             </button>
//           </div>
//         </div>

//         <div className="bg-white rounded-lg shadow-md overflow-hidden">
//           <img
//             src="src/assets/new_product3.webp"
//             alt="Product 3"
//             className="w-full h-40 object-cover"
//           />
//           <div className="p-4">
//             <h2 className="text-lg font-semibold text-gray-800">
//               Product Name
//             </h2>
//             <p className="text-sm text-gray-600 mt-2">Short product description.</p>
//             <button className="mt-4 w-full bg-[#21543D] text-white py-2 px-4 rounded-lg hover:bg-[#1a4031] transition">
//               Buy Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewlyLaunch;



import React from "react";

const NewlyLaunch = () => {
  return (
    <div className="bg-[#F5F5F5] rounded-lg w-[90%] mx-auto my-8 p-6 shadow-lg">
      <h1 className="text-3xl font-bold text-center text-[#21543D] mb-6">
        Newly Launched Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[
          { img: "src/assets/new_product1.webp", title: "Product 1" },
          { img: "src/assets/new_product2.webp", title: "Product 2" },
          { img: "src/assets/new_product3.webp", title: "Product 3" },
          { img: "src/assets/new_product4.webp", title: "Product 4" },
        ].map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={product.img}
              alt={product.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">{product.title}</h2>
              <p className="text-sm text-gray-600 mt-2">
                A short description of the product.
              </p>
              <button className="mt-4 w-full bg-[#21543D] text-white py-2 px-4 rounded-lg hover:bg-[#1A4031] transition">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewlyLaunch;
    