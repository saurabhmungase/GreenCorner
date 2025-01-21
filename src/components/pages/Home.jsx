// import React, { useContext } from 'react'
// import NewlyLaunch from './NewlyLaunch'
// import ShopByCategories from './ShopByCategories'

// const Home = () => {
  
//   return (
//     <div>
//       <section >
//       <img src="src\assets\plants_1.webp" className='w-full' alt="" />
      
//       </section>
//       <section className="flex flex-wrap justify-evenly gap-4 m-9">
//         <a href="">
//           <img src="src\assets\10inchplant.png" alt="" />
//           <h1>10 Inches Pots</h1>
//         </a>
//         <a href="">
//           <img src="src\assets\8inchimage.png" alt="" />
//           <h1>8 Inches Pots</h1>

//         </a>
//         <a href="">
//           <img src="src\assets\5inchimage.png" alt="" />
//           <h1>5.5 Inches Pots</h1>

//         </a>
//         <a href="">
//           <img src="src\assets\Plantfood.png" alt="" />
//           <h1>Plant Food</h1>
//         </a>
//         <a href="">
//           <img src="src\assets\plantcare.png" alt="" />
//           <h1>Plant Care</h1>
//         </a>
//       </section>
//       <section className='w-[95%] h-12 flex justify-center items-center rounded-3xl bg-[#D9D9D9] m-auto'>
//         <div><h1>Get 20% off on order above 3999</h1></div>
//       </section>
//       <section>
//         <NewlyLaunch></NewlyLaunch>
//       </section>
//       <section>
//         <ShopByCategories></ShopByCategories>
//       </section>
      
//     </div>
//   )
// }

// export default Home


// import React from "react";
// import NewlyLaunch from "./NewlyLaunch";
// import ShopByCategories from "./ShopByCategories";

// const Home = () => {
//   return (
//     <div className="w-full">
//       {/* Hero Section */}
//       <section className="w-full">
//         <img
//           src="src/assets/plants_1.webp"
//           className="w-full h-auto object-cover"
//           alt="Hero Banner"
//         />
//       </section>

//       {/* Categories Section */}
//       <section className="flex flex-wrap justify-center gap-6 py-12 px-4">
//         {[
//           { src: "src/assets/10inchplant.png", label: "10 Inches Pots" },
//           { src: "src/assets/8inchimage.png", label: "8 Inches Pots" },
//           { src: "src/assets/5inchimage.png", label: "5.5 Inches Pots" },
//           { src: "src/assets/Plantfood.png", label: "Plant Food" },
//           { src: "src/assets/plantcare.png", label: "Plant Care" },
//         ].map((item, index) => (
//           <a
//             href="#"
//             key={index}
//             className="flex flex-col items-center hover:scale-105 transition-transform duration-200"
//           >
//             <img
//               src={item.src}
//               alt={item.label}
//               className="w-28 h-28 object-contain mb-2"
//             />
//             <h1 className="text-lg font-medium text-gray-700">{item.label}</h1>
//           </a>
//         ))}
//       </section>

//       {/* Discount Banner */}
//       <section className="w-[90%] mx-auto h-16 flex justify-center items-center rounded-full bg-gray-200 my-8 shadow-lg">
//         <h1 className="text-lg font-semibold text-gray-800">
//           Get 20% off on orders above ₹3999!
//         </h1>
//       </section>

//       {/* Newly Launch Section */}
//       <section className="py-8">
//         <NewlyLaunch />
//       </section>

//       {/* Shop By Categories Section */}
//       <section className="py-8">
//         <ShopByCategories />
//       </section>
//     </div>
//   );
// };

// export default Home;


// import React from "react";
// import NewlyLaunch from "./NewlyLaunch";
// import ShopByCategories from "./ShopByCategories";

