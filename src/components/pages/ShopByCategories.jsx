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
// import { MdWbSunny } from "react-icons/md";
// import { FaCloudMoonRain } from "react-icons/fa";
// import { IoIosWater } from "react-icons/io";




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
//           <option value=""><span className="text-yellow-500"><MdWbSunny /></span>Sun Intensity</option>
//           <option value="high">High</option>
//           <option value="moderate">Moderate</option>
//           <option value="low">Low</option>
//         </select>

//         <select
//           name="moisture"
//           id="moisture"
//           className="w-full bg-white text-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
//         >
//           <option value=""><span className="text-blue-500"><IoIosWater /></span>Moisture Req</option>
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
//           <option value=""><span ><FaCloudMoonRain />
//           </span>Season</option>
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


// import React from "react";

// const ShopByCategories = () => {
//   return (
//     <div className="bg-white shadow-lg rounded-lg p-6 w-[90%] mx-auto my-8">
//       <h2 className="text-3xl font-bold text-[#21543D] text-center mb-6">
//         Shop By Categories
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
//         {[
//           { label: "Sun Intensity", options: ["High", "Moderate", "Low"] },
//           { label: "Moisture Req", options: ["High", "Moderate", "Low"] },
//           { label: "Soil Type", options: ["Clay", "Loamy", "Sandy"] },
//           { label: "Season", options: ["Summer", "Winter", "All Seasons"] },
//           { label: "Growth Rate", options: ["Fast", "Moderate", "Slow"] },
//         ].map((filter, index) => (
//           <select
//             key={index}
//             className="bg-[#F5F5F5] text-[#333333] border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#21543D]"
//           >
//             <option>{filter.label}</option>
//             {filter.options.map((option, idx) => (
//               <option key={idx}>{option}</option>
//             ))}
//           </select>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ShopByCategories;

// import React from "react";
// import { MdWbSunny } from "react-icons/md";
// import { FaCloudMoonRain } from "react-icons/fa";
// import { IoIosWater } from "react-icons/io";

// const filterOptions = [
//   {
//     id: "sunintensity",
//     label: "Sun Intensity",
//     icon: <MdWbSunny className="text-yellow-500 mr-2" />,
//     options: [
//       { value: "high", label: "High" },
//       { value: "moderate", label: "Moderate" },
//       { value: "low", label: "Low" },
//     ],
//   },
//   {
//     id: "moisture",
//     label: "Moisture Req",
//     icon: <IoIosWater className="text-blue-500 mr-2" />,
//     options: [
//       { value: "high", label: "High" },
//       { value: "moderate", label: "Moderate" },
//       { value: "low", label: "Low" },
//     ],
//   },
//   {
//     id: "soiltype",
//     label: "Soil Type",
    
//     options: [
//       { value: "sandy", label: "Sandy" },
//       { value: "clay", label: "Clay" },
//       { value: "loamy", label: "Loamy" },
//     ],
//   },
//   {
//     id: "season",
//     label: "Season",
//     icon: <FaCloudMoonRain className="text-gray-500 mr-2" />,
//     options: [
//       { value: "summer", label: "Summer" },
//       { value: "winter", label: "Winter" },
//       { value: "spring", label: "Spring" },
//     ],
//   },
//   {
//     id: "growthrate",
//     label: "Growth Rate",
//     options: [
//       { value: "fast", label: "Fast" },
//       { value: "medium", label: "Medium" },
//       { value: "slow", label: "Slow" },
//     ],
//   },
// ];

// const ShopByCategories = () => {
//   return (
//     <div className="bg-[#21543D] text-white py-8 px-6 rounded-lg mx-8 shadow-lg">
//       {/* Header */}
//       <h1 className="text-2xl font-bold mb-6 text-center">Shop By Categories</h1>

//       {/* Filter Options */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
//         {filterOptions.map((filter) => (
//           <div key={filter.id}>
//             <label
//               htmlFor={filter.id}
//               className="block mb-1 text-sm font-medium text-white"
//             >
//               {filter.icon} {filter.label}
//             </label>
//             <select
//               id={filter.id}
//               name={filter.id}
//               className="w-full bg-white text-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
//               aria-label={filter.label}
//             >
//               <option value="" disabled>
//                 Select {filter.label}
//               </option>
//               {filter.options.map((option) => (
//                 <option key={option.value} value={option.value}>
//                   {option.label}
//                 </option>
//               ))}
//             </select>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };



// "use client"

