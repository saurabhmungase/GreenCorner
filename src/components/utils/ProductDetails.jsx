// import React, { useState } from 'react'
// import { useLocation } from 'react-router-dom';
// import { MdOutlineCurrencyRupee } from "react-icons/md";
// import { img } from 'framer-motion/client';
// import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';

// const ProductDetails = () => {
//   let location = useLocation();
// let product=location.state.item
//   const [images, setImages] = useState({
//     primaryImage: "",
//     secondaryImages: [],
//   });

// setImages({
//   primaryImage: product.primaryImage,
//   secondaryImages: product.secondaryImages,
// });
// const renderRating = (rating) => {
//   const fullStars = Math.floor(rating);
//   const halfStar = rating % 1 !== 0;
//   const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

//   return (
//     <div className="flex items-center">
//       {Array(fullStars).fill().map((_, i) => <FaStar key={`full-${i}`} className="text-yellow-500" />)}
//       {halfStar && <FaStarHalfAlt className="text-yellow-500" />}
//       {Array(emptyStars).fill().map((_, i) => <FaRegStar key={`empty-${i}`} className="text-yellow-500" />)}
//       <span className="ml-2 text-sm text-gray-700">{rating}</span>
//     </div>
//   );
// };

//   return (
//   <div className="min-h-screen flex justify-center ">

//       <div className="min-h-screen w-[95%] ">
//         {/* Product Section */}
//         <div className="flex flex-wrap">
//           {/* Image Section */}
//           <section className="w-full md:w-1/2 h-[90vh] flex justify-center items-center bg-white">
//             <img
//               src={product.primaryImage}
//               alt="Indoor Plant"
//               className="h-[90%] object-contain"
//             />

//           </section>

//           {/* Details Section */}
//           <section className="w-full md:w-1/2 h-[90vh] flex flex-col text-green-900 p-8 justify-evenly bg-white">
//             <div>
//               <h1 className="text-3xl font-bold ">{product.name}</h1>
//               <div className="mt-2">
//                  {renderRating(product.rating)}
//              </div>
//             </div>

//             <div className="">
//               <h4 className="text-lg font-semibold mb-2">Select Size</h4>
//               <div className="flex gap-4">
//                 <button className="px-4 py-2 border rounded-lg hover:bg-gray-200">
//                   Small
//                 </button>
//                 <button className="px-4 py-2 border rounded-lg hover:bg-gray-200">
//                   Medium
//                 </button>
//                 <button className="px-4 py-2 border rounded-lg hover:bg-gray-200">
//                   Large
//                 </button>
//               </div>
//               <hr className="mt-8 text-black" />
//             </div>

//             <div>
//               <h2 className="text-2xl font-bold flex mb-2">

//                 <MdOutlineCurrencyRupee />
//                 {product.price}
//               </h2>
//               <p className="text-gray-700">
//               {product.description}
//               </p>
//             </div>
//             <div className="flex flex-col gap-2">
//               <div className="flex mb-3">
//                 <button className="p-2 rounded-l-3xl w-20  border-b bg-gray-100 hover:bg-gray-200">-</button>
//                 <div className="w-24 text-center text-2xl border items-center">{0}</div>
//                 <button className="p-2 rounded-r-3xl w-20 border-b bg-gray-100 hover:bg-gray-200">+</button>
//               </div>
//               <div className="flex gap-2">
//                 <button className=" p-4 w-48 bg-gray-100 border text-green-900 rounded-l-3xl hover:bg-gray-200">
//                   Add to Cart
//                 </button>
//                 <button className=" p-4 w-48 bg-gray-100  border   text-green-900 rounded-r-3xl  hover:bg-gray-200">
//                   Buy Now
//                 </button>
//               </div>
//             </div>
//           </section>
//         </div>

//         {/* Tabs Section */}
//         <div className="w-full text-green-800 border-b py-4">
//           <nav className="flex justify-evenly gap-8 text-gray-700">
//             <button className="px-4 py-2 border-b-2 border-transparent hover:border-gray-500">
//               Plant Care
//             </button>
//             <button className="px-4 py-2 border-b-2 border-transparent hover:border-gray-500">
//               Plant Requirements
//             </button>
//             <button className="px-4 py-2 border-b-2 border-transparent hover:border-gray-500">
//               Other Details
//             </button>
//           </nav>
//         </div>

//         {/* Details Content */}
//         <div className="w-full py-8 px-4 text-center space-y-4 text-gray-600">
//         <div>Categories: {product.categories}</div>
//         <div>Sunlight Requirement: {product.sunlightRequirement}</div>
//         <div>Moisture Requirement: {product.moistureRequirement}</div>
//         <div>Soil Type: {product.soilType}</div>
//         <div>Season: {product.season}</div>
//         <div>Growth Rate: {product.growthRate}</div>
//         <div>Pot Size Required: {product.potSizeRequired}</div>
//         <div>Genus: {product.genus}</div>
//         <div>Local Name: {product.localName}</div>
//       </div>

//         <div className="w-full  py-8 px-6 rounded-lg shadow-md">
//       <div className="flex justify-between items-center mb-6">
//         <h3 className="text-3xl font-bold text-gray-800">Customer Review</h3>
//         <button className="bg-green-700 text-white py-2 px-4 rounded-full hover:bg-green-800 transition">
//           Write Review
//         </button>
//       </div>
//       <div className="space-y-8">
//         {product.reviews.map((review, i) => (
//           <div
//             key={i}
//             className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow duration-300 flex  gap-4"
//           >
//             {/* Profile Avatar */}
//             <div className="flex items-center justify-center bg-pink-200 text-pink-700 font-bold w-12 h-12 rounded-full ">
//               {review.username[0].toUpperCase()}

