// import React, { useContext, useDebugValue } from "react";
// import { context } from "../../context/AppContext";
// import { MdOutlineCurrencyRupee } from "react-icons/md";

// const Plants = () => {
//   let data = useContext(context);
//   // console.log(data.Allplants);

//   return (
//     <div>
//       <section>
//         Filter
//       </section>
//     <section>

//     <div>
//       sort
//     </div>

//        <div className="flex flex-wrap gap-4 justify-center">
//       {data.Allplants.map((item, i) => {
//         return (
//           <div key={i} className="w-[15%] bg-gray-200 flex flex-col justify-center items-center  ">
//             <img src={item.primaryImage} alt={item.name} />
//             <h1 className="text-xl font-bold">{item.name}</h1>
//             <p className="text-xl flex font-bold"><MdOutlineCurrencyRupee />
//             {item.price}</p>
//             <button className="bg-green-900 rounded-md text-white p-1">Add to Cart</button>
//           </div>
//         );
//       })}
//     </div>
//     </section>
//     </div>
//   );
// };

// export default Plants;

// import React, { useContext } from "react";
// import { context } from "../../context/AppContext";
// import { MdOutlineCurrencyRupee } from "react-icons/md";
// import { useNavigate } from "react-router-dom";

// const Plants = () => {
//   const data = useContext(context);
//   const navigate = useNavigate();

//   return (
//     <div className="flex flex-col lg:flex-row gap-6 p-6">
//       {/* Filter Section */}
//       <section className="lg:w-1/6 w-full bg-gray-100 p-4 rounded-md shadow-md">
//         <h2 className="text-xl font-bold mb-4">Filter</h2>
//         <div>
//           <h3 className="font-semibold mb-2">Categories</h3>
//           <ul className="space-y-2">
//             <li>
//               <input
//                 type="checkbox"
//                 id="gardening"
//                 className="mr-2"
//                 checked
//                 readOnly
//               />
//               <label htmlFor="gardening">Gardening</label>
//             </li>
//             <li>
//               <input type="checkbox" id="plants" className="mr-2" />
//               <label htmlFor="plants">Plants</label>
//             </li>
//             <li>
//               <input type="checkbox" id="seeds" className="mr-2" />
//               <label htmlFor="seeds">Seeds</label>
//             </li>
//             <li>
//               <input type="checkbox" id="bulbs" className="mr-2" />
//               <label htmlFor="bulbs">Bulbs</label>
//             </li>
//             <li>
//               <input type="checkbox" id="planters" className="mr-2" />
//               <label htmlFor="planters">Planters</label>
//             </li>
//           </ul>
//         </div>
//         <hr className="m-3" />
//         <div className="mt-4">
//           <h3>Price Range</h3>
//           <div className="flex gap-1">
            
//             <input type="range" min="0" max="100" className="w-100" />
//             <p>0</p>
//           </div>
//         </div>
//         <hr />
//         <div className="mt-4">
//           <h3>Rating</h3>
//           <div></div>
//         </div>
//       </section>

//       {/* Product Section */}
//       <section className="flex-1">
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-sm font-bold">Sort:</h2>
//           <div className="flex gap-2">
//             {["Set Price", "Popular", "Most New", "Price"].map(
//               (sort, index) => (
//                 <button
//                   key={index}
//                   className="px-3 py-1 border text-sm rounded-md bg-gray-100 hover:bg-gray-200"
//                 >
//                   {sort}
//                 </button>
//               )
//             )}
//           </div>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 h-[80vh] overflow-auto ">
//           {data.Allplants.map((item, i) => (
//             <div
//               key={i}
//               className="bg-white rounded-md shadow-md p-4 flex flex-col items-center"
//             >
//               <img
//                 src={item.primaryImage}
//                 alt={item.name}
//                 className="h-40 w-auto mb-4"
//                 onClick={() => navigate("/details", { state: { item } })}
//               />
//               <h1 className="text-[25px] font-medium text-green-800">{item.name}</h1>
//               <div className="flex items-center gap-2">
              