// const Home = () => {
//   return (
//     <div className="bg-[#F5F5F5]">
//       {/* Hero Section */}
//       <section className="relative">
//         <img
//           src="src\assets\heroimg1.jpg"
//           alt="Plants Hero"
//           className="w-full h-[70vh] object-cover"
//         />
//            <img
//           src="src\assets\heroimg2.jpg"
//           alt="Plants Hero"
//           className="w-full h-[70vh] object-cover"
//         />
//            <img
//           src="src\assets\heroimg3.jpg"
//           alt="Plants Hero"
//           className="w-full h-[70vh] object-cover"
//         />
//            <img
//           src="src\assets\heroimg4.jpg"
//           alt="Plants Hero"
//           className="w-full h-[70vh] object-cover"
//         />
//         <div className="absolute top-1/2 left-96 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
//           <h1 className="text-4xl md:text-6xl font-bold">Welcome to GreenCorner</h1>
//           <p className="mt-4 text-lg">Your one-stop shop for plants, pots, and more!</p>
//           <button className="mt-6 bg-[#21543D] text-white py-3 px-6 rounded-lg hover:bg-[#1A4031] transition">
//             Shop Now
//           </button>
//         </div>
//       </section>

//       {/* Categories Section */}
//       <section className="py-10">
//         <h2 className="text-3xl font-bold text-center text-[#21543D] mb-8">
//           Explore Our Collections
//         </h2>
//         <div className="flex flex-wrap justify-evenly gap-8 mx-auto px-6">
//           {[
//             { img: "src/assets/10inchplant.png", title: "10 Inches Pots" },
//             { img: "src/assets/8inchimage.png", title: "8 Inches Pots" },
//             { img: "src/assets/5inchimage.png", title: "5.5 Inches Pots" },
//             { img: "src/assets/Plantfood.png", title: "Plant Food" },
//             { img: "src/assets/plantcare.png", title: "Plant Care" },
//           ].map((item, index) => (
//             <a
//               href="#"
//               key={index}
//               className="bg-white rounded-lg shadow-lg w-40 p-4 flex flex-col items-center hover:shadow-xl transition"
//             >
//               <img src={item.img} alt={item.title} className="h-32 w-auto mb-4" />
//               <h3 className="text-center text-gray-700 font-medium">{item.title}</h3>
//             </a>
//           ))}
//         </div>
//       </section>

//       {/* Offer Section */}
//       <section className="w-[95%] mx-auto my-8 py-4 bg-[#A3D9A5] rounded-3xl text-center shadow-lg">
//         <h1 className="text-lg font-semibold text-[#21543D]">
//           Get <span className="font-bold">20% Off</span> on orders above ₹3999!
//         </h1>
//       </section>

//       {/* Newly Launched */}
//       <NewlyLaunch />

//       {/* Shop By Categories */}
//       <ShopByCategories />
//     </div>
//   );
// };

// export default Home;


// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Pagination, Navigation, Autoplay } from "swiper";
// import NewlyLaunch from "./NewlyLaunch";
// import ShopByCategories from "./ShopByCategories";

// const Home = () => {
//   return (
//     <div className="bg-[#F5F5F5]">
//       {/* Hero Section */}
//       <section className="relative">
//         <Swiper
//           modules={[Pagination, Navigation, Autoplay]}
//           autoplay={{ delay: 3000 }}
//           pagination={{ clickable: true }}
//           navigation
//           loop
//           className="w-full h-[70vh]"
//         >
//           {[
//             "src/assets/heroimg1.jpg",
//             "src/assets/heroimg2.jpg",
//             "src/assets/heroimg3.jpg",
//             "src/assets/heroimg4.jpg",
//           ].map((image, index) => (
//             <SwiperSlide key={index}>
//               <img
//                 src={image}
//                 alt={`Hero Slide ${index + 1}`}
//                 className="w-full h-[70vh] object-cover"
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
//           <h1 className="text-4xl md:text-6xl font-bold">Welcome to GreenCorner</h1>
//           <p className="mt-4 text-lg">Your one-stop shop for plants, pots, and more!</p>
//           <button className="mt-6 bg-[#21543D] text-white py-3 px-6 rounded-lg hover:bg-[#1A4031] transition">
//             Shop Now
//           </button>
//         </div>
//       </section>