//             </div>
//             {/* Review Content */}
//             <div >
//               <div className="flex-col  items-center">
//                 <h4 className="text-lg font-semibold text-gray-900">
//                   {review.username}
//                 </h4>
//                 <div className="flex items-center gap-1">
//                   <span className="text-yellow-500 flex">
//                     {Array.from({ length: 5 }).map((_, index) => (
//                       <svg
//                         key={index}
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill={
//                           index < review.rating ? "currentColor" : "none"
//                         }
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                         className="w-5 h-5"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
//                         />
//                       </svg>
//                     ))}
//                   </span>
//                   <span className="text-gray-700 text-sm font-medium ml-1">
//                     {review.rating}.0
//                   </span>
//                 </div>
//               </div>
//               <p className="text-gray-700 my-2">{review.comment}</p>
//               <div className="flex items-center gap-6 text-gray-600 text-sm">
//                 <div className="flex items-center gap-2">
//                   <button className="text-gray-500 hover:text-green-500">
//                     👍
//                   </button>
//                   <span>{review.likes}</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <button className="text-gray-500 hover:text-red-500">
//                     👎
//                   </button>
//                   <span>{review.dislikes}</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//       </div>
//       </div>
//   )
// }

// export default ProductDetails

// 1
// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import { MdOutlineCurrencyRupee } from 'react-icons/md';
// import { motion, AnimatePresence } from 'framer-motion';

// const ProductDetails = () => {
//   const location = useLocation();
//   const product = location.state.item;

//   // State for the primary image, quantity, selected size, and active tab
//   const [primaryImage, setPrimaryImage] = useState(product.primaryImage);
//   const [quantity, setQuantity] = useState(1);
//   const [selectedSize, setSelectedSize] = useState(null);
//   const [activeTab, setActiveTab] = useState('Plant Care');

//   const sizes = ['Small', 'Medium', 'Large'];

//   // Update the main image when a secondary image is clicked
//   const handleImageClick = (image) => {
//     setPrimaryImage(image);
//   };

//   // Increment/decrement the quantity ensuring it never goes below 1
//   const handleDecrement = () => {
//     if (quantity > 1) setQuantity(quantity - 1);
//   };
//   const handleIncrement = () => setQuantity(quantity + 1);

//   // Render content based on the active tab
//   let tabContent;
//   if (activeTab === 'Plant Care') {
//     tabContent = (
//       <div className="p-4 text-gray-600">
//         <p>{product.description}</p>
//       </div>
//     );
//   } else if (activeTab === 'Plant Requirements') {
//     tabContent = (
//       <div className="p-4 text-gray-600 space-y-2">
//         <div>
//           <strong>Sunlight Requirement:</strong> {product.sunlightRequirement}
//         </div>
//         <div>
//           <strong>Moisture Requirement:</strong> {product.moistureRequirement}
//         </div>
//         <div>
//           <strong>Soil Type:</strong> {product.soilType}
//         </div>
//       </div>
//     );
//   } else if (activeTab === 'Other Details') {
//     tabContent = (
//       <div className="p-4 text-gray-600 space-y-2">
//         <div>
//           <strong>Categories:</strong> {product.categories}
//         </div>
//         <div>
//           <strong>Season:</strong> {product.season}
//         </div>
//         <div>
//           <strong>Growth Rate:</strong> {product.growthRate}
//         </div>
//         <div>
//           <strong>Pot Size Required:</strong> {product.potSizeRequired}
//         </div>
//         <div>
//           <strong>Genus:</strong> {product.genus}
//         </div>
//         <div>
//           <strong>Local Name:</strong> {product.localName}
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-gray-50 to-gray-100 p-4">
//       <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
//         {/* Top Section: Product Image & Details */}
//         <div className="flex flex-col md:flex-row">
//           {/* Image Section */}
//           <section className="md:w-1/2 p-6 flex flex-col items-center">
//             <div className="w-full h-96 bg-gray-100 rounded-xl flex justify-center items-center overflow-hidden">
//               <img
//                 src={primaryImage}
//                 alt={product.name}
//                 className="max-h-full object-contain transition-transform duration-300 hover:scale-105"
//               />
//             </div>
//             <div className="mt-4 flex space-x-3">
//               {product.secondaryImages.map((image, index) => (
//                 <div
//                   key={index}
//                   className="relative w-20 h-20 overflow-hidden rounded-lg border border-gray-200 cursor-pointer transition-transform duration-200 transform hover:scale-105"
//                   onClick={() => handleImageClick(image)}
//                 >
//                   <img
//                     src={image}
//                     alt={`Secondary ${index + 1}`}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* Details Section */}
//           <section className="md:w-1/2 p-6 flex flex-col justify-between">
//             <div>
//               <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>
//               {product.rating && (
//                 <div className="mt-2">
//                   <span className="text-lg text-yellow-500 font-semibold">⭐ {product.rating}</span>
//                 </div>
//               )}
//               <div className="mt-4 flex items-center text-3xl text-green-700">
//                 <MdOutlineCurrencyRupee className="mr-1" />
//                 <span>{product.price}</span>
//               </div>
//               <p className="mt-4 text-gray-600">{product.description}</p>
//             </div>

//             <div className="mt-6">
//               <h4 className="text-lg font-semibold mb-3">Select Size</h4>
//               <div className="flex gap-4">
//                 {sizes.map((size) => (
//                   <button
//                     key={size}
//                     onClick={() => setSelectedSize(size)}
//                     className={`px-5 py-2 rounded-lg border transition-colors duration-200 ${
//                       selectedSize === size
//                         ? 'bg-green-200 border-green-500 text-green-800'
//                         : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-100'
//                     }`}
//                   >
//                     {size}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
//               <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
//                 <button
//                   onClick={handleDecrement}
//                   className="px-4 py-2 bg-gray-50 hover:bg-gray-100 transition-colors"
//                 >
//                   -
//                 </button>
//                 <div className="px-4 py-2 text-lg font-medium text-gray-700">{quantity}</div>
//                 <button
//                   onClick={handleIncrement}
//                   className="px-4 py-2 bg-gray-50 hover:bg-gray-100 transition-colors"
//                 >
//                   +
//                 </button>
//               </div>
//               <button className="flex-1 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition-colors">
//                 Add to Cart
//               </button>
//               <button className="flex-1 py-3 bg-yellow-500 text-white rounded-lg shadow hover:bg-yellow-600 transition-colors">
//                 Buy Now
//               </button>
//             </div>
//           </section>
//         </div>

//         {/* Tabs Section */}
//         <div className="border-t mt-8">
//           <nav className="flex justify-around bg-gray-50">
//             {['Plant Care', 'Plant Requirements', 'Other Details'].map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
//                 className={`flex-1 py-4 text-center font-semibold transition-colors duration-200 ${
//                   activeTab === tab
//                     ? 'border-b-4 border-green-600 text-green-700'
//                     : 'text-gray-500 hover:text-green-600'
//                 }`}
//               >
//                 {tab}
//               </button>
//             ))}
//           </nav>
//           <AnimatePresence exitBeforeEnter>
//             <motion.div
//               key={activeTab}
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -10 }}
//               transition={{ duration: 0.3 }}
//               className="p-6"
//             >
//               {tabContent}
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         {/* Customer Reviews */}
//         <div className="p-6 bg-gray-50">
//           <div className="flex justify-between items-center mb-4">
//             <h3 className="text-2xl font-bold text-gray-800">Customer Reviews</h3>
//             <button className="bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-700 transition-colors">
//               Write Review
//             </button>
//           </div>
//           <div className="space-y-6">
//             {product.reviews.map((review, i) => (
//               <div
//                 key={i}
//                 className="flex gap-4 p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
//               >
//                 <div className="flex items-center justify-center bg-pink-200 text-pink-700 font-bold w-12 h-12 rounded-full">
//                   {review.username[0].toUpperCase()}
//                 </div>
//                 <div className="flex-1">
//                   <div className="flex items-center justify-between">
//                     <h4 className="text-lg font-semibold text-gray-800">{review.username}</h4>
//                     <div className="flex items-center">
//                       <span className="text-yellow-500 flex">
//                         {Array.from({ length: 5 }).map((_, index) => (
//                           <svg
//                             key={index}
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill={index < review.rating ? 'currentColor' : 'none'}
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                             className="w-5 h-5"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={2}
//                               d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
//                             />
//                           </svg>
//                         ))}
//                       </span>
//                       <span className="ml-2 text-sm text-gray-600">{review.rating}.0</span>
//                     </div>
//                   </div>
//                   <p className="mt-2 text-gray-600">{review.comment}</p>
//                   <div className="mt-2 flex gap-4 text-gray-600 text-sm">
//                     <button className="flex items-center hover:text-green-600">
//                       <span>👍</span>
//                       <span className="ml-1">{review.likes}</span>
//                     </button>
//                     <button className="flex items-center hover:text-red-600">
//                       <span>👎</span>
//                       <span className="ml-1">{review.dislikes}</span>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;