//               <span className="text-3xl font-bold text-green-600">₹{item.price}</span>
//             <span className="text-xl text-gray-500 line-through">₹{item.price + ((12 / 100) * item.price)}</span>
//             <span className="bg-green-500 text-white text-sm px-2 py-1 rounded-full">12% OFF</span>
//               </div>
//               {item.discount && (
//                 <p className="text-gray-500 text-sm line-through">
//                   <MdOutlineCurrencyRupee />
//                   {item.originalPrice}
//                 </p>
//               )}
//               <button className="w-full bg-green-900 hover:bg-green-950 text-white p-2 text-lg rounded-full">
//                 Add to Basket
//               </button>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Plants;

// import React, { useContext, useMemo } from "react";
// import { context } from "../../context/AppContext";
// import { MdOutlineCurrencyRupee } from "react-icons/md";
// import { useNavigate } from "react-router-dom";

// const Plants = () => {
//   const data = useContext(context);
//   const navigate = useNavigate();

//   // Static sorting options
//   const sortOptions = useMemo(
//     () => ["Set Price", "Popular", "Most New", "Price"],
//     []
//   );

//   return (
//     <div className="flex flex-col lg:flex-row gap-6 p-6">
//       {/* Filter Section */}
//       <section className="lg:w-1/6 w-full bg-gray-100 p-4 rounded-md shadow-md">
//         <h2 className="text-xl font-bold mb-4">Filter</h2>
//         <div>
//           <h3 className="font-semibold mb-2">Categories</h3>
//           <ul className="space-y-2">
//             {["Gardening", "Plants", "Seeds", "Bulbs", "Planters", "Others"].map(
//               (category) => (
//                 <li key={category}>
//                   <input
//                     type="checkbox"
//                     id={category.toLowerCase()}
//                     className="mr-2"
//                     checked
//                     readOnly
//                   />
//                   <label htmlFor={category.toLowerCase()}>{category}</label>
//                 </li>
//               )
//             )}
//           </ul>
//         </div>
//         <hr className="m-3" />
//         <div className="mt-4">
//           <h3>Price Range</h3>
//           <div className="flex items-center gap-2">
//             <input
//               type="range"
//               min="0"
//               max="100"
//               className="w-full"
//               onChange={(e) => console.log(e.target.value)}
//             />
//             <p>0</p>
//           </div>
//         </div>
//         <hr />
//         <div className="mt-4">
//           <h3>Rating</h3>
//           <div> {/* Add rating filter here */} </div>
//         </div>
//       </section>

//       {/* Product Section */}
//       <section className="flex-1">
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-xl font-bold">Sort:</h2>
//           <div className="flex gap-2">
//             {sortOptions.map((sort, index) => (
//               <button
//                 key={index}
//                 className="px-4 py-2 border rounded-md bg-gray-100 hover:bg-gray-200"
//               >
//                 {sort}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 h-[80vh] overflow-auto">
//           {data.Allplants.map((item, i) => (
//             <div
//               key={i}
//               className="bg-white rounded-md shadow-md p-4 flex flex-col items-center"
//             >
//               <img
//                 src={item.primaryImage}
//                 alt={item.name}
//                 className="h-40 w-auto mb-4 cursor-pointer"
//                 onClick={() => navigate("/details", { state: { item } })}
//               />
//               <h1 className="text-lg font-bold text-center">{item.name}</h1>
//               <div className="text-green-700 font-bold text-lg flex items-center gap-1">
//                 <MdOutlineCurrencyRupee />
//                 {item.price}
//               </div>
//               {item.discount && (
//                 <p className="text-gray-500 text-sm line-through">
//                   <MdOutlineCurrencyRupee />
//                   {item.originalPrice}
//                 </p>
//               )}
//               <button className="mt-4 bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800">
//                 Add to Basket
//               </button>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Plants;


// import React, { useContext } from "react";
// import { context } from "../../context/AppContext";
// import { MdOutlineCurrencyRupee } from "react-icons/md";
// import { useNavigate } from "react-router-dom";

// const Plants = () => {
//   const data = useContext(context);
//   const navigate = useNavigate();