//       {/* Categories Section */}
//       <section className="py-10">
//         <h2 className="text-3xl font-bold text-center text-[#21543D] mb-8">
//           Explore Our Collections
//         </h2>
//         <div className="flex flex-wrap justify-evenly gap-8 mx-auto px-6">
//           {[
//             { img: "src/assets/10inchplant.png", title: "10 Inches Pots" },
//             { img: "src/assets/8inchimage.png", title: "8 Inches Pots" },
//             { img: "src/assets/5inchimage.png", title: "5.5 Inches Pots" },
//             { img: "src/assets/Plantfood.png", title: "Plant Food" },
//             { img: "src/assets/plantcare.png", title: "Plant Care" },
//           ].map((item, index) => (
//             <a
//               href="#"
//               key={index}
//               className="bg-white rounded-lg shadow-lg w-40 p-4 flex flex-col items-center hover:shadow-xl transition"
//             >
//               <img src={item.img} alt={item.title} className="h-32 w-auto mb-4" />
//               <h3 className="text-center text-gray-700 font-medium">{item.title}</h3>
//             </a>
//           ))}
//         </div>
//       </section>

//       {/* Offer Section */}
//       <section className="w-[95%] mx-auto my-8 py-4 bg-[#A3D9A5] rounded-3xl text-center shadow-lg">
//         <h1 className="text-lg font-semibold text-[#21543D]">
//           Get <span className="font-bold">20% Off</span> on orders above ₹3999!
//         </h1>
//       </section>

//       {/* Newly Launched */}
//       <NewlyLaunch />

//       {/* Shop By Categories */}
//       <ShopByCategories />
//     </div>
//   );
// };

// // export default Home;
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Navigation, Autoplay } from "swiper/modules";
// // Import Swiper CSS
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import NewlyLaunch from "./NewlyLaunch";
// import ShopByCategories from "./ShopByCategories";

// const Home = () => {
//   return (
//     <div className="bg-[#F5F5F5]">
//       {/* Hero Section */}
//       <section className="relative">
//         <Swiper
//           modules={[Pagination, Navigation, Autoplay]}
//           autoplay={{ delay: 3000 }}
//           pagination={{ clickable: true }}
//           navigation
//           loop
//           className="w-full h-[70vh]"
//         >
//           {[
//             "/src/assets/heroimg1.png",
//             "/src/assets/heroimg2.jpg",
//             "/src/assets/heroimg3.jpg",
//             "/src/assets/heroimg4.jpg",
//           ].map((image, index) => (
//             <SwiperSlide key={index}>
//               <img
//                 src={image}
//                 alt={`Hero Slide ${index + 1}`}
//                 className="w-full h-[80vh] object-cover"
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
//           <h1 className="text-4xl md:text-6xl font-bold">Welcome to GreenCorner</h1>
//           <p className="mt-4 text-lg">Your one-stop shop for plants, pots, and more!</p>
//           <button className="mt-6 bg-[#21543D] text-white py-3 px-6 rounded-lg hover:bg-[#1A4031] transition">
//             Shop Now
//           </button>
//         </div>
//       </section>
      
//        {/* Categories Section */}
//        <section className="py-10">
//          <h2 className="text-3xl font-bold text-center text-[#21543D] mb-8">
//            Explore Our Collections
//          </h2>
//          <div className="flex flex-wrap justify-evenly gap-8 mx-auto px-6">
//            {[
//             { img: "src/assets/10inchplant.png", title: "10 Inches Pots" },
//             { img: "src/assets/8inchimage.png", title: "8 Inches Pots" },
//             { img: "src/assets/5inchimage.png", title: "5.5 Inches Pots" },
//             { img: "src/assets/Plantfood.png", title: "Plant Food" },
//             { img: "src/assets/plantcare.png", title: "Plant Care" },
//           ].map((item, index) => (
//             <a
//               href="#"
//               key={index}
//               className="bg-white rounded-lg shadow-lg w-40 p-4 flex flex-col items-center hover:shadow-xl transition"
//             >
//               <img src={item.img} alt={item.title} className="h-32 w-auto mb-4" />
//               <h3 className="text-center text-gray-700 font-medium">{item.title}</h3>
//             </a>
//           ))}
//         </div>
//       </section>

//       {/* Other sections */}
//       <NewlyLaunch />
//       <ShopByCategories />
//     </div>
//   );
// };

// export default Home;


// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Navigation, Autoplay } from "swiper/modules";
// // Import Swiper CSS
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import NewlyLaunch from "./NewlyLaunch";
// import ShopByCategories from "./ShopByCategories";

