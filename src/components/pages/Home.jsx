import React, { useEffect, useRef, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { gsap } from "gsap";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import NewlyLaunch from "./NewlyLaunch";
import ShopByCategories from "./ShopByCategories";
import { useNavigate } from "react-router-dom";
import HomeAllProduct from "./HomeAllProduct";

const CategoryCard = ({ img, title }) => (
  <a
    href="#"
    className="bg-white rounded-lg shadow-md w-48 p-6 flex flex-col items-center hover:shadow-xl hover:scale-105 transition-transform"
  >
    <img src={img} alt={title} className="h-36 w-auto mb-4 object-contain" />
    <h3 className="text-center text-gray-700 font-semibold text-lg">{title}</h3>
  </a>
);

const Home = () => {
  const heroTextRef = useRef(null);
  const heroButtonRef = useRef(null);
  const categoryCardsRef = useRef([]);
  const offerSectionRef = useRef(null);
  const navigate = useNavigate();

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
        duration: 1,
        delay: 1,
        ease: "expo.out",
      }
    );
  }, []);

  const heroImages = useMemo(
    () => [
      "/src/assets/heroimg1.png",
      "/src/assets/heroimg2.jpg",
      "/src/assets/heroimg3.jpg",
      "/src/assets/heroimg4.jpg",
    ],
    []
  );

  const categories = useMemo(
    () => [
      { img: "src/assets/10inchplant.png", title: "10 Inches Pots" },
      { img: "src/assets/8inchimage.png", title: "8 Inches Pots" },
      { img: "src/assets/5inchimage.png", title: "5.5 Inches Pots" },
      { img: "src/assets/Plantfood.png", title: "Plant Food" },
      { img: "src/assets/plantcare.png", title: "Plant Care" },
    ],
    []
  );

  return (
    <div className="bg-[#ffffff]">
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
          {heroImages.map((image, index) => (
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
            onClick={() => navigate("/plants")}
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
          className="flex flex-wrap justify-center gap-10 mx-auto px-6 max-w-7xl"
          ref={(el) => {
            categoryCardsRef.current = [];
            if (el) {
              Array.from(el.children).forEach((child) =>
                categoryCardsRef.current.push(child)
              );
            }
          }}
        >
          {categories.map((item, index) => (
            <CategoryCard key={index} img={item.img} title={item.title} />
          ))}
        </div>
      </section>

      {/* Offer Section */}
        {/* Newly Launched Section */}
        <NewlyLaunch />

      <section
        className="w-[90%] mx-auto my-12 py-12 bg-gradient-to-r from-[#143615] to-[#21543D] rounded-3xl text-center shadow-lg text-white relative overflow-hidden"
        ref={offerSectionRef}
        style={{
          backgroundImage:
            "url('')", // Add a suitable background image
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "multiply", // Blend the gradient with the image
        }}
      >
        {/* Overlay to darken the background image */}
        <div className="absolute inset-0 bg-green-900
         opacity-30"></div>

        <div className="relative z-10">
          <h1 className="text-3xl md:text-4xl font-semibold">
            Get <span className="font-bold text-yellow-300">20% Off</span> on
            orders above ₹3999!
          </h1>
          <p className="text-lg md:text-xl mt-4">
            Hurry! Offer valid till stocks last.
          </p>
          <button
            onClick={() => navigate("/plants")}
            className="mt-8 bg-white text-[#21543D] py-3 px-8 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Shop Now
          </button>
        </div>
      </section>

    

      {/* Shop By Categories Section */}
      <HomeAllProduct></HomeAllProduct>
    </div>
  );
};

export default Home;