//   return (
//     <div className="flex flex-col lg:flex-row gap-6 p-6">
//       {/* Filter Section */}
//       <section className="lg:w-1/6 w-full bg-gray-100 p-4 rounded-md shadow-md">
//         <h2 className="text-xl font-bold mb-4">Filter</h2>
//         <div>
//           <h3 className="font-semibold mb-2">Categories</h3>
//           <ul className="space-y-2">
//             {["Gardening", "Plants", "Seeds", "Bulbs", "Planters"].map((category, index) => (
//               <li key={index}>
//                 <input
//                   type="checkbox"
//                   id={category.toLowerCase()}
//                   className="mr-2"
//                   defaultChecked={category === "Gardening"}
//                   readOnly={category === "Gardening"}
//                 />
//                 <label htmlFor={category.toLowerCase()}>{category}</label>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <hr className="my-4" />
//         <div>
//           <h3 className="font-semibold mb-2">Price Range</h3>
//           <div className="flex items-center gap-2">
//             <input type="range" min="0" max="100" className="w-full" />
//             <p>0</p>
//           </div>
//         </div>
//         <hr className="my-4" />
//         <div>
//           <h3 className="font-semibold mb-2">Rating</h3>
//           {/* Add rating filter components here */}
//         </div>
//       </section>

//       {/* Product Section */}
//       <section className="flex-1">
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-sm font-bold">Sort:</h2>
//           <div className="flex gap-2">
//             {["Set Price", "Popular", "Most New", "Price"].map((sort, index) => (
//               <button
//                 key={index}
//                 className="px-3 py-1 border text-sm rounded-md bg-gray-100 hover:bg-gray-200 transition-colors"
//               >
//                 {sort}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 h-[80vh] overflow-auto">
//           {data.Allplants.map((item, i) => (
//             <div
//               key={i}
//               className="bg-white rounded-md shadow-md p-4 flex flex-col items-center hover:shadow-lg transition-shadow"
//             >
//               <img
//                 src={item.primaryImage}
//                 alt={item.name}
//                 className="h-40 w-auto mb-4 cursor-pointer"
//                 onClick={() => navigate("/details", { state: { item } })}
//               />
//               <h1 className="text-2xl font-medium text-green-800 mb-2">{item.name}</h1>
//               <div className="flex items-center gap-2 mb-4">
//                 <span className="text-3xl font-bold text-green-600">₹{item.price}</span>
//                 <span className="text-xl text-gray-500 line-through">₹{item.price + ((12 / 100) * item.price)}</span>
//                 <span className="bg-green-500 text-white text-sm px-2 py-1 rounded-full">12% OFF</span>
//               </div>
//               {item.discount && (
//                 <p className="text-gray-500 text-sm line-through">
//                   <MdOutlineCurrencyRupee />
//                   {item.originalPrice}
//                 </p>
//               )}
//               <button className="w-full bg-green-900 hover:bg-green-950 text-white p-2 text-lg rounded-full transition-colors">
//                 Add to Basket
//               </button>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Plants;


// import React, { useContext } from "react";
// import { context } from "../../context/AppContext";
// import { MdOutlineCurrencyRupee } from "react-icons/md";
// import { useNavigate } from "react-router-dom";

// const Plants = () => {
//   const data = useContext(context);
//   const navigate = useNavigate();

//   return (
//     <div className="flex flex-col lg:flex-row gap-6 p-6">
//       {/* Filter Section */}
//       <section className="lg:w-1/6 w-full bg-gray-100 p-4 rounded-md shadow-md">
//         <h2 className="text-xl font-bold mb-4">Filter</h2>
//         <div>
//           <h3 className="font-semibold mb-2">Categories</h3>
//           <ul className="space-y-2">
//             {["Gardening", "Plants", "Seeds", "Bulbs", "Planters"].map((category, index) => (
//               <li key={index}>
//                 <input
//                   type="checkbox"
//                   id={category.toLowerCase()}
//                   className="mr-2"
//                   defaultChecked={category === "Gardening"}
//                   readOnly={category === "Gardening"}
//                 />
//                 <label htmlFor={category.toLowerCase()}>{category}</label>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <hr className="my-4" />
//         <div>
//           <h3 className="font-semibold mb-2">Price Range</h3>
//           <div className="flex items-center gap-2">
//             <input type="range" min="0" max="100" className="w-full" />
//             <p>0</p>
//           </div>
//         </div>
//         <hr className="my-4" />
//         <div>
//           <h3 className="font-semibold mb-2">Rating</h3>
//           {/* Add rating filter components here */}
//         </div>
//       </section>