// const Home = () => {
//   return (
//     <div className="bg-[#F5F5F5]">
//       {/* Hero Section */}
//       <section className="relative">
//         <Swiper
//           modules={[Pagination, Navigation, Autoplay]}
//           autoplay={{ delay: 3000 }}
//           pagination={{ clickable: true }}
//           navigation
//           loop
//           className="w-full h-[80vh]"
//         >
//           {[
//             "/src/assets/heroimg1.png",
//             "/src/assets/heroimg2.jpg",
//             "/src/assets/heroimg3.jpg",
//             "/src/assets/heroimg4.jpg",
//           ].map((image, index) => (
//             <SwiperSlide key={index}>
//               <div className="relative w-full h-full">
//                 <img
//                   src={image}
//                   alt={`Hero Slide ${index + 1}`}
//                   className="w-full h-full object-cover"
//                 />
//                 {/* Gradient overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
//           <h1 className="text-5xl md:text-7xl font-extrabold drop-shadow-lg">
//             Welcome to <span className="text-[#A3D9A5]">GreenCorner</span>
//           </h1>
//           <p className="mt-4 text-lg md:text-xl font-light">
//             Your one-stop shop for plants, pots, and more!
//           </p>
//           <button className="mt-6 bg-[#21543D] text-white py-3 px-8 rounded-full hover:bg-[#1A4031] transition transform hover:scale-105 shadow-lg">
//             Shop Now
//           </button>
//         </div>
//       </section>

//       {/* Categories Section */}
//       <section className="py-16 bg-white">
//         <h2 className="text-4xl font-bold text-center text-[#21543D] mb-12">
//           Explore Our Collections
//         </h2>
//         <div className="flex flex-wrap justify-center gap-10 mx-auto px-6 max-w-7xl">
//           {[
//             { img: "src/assets/10inchplant.png", title: "10 Inches Pots" },
//             { img: "src/assets/8inchimage.png", title: "8 Inches Pots" },
//             { img: "src/assets/5inchimage.png", title: "5.5 Inches Pots" },
//             { img: "src/assets/Plantfood.png", title: "Plant Food" },
//             { img: "src/assets/plantcare.png", title: "Plant Care" },
//           ].map((item, index) => (
//             <a
//               href="#"
//               key={index}
//               className="bg-white rounded-lg shadow-md w-48 p-6 flex flex-col items-center hover:shadow-xl hover:scale-105 transition-transform"
//             >
//               <img
//                 src={item.img}
//                 alt={item.title}
//                 className="h-36 w-auto mb-4 object-contain"
//               />
//               <h3 className="text-center text-gray-700 font-semibold text-lg">
//                 {item.title}
//               </h3>
//             </a>
//           ))}
//         </div>
//       </section>

//       {/* Offer Section */}
//       <section className="w-[90%] mx-auto my-12 py-8 bg-gradient-to-r from-[#A3D9A5] to-[#21543D] rounded-3xl text-center shadow-lg text-white">
//         <h1 className="text-2xl font-semibold">
//           Get <span className="font-bold text-yellow-300">20% Off</span> on orders above ₹3999!
//         </h1>
//         <p className="text-lg mt-2">Hurry! Offer valid till stocks last.</p>
//         <button className="mt-6 bg-white text-[#21543D] py-2 px-6 rounded-full font-medium hover:bg-gray-100 transition shadow-md">
//           Shop Now
//         </button>
//       </section>

//       {/* Newly Launched Section */}
//       <NewlyLaunch />

//       {/* Shop By Categories Section */}
//       <ShopByCategories />
//     </div>
//   );
// };

// export default Home;


// import React, { useEffect, useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Navigation, Autoplay } from "swiper/modules";
// import { gsap } from "gsap";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import NewlyLaunch from "./NewlyLaunch";
// import ShopByCategories from "./ShopByCategories";

// const Home = () => {
//   const heroTextRef = useRef(null);
//   const heroButtonRef = useRef(null);
//   const categoryCardsRef = useRef([]);
//   const offerSectionRef = useRef(null);

//   useEffect(() => {
//     // Hero Section Animation
//     gsap.fromTo(
//       heroTextRef.current,
//       { y: 50, opacity: 0 },
//       { y: 0, opacity: 1, duration: 1, delay: 0.5, ease: "power2.out" }
//     );

//     gsap.fromTo(
//       heroButtonRef.current,
//       { scale: 0.8, opacity: 0 },
//       { scale: 1, opacity: 1, duration: 1, delay: 1, ease: "bounce.out" }
//     );