// 2

// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import { MdOutlineCurrencyRupee } from 'react-icons/md';
// import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';

// const ProductDetails = () => {
//   const location = useLocation();
//   const product = location.state.item;

//   // State for the primary image, quantity, selected size, and active tab
//   const [primaryImage, setPrimaryImage] = useState(product.primaryImage);
//   const [quantity, setQuantity] = useState(1);
//   const [selectedSize, setSelectedSize] = useState(null);
//   const [activeTab, setActiveTab] = useState('Plant Care');

//   const sizes = ['Small', 'Medium', 'Large'];

//   // Update the main image when a secondary image is clicked
//   const handleImageClick = (image) => {
//     setPrimaryImage(image);
//   };

//   // Increment/decrement the quantity ensuring it never goes below 1
//   const handleDecrement = () => {
//     if (quantity > 1) setQuantity(quantity - 1);
//   };
//   const handleIncrement = () => setQuantity(quantity + 1);

//   // Function to render star rating
//   const renderRating = (rating) => {
//     const fullStars = Math.floor(rating);
//     const halfStar = rating % 1 !== 0;
//     const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

//     return (
//       <div className="flex items-center">
//         {Array(fullStars).fill().map((_, i) => <FaStar key={`full-${i}`} className="text-yellow-500" />)}
//         {halfStar && <FaStarHalfAlt className="text-yellow-500" />}
//         {Array(emptyStars).fill().map((_, i) => <FaRegStar key={`empty-${i}`} className="text-yellow-500" />)}
//         <span className="ml-2 text-sm text-gray-700">{rating}</span>
//       </div>
//     );
//   };

//   // Render content based on the active tab
//   let tabContent;
//   if (activeTab === 'Plant Care') {
//     tabContent = (
//       <div className="p-4 text-gray-600">
//         <p>{product.description}</p>
//       </div>
//     );
//   } else if (activeTab === 'Plant Requirements') {
//     tabContent = (
//       <div className="p-4 text-gray-600 space-y-2">
//         <div><strong>Sunlight Requirement:</strong> {product.sunlightRequirement}</div>
//         <div><strong>Moisture Requirement:</strong> {product.moistureRequirement}</div>
//         <div><strong>Soil Type:</strong> {product.soilType}</div>
//       </div>
//     );
//   } else if (activeTab === 'Other Details') {
//     tabContent = (
//       <div className="p-4 text-gray-600 space-y-2">
//         <div><strong>Categories:</strong> {product.categories}</div>
//         <div><strong>Season:</strong> {product.season}</div>
//         <div><strong>Growth Rate:</strong> {product.growthRate}</div>
//         <div><strong>Pot Size Required:</strong> {product.potSizeRequired}</div>
//         <div><strong>Genus:</strong> {product.genus}</div>
//         <div><strong>Local Name:</strong> {product.localName}</div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 flex justify-center p-4">
//       <div className="max-w-7xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
//         {/* Top Section: Product Image & Details */}
//         <div className="flex flex-col md:flex-row">
//           {/* Image Section */}
//           <section className="md:w-1/2 p-4 flex flex-col items-center">
//             <div className="w-full h-96 flex justify-center items-center bg-gray-100 rounded-lg">
//               <img
//                 src={primaryImage}
//                 alt={product.name}
//                 className="max-h-full object-contain transition-transform duration-300 hover:scale-105"
//               />
//             </div>
//             <div className="mt-4 flex space-x-2">
//               {product.secondaryImages.map((image, index) => (
//                 <img
//                   key={index}
//                   src={image}
//                   alt={`Secondary ${index + 1}`}
//                   className="h-20 w-20 object-cover rounded cursor-pointer transition-transform duration-200 hover:scale-105 border border-gray-300"
//                   onClick={() => handleImageClick(image)}
//                 />
//               ))}
//             </div>
//           </section>

//           {/* Details Section */}
//           <section className="md:w-1/2 p-6 flex flex-col justify-between">
//             <div>
//               <h1 className="text-3xl font-bold text-green-800">{product.name}</h1>
//               <div className="mt-2">
//                 {renderRating(product.rating)}
//               </div>
//               <div className="mt-4 flex items-center text-2xl text-green-700">
//                 <MdOutlineCurrencyRupee />
//                 <span>{product.price}</span>
//               </div>
//               <h2 className="mt-2 text-gray-600">{product.description}</h2>
//             </div>

//             <div className="mt-6">
//               <h4 className="text-lg font-semibold mb-2">Select Size</h4>
//               <div className="flex gap-4">
//                 {sizes.map((size) => (
//                   <button
//                     key={size}
//                     onClick={() => setSelectedSize(size)}
//                     className={`px-4 py-2 border rounded-lg transition-colors duration-200 hover:bg-gray-200 ${
//                       selectedSize === size ? 'bg-green-200 border-green-500' : 'bg-white'
//                     }`}
//                   >
//                     {size}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
//               <div className="flex items-center border rounded overflow-hidden">
//                 <button
//                   onClick={handleDecrement}
//                   className="px-3 py-2 bg-gray-100 hover:bg-gray-200 transition-colors"
//                 >
//                   -
//                 </button>
//                 <div className="px-4 py-2 border-l border-r">{quantity}</div>
//                 <button
//                   onClick={handleIncrement}
//                   className="px-3 py-2 bg-gray-100 hover:bg-gray-200 transition-colors"
//                 >
//                   +
//                 </button>
//               </div>
//               <button className="flex-1 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors">
//                 Add to Cart
//               </button>
//               <button className="flex-1 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors">
//                 Buy Now
//               </button>
//             </div>
//           </section>
//         </div>

//         {/* Tabs Section */}
//         <div className="border-t">
//           <nav className="flex justify-around bg-gray-100">
//             {['Plant Care', 'Plant Requirements', 'Other Details'].map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
//                 className={`flex-1 py-3 text-center font-medium transition-colors ${
//                   activeTab === tab
//                     ? 'border-b-4 border-green-600 text-green-800'
//                     : 'text-gray-600 hover:text-green-700'
//                 }`}
//               >
//                 {tab}
//               </button>
//             ))}
//           </nav>
//           <div className="p-6">{tabContent}</div>
//         </div>

//         {/* Customer Reviews */}
//         <div className="p-6 bg-gray-50">
//           <div className="flex justify-between items-center mb-4">
//             <h3 className="text-2xl font-bold text-gray-800">Customer Reviews</h3>
//             <button className="bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-700 transition">
//               Write Review
//             </button>
//           </div>
//           <div className="space-y-4">
//             {product.reviews.map((review, i) => (
//               <div
//                 key={i}
//                 className="flex gap-4 p-4 bg-white rounded shadow hover:shadow-md transition-shadow"
//               >
//                 <div className="flex items-center justify-center bg-pink-200 text-pink-700 font-bold w-12 h-12 rounded-full">
//                   {review.username[0].toUpperCase()}
//                 </div>
//                 <div className="flex-1">
//                   <div className="flex items-center justify-between">
//                     <h4 className="text-lg font-semibold">{review.username}</h4>
//                     {renderRating(review.rating)}
//                   </div>
//                   <p className="mt-2 text-gray-600">{review.comment}</p>
//                   <div className="mt-2 flex gap-4 text-gray-600 text-sm">
//                     <div className="flex items-center gap-1">
//                       <button className="hover:text-green-600">👍</button>
//                       <span>{review.likes}</span>
//                     </div>
//                     <div className="flex items-center gap-1">
//                       <button className="hover:text-red-600">👎</button>
//                       <span>{review.dislikes}</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;

// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import { MdOutlineCurrencyRupee } from 'react-icons/md';
// import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';
// import { motion } from 'framer-motion';

// const ProductDetails = () => {
//   const location = useLocation();
//   const product = location.state.item;

//   // State for the primary image, quantity, selected size, and active tab
//   const [primaryImage, setPrimaryImage] = useState(product.primaryImage);
//   const [quantity, setQuantity] = useState(1);
//   const [selectedSize, setSelectedSize] = useState(null);
//   const [activeTab, setActiveTab] = useState('Plant Care');

//   const sizes = ['Small', 'Medium', 'Large'];

//   // Update the main image when a secondary image is clicked
//   const handleImageClick = (image) => {
//     setPrimaryImage(image);
//   };

//   // Increment/decrement the quantity ensuring it never goes below 1
//   const handleDecrement = () => {
//     if (quantity > 1) setQuantity(quantity - 1);
//   };
//   const handleIncrement = () => setQuantity(quantity + 1);

//   // Function to render star rating
//   const renderRating = (rating) => {
//     const fullStars = Math.floor(rating);
//     const halfStar = rating % 1 !== 0;
//     const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

//     return (
//       <div className="flex items-center">
//         {Array.from({ length: fullStars }).map((_, i) => (
//           <FaStar key={`full-${i}`} className="text-yellow-500" />
//         ))}
//         {halfStar && <FaStarHalfAlt className="text-yellow-500" />}
//         {Array.from({ length: emptyStars }).map((_, i) => (
//           <FaRegStar key={`empty-${i}`} className="text-yellow-500" />
//         ))}
//         <span className="ml-2 text-sm text-gray-700">{rating}</span>
//       </div>
//     );
//   };

//   // Render content based on the active tab
//   let tabContent;
//   if (activeTab === 'Plant Care') {
//     tabContent = (
//       <div className="p-4 text-gray-600">
//         <p>{product.description}</p>
//       </div>
//     );
//   } else if (activeTab === 'Plant Requirements') {
//     tabContent = (
//       <div className="p-4 text-gray-600 space-y-2">
//         <div>
//           <strong>Sunlight Requirement:</strong> {product.sunlightRequirement}
//         </div>
//         <div>
//           <strong>Moisture Requirement:</strong> {product.moistureRequirement}
//         </div>
//         <div>
//           <strong>Soil Type:</strong> {product.soilType}
//         </div>
//       </div>
//     );
//   } else if (activeTab === 'Other Details') {
//     tabContent = (
//       <div className="p-4 text-gray-600 space-y-2">
//         <div>
//           <strong>Categories:</strong> {product.categories}
//         </div>
//         <div>
//           <strong>Season:</strong> {product.season}
//         </div>
//         <div>
//           <strong>Growth Rate:</strong> {product.growthRate}
//         </div>
//         <div>
//           <strong>Pot Size Required:</strong> {product.potSizeRequired}
//         </div>
//         <div>
//           <strong>Genus:</strong> {product.genus}
//         </div>
//         <div>
//           <strong>Local Name:</strong> {product.localName}
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex justify-center p-6">
//       <div className="max-w-7xl w-full bg-white rounded-2xl shadow-xl overflow-hidden">
//         {/* Top Section: Product Image & Details */}
//         <div className="flex flex-col md:flex-row">
//           {/* Image Section */}
//           <section className="md:w-1/2 p-6 flex flex-col items-center">
//             <div className="w-full h-[68vh] bg-gray-100 rounded-xl flex justify-center items-center overflow-hidden">
//               <motion.img
//                 src={primaryImage}
//                 alt={product.name}
//                 className="max-h-full object-contain"
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ duration: 0.3 }}
//               />
//             </div>
//             <div className="mt-4 flex space-x-3">
//               {product.secondaryImages.map((image, index) => (
//                 <motion.div
//                   key={index}
//                   whileHover={{ scale: 1.1 }}
//                   onClick={() => handleImageClick(image)}
//                   className="w-20 h-20 rounded-lg overflow-hidden border border-gray-300 cursor-pointer"
//                 >
//                   <img src={image} alt={`Secondary ${index + 1}`} className="w-full h-full object-cover" />
//                 </motion.div>
//               ))}
//             </div>
//           </section>

//           {/* Details Section */}
//           <section className="md:w-1/2 p-6 flex flex-col justify-between">
//             <div>
//               <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>
//               <div className="mt-2">{renderRating(product.rating)}</div>
//               <div className="mt-4 flex items-center text-3xl text-green-700">
//                 <MdOutlineCurrencyRupee className="mr-1" />
//                 <span>{product.price}</span>
//               </div>
//               <p className="mt-4 text-gray-600">{product.description}</p>
//             </div>

//             <div className="mt-6">
//               <h4 className="text-lg font-semibold mb-3">Select Size</h4>
//               <div className="flex gap-4">
//                 {sizes.map((size) => (
//                   <button
//                     key={size}
//                     onClick={() => setSelectedSize(size)}
//                     className={`px-5 py-2 rounded-lg border transition-all duration-200 ${
//                       selectedSize === size
//                         ? 'bg-green-200 border-green-500 text-green-800'
//                         : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-100'
//                     }`}
//                   >
//                     {size}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
//               <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
//                 <button
//                   onClick={handleDecrement}
//                   className="px-4 py-2 bg-gray-50 hover:bg-gray-100 transition-colors"
//                 >
//                   -
//                 </button>
//                 <div className="px-4 py-2 text-lg font-medium text-gray-700">{quantity}</div>
//                 <button
//                   onClick={handleIncrement}
//                   className="px-4 py-2 bg-gray-50 hover:bg-gray-100 transition-colors"
//                 >
//                   +
//                 </button>
//               </div>
//               <button className="flex-1 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition-colors">
//                 Add to Cart
//               </button>
//               <button className="flex-1 py-3 bg-yellow-500 text-white rounded-lg shadow hover:bg-yellow-600 transition-colors">
//                 Buy Now
//               </button>
//             </div>
//           </section>
//         </div>

//         {/* Tabs Section */}
//         <div className="border-t mt-8">
//           <nav className="flex justify-around bg-gray-50">
//             {['Plant Care', 'Plant Requirements', 'Other Details'].map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
//                 className={`flex-1 py-4 text-center font-semibold transition-colors duration-200 ${
//                   activeTab === tab
//                     ? 'border-b-4 border-green-600 text-green-700'
//                     : 'text-gray-500 hover:text-green-600'
//                 }`}
//               >
//                 {tab}
//               </button>
//             ))}
//           </nav>
//           <div className="p-6">{tabContent}</div>
//         </div>