//       {/* Product Section */}
//       <section className="flex-1">
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-sm font-bold">Sort:</h2>
//           <div className="flex gap-2">
//             {["Set Price", "Popular", "Most New", "Price"].map((sort, index) => (
//               <button
//                 key={index}
//                 className="px-3 py-1 border text-sm rounded-md bg-gray-100 hover:bg-gray-200 transition-colors"
//               >
//                 {sort}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {data.Allplants.map((item, i) => (
//             const discountedPrice = (item.price + (12 / 100) * item.price).toFixed(2);

//             <div
//               key={i}
//               className="bg-transparent rounded-md  p-4 flex flex-col items-center "
//             >
//               <img
//                 src={item.primaryImage}
//                 alt={item.name}
//                 className=" w-full mb-4 cursor-pointer shadow-md hover:shadow-lg transition-shadow"
//                 onClick={() => navigate("/details", { state: { item } })}
//               />
//               <h1 className="text-xl font-medium text-green-800 mb-2 text-center">{item.name}</h1>
//               <div className="flex items-center gap-2 mb-4">
//                 <span className="text-2xl font-bold text-green-600">₹{item.price}</span>
//                 <span className="text-lg text-gray-500 line-through">₹{discountedPrice}</span>
//                 <span className="bg-green-500 text-white text-sm px-2 py-1 rounded-full">12% OFF</span>
//               </div>
//               {item.discount && (
//                 <p className="text-gray-500 text-sm line-through">
//                   <MdOutlineCurrencyRupee />
//                   {item.originalPrice}
//                 </p>
//               )}
//               <button className="w-10/12 bg-green-900 hover:bg-green-950 text-white p-1 text-lg rounded-full transition-colors">
//                 Add to Basket
//               </button>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Plants;


// import React, { useContext } from "react";
// import { context } from "../../context/AppContext";
// import { MdOutlineCurrencyRupee } from "react-icons/md";
// import { useNavigate } from "react-router-dom";

// const Plants = () => {
//   const data = useContext(context);
//   const navigate = useNavigate();

//   return (
//     <div className="flex flex-col lg:flex-row gap-6 p-6">
//       {/* Filter Section */}
//       <section className="lg:w-1/6 w-full bg-gray-100 p-4 rounded-md shadow-md">
//         <h2 className="text-xl font-bold mb-4">Filter</h2>
//         <div>
//           <h3 className="font-semibold mb-2">Categories</h3>
//           <ul className="space-y-2">
//             {["Gardening", "Plants", "Seeds", "Bulbs", "Planters"].map((category, index) => (
//               <li key={index}>
//                 <input
//                   type="checkbox"
//                   id={category.toLowerCase()}
//                   className="mr-2"
//                   defaultChecked={category === "Gardening"}
//                   readOnly={category === "Gardening"}
//                 />
//                 <label htmlFor={category.toLowerCase()}>{category}</label>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <hr className="my-4" />
//         <div>
//           <h3 className="font-semibold mb-2">Price Range</h3>
//           <div className="flex items-center gap-2">
//             <input type="range" min="0" max="100" className="w-full" />
//             <p>0</p>
//           </div>
//         </div>
//         <hr className="my-4" />
//         <div>
//           <h3 className="font-semibold mb-2">Rating</h3>
//           {/* Add rating filter components here */}
//         </div>
//       </section>

//       {/* Product Section */}
//       <section className="flex-1">
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-sm font-bold">Sort:</h2>
//           <div className="flex gap-2">
//             {["Set Price", "Popular", "Most New", "Price"].map((sort, index) => (
//               <button
//                 key={index}
//                 className="px-3 py-1 border text-sm rounded-md bg-gray-100 hover:bg-gray-200 transition-colors"
//               >
//                 {sort}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {data.Allplants.map((item, i) => {
//             const discountedPrice = (item.price + (12 / 100) * item.price).toFixed(2); // Ensure 2 decimal places

