// import axios from "axios";
// import React, { useState } from "react";

// const AddPlant = () => {
//   const [reviews, setReviews] = useState([]);
//   const [sellerAdd, setSellerAdd] = useState("");
//   const [categories, setCategories] = useState("");

//   // const review = [reviews.]
//   let [data, setData] = useState([
//     {
//       name: "",
//       id: "",
//       description: "",
//       price: 0,

//       sellerName: "Pune Plant Co.",
//       sellerAddress: {
//         street: "Bhosale Nagar",
//         city: "Pune",
//         state: "Maharashtra",
//         country: "India",
//         pincode: "411007",
//       },
//       availability: "In Stock",
//       quantityAvailable: 100,
//       categories: ['', '', ''],
//       sunlightRequirement: "",
//       moistureRequirement: "",
//       soilType: "",
//       season: "",
//       growthRate: "",
//       potSizeRequired: "",
//       genus: "",
//       localName: "",
//       regionalName: "",
//       biologicalName: "",
//       botanicalName: "",
//       tags: ["", "", ""],
//       shippingStates: ["Maharashtra", "Karnataka", "Tamil Nadu"],
//       primaryImage: "",
//       secondaryImages: ["", "", ""],
//     },
//   ]);

//   const [formData, setFormData] = useState({
//     name: "",
//     id: "",
//     description: "",
//     price: "",
//     rating: "",
//     reviews: reviews,
//     sellerAdd: sellerAdd,
//     categories: categories,
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    // axios
    //   .post("http://116.75.62.44:8000/addPlant", formData)
    //   .then(() => {
    //     alert("Plant added successfully!");
    //   })
    //   .catch((err) => {
    //     console.error("Error adding plant:", err);
    //   });
//   };

//   return (
//     <div className="p-5">
//       <h1 className="text-xl font-bold">Add New Plant</h1>
//       <form onSubmit={handleSubmit} className="flex flex-col gap-3">
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//           className="border p-2"
//         />
//         <input
//           type="number"
//           name="id"
//           placeholder="ID"
//           value={formData.id}
//           onChange={handleChange}
//           required
//           className="border p-2"
//         />
//         <textarea
//           name="description"
//           placeholder="Description"
//           value={formData.description}
//           onChange={handleChange}
//           required
//           className="border p-2"
//         />
//         <input
//           type="number"
//           name="price"
//           placeholder="Price"
//           value={formData.price}
//           onChange={handleChange}
//           required
//           className="border p-2"
//         />
//         <input
//           type="number"
//           step="0.1"
//           name="rating"
//           placeholder="Rating"
//           value={formData.rating}
//           onChange={handleChange}
//           className="border p-2"
//         />

//         <input
//           type="text"
//           name="reviews"
//           placeholder="Review"
//           value={reviews}
//           onChange={(e) => setReviews(e.target.value)}
//           className="border p-2"
//         />

//         <input
//           type="text"
//           name="sellerAdd"
//           placeholder="Seller Address"
//           value={sellerAdd}
//           onChange={(e) => setSellerAdd(e.target.value)}
//           className="border p-2"
//         />
//         <input
//           type="text"
//           name="categories"
//           placeholder="Categories"
//           value={categories}
//           onChange={(e) => setCategories(e.target.value)}
//           className="border p-2"
//         />
//         <button type="submit" className="bg-green-500 text-white p-2 mt-3">
//           Add Plant
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddPlant;


// import React, { useState } from "react";

// const AddPlant = () => {
//   const [data, setData] = useState([
//     {
//       name: "",
//       id: "",
//       description: "",
//       price: 0,
//       sellerName: "Pune Plant Co.",
//       sellerAddress: {
//         street: "Bhosale Nagar",
//         city: "Pune",
//         state: "Maharashtra",
//         country: "India",
//         pincode: "411007",
//       },
//       availability: "In Stock",
//       quantityAvailable: 100,
//       categories: ['', '', ''],
//       sunlightRequirement: "",
//       moistureRequirement: "",
//       soilType: "",
//       season: "",
//       growthRate: "",
//       potSizeRequired: "",
//       genus: "",
//       localName: "",
//       regionalName: "",
//       biologicalName: "",
//       botanicalName: "",
//       tags: ["", "", ""],
//       shippingStates: ["Maharashtra", "Karnataka", "Tamil Nadu"],
//       primaryImage: "",
//       secondaryImages: ["", "", ""],
//     },
//   ]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setData((prevData) => [
//       {
//         ...prevData[0],
//         [name]: value,
//       },
//     ]);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form data:", data);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-4 space-y-4">
//       <h2 className="text-2xl font-semibold text-center">Product Form</h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         {/* Name */}
//         <div>
//           <label htmlFor="name" className="block text-sm font-medium">Product Name</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={data[0].name}
//             onChange={handleChange}
//             className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//           />
//         </div>