//     // Category Cards Animation
//     gsap.fromTo(
//       categoryCardsRef.current,
//       { opacity: 0, y: 50 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 0.8,
//         stagger: 0.2,
//         delay: 1.5,
//         ease: "power2.out",
//       }
//     );

//     // Offer Section Animation
//     gsap.fromTo(
//       offerSectionRef.current,
//       { opacity: 0, scale: 0.8 },
//       { opacity: 1, scale: 1, duration: 1, delay: 2, ease: "elastic.out(1, 0.5)" }
//     );
//   }, []);

//   return (
//     <div className="bg-[#F5F5F5]">
//       {/* Hero Section */}
//       <section className="relative">
//         <Swiper
//           modules={[Pagination, Navigation, Autoplay]}
//           autoplay={{ delay: 3000 }}
//           pagination={{ clickable: true }}
//           navigation
//           loop
//           className="w-full h-[80vh]"
//         >
//           {[
//             "/src/assets/heroimg1.png",
//             "/src/assets/heroimg2.jpg",
//             "/src/assets/heroimg3.jpg",
//             "/src/assets/heroimg4.jpg",
//           ].map((image, index) => (
//             <SwiperSlide key={index}>
//               <div className="relative w-full h-full">
//                 <img
//                   src={image}
//                   alt={`Hero Slide ${index + 1}`}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//         <div
//           className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10"
//           ref={heroTextRef}
//         >
//           <h1 className="text-5xl md:text-7xl font-extrabold drop-shadow-lg">
//             Welcome to <span className="text-[#A3D9A5]">GreenCorner</span>
//           </h1>
//           <p className="mt-4 text-lg md:text-xl font-light">
//             Your one-stop shop for plants, pots, and more!
//           </p>
//           <button
//             ref={heroButtonRef}
//             className="mt-6 bg-[#21543D] text-white py-3 px-8 rounded-full hover:bg-[#1A4031] transition transform hover:scale-105 shadow-lg"
//           >
//             Shop Now
//           </button>
//         </div>
//       </section>

//       {/* Categories Section */}
//       <section className="py-16 bg-white">
//         <h2 className="text-4xl font-bold text-center text-[#21543D] mb-12">
//           Explore Our Collections
//         </h2>
//         <div
//           className="flex flex-wrap justify-center gap-10 mx-auto px-6 max-w-7xl"
//           ref={(el) => {
//             categoryCardsRef.current = [];
//             if (el) {
//               Array.from(el.children).forEach((child) => categoryCardsRef.current.push(child));
//             }
//           }}
//         >
//           {[
//             { img: "src/assets/10inchplant.png", title: "10 Inches Pots" },
//             { img: "src/assets/8inchimage.png", title: "8 Inches Pots" },
//             { img: "src/assets/5inchimage.png", title: "5.5 Inches Pots" },
//             { img: "src/assets/Plantfood.png", title: "Plant Food" },
//             { img: "src/assets/plantcare.png", title: "Plant Care" },
//           ].map((item, index) => (
//             <a
//               href="#"
//               key={index}
//               className="bg-white rounded-lg shadow-md w-48 p-6 flex flex-col items-center hover:shadow-xl hover:scale-105 transition-transform"
//             >
//               <img
//                 src={item.img}
//                 alt={item.title}
//                 className="h-36 w-auto mb-4 object-contain"
//               />
//               <h3 className="text-center text-gray-700 font-semibold text-lg">
//                 {item.title}
//               </h3>
//             </a>
//           ))}
//         </div>
//       </section>

//       {/* Offer Section */}
//       <section
//         className="w-[90%] mx-auto my-12 py-8 bg-gradient-to-r from-[#A3D9A5] to-[#21543D] rounded-3xl text-center shadow-lg text-white"
//         ref={offerSectionRef}
//       >
//         <h1 className="text-2xl font-semibold">
//           Get <span className="font-bold text-yellow-300">20% Off</span> on orders above ₹3999!
//         </h1>
//         <p className="text-lg mt-2">Hurry! Offer valid till stocks last.</p>
//         <button className="mt-6 bg-white text-[#21543D] py-2 px-6 rounded-full font-medium hover:bg-gray-100 transition shadow-md">
//           Shop Now
//         </button>
//       </section>