//             return (
//               <div
//                 key={i}
//                 className="bg-transparent rounded-md p-4 flex flex-col items-center"
//               >
//                 <img
//                   src={item.primaryImage}
//                   alt={item.name}
//                   className="w-full h-48 object-cover mb-4 cursor-pointer shadow-md hover:shadow-lg transition-shadow rounded-md"
//                   onClick={() => navigate("/details", { state: { item } })}
//                 />
//                 <h1 className="text-xl font-medium text-green-800 mb-2 text-center">{item.name}</h1>
//                 <div className="flex items-center gap-2 mb-4">
//                   <span className="text-2xl font-bold text-green-600">₹{item.price}</span>
//                   <span className="text-lg text-gray-500 line-through">₹{discountedPrice}</span>
//                   <span className="bg-green-500 text-white text-sm px-2 py-1 rounded-full">12% OFF</span>
//                 </div>
//                 {item.discount && (
//                   <p className="text-gray-500 text-sm line-through">
//                     <MdOutlineCurrencyRupee />
//                     {item.originalPrice}
//                   </p>
//                 )}
//                 <button className="w-10/12 bg-green-900 hover:bg-green-950 text-white p-2 text-lg rounded-full transition-colors">
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

import React, { useContext, useState } from "react";
import { context } from "../../context/AppContext";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Plants = () => {
  const data = useContext(context);
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState("");
  const [price, setPrice] = useState(100);

  const handleSort = (type) => {
    setSortBy(type);
    // Implement sorting logic here
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-6">
      {/* Filter Section */}
      <section className="lg:w-1/6 w-full bg-gray-100 p-4 rounded-md shadow-md">
        <h2 className="text-xl font-bold mb-4">Filter</h2>
        <div>
          <h3 className="font-semibold mb-2">Categories</h3>
          <ul className="space-y-2">
            {["Gardening", "Plants", "Seeds", "Bulbs", "Planters"].map((category, index) => (
              <li key={index}>
                <input
                  type="checkbox"
                  id={category.toLowerCase()}
                  className="mr-2"
                  defaultChecked={category === "Gardening"}
                  readOnly={category === "Gardening"}
                />
                <label htmlFor={category.toLowerCase()}>{category}</label>
              </li>
            ))}
          </ul>
        </div>
        <hr className="my-4" />
        <div>
          <h3 className="font-semibold mb-2">Price Range</h3>
          <div className="flex items-center gap-2">
            <input 
              type="range" 
              min="0" 
              max="1000" 
              value={price} 
              onChange={(e) => setPrice(e.target.value)} 
              className="w-full" 
            />
            <p>₹{price}</p>
          </div>
        </div>
        <hr className="my-4" />
        <div>
          <h3 className="font-semibold mb-2">Rating</h3>
          <select className="w-full p-2 border rounded-md">
            <option value="5">5 Stars</option>
            <option value="4">4 Stars & Up</option>
            <option value="3">3 Stars & Up</option>
            <option value="2">2 Stars & Up</option>
            <option value="1">1 Star & Up</option>
          </select>
        </div>
      </section>

      {/* Product Section */}
      <section className="flex-1">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-sm font-bold">Sort:</h2>
          <div className="flex gap-2">
            {["Set Price", "Popular", "Most New", "Price"].map((sort, index) => (
              <button
                key={index}
                className={`px-3 py-1 border text-sm rounded-md ${
                  sortBy === sort ? "bg-green-700 text-white" : "bg-gray-100 hover:bg-gray-200"
                } transition-colors`}
                onClick={() => handleSort(sort)}
              >
                {sort}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 h-[80vh] overflow-auto [&::-webkit-scrollbar]:hidden">
          {data.Allplants.map((item, i) => {
            const discountedPrice = (item.price - (12 / 100) * item.price).toFixed(2);

            return (
              <div key={i} className="bg-transparent rounded-md p-4 flex flex-col items-center">
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
                <button className="w-10/12 bg-green-900 hover:bg-green-950 text-white p-1 text-lg rounded-full transition-colors">
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