// import { useState } from "react"
// import { Sun, Droplets, Sprout, Cloud, ArrowUpRight } from "lucide-react"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import type { FilterCategory } from "./types/filter"    

// const filterOptions: FilterCategory[] = [
//   {
//     id: "sunintensity",
//     label: "Sun Intensity",
//     options: [
//       { value: "high", label: "High" },
//       { value: "moderate", label: "Moderate" },
//       { value: "low", label: "Low" },
//     ],
//   },
//   {
//     id: "moisture",
//     label: "Moisture Req",
//     options: [
//       { value: "high", label: "High" },
//       { value: "moderate", label: "Moderate" },
//       { value: "low", label: "Low" },
//     ],
//   },
//   {
//     id: "soiltype",
//     label: "Soil Type",
//     options: [
//       { value: "sandy", label: "Sandy" },
//       { value: "clay", label: "Clay" },
//       { value: "loamy", label: "Loamy" },
//     ],
//   },
//   {
//     id: "season",
//     label: "Season",
//     options: [
//       { value: "summer", label: "Summer" },
//       { value: "winter", label: "Winter" },
//       { value: "spring", label: "Spring" },
//     ],
//   },
//   {
//     id: "growthrate",
//     label: "Growth Rate",
//     options: [
//       { value: "fast", label: "Fast" },
//       { value: "medium", label: "Medium" },
//       { value: "slow", label: "Slow" },
//     ],
//   },
// ]

// const iconMap = {
//   sunintensity: <Sun className="h-4 w-4 text-amber-500" />,
//   moisture: <Droplets className="h-4 w-4 text-blue-500" />,
//   soiltype: <Sprout className="h-4 w-4 text-green-700" />,
//   season: <Cloud className="h-4 w-4 text-gray-500" />,
//   growthrate: <ArrowUpRight className="h-4 w-4 text-green-600" />,
// }

// export default function ShopCategories() {
//   const [filters, setFilters] = useState<Record<string, string>>({})

//   const handleFilterChange = (filterId: string, value: string) => {
//     setFilters((prev) => ({
//       ...prev,
//       [filterId]: value,
//     }))
//   }

//   return (
//     <div className="w-full p-6 bg-[#8BA89B] rounded-xl">
//       <h2 className="text-white text-2xl font-semibold mb-6">Shop By Categories</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
//         {filterOptions.map((filter) => (
//           <div key={filter.id}>
//             <Select value={filters[filter.id]} onValueChange={(value) => handleFilterChange(filter.id, value)}>
//               <SelectTrigger className="w-full bg-white">
//                 <div className="flex items-center gap-2">
//                   {iconMap[filter.id as keyof typeof iconMap]}
//                   <SelectValue placeholder={filter.label} />
//                 </div>
//               </SelectTrigger>
//               <SelectContent>
//                 {filter.options.map((option) => (
//                   <SelectItem key={option.value} value={option.value}>
//                     {option.label}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// };


// "use client"

// import { useState } from "react"
// import { Sun, Droplets, Sprout, Cloud, ArrowUpRight } from "lucide-react"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import type { FilterCategory } from "./types/filter"    

// const filterOptions: FilterCategory[] = [
//   {
//     id: "sunintensity",
//     label: "Sun Intensity",
//     options: [
//       { value: "high", label: "High" },
//       { value: "moderate", label: "Moderate" },
//       { value: "low", label: "Low" },
//     ],
//   },
//   {
//     id: "moisture",
//     label: "Moisture Req",
//     options: [
//       { value: "high", label: "High" },
//       { value: "moderate", label: "Moderate" },
//       { value: "low", label: "Low" },
//     ],
//   },
//   {
//     id: "soiltype",
//     label: "Soil Type",
//     options: [
//       { value: "sandy", label: "Sandy" },
//       { value: "clay", label: "Clay" },
//       { value: "loamy", label: "Loamy" },
//     ],
//   },
//   {
//     id: "season",
//     label: "Season",
//     options: [
//       { value: "summer", label: "Summer" },
//       { value: "winter", label: "Winter" },
//       { value: "spring", label: "Spring" },
//     ],
//   },
//   {
//     id: "growthrate",
//     label: "Growth Rate",
//     options: [
//       { value: "fast", label: "Fast" },
//       { value: "medium", label: "Medium" },
//       { value: "slow", label: "Slow" },
//     ],
//   },
// ]