//       {/* Newly Launched Section */}
//       <NewlyLaunch />

//       {/* Shop By Categories Section */}
//       <ShopByCategories />
//     </div>
//   );
// };

// export default Home;


import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { gsap } from "gsap";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import NewlyLaunch from "./NewlyLaunch";
import ShopByCategories from "./ShopByCategories";

const Home = () => {
  const heroTextRef = useRef(null);
  const heroButtonRef = useRef(null);
  const categoryCardsRef = useRef([]);
  const offerSectionRef = useRef(null);

  useEffect(() => {
    // Hero Section Animation
    gsap.fromTo(
      heroTextRef.current,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        delay: 0.3,
        ease: "expo.out",
      }
    );

    gsap.fromTo(
      heroButtonRef.current,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        delay: 0.8,
        ease: "elastic.out(1, 0.5)",
      }
    );

    // Category Cards Animation
    gsap.fromTo(
      categoryCardsRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        stagger: 0.2,
        delay: 1.5,
        ease: "power3.out",
      }
    );

    // Offer Section Animation
    gsap.fromTo(
      offerSectionRef.current,
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.4,
        delay: 2,
        ease: "expo.out",
      }
    );
  }, []);

  return (
    <div className="bg-[#F5F5F5]">
      {/* Hero Section */}
      <section className="relative">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          navigation
          loop
          className="w-full h-[80vh]"
        >
          {[
            "/src/assets/heroimg1.png",
            "/src/assets/heroimg2.jpg",
            "/src/assets/heroimg3.jpg",
            "/src/assets/heroimg4.jpg",
          ].map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                <img
                  src={image}
                  alt={`Hero Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10"
          ref={heroTextRef}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold drop-shadow-lg">
            Welcome to <span className="text-[#A3D9A5]">GreenCorner</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl font-light">
            Your one-stop shop for plants, pots, and more!
          </p>
          <button
            ref={heroButtonRef}
            className="mt-6 bg-[#21543D] text-white py-3 px-8 rounded-full hover:bg-[#1A4031] transition transform hover:scale-105 shadow-lg"
          >
            Shop Now
          </button>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <h2 className="text-4xl font-bold text-center text-[#21543D] mb-12">
          Explore Our Collections
        </h2>
        <div
          className="flex flex-wrap justify-between gap-10 mx-auto px-6 max-w-7xl"
          ref={(el) => {
            categoryCardsRef.current = [];
            if (el) {
              Array.from(el.children).forEach((child) => categoryCardsRef.current.push(child));
            }
          }}
        >
          {[
            { img: "src/assets/10inchplant.png", title: "10 Inches Pots" },
            { img: "src/assets/8inchimage.png", title: "8 Inches Pots" },
            { img: "src/assets/5inchimage.png", title: "5.5 Inches Pots" },
            { img: "src/assets/Plantfood.png", title: "Plant Food" },
            { img: "src/assets/plantcare.png", title: "Plant Care" },
          ].map((item, index) => (
            <a
              href="#"
              key={index}
              className="bg-white rounded-lg shadow-md w-48 p-6 flex flex-col items-center hover:shadow-xl hover:scale-105 transition-transform"
            >
              <img
                src={item.img}
                alt={item.title}
                className="h-36 w-auto mb-4 object-contain"
              />
              <h3 className="text-center text-gray-700 font-semibold text-lg">
                {item.title}
              </h3>
            </a>
          ))}
        </div>
      </section>

      {/* Offer Section */}
      <section
        className="w-[90%] mx-auto my-12 py-8 bg-gradient-to-r from-[#A3D9A5] to-[#21543D] rounded-3xl text-center shadow-lg text-white"
        ref={offerSectionRef}
      >
        <h1 className="text-2xl font-semibold">
          Get <span className="font-bold text-yellow-300">20% Off</span> on orders above ₹3999!
        </h1>
        <p className="text-lg mt-2">Hurry! Offer valid till stocks last.</p>
        <button className="mt-6 bg-white text-[#21543D] py-2 px-6 rounded-full font-medium hover:bg-gray-100 transition shadow-md">
          Shop Now
        </button>
      </section>

      {/* Newly Launched Section */}
      <NewlyLaunch />

      {/* Shop By Categories Section */}
      <ShopByCategories />
    </div>
  );
};

export default Home;