//         {/* Customer Reviews */}
//         <div className="p-6 bg-gray-50">
//           <div className="flex justify-between items-center mb-4">
//             <h3 className="text-2xl font-bold text-gray-800">Customer Reviews</h3>
//             <button className="bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-700 transition-colors">
//               Write Review
//             </button>
//           </div>
//           <div className="space-y-6">
//             {product.reviews.map((review, i) => (
//               <div
//                 key={i}
//                 className="flex gap-4 p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
//               >
//                 <div className="flex items-center justify-center bg-pink-200 text-pink-700 font-bold w-12 h-12 rounded-full">
//                   {review.username[0].toUpperCase()}
//                 </div>
//                 <div className="flex-1">
//                   <div className="flex items-center justify-between">
//                     <h4 className="text-lg font-semibold text-gray-800">{review.username}</h4>
//                     {renderRating(review.rating)}
//                   </div>
//                   <p className="mt-2 text-gray-600">{review.comment}</p>
//                   <div className="mt-2 flex gap-4 text-gray-600 text-sm">
//                     <button className="flex items-center hover:text-green-600">
//                       <span>👍</span>
//                       <span className="ml-1">{review.likes}</span>
//                     </button>
//                     <button className="flex items-center hover:text-red-600">
//                       <span>👎</span>
//                       <span className="ml-1">{review.dislikes}</span>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;

// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import { MdOutlineCurrencyRupee } from 'react-icons/md';
// import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';
// import { motion, AnimatePresence } from 'framer-motion';
// import { AiTwotoneLike } from "react-icons/ai";
// import { AiTwotoneDislike } from "react-icons/ai";

// const ProductDetails = () => {
//   const location = useLocation();
//   const product = location.state.item;

//   // State for the primary image, quantity, selected size, and active tab
//   const [primaryImage, setPrimaryImage] = useState(product.primaryImage);
//   const [quantity, setQuantity] = useState(1);
//   const [selectedSize, setSelectedSize] = useState(null);
//   const [activeTab, setActiveTab] = useState('Plant Care');

//   const sizes = ['Small', 'Medium', 'Large'];

//   // Update the main image when a secondary image is clicked
//   const handleImageClick = (image) => {
//     setPrimaryImage(image);
//   };

//   // Increment/decrement the quantity ensuring it never goes below 1
//   const handleDecrement = () => {
//     if (quantity > 1) setQuantity(quantity - 1);
//   };
//   const handleIncrement = () => setQuantity(quantity + 1);

//   // Function to render star rating
//   const renderRating = (rating) => {
//     const fullStars = Math.floor(rating);
//     const halfStar = rating % 1 !== 0;
//     const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

//     return (
//       <div className="flex items-center">
//         {Array.from({ length: fullStars }).map((_, i) => (
//           <FaStar key={`full-${i}`} className="text-yellow-500" />
//         ))}
//         {halfStar && <FaStarHalfAlt className="text-yellow-500" />}
//         {Array.from({ length: emptyStars }).map((_, i) => (
//           <FaRegStar key={`empty-${i}`} className="text-yellow-500" />
//         ))}
//         <span className="ml-2 text-sm text-gray-700">{rating}</span>
//       </div>
//     );
//   };

//   // Render content based on the active tab
//   let tabContent;
//   if (activeTab === 'Plant Requirements') {
//     tabContent = (
//       <div className="p-4 text-gray-600 space-y-2">
//         <div>
//           <strong>Sunlight Requirement:</strong> {product.sunlightRequirement}
//         </div>
//         <div>
//           <strong>Moisture Requirement:</strong> {product.moistureRequirement}
//         </div>
//         <div>
//           <strong>Soil Type:</strong> {product.soilType}
//         </div>
//       </div>
//     );
//   } else if (activeTab === 'Other Details') {
//     tabContent = (
//       <div className="p-4 text-gray-600 space-y-2">
//         <div>
//           <strong>Categories:</strong> {product.categories}
//         </div>
//         <div>
//           <strong>Season:</strong> {product.season}
//         </div>
//         <div>
//           <strong>Growth Rate:</strong> {product.growthRate}
//         </div>
//         <div>
//           <strong>Pot Size Required:</strong> {product.potSizeRequired}
//         </div>
//         <div>
//           <strong>Genus:</strong> {product.genus}
//         </div>
//         <div>
//           <strong>Local Name:</strong> {product.localName}
//         </div>
//       </div>
//     );
//   }

//   return (
//     <motion.div
//       className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex justify-center p-6"
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <div className="max-w-7xl w-full bg-white rounded-2xl shadow-xl overflow-hidden">
//         {/* Top Section: Product Image & Details */}
//         <div className="flex flex-col md:flex-row">
//           {/* Image Section */}
//           <section className="md:w-1/2 p-6 flex flex-col items-center">
//             <div className="w-full h-[70vh] bg-gray-100 rounded-xl flex justify-center items-center overflow-hidden">
//               <motion.img
//                 src={primaryImage}
//                 alt={product.name}
//                 className="max-h-full object-contain"
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ duration: 0.3 }}
//               />
//             </div>
//             <div className="mt-4 flex space-x-3">
//               {product.secondaryImages.map((image, index) => (
//                 <motion.div
//                   key={index}
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => handleImageClick(image)}
//                   className="w-16 h-16 rounded-lg overflow-hidden border border-gray-300 cursor-pointer"
//                 >
//                   <img src={image} alt={`Secondary ${index + 1}`} className="w-full h-full object-cover" />
//                 </motion.div>
//               ))}
//             </div>
//           </section>

//           {/* Details Section */}
//           <section className="md:w-1/2 p-6 flex flex-col justify-between">
//             <div>
//               <motion.h1
//                 className="text-4xl font-bold text-green-900"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.2, duration: 0.5 }}
//               >
//                 {product.name}
//               </motion.h1>
//               <motion.div className="mt-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
//                 {renderRating(product.rating)}
//               </motion.div>
//               <motion.div
//                 className="mt-4 flex items-center font-bold text-3xl text-green-900"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.4 }}
//               >
//                 <MdOutlineCurrencyRupee className="mr-1" />
//                 <span>{product.price}</span>
//               </motion.div>
//               <motion.p
//                 className="mt-4 text-green-900"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.5 }}
//               >
//                 {product.description}
//               </motion.p>
//             </div>

//             <div className="mt-6">
//               <motion.h4
//                 className="text-lg font-semibold mb-3"
//                 whileHover={{ scale: 1.05 }}
//               >
//                 Select Size
//               </motion.h4>
//               <div className="flex gap-4">
//                 {sizes.map((size) => (
//                   <motion.button
//                     key={size}
//                     onClick={() => setSelectedSize(size)}
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     className={`px-5 py-2 rounded-lg border transition-all duration-200 ${
//                       selectedSize === size
//                         ? 'bg-green-200 border-green-500 text-green-800'
//                         : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-100'
//                     }`}
//                   >
//                     {size}
//                   </motion.button>
//                 ))}
//               </div>
//             </div>