// const iconMap = {
//   sunintensity: <Sun className="h-4 w-4 text-amber-500" />,
//   moisture: <Droplets className="h-4 w-4 text-blue-500" />,
//   soiltype: <Sprout className="h-4 w-4 text-green-700" />,
//   season: <Cloud className="h-4 w-4 text-gray-500" />,
//   growthrate: <ArrowUpRight className="h-4 w-4 text-green-600" />,
// }

// export default function ShopCategories() {
//   const [filters, setFilters] = useState<Record<string, string>>({})

//   const handleFilterChange = (filterId: string, value: string) => {
//     setFilters((prev) => ({
//       ...prev,
//       [filterId]: value,
//     }))
//   }

//   return (
//     <div className="w-full p-6 bg-[#8BA89B] rounded-xl">
//       <h2 className="text-white text-2xl font-semibold mb-6">Shop By Categories</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
//         {filterOptions.map((filter) => (
//           <div key={filter.id}>
//             <Select value={filters[filter.id]} onValueChange={(value) => handleFilterChange(filter.id, value)}>
//               <SelectTrigger className="w-full bg-white">
//                 <div className="flex items-center gap-2">
//                   {iconMap[filter.id as keyof typeof iconMap]}
//                   <SelectValue>
//                     {filters[filter.id] ? filters[filter.id] : filter.label}
//                   </SelectValue>
//                 </div>
//               </SelectTrigger>
//               <SelectContent>
//                 {filter.options.map((option) => (
//                   <SelectItem key={option.value} value={option.value}>
//                     {option.label}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }



// import { Button } from "@/components/ui/button"
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
// import { MdWbSunny } from "react-icons/md"
// import { FaCloudMoonRain } from "react-icons/fa"
// import { IoIosWater } from "react-icons/io"
// import { LuSprout } from "react-icons/lu"
// import { FaSeedling } from "react-icons/fa"
// import { ChevronDown } from "lucide-react"

// const filterOptions = [
//   {
//     id: "sunintensity",
//     label: "Sun Intensity",
//     icon: <MdWbSunny className="text-yellow-400 h-4 w-4" />,
//     options: [
//       { value: "high", label: "High" },
//       { value: "moderate", label: "Moderate" },
//       { value: "low", label: "Low" },
//     ],
//   },
//   {
//     id: "moisture",
//     label: "Moisture Req",
//     icon: <IoIosWater className="text-sky-500 h-4 w-4" />,
//     options: [
//       { value: "high", label: "High" },
//       { value: "moderate", label: "Moderate" },
//       { value: "low", label: "Low" },
//     ],
//   },
//   {
//     id: "soiltype",
//     label: "Soil Type",
//     icon: <FaSeedling className="text-amber-700 h-4 w-4" />,
//     options: [
//       { value: "sandy", label: "Sandy" },
//       { value: "clay", label: "Clay" },
//       { value: "loamy", label: "Loamy" },
//     ],
//   },
//   {
//     id: "season",
//     label: "Season",
//     icon: <FaCloudMoonRain className="text-slate-500 h-4 w-4" />,
//     options: [
//       { value: "summer", label: "Summer" },
//       { value: "winter", label: "Winter" },
//       { value: "spring", label: "Spring" },
//     ],
//   },
//   {
//     id: "growthrate",
//     label: "Growth Rate",
//     icon: <LuSprout className="text-emerald-500 h-4 w-4" />,
//     options: [
//       { value: "fast", label: "Fast" },
//       { value: "medium", label: "Medium" },
//       { value: "slow", label: "Slow" },
//     ],
//   },
// ]

// export default function ShopByCategories() {
//   return (
//     <div className="bg-teal-700/30 p-8 rounded-xl">
//       <h2 className="text-2xl font-semibold text-slate-800 mb-6">Shop By Categories</h2>
//       <div className="flex flex-wrap gap-3">
//         {filterOptions.map((filter) => (
//           <DropdownMenu key={filter.id}>
//             <DropdownMenuTrigger asChild>
//               <Button variant="secondary" className="bg-white hover:bg-gray-50 text-slate-800 shadow-sm">
//                 {filter.icon}
//                 <span className="ml-2">{filter.label}</span>
//                 <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
//               </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent align="start" className="w-[200px]">
//               {filter.options.map((option) => (
//                 <DropdownMenuItem key={option.value} className="cursor-pointer">
//                   {option.label}
//                 </DropdownMenuItem>
//               ))}
//             </DropdownMenuContent>
//           </DropdownMenu>
//         ))}
//       </div>
//     </div>
//   )
// }

import React from 'react'

const ShopByCategories = () => {
  return (
    <div>ShopByCategories</div>
  )
}

export default ShopByCategories