//         {/* ID */}
//         <div>
//           <label htmlFor="id" className="block text-sm font-medium">Product ID</label>
//           <input
//             type="text"
//             id="id"
//             name="id"
//             value={data[0].id}
//             onChange={handleChange}
//             className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//           />
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         {/* Description */}
//         <div>
//           <label htmlFor="description" className="block text-sm font-medium">Description</label>
//           <textarea
//             id="description"
//             name="description"
//             value={data[0].description}
//             onChange={handleChange}
//             className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//           ></textarea>
//         </div>

//         {/* Price */}
//         <div>
//           <label htmlFor="price" className="block text-sm font-medium">Price</label>
//           <input
//             type="number"
//             id="price"
//             name="price"
//             value={data[0].price}
//             onChange={handleChange}
//             className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//           />
//         </div>
//       </div>

//       {/* Seller Name */}
//       <div>
//         <label htmlFor="sellerName" className="block text-sm font-medium">Seller Name</label>
//         <input
//           type="text"
//           id="sellerName"
//           name="sellerName"
//           value={data[0].sellerName}
//           onChange={handleChange}
//           className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//         />
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         {/* Seller Address */}
//         <div>
//           <label htmlFor="street" className="block text-sm font-medium">Street</label>
//           <input
//             type="text"
//             id="street"
//             name="sellerAddress.street"
//             value={data[0].sellerAddress.street}
//             onChange={handleChange}
//             className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//           />
//         </div>
//         <div>
//           <label htmlFor="city" className="block text-sm font-medium">City</label>
//           <input
//             type="text"
//             id="city"
//             name="sellerAddress.city"
//             value={data[0].sellerAddress.city}
//             onChange={handleChange}
//             className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//           />
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         {/* State */}
//         <div>
//           <label htmlFor="state" className="block text-sm font-medium">State</label>
//           <input
//             type="text"
//             id="state"
//             name="sellerAddress.state"
//             value={data[0].sellerAddress.state}
//             onChange={handleChange}
//             className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//           />
//         </div>

//         {/* Country */}
//         <div>
//           <label htmlFor="country" className="block text-sm font-medium">Country</label>
//           <input
//             type="text"
//             id="country"
//             name="sellerAddress.country"
//             value={data[0].sellerAddress.country}
//             onChange={handleChange}
//             className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//           />
//         </div>

//         {/* Pincode */}
//         <div>
//           <label htmlFor="pincode" className="block text-sm font-medium">Pincode</label>
//           <input
//             type="text"
//             id="pincode"
//             name="sellerAddress.pincode"
//             value={data[0].sellerAddress.pincode}
//             onChange={handleChange}
//             className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//           />
//         </div>
//       </div>

//       {/* Availability */}
//       <div>
//         <label htmlFor="availability" className="block text-sm font-medium">Availability</label>
//         <select
//           id="availability"
//           name="availability"
//           value={data[0].availability}
//           onChange={handleChange}
//           className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//         >
//           <option value="In Stock">In Stock</option>
//           <option value="Out of Stock">Out of Stock</option>
//         </select>
//       </div>