//             <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
//               <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
//                 <motion.button
//                   onClick={handleDecrement}
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="px-4 py-2 bg-gray-50 hover:bg-gray-100 transition-colors"
//                 >
//                   -
//                 </motion.button>
//                 <AnimatePresence exitBeforeEnter>
//                   <motion.div
//                     key={quantity}
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -10 }}
//                     className="px-4 py-2 text-lg font-medium text-gray-700"
//                   >
//                     {quantity}
//                   </motion.div>
//                 </AnimatePresence>
//                 <motion.button
//                   onClick={handleIncrement}
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="px-4 py-2 bg-gray-50 hover:bg-gray-100 transition-colors"
//                 >
//                   +
//                 </motion.button>
//               </div>
//               <motion.button
//                 whileHover={{ scale: 1.03 }}
//                 whileTap={{ scale: 0.97 }}
//                 className="flex-1 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition-colors"
//               >
//                 Add to Cart
//               </motion.button>
//               <motion.button
//                 whileHover={{ scale: 1.03 }}
//                 whileTap={{ scale: 0.97 }}
//                 className="flex-1 py-3 bg-yellow-500 text-white rounded-lg shadow hover:bg-yellow-600 transition-colors"
//               >
//                 Buy Now
//               </motion.button>
//             </div>
//           </section>
//         </div>

//         {/* Tabs Section */}
//         <div className="border-t mt-8">
//           <nav className="flex justify-around bg-gray-50">
//             {[ 'Plant Requirements', 'Other Details'].map((tab) => (
//               <motion.button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
//                 whileHover={{ scale: 1.05 }}
//                 className={`flex-1 py-4 text-center font-semibold transition-colors duration-200 ${
//                   activeTab === tab
//                     ? 'border-b-4 border-green-600 text-green-700'
//                     : 'text-gray-500 hover:text-green-600'
//                 }`}
//               >
//                 {tab}
//               </motion.button>
//             ))}
//           </nav>
//           <AnimatePresence exitBeforeEnter>
//             <motion.div
//               key={activeTab}
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -10 }}
//               transition={{ duration: 0.3 }}
//               className="p-6"
//             >
//               {tabContent}
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         {/* Customer Reviews */}
//         <div className="p-6 bg-gray-50">
//           <div className="flex justify-between items-center mb-4">
//             <motion.h3
//               className="text-2xl font-bold text-gray-800"
//               whileHover={{ scale: 1.02 }}
//             >
//               Customer Reviews
//             </motion.h3>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               className="bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-700 transition-colors"
//             >
//               Write Review
//             </motion.button>
//           </div>
//           <div className="space-y-6">
//             {product.reviews.map((review, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.1 }}
//                 className="flex gap-4 p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
//               >
//                 <div className="flex items-center justify-center bg-pink-200 text-pink-700 font-bold w-12 h-12 rounded-full">
//                   {review.username[0].toUpperCase()}
//                 </div>
//                 <div className="flex-1">
//                   <div className="flex items-center justify-between">
//                     <h4 className="text-lg font-semibold text-gray-800">{review.username}</h4>
//                     {renderRating(review.rating)}
//                   </div>
//                   <p className="mt-2 text-gray-600">{review.comment}</p>
//                   <div className="mt-2 flex gap-4 text-gray-600 text-sm">
//                     <motion.button whileHover={{ scale: 1.1 }} className="flex items-center hover:text-green-600">
//                       <span><AiTwotoneLike /></span>
//                       <span className="ml-1">{review.likes}</span>
//                     </motion.button>
//                     <motion.button whileHover={{ scale: 1.1 }} className="flex items-center hover:text-red-600">
//                       <span><AiTwotoneDislike /></span>
//                       <span className="ml-1">{review.dislikes}</span>
//                     </motion.button>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default ProductDetails;

// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import { MdOutlineCurrencyRupee } from 'react-icons/md';
// import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';
// import { motion, AnimatePresence } from 'framer-motion';
// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import { MdOutlineCurrencyRupee } from 'react-icons/md';
// import { FaStar, FaRegStar, FaStarHalfAlt, FaSun, FaTint } from 'react-icons/fa';
// import { GiPlantRoots } from 'react-icons/gi'; // Corrected icon for soil
// import { motion, AnimatePresence } from 'framer-motion';
// import { AiTwotoneLike, AiTwotoneDislike } from "react-icons/ai";
// import { AiTwotoneLike, AiTwotoneDislike } from "react-icons/ai";

// const ProductDetails = () => {
//   const location = useLocation();
//   const product = location.state.item;

//   // State for the primary image, quantity, selected size, and active tab
//   const [primaryImage, setPrimaryImage] = useState(product.primaryImage);
//   const [quantity, setQuantity] = useState(1);
//   const [selectedSize, setSelectedSize] = useState(null);
//   const [activeTab, setActiveTab] = useState('Plant Care');

//   const sizes = ['Small', 'Medium', 'Large'];

//   // Update the main image when a secondary image is clicked
//   const handleImageClick = (image) => {
//     setPrimaryImage(image);
//   };

//   // Increment/decrement the quantity ensuring it never goes below 1
//   const handleDecrement = () => {
//     if (quantity > 1) setQuantity(quantity - 1);
//   };
//   const handleIncrement = () => setQuantity(quantity + 1);

//   // Function to render star rating
//   const renderRating = (rating) => {
//     const fullStars = Math.floor(rating);
//     const halfStar = rating % 1 !== 0;
//     const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

//     return (
//       <div className="flex items-center">
//         {Array.from({ length: fullStars }).map((_, i) => (
//           <FaStar key={`full-${i}`} className="text-yellow-500" />
//         ))}
//         {halfStar && <FaStarHalfAlt className="text-yellow-500" />}
//         {Array.from({ length: emptyStars }).map((_, i) => (
//           <FaRegStar key={`empty-${i}`} className="text-yellow-500" />
//         ))}
//         <span className="ml-2 text-sm text-gray-700">{rating}</span>
//       </div>
//     );
//   };

//   // Render content based on the active tab
//   let tabContent;
//   if (activeTab === 'Plant Requirements') {
//     tabContent = (
//       <div className="p-4 text-gray-600 space-y-4">
//         <div className="flex items-center">
//           <FaSun className="text-yellow-500 mr-2" size={20} />
//           <span className="font-semibold mr-2">Sunlight Requirement:</span>
//           <span>{product.sunlightRequirement}</span>
//         </div>
//         <div className="flex items-center">
//           <FaTint className="text-blue-500 mr-2" size={20} />
//           <span className="font-semibold mr-2">Moisture Requirement:</span>
//           <span>{product.moistureRequirement}</span>
//         </div>
//         <div className="flex items-center">
//           <GiPlantRoots className="text-green-700 mr-2" size={20} />
//           <span className="font-semibold mr-2">Soil Type:</span>
//           <span>{product.soilType}</span>
//         </div>
//       </div>
//     );
//   } else if (activeTab === 'Other Details') {
//     tabContent = (
//       <div className="p-4 text-gray-600 space-y-2">
//         <div>
//           <strong>Categories:</strong> {product.categories}
//         </div>
//         <div>
//           <strong>Season:</strong> {product.season}
//         </div>
//         <div>
//           <strong>Growth Rate:</strong> {product.growthRate}
//         </div>
//         <div>
//           <strong>Pot Size Required:</strong> {product.potSizeRequired}
//         </div>
//         <div>
//           <strong>Genus:</strong> {product.genus}
//         </div>
//         <div>
//           <strong>Local Name:</strong> {product.localName}
//         </div>
//       </div>
//     );
//   } else {
//     // Default: Plant Care
//     tabContent = (
//       <div className="p-4 text-gray-600">
//         <p>{product.description}</p>
//       </div>
//     );
//   }

