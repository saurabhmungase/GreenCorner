// import React from 'react'

// const ShopByCategories = () => {
//   return (
//     <div className='bg-[#21543D] m-9'>
//                 <h1>Shop By Categories</h1>
//         <div>

//     <select name="sunintensity" id="sunintensity">
//         <option value="">Sun Intensity</option>
//       <option value="high">High</option>
//       <option value="">Moderate</option>
//       <option value="">Low</option>
//     </select>
//     <select name="moisture" id="moisture">
//       <option value="">Moisture Req</option>
//       <option value=""></option>
//       <option value=""></option>
//     </select>
//     <select name="" id="">
//       <option value="">Soil type</option>
//       <option value=""></option>
//       <option value=""></option>
//     </select>
//     <select name="" id="">
//       <option value="">Season</option>
//       <option value=""></option>
//       <option value=""></option>
//     </select>
//     <select name="" id="">
//       <option value="">Growth Rate</option>
//       <option value=""></option>
//       <option value=""></option>
//     </select>

//   </div>
//   </div>
//   )
// }

// export default ShopByCategories


// import React from "react";

// const ShopByCategories = () => {
//   return (
//     <div className="bg-[#21543D] text-white py-8 px-6 rounded-lg mx-8">
//       {/* Header */}
//       <h1 className="text-2xl font-bold mb-6 text-center">
//         Shop By Categories
//       </h1>

//       {/* Filter Options */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
//         <select
//           name="sunintensity"
//           id="sunintensity"
//           className="w-full bg-white text-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
//         >
//           <option value="">Sun Intensity</option>
//           <option value="high">High</option>
//           <option value="moderate">Moderate</option>
//           <option value="low">Low</option>
//         </select>

//         <select
//           name="moisture"
//           id="moisture"
//           className="w-full bg-white text-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
//         >
//           <option value="">Moisture Req</option>
//           <option value="high">High</option>
//           <option value="moderate">Moderate</option>
//           <option value="low">Low</option>
//         </select>

//         <select
//           name="soiltype"
//           id="soiltype"
//           className="w-full bg-white text-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
//         >
//           <option value="">Soil Type</option>
//           <option value="sandy">Sandy</option>
//           <option value="clay">Clay</option>
//           <option value="loamy">Loamy</option>
//         </select>

//         <select
//           name="season"
//           id="season"
//           className="w-full bg-white text-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
//         >
//           <option value="">Season</option>
//           <option value="summer">Summer</option>
//           <option value="winter">Winter</option>
//           <option value="spring">Spring</option>
//         </select>

//         <select
//           name="growthrate"
//           id="growthrate"
//           className="w-full bg-white text-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
//         >
//           <option value="">Growth Rate</option>
//           <option value="fast">Fast</option>
//           <option value="medium">Medium</option>
//           <option value="slow">Slow</option>
//         </select>
//       </div>
//     </div>
//   );
// };

// export default ShopByCategories;


import React from "react";

const ShopByCategories = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-[90%] mx-auto my-8">
      <h2 className="text-3xl font-bold text-[#21543D] text-center mb-6">
        Shop By Categories
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {[
          { label: "Sun Intensity", options: ["High", "Moderate", "Low"] },
          { label: "Moisture Req", options: ["High", "Moderate", "Low"] },
          { label: "Soil Type", options: ["Clay", "Loamy", "Sandy"] },
          { label: "Season", options: ["Summer", "Winter", "All Seasons"] },
          { label: "Growth Rate", options: ["Fast", "Moderate", "Slow"] },
        ].map((filter, index) => (
          <select
            key={index}
            className="bg-[#F5F5F5] text-[#333333] border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#21543D]"
          >
            <option>{filter.label}</option>
            {filter.options.map((option, idx) => (
              <option key={idx}>{option}</option>
            ))}
          </select>
        ))}
      </div>
    </div>
  );
};

export default ShopByCategories;