//       {/* Quantity Available */}
//       <div>
//         <label htmlFor="quantityAvailable" className="block text-sm font-medium">Quantity Available</label>
//         <input
//           type="number"
//           id="quantityAvailable"
//           name="quantityAvailable"
//           value={data[0].quantityAvailable}
//           onChange={handleChange}
//           className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//         />
//       </div>
//       <div>
//         <label htmlFor="">categories</label>
//         <input type="text" />
//         <input type="text" />
//         <input type="text" />
//       </div>
//       <div>
//         <label htmlFor="sunlightRequirement">sunlightRequirement</label>
//         <select name="" id="">
//           <option value="Full Sun">Full Sun</option>
//           <option value="Partial Sun">Partial Sun</option>
//           <option value="Shade">Shade</option>
//         </select>
//       </div>
//       <div>
//         <label htmlFor="">moistureRequirement</label>
//         <select name="" id="">
//           <option value="">all</option>
//           <option value=""></option>
//           <option value=""></option>
//         </select>
//       </div>
//       <div>
//         <label htmlFor="">soilType</label>
//         <select name="" id="">
//           <option value="">all soiltype</option>
//           <option value="">all soiltype</option>
//           <option value="">all soiltype</option>
//         </select>
//       </div>
//       <div>
//         <label htmlFor="">season</label>
//         <select name="" id="">
//           <option value="">all season</option>
//           <option value="">all season</option>
//           <option value="">all season</option>
//           </select>
//       </div>
//       <div>
//         <label htmlFor="">growthRate</label>
//         <select name="" id="">
//           <option value="">fast</option>
//           <option value="">moderate</option>
//           <option value="">all growth rate</option>
//           </select>
//       </div>
//       <div>
//         <label htmlFor="">minimum potSizeRequired</label>
//         <select name="" id="">
//           <option value="">large</option>
//           <option value="">medium</option>
//           <option value="">small</option>
//         </select>
//       </div>
//       <div>
//         <label htmlFor="">genus</label>
//         <input type="text" />
//       </div>
//       <div>
//         <label htmlFor="">localName</label>
//         <input type="text" />
//       </div>
//       <div>
//         <label htmlFor="">regionalName</label>
//         <input type="text" />

//       </div>
//       <div>
//         <label htmlFor="">biologicalName</label>
//         <input type="text" />
//       </div>
//       <div>
//         <label htmlFor="">botanicalName</label>
//         <input type="text" />
//       </div>
      

//       {/* Tags */}
//       <div>
//         <label htmlFor="tags" className="block text-sm font-medium">Tags</label>
//         <input
//           type="text"
//           id="tags"
//           name="tags[0]"
//           value={data[0].tags[0]}
//           onChange={handleChange}
//           className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//         />
//         <input
//           type="text"
//           id="tags"
//           name="tags[1]"
//           value={data[0].tags[1]}
//           onChange={handleChange}
//           className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//         />
//         <input
//           type="text"
//           id="tags"
//           name="tags[2]"
//           value={data[0].tags[2]}
//           onChange={handleChange}
//           className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//         />
//       </div>
//       <div>
//         <div>
//         <label htmlFor="primaryimage">primaryImage</label>
//         <input type="text" id="primaryimage" />
//         </div>
//         <div>
//           <label htmlFor="">secondaryImages</label>
//           <input type="text" />
//           <input type="text" />
//           <input type="text" />
//           <input type="text" />
//         </div>
//       </div>


//       <div className="text-center">
//         <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">
//           Submit
//         </button>
//       </div>
//     </form>
//   );
// };

// export default AddPlant;

// import React, { useState } from "react";
// import { v4 as uuidv4 } from "uuid";