//   return (
//     <motion.div
//       className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex justify-center p-6"
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//     >
//       <div className="max-w-7xl w-full bg-white rounded-2xl shadow-xl overflow-hidden">
//         {/* Top Section: Product Image & Details */}
//         <motion.div
//           className="flex flex-col md:flex-row"
//           initial="hidden"
//           animate="visible"
//           variants={{
//             visible: { transition: { staggerChildren: 0.1 } },
//             hidden: {}
//           }}
//         >
//           {/* Image Section */}
//           <section className="md:w-1/2 p-6 flex flex-col items-center">
//             <motion.div
//               className="w-full h-[70vh] bg-gray-100 rounded-xl flex justify-center items-center overflow-hidden"
//               variants={{
//                 hidden: { opacity: 0, scale: 0.9 },
//                 visible: { opacity: 1, scale: 1 }
//               }}
//             >
//               <motion.img
//                 src={primaryImage}
//                 alt={product.name}
//                 className="max-h-full object-contain"
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ duration: 0.3 }}
//               />
//             </motion.div>
//             <div className="mt-4 flex space-x-3">
//               {product.secondaryImages.map((image, index) => (
//                 <motion.div
//                   key={index}
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => handleImageClick(image)}
//                   className="w-16 h-16 rounded-lg overflow-hidden border border-gray-300 cursor-pointer"
//                 >
//                   <motion.img
//                     src={image}
//                     alt={`Secondary ${index + 1}`}
//                     className="w-full h-full object-cover"
//                   />
//                 </motion.div>
//               ))}
//             </div>
//           </section>

//           {/* Details Section */}
//           <section className="md:w-1/2 p-6 flex flex-col justify-between">
//             <div>
//               <motion.h1
//                 className="text-4xl font-bold text-green-900"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.2, duration: 0.5 }}
//               >
//                 {product.name}
//               </motion.h1>
//               <motion.div
//                 className="mt-2"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.3 }}
//               >
//                 {renderRating(product.rating)}
//               </motion.div>
//               <motion.div
//                 className="mt-4 flex items-center font-bold text-3xl text-green-900"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.4 }}
//               >
//                 <MdOutlineCurrencyRupee className="mr-1" />
//                 <span>{product.price}</span>
//               </motion.div>
//               <motion.p
//                 className="mt-4 text-green-900"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.5 }}
//               >
//                 {product.description}
//               </motion.p>
//             </div>

//             <div className="mt-6">
//               <motion.h4
//                 className="text-lg font-semibold mb-3"
//                 whileHover={{ scale: 1.05 }}
//               >
//                 Select Size
//               </motion.h4>
//               <div className="flex gap-4">
//                 {sizes.map((size) => (
//                   <motion.button
//                     key={size}
//                     onClick={() => setSelectedSize(size)}
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     className={`px-5 py-2 rounded-lg border transition-all duration-200 ${
//                       selectedSize === size
//                         ? 'bg-green-200 border-green-500 text-green-800'
//                         : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-100'
//                     }`}
//                   >
//                     {size}
//                   </motion.button>
//                 ))}
//               </div>
//             </div>

//             <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
//               <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
//                 <motion.button
//                   onClick={handleDecrement}
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="px-4 py-2 bg-gray-50 hover:bg-gray-100 transition-colors"
//                 >
//                   -
//                 </motion.button>
//                 <AnimatePresence exitBeforeEnter>
//                   <motion.div
//                     key={quantity}
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -10 }}
//                     className="px-4 py-2 text-lg font-medium text-gray-700"
//                   >
//                     {quantity}
//                   </motion.div>
//                 </AnimatePresence>
//                 <motion.button
//                   onClick={handleIncrement}
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="px-4 py-2 bg-gray-50 hover:bg-gray-100 transition-colors"
//                 >
//                   +
//                 </motion.button>
//               </div>
//               <motion.button
//                 whileHover={{ scale: 1.03 }}
//                 whileTap={{ scale: 0.97 }}
//                 className="flex-1 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition-colors"
//               >
//                 Add to Cart
//               </motion.button>
//               <motion.button
//                 whileHover={{ scale: 1.03 }}
//                 whileTap={{ scale: 0.97 }}
//                 className="flex-1 py-3 bg-yellow-500 text-white rounded-lg shadow hover:bg-yellow-600 transition-colors"
//               >
//                 Buy Now
//               </motion.button>
//             </div>
//           </section>
//         </motion.div>

//         {/* Tabs Section */}
//         <div className="border-t mt-8">
//           <nav className="flex justify-around bg-gray-50">
//             {['Plant Requirements', 'Other Details', 'Plant Care'].map((tab) => (
//               <motion.button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
//                 whileHover={{ scale: 1.05 }}
//                 className={`flex-1 py-4 text-center font-semibold transition-colors duration-200 ${
//                   activeTab === tab
//                     ? 'border-b-4 border-green-600 text-green-700'
//                     : 'text-gray-500 hover:text-green-600'
//                 }`}
//               >
//                 {tab}
//               </motion.button>
//             ))}
//           </nav>
//           <AnimatePresence exitBeforeEnter>
//             <motion.div
//               key={activeTab}
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -10 }}
//               transition={{ duration: 0.3 }}
//               className="p-6"
//             >
//               {tabContent}
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         {/* Customer Reviews */}
//         <div className="p-6 bg-gray-50">
//           <div className="flex justify-between items-center mb-4">
//             <motion.h3
//               className="text-2xl font-bold text-gray-800"
//               whileHover={{ scale: 1.02 }}
//             >
//               Customer Reviews
//             </motion.h3>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               className="bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-700 transition-colors"
//             >
//               Write Review
//             </motion.button>
//           </div>
//           <motion.div
//             className="space-y-6"
//             initial="hidden"
//             animate="visible"
//             variants={{
//               visible: {
//                 transition: { staggerChildren: 0.1 }
//               }
//             }}
//           >
//             {product.reviews.map((review, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.1 }}
//                 className="flex gap-4 p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
//               >
//                 <div className="flex items-center justify-center bg-pink-200 text-pink-700 font-bold w-12 h-12 rounded-full">
//                   {review.username[0].toUpperCase()}
//                 </div>
//                 <div className="flex-1">
//                   <div className="flex items-center justify-between">
//                     <h4 className="text-lg font-semibold text-gray-800">{review.username}</h4>
//                     {renderRating(review.rating)}
//                   </div>
//                   <p className="mt-2 text-gray-600">{review.comment}</p>
//                   <div className="mt-2 flex gap-4 text-gray-600 text-sm">
//                     <motion.button whileHover={{ scale: 1.1 }} className="flex items-center hover:text-green-600">
//                       <AiTwotoneLike />
//                       <span className="ml-1">{review.likes}</span>
//                     </motion.button>
//                     <motion.button whileHover={{ scale: 1.1 }} className="flex items-center hover:text-red-600">
//                       <AiTwotoneDislike />
//                       <span className="ml-1">{review.dislikes}</span>
//                     </motion.button>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default ProductDetails;