// const AddPlant = () => {
//   const [data, setData] = useState({
//     name: "",
//     id: uuidv4(),
//     description: "",
//     price: 0,
//     sellerName: "Pune Plant Co.",
//     sellerAddress: {
//       street: "Bhosale Nagar",
//       city: "Pune",
//       state: "Maharashtra",
//       country: "India",
//       pincode: "411007",
//     },
//     availability: "In Stock",
//     quantityAvailable: 100,
//     categories: ["", "", ""],
//     sunlightRequirement: "Full Sun",
//     moistureRequirement: "Medium",
//     soilType: "Loamy",
//     season: "Winter",
//     growthRate: "Fast",
//     potSizeRequired: "Medium",
//     genus: "",
//     localName: "",
//     regionalName: "",
//     biologicalName: "",
//     botanicalName: "",
//     tags: ["", "", ""],
//     shippingStates: ["Maharashtra", "Karnataka", "Tamil Nadu"],
//     primaryImage: "",
//     secondaryImages: ["", "", ""],
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setData((prevData) => {
//       if (name.includes(".")) {
//         // Handling nested fields (e.g., sellerAddress.city)
//         const [field, nestedField] = name.split(".");
//         return {
//           ...prevData,
//           [field]: {
//             ...prevData[field],
//             [nestedField]: value,
//           },
//         };
//       } else if (name.startsWith("categories") || name.startsWith("tags") || name.startsWith("secondaryImages")) {
//         // Handling array fields (e.g., categories[0], tags[1], secondaryImages[2])
//         const field = name.match(/^[a-zA-Z]+/)[0]; // Extracts the field name
//         const index = parseInt(name.match(/\d+/)[0], 10); // Extracts the index

//         return {
//           ...prevData,
//           [field]: prevData[field].map((item, i) => (i === index ? value : item)),
//         };
//       } else {
//         // Handling normal fields
//         return {
//           ...prevData,
//           [name]: value,
//         };
//       }
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form data:", data);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-4 space-y-4">
//       <h2 className="text-2xl font-semibold text-center">Product Form</h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         {/* Name */}
//         <div>
//           <label className="block text-sm font-medium">Product Name</label>
//           <input
//             type="text"
//             name="name"
//             value={data.name}
//             onChange={handleChange}
//             className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//           />
//         </div>

//         {/* Description */}
//         <div>
//           <label className="block text-sm font-medium">Description</label>
//           <textarea
//             name="description"
//             value={data.description}
//             onChange={handleChange}
//             className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//           ></textarea>
//         </div>
//       </div>

//       {/* Price */}
//       <div>
//         <label className="block text-sm font-medium">Price</label>
//         <input
//           type="number"
//           name="price"
//           value={data.price}
//           onChange={handleChange}
//           className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//         />
//       </div>

//       {/* Seller Name */}
//       <div>
//         <label className="block text-sm font-medium">Seller Name</label>
//         <input
//           type="text"
//           name="sellerName"
//           value={data.sellerName}
//           onChange={handleChange}
//           className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//         />
//       </div>

//       {/* Seller Address */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <div>
//           <label className="block text-sm font-medium">Street</label>
//           <input
//             type="text"
//             name="sellerAddress.street"
//             value={data.sellerAddress.street}
//             onChange={handleChange}
//             className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium">City</label>
//           <input
//             type="text"
//             name="sellerAddress.city"
//             value={data.sellerAddress.city}
//             onChange={handleChange}
//             className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//           />
//         </div>
//       </div>

//       {/* Availability */}
//       <div>
//         <label className="block text-sm font-medium">Availability</label>
//         <select
//           name="availability"
//           value={data.availability}
//           onChange={handleChange}
//           className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//         >
//           <option value="In Stock">In Stock</option>
//           <option value="Out of Stock">Out of Stock</option>
//         </select>
//       </div>

//       {/* Categories */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         {data.categories.map((category, index) => (
//           <div key={index}>
//             <label className="block text-sm font-medium">Category {index + 1}</label>
//             <input
//               type="text"
//               name={`categories[${index}]`}
//               value={category}
//               onChange={handleChange}
//               className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//             />
//           </div>
//         ))}
//       </div>
      
//       {/* Quantity Available */}
//        <div>
//          <label htmlFor="quantityAvailable" className="block text-sm font-medium">Quantity Available</label>
//          <input
//           type="number"
//           id="quantityAvailable"
//           name="quantityAvailable"
//           value={data[0].quantityAvailable}
//           onChange={handleChange}
//           className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//         />
//       </div>


      
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         {/* Sunlight Requirement */}
//         <div>
//           <label htmlFor="sunlightRequirement" className="block text-sm font-medium">Sunlight Requirement</label>
//           <select
//             name="sunlightRequirement"
//             value={data[0].sunlightRequirement}
//             onChange={handleChange}
//             className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//           >
//             <option value="Full Sun">Full Sun</option>
//             <option value="Partial Sun">Partial Sun</option>
//             <option value="Shade">Shade</option>
//           </select>
//         </div>

//         {/* Moisture Requirement */}
//         <div>
//           <label htmlFor="moistureRequirement" className="block text-sm font-medium">Moisture Requirement</label>
//           <select
//             name="moistureRequirement"
//             value={data[0].moistureRequirement}
//             onChange={handleChange}
//             className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//           >
//             <option value="Low">Low</option>
//             <option value="Medium">Medium</option>
//             <option value="High">High</option>
//           </select>
//         </div>

//         {/* Soil Type */}
//         <div>
//           <label htmlFor="soilType" className="block text-sm font-medium">Soil Type</label>
//           <select
//             name="soilType"
//             value={data[0].soilType}
//             onChange={handleChange}
//             className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//           >
//             <option value="Loamy">Loamy</option>
//             <option value="Sandy">Sandy</option>
//             <option value="Clay">Clay</option>
//           </select>
//         </div>

//         {/* Season */}
//         <div>
//           <label htmlFor="season" className="block text-sm font-medium">Season</label>
//           <select
//             name="season"
//             value={data[0].season}
//             onChange={handleChange}
//             className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//           >
//             <option value="Winter">Winter</option>
//             <option value="Summer">Summer</option>
//             <option value="Spring">Spring</option>
//             <option value="Autumn">Autumn</option>
//           </select>
//         </div>
//       </div>

//       {/* Tags */}
//       <div>
//         <label htmlFor="tags" className="block text-sm font-medium">Tags</label>
//         {data[0].tags.map((tag, index) => (
//           <input
//             key={index}
//             type="text"
//             name={`tags[${index}]`}
//             value={tag}
//             onChange={handleChange}
//             className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//           />
//         ))}
//       </div>

//       {/* Primary Image */}
//       <div>
//         <label className="block text-sm font-medium">Primary Image URL</label>
//         <input
//           type="text"
//           name="primaryImage"
//           value={data.primaryImage}
//           onChange={handleChange}
//           className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//         />
//       </div>

//       {/* Secondary Images */}
//       <div>
//         <label className="block text-sm font-medium">Secondary Images</label>
//         {data.secondaryImages.map((img, index) => (
//           <input
//             key={index}
//             type="text"
//             name={`secondaryImages[${index}]`}
//             value={img}
//             onChange={handleChange}
//             className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//           />
//         ))}
//       </div>

//       <div className="text-center">
//         <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">
//           Submit
//         </button>
//       </div>
//     </form>
//   );
// };

// export default AddPlant;



// import React, { useState } from "react";
// import { v4 as uuidv4 } from "uuid";

// const AddPlant = () => {
//   const [data, setData] = useState([
//     {
//       name: "",
//       id: uuidv4(),
//       description: "",
//       price: 0,
//       sellerName: "Pune Plant Co.",
//       sellerAddress: {
//         street: "Bhosale Nagar",
//         city: "Pune",
//         state: "Maharashtra",
//         country: "India",
//         pincode: "411007",
//       },
//       availability: "In Stock",
//       quantityAvailable: 100,
//       categories: ['', '', ''],
//       sunlightRequirement: "Full Sun",
//       moistureRequirement: "Medium",
//       soilType: "Loamy",
//       season: "Winter",
//       growthRate: "Fast",
//       potSizeRequired: "Medium",
//       genus: "",
//       localName: "",
//       regionalName: "",
//       biologicalName: "",
//       botanicalName: "",
//       tags: ["", "", ""],
//       shippingStates: ["Maharashtra", "Karnataka", "Tamil Nadu"],
//       primaryImage: "",
//       secondaryImages: ["", "", ""],
//     },
//   ]);


//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     // Handling nested fields (objects)
//     if (name.includes(".")) {
//       const [field, nestedField] = name.split(".");
//       setData((prevData) => ({
//         ...prevData,
//         [field]: {
//           ...prevData[field],
//           [nestedField]: value,
//         },
//       }));
//     }
//     // Handling array fields (categories, tags, images)
//     else if (name.startsWith("categories") || name.startsWith("tags") || name.startsWith("secondaryImages")) {
//       const index = parseInt(name.match(/\d+/)[0], 10);
//       const field = name.split("[")[0];

//       setData((prevData) => ({
//         ...prevData,
//         [field]: prevData[field].map((item, i) => (i === index ? value : item)),
//       }));
//     }
//     // Handling normal fields
//     else {
//       setData((prevData) => ({
//         ...prevData,
//         [name]: value,
//       }));
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form data:", data);
//   };

  

//   return (
//     <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-4 space-y-4">
//       <h2 className="text-2xl font-semibold text-center">Product Form</h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         {/* Name */}
//         <div>
//           <label htmlFor="name" className="block text-sm font-medium">Product Name</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={data[0].name}
//             onChange={handleChange}
//             className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//           />
//         </div>

//         {/* ID */}
    
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         {/* Description */}
//         <div>
//           <label htmlFor="description" className="block text-sm font-medium">Description</label>
//           <textarea
//             id="description"
//             name="description"
//             value={data[0].description}
//             onChange={handleChange}
//             className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//           ></textarea>
//         </div>

//         {/* Price */}
//         <div>
//           <label htmlFor="price" className="block text-sm font-medium">Price</label>
//           <input
//             type="number"
//             id="price"
//             name="price"
//             value={data[0].price}
//             onChange={handleChange}
//             className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//           />
//         </div>
//       </div>

//       {/* Seller Name */}
//       <div>
//         <label htmlFor="sellerName" className="block text-sm font-medium">Seller Name</label>
//         <input
//           type="text"
//           id="sellerName"
//           name="sellerName"
//           value={data[0].sellerName}
//           onChange={handleChange}
//           className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//         />
//       </div>

//       {/* Seller Address */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <div>
//           <label htmlFor="street" className="block text-sm font-medium">Street</label>
//           <input
//             type="text"
//             id="street"
//             name="sellerAddress.street"
//             value={data[0].sellerAddress.street}
//             onChange={handleChange}
//             className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//           />
//         </div>
//         <div>
//           <label htmlFor="city" className="block text-sm font-medium">City</label>
//           <input
//             type="text"
//             id="city"
//             name="sellerAddress.city"
//             value={data[0].sellerAddress.city}
//             onChange={handleChange}
//             className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//           />
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         {/* State */}
//         <div>
//           <label htmlFor="state" className="block text-sm font-medium">State</label>
//           <input
//             type="text"
//             id="state"
//             name="sellerAddress.state"
//             value={data[0].sellerAddress.state}
//             onChange={handleChange}
//             className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//           />
//         </div>

//         {/* Country */}
//         <div>
//           <label htmlFor="country" className="block text-sm font-medium">Country</label>
//           <input
//             type="text"
//             id="country"
//             name="sellerAddress.country"
//             value={data[0].sellerAddress.country}
//             onChange={handleChange}
//             className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//           />
//         </div>

//         {/* Pincode */}
//         <div>
//           <label htmlFor="pincode" className="block text-sm font-medium">Pincode</label>
//           <input
//             type="text"
//             id="pincode"
//             name="sellerAddress.pincode"
//             value={data[0].sellerAddress.pincode}
//             onChange={handleChange}
//             className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//           />
//         </div>
//       </div>

//       {/* Availability */}
//       <div>
//         <label htmlFor="availability" className="block text-sm font-medium">Availability</label>
//         <select
//           id="availability"
//           name="availability"
//           value={data[0].availability}
//           onChange={handleChange}
//           className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//         >
//           <option value="In Stock">In Stock</option>
//           <option value="Out of Stock">Out of Stock</option>
//         </select>
//       </div>

//       {/* Quantity Available */}
//       <div>
//         <label htmlFor="quantityAvailable" className="block text-sm font-medium">Quantity Available</label>
//         <input
//           type="number"
//           id="quantityAvailable"
//           name="quantityAvailable"
//           value={data[0].quantityAvailable}
//           onChange={handleChange}
//           className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//         />
//       </div>

//       {/* Categories */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         <div>
//           <label htmlFor="categories" className="block text-sm font-medium">Categories</label>
//           <input
//             type="text"
//             name="categories[0]"
//             value={data[0].categories[0]}
//             onChange={handleChange}
//             className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//           />
//         </div>
//         <div>
//           <input
//             type="text"
//             name="categories[1]"
//             value={data[0].categories[1]}
//             onChange={handleChange}
//             className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//           />
//         </div>
//         <div>
//           <input
//             type="text"
//             name="categories[2]"
//             value={data[0].categories[2]}
//             onChange={handleChange}
//             className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//           />
//         </div>
//       </div>

//       {/* Select options for Sunlight, Moisture, Soil, Season, etc. */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         {/* Sunlight Requirement */}
//         <div>
//           <label htmlFor="sunlightRequirement" className="block text-sm font-medium">Sunlight Requirement</label>
//           <select
//             name="sunlightRequirement"
//             value={data[0].sunlightRequirement}
//             onChange={handleChange}
//             className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//           >
//             <option value="Full Sun">Full Sun</option>
//             <option value="Partial Sun">Partial Sun</option>
//             <option value="Shade">Shade</option>
//           </select>
//         </div>

//         {/* Moisture Requirement */}
        // <div>
        //   <label htmlFor="moistureRequirement" className="block text-sm font-medium">Moisture Requirement</label>
        //   <select
        //     name="moistureRequirement"
        //     value={data[0].moistureRequirement}
        //     onChange={handleChange}
        //     className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        //   >
        //     <option value="Low">Low</option>
        //     <option value="Medium">Medium</option>
        //     <option value="High">High</option>
        //   </select>
        // </div>

        // {/* Soil Type */}
        // <div>
        //   <label htmlFor="soilType" className="block text-sm font-medium">Soil Type</label>
        //   <select
        //     name="soilType"
        //     value={data[0].soilType}
        //     onChange={handleChange}
        //     className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        //   >
        //     <option value="Loamy">Loamy</option>
        //     <option value="Sandy">Sandy</option>
        //     <option value="Clay">Clay</option>
        //   </select>
        // </div>

        // {/* Season */}
        // <div>
        //   <label htmlFor="season" className="block text-sm font-medium">Season</label>
        //   <select
        //     name="season"
        //     value={data[0].season}
        //     onChange={handleChange}
        //     className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        //   >
        //     <option value="Winter">Winter</option>
        //     <option value="Summer">Summer</option>
        //     <option value="Spring">Spring</option>
        //     <option value="Autumn">Autumn</option>
        //   </select>
        // </div>
//       </div>

//       {/* Tags */}
//       <div>
//         <label htmlFor="tags" className="block text-sm font-medium">Tags</label>
//         {data[0].tags.map((tag, index) => (
//           <input
//             key={index}
//             type="text"
//             name={`tags[${index}]`}
//             value={tag}
//             onChange={handleChange}
//             className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//           />
//         ))}
//       </div>

//       {/* Images */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         {/* Primary Image */}
//         <div>
//           <label htmlFor="primaryImage" className="block text-sm font-medium">Primary Image URL</label>
//           <input
//             type="text"
//             id="primaryImage"
//             name="primaryImage"
//             value={data[0].primaryImage}
//             onChange={handleChange}
//             className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//           />
//         </div>

//         {/* Secondary Images */}
//         <div>
//           <label htmlFor="secondaryImages" className="block text-sm font-medium">Secondary Images</label>
//           {data[0].secondaryImages.map((img, index) => (
//             <input
//               key={index}
//               type="text"
//               name={`secondaryImages[${index}]`}
//               value={img}
//               onChange={handleChange}
//               className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//             />
//           ))}
//         </div>
//       </div>

//       <div className="text-center">
//         <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">
//           Submit
//         </button>
//       </div>
//     </form>
//   );
// };

// export default AddPlant;


import axios from "axios";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AddPlant = () => {
  const [data, setData] = useState({
    name: "",
    id: uuidv4(),
    description: "",
    price: 0,
    sellerName: "Pune Plant Co.",
    sellerAddress: {
      street: "Bhosale Nagar",
      city: "Pune",
      state: "Maharashtra",
      country: "India",
      pincode: "411007",
    },
    availability: "In Stock",
    quantityAvailable: 100,
    categories: ["", "", ""],
    sunlightRequirement: "Full Sun",
    moistureRequirement: "Medium",
    soilType: "Loamy",
    season: "Winter",
    growthRate: "Fast",
    potSizeRequired: "Medium",
    genus: "",
    localName: "",
    regionalName: "",
    biologicalName: "",
    botanicalName: "",
    tags: ["", "", ""],
    shippingStates: ["Maharashtra", "Karnataka", "Tamil Nadu"],
    primaryImage: "",
    secondaryImages: ["", "", ""],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prevData) => {
      if (name.includes(".")) {
        // Handling nested fields (e.g., sellerAddress.city)
        const [field, nestedField] = name.split(".");
        return {
          ...prevData,
          [field]: {
            ...prevData[field],
            [nestedField]: value,
          },
        };
      } else if (name.startsWith("categories") || name.startsWith("tags") || name.startsWith("secondaryImages")) {
        // Handling array fields (e.g., categories[0], tags[1], secondaryImages[2])
        const field = name.match(/^[a-zA-Z]+/)[0]; // Extracts the field name
        const index = parseInt(name.match(/\d+/)[0], 10); // Extracts the index

        return {
          ...prevData,
          [field]: prevData[field].map((item, i) => (i === index ? value : item)),
        };
      } else {
        // Handling normal fields
        return {
          ...prevData,
          [name]: value,
        };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", data);
    axios
      .post("http://116.75.62.44:8000/addPlant", data)
      .then(() => {
        alert("Plant added successfully!");
      })
      .catch((err) => {
        console.error("Error adding plant:", err);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-4 space-y-4">
      <h2 className="text-2xl font-semibold text-center">Add Plant</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium">Product Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={data.name}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium">Description</label>
          <textarea
            name="description"
            id="description"
            value={data.description}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          ></textarea>
        </div>
      </div>

      {/* Price */}
      <div>
        <label htmlFor="price" className="block text-sm font-medium">Price</label>
        <input
          type="number"
          name="price"
          id="price"
          value={data.price}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Seller Name */}
      <div>
        <label htmlFor="sellerName" className="block text-sm font-medium">Seller Name</label>
        <input
          type="text"
          name="sellerName"
          id="sellerName"
          value={data.sellerName}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Seller Address */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="sellerAddress.street" className="block text-sm font-medium">Street</label>
          <input
            type="text"
            name="sellerAddress.street"
            id="sellerAddress.street"
            value={data.sellerAddress.street}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="sellerAddress.city" className="block text-sm font-medium">City</label>
          <input
            type="text"
            name="sellerAddress.city"
            id="sellerAddress.city"
            value={data.sellerAddress.city}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>

      {/* Availability */}
      <div>
        <label htmlFor="availability" className="block text-sm font-medium">Availability</label>
        <select
          name="availability"
          id="availability"
          value={data.availability}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="In Stock">In Stock</option>
          <option value="Out of Stock">Out of Stock</option>
        </select>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.categories.map((category, index) => (
          <div key={index}>
            <label htmlFor={`categories[${index}]`} className="block text-sm font-medium">Category {index + 1}</label>
            <input
              type="text"
              name={`categories[${index}]`}
              id={`categories[${index}]`}
              value={category}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        ))}
      </div>

      {/* Quantity Available */}
      <div>
        <label htmlFor="quantityAvailable" className="block text-sm font-medium">Quantity Available</label>
        <input
          type="number"
          id="quantityAvailable"
          name="quantityAvailable"
          value={data.quantityAvailable}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Sunlight Requirement */}
      <div>
        <label htmlFor="sunlightRequirement" className="block text-sm font-medium">Sunlight Requirement</label>
        <select
          name="sunlightRequirement"
          id="sunlightRequirement"
          value={data.sunlightRequirement}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="Full Sun">Full Sun</option>
          <option value="Partial Sun">Partial Sun</option>
          <option value="Shade">Shade</option>
        </select>
      </div>
      <div>
          <label htmlFor="moistureRequirement" className="block text-sm font-medium">Moisture Requirement</label>
          <select
            name="moistureRequirement"
            id="moistureRequirement"
            value={data.moistureRequirement}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        {/* Soil Type */}
        <div>
          <label htmlFor="soilType" className="block text-sm font-medium">Soil Type</label>
          <select
            name="soilType"
            id="soilType"
            value={data.soilType}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="Loamy">Loamy</option>
            <option value="Sandy">Sandy</option>
            <option value="Clay">Clay</option>
          </select>
        </div>

        {/* Season */}
        <div>
          <label htmlFor="season" className="block text-sm font-medium">Season</label>
          <select
            name="season"
            id="season"
            value={data.season}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="Winter">Winter</option>
            <option value="Summer">Summer</option>
            <option value="Spring">Spring</option>
            <option value="Autumn">Autumn</option>
          </select>
        </div>

        <div>
          <label htmlFor="growthRate" className="block text-sm font-medium">GrowthRate</label>
          <select
            name="growthRate"
            id="growthRate"
            value={data.growthRate}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="Winter">Fast</option>
            <option value="Spring">Moderate</option>
            <option value="Summer">Slow</option>
          </select>
        </div>

      {/* Tags */}
      <div>
        <label htmlFor="tags" className="block text-sm font-medium">Tags</label>
        {data.tags.map((tag, index) => (
          <input
            key={index}
            type="text"
            name={`tags[${index}]`}
            id={`tags[${index}]`}
            value={tag}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        ))}
      </div>

      {/* Primary Image */}
      <div>
        <label htmlFor="primaryImage" className="block text-sm font-medium">Primary Image URL</label>
        <input
          type="text"
          name="primaryImage"
          id="primaryImage"
          value={data.primaryImage}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Secondary Images */}
      <div>
        <label htmlFor="secondaryImages" className="block text-sm font-medium">Secondary Images</label>
        {data.secondaryImages.map((img, index) => (
          <input
            key={index}
            type="text"
            name={`secondaryImages[${index}]`}
            id={`secondaryImages[${index}]`}
            value={img}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        ))}
      </div>

      <div className="text-center">
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddPlant;