import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import {
  FaStar,
  FaRegStar,
  FaStarHalfAlt,
  FaSun,
  FaTint,
} from "react-icons/fa";
import { GiPlantRoots } from "react-icons/gi"; // Icon for soil
import { motion, AnimatePresence } from "framer-motion";
import { AiTwotoneLike, AiTwotoneDislike } from "react-icons/ai";
import {
  FaSeedling, // Icon for categories
  FaCalendarAlt, // Icon for season
  FaChartLine, // Icon for growth rate
  FaBox, // Icon for pot size
  FaLeaf, // Icon for genus
  FaMapMarkerAlt, // Icon for local name
} from "react-icons/fa";

const ProductDetails = () => {
  const location = useLocation();
  const product = location.state?.item || {};

  const [primaryImage, setPrimaryImage] = useState(product.primaryImage);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);
  const [activeTab, setActiveTab] = useState("Plant Care");

  const sizes = ["Small", "Medium", "Large"];

  const handleImageClick = (image) => {
    setPrimaryImage(image);
  };

  const handleDecrement = () => setQuantity((prev) => Math.max(1, prev - 1));
  const handleIncrement = () => setQuantity((prev) => prev + 1);
  let handleAddToCart = async (name, price, image, quantity) => {
    const itemToAdd = {
      name: name,
      price: price,
      image: image,
      quantity: quantity,
    };
  
    try {
      await axios.post("http://localhost:5000/cart", itemToAdd);
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  }

  const renderRating = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <div className="flex items-center">
        {Array(fullStars)
          .fill()
          .map((_, i) => (
            <FaStar key={`full-${i}`} className="text-yellow-500" />
          ))}
        {halfStar && <FaStarHalfAlt className="text-yellow-500" />}
        {Array(emptyStars)
          .fill()
          .map((_, i) => (
            <FaRegStar key={`empty-${i}`} className="text-yellow-500" />
          ))}
        <span className="ml-2 text-sm text-gray-700">{rating}</span>
      </div>
    );
  };


  const tabContent = {
    "Plant Requirements": (
      <div className="p-4 flex ml-14 gap-80 text-gray-600 space-y-4">
        <div className="flex items-center flex-col">
          <FaSun className="text-yellow-500 mt-2 mr-2" size={80} />
          <span className="font-semibold mr-2">Sunlight Requirement</span>
          <span>{product.sunlightRequirement}</span>
        </div>
        <div className="flex  flex-col items-center">
          <FaTint className="text-blue-500 mr-2" size={80} />
          <span className="font-semibold mr-2">Moisture Requirement</span>
          <span>{product.moistureRequirement}</span>
        </div>
        <div className="flex flex-col items-center">
          <GiPlantRoots className="text-green-700 mr-2" size={80} />
          <span className="font-semibold mr-2">Soil Type</span>
          <span>{product.soilType}</span>
        </div>
      </div>
    ),
    "Other Details": (
      <div className="p-4 text-gray-600 space-y-2">
        <div className="flex items-center">
          <FaSeedling className="text-green-600 mr-2" />
          <strong>Categories:</strong> {product.categories}
        </div>
        <div className="flex items-center">
          <FaCalendarAlt className="text-green-600 mr-2" />
          <strong>Season:</strong> {product.season}
        </div>
        <div className="flex items-center">
          <FaChartLine className="text-green-600 mr-2" />
          <strong>Growth Rate:</strong> {product.growthRate}
        </div>
        <div className="flex items-center">
          <FaBox className="text-green-600 mr-2" />
          <strong>Pot Size Required:</strong> {product.potSizeRequired}
        </div>
        <div className="flex items-center">
          <FaLeaf className="text-green-600 mr-2" />
          <strong>Genus:</strong> {product.genus}
        </div>
        <div className="flex items-center">
          <FaMapMarkerAlt className="text-green-600 mr-2" />
          <strong>Local Name:</strong> {product.localName}
        </div>
      </div>
    ),
  };
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex justify-center p-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Product Image & Details */}
        <div className="flex flex-col md:flex-row">
          {/* Image Section */}
          <section className="md:w-1/2 p-6 flex flex-col items-center">
            <motion.img
              src={primaryImage}
              alt={product.name}
              className="w-full h-[70vh] object-contain rounded-xl bg-gray-100"
              whileHover={{ scale: 1.05 }}
            />
            <div className="mt-4 flex space-x-3">
              {product.secondaryImages?.map((image, index) => (
                <motion.img
                  key={index}
                  src={image}
                  alt={`Secondary ${index + 1}`}
                  className="w-16 h-16 rounded-lg border cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  onClick={() => handleImageClick(image)}
                />
              ))}
            </div>
          </section>

          {/* Details Section */}
          <section className="md:w-1/2 p-6 flex flex-col justify-between">
            <h1 className="text-4xl font-bold text-green-900">
              {product.name}
            </h1>
            {renderRating(product.rating)}
            <div className="mt-4 flex items-center text-3xl font-bold text-green-900">
              <MdOutlineCurrencyRupee className="mr-1" />
              {product.price}
            </div>
            <p className="mt-4 text-green-900">{product.description}</p>

            {/* Quantity and Buttons */}
            <div className="mt-6 flex items-center">
              <button
                onClick={handleDecrement}
                className="px-4 py-2 bg-gray-200"
              >
                -
              </button>
              <span className="px-4 text-lg">{quantity}</span>
              <button
                onClick={handleIncrement}
                className="px-4 py-2 bg-gray-200"
              >
                +
              </button>
            </div>
            <button className="mt-4 bg-green-600 text-white py-3 rounded-lg"
            onClick={()=>{handleAddToCart(product.name,product.price,product.primaryImage,quantity)}}>
              Add to Cart
            </button>
          </section>
        </div>

        {/* Tabs Section */}
        <div className="border-t mt-8">
          <nav className="flex justify-around bg-gray-50">
            {Object.keys(tabContent).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-4 text-center font-semibold ${
                  activeTab === tab
                    ? "border-b-4 border-green-600 text-green-700"
                    : "text-gray-500 hover:text-green-600"
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {tabContent[activeTab]}
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="p-6 bg-gray-50">
          <div className="flex justify-between items-center mb-4">
            <motion.h3
              className="text-2xl font-bold text-gray-800"
              whileHover={{ scale: 1.02 }}
            >
              Customer Reviews
            </motion.h3>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-700 transition-colors"
            >
              Write Review
            </motion.button>
          </div>
          <motion.div
            className="space-y-6"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.1 },
              },
            }}
          >
            {product.reviews.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-center bg-pink-200 text-pink-700 font-bold w-12 h-12 rounded-full">
                  {review.username[0].toUpperCase()}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-semibold text-gray-800">
                      {review.username}
                    </h4>
                    {renderRating(review.rating)}
                  </div>
                  <p className="mt-2 text-gray-600">{review.comment}</p>
                  <div className="mt-2 flex gap-4 text-gray-600 text-sm">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center hover:text-green-600"
                    >
                      <AiTwotoneLike />
                      <span className="ml-1">{review.likes}</span>
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center hover:text-red-600"
                    >
                      <AiTwotoneDislike />
                      <span className="ml-1">{review.dislikes}</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductDetails;
