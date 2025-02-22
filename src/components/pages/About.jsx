"use client";
import { motion } from "framer-motion";
import { Leaf, Users, Sprout, Award } from "lucide-react";

const About = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl font-extrabold text-green-800 mb-4">
            Cultivating Green Dreams
          </h1>
          <p className="text-xl text-gray-700 mb-12">
            Welcome to{" "}
            <span className="font-bold text-green-700">GreenCorner</span> —
            Where Every Leaf Tells a Story
          </p>
        </motion.div>

        {/* Mission and Why Choose Us */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-semibold text-green-600 flex items-center">
              <Leaf className="mr-2" /> Our Mission
            </h2>
            <p className="text-lg text-gray-600">
              At GreenCorner, we're on a mission to turn every space into a
              thriving ecosystem. We believe in the power of plants to transform
              lives, purify air, and create serene environments. Our goal is to
              make the joy of gardening accessible to everyone, from urban
              dwellers to suburban homeowners.
            </p>
            <p className="text-lg text-gray-600">
              We're not just selling plants; we're cultivating a community of
              green enthusiasts who share our passion for sustainable living and
              biodiversity.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-semibold text-green-600 flex items-center">
              <Users className="mr-2" /> Why Choose Us?
            </h2>
            <ul className="space-y-2">
              {[
                {
                  icon: <Sprout className="text-green-500" />,
                  title: "Curated Selection",
                  description:
                    "Handpicked, healthy plants suited for various environments.",
                },
                {
                  icon: <Award className="text-green-500" />,
                  title: "Expert Care Guides",
                  description:
                    "Detailed instructions to help your plants thrive.",
                },
                {
                  icon: <Users className="text-green-500" />,
                  title: "Community Support",
                  description:
                    "Join our forums and share your green journey with fellow enthusiasts.",
                },
                {
                  icon: <Leaf className="text-green-500" />,
                  title: "Eco-Friendly Practices",
                  description:
                    "Sustainable packaging and responsible sourcing.",
                },
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2">{item.icon}</span>
                  <span>
                    <span className="font-bold">{item.title}:</span>{" "}
                    {item.description}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Our Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-semibold text-green-600 text-center mb-8">
            Our Story
          </h3>
          <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:w-1/2">
              <img
                src="src\assets\WhatsApp Image 2025-01-17 at 7.53.20 PM.jpeg  "
                alt="GreenCorner Story"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8">
              <p className="text-lg text-gray-600 mb-4">
                GreenCorner sprouted from a simple idea: to bring the magic of
                nature into every home. Founded by Sarah and Mike, two urban
                gardeners who transformed their tiny apartment into a lush
                paradise, we understand the challenges and joys of nurturing
                plants in any space.
              </p>
              <p className="text-lg text-gray-600">
                What started as a small pop-up shop in a bustling city corner
                has grown into a thriving online community and marketplace.
                Today, we're proud to connect plant lovers across the globe,
                offering not just plants, but a gateway to a greener, more
                harmonious way of living.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Our Impact Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-semibold text-green-600 text-center mb-8">
            Our Impact
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Trees Planted",
                value: "50,000+",
                description:
                  "Through our partnership with global reforestation projects",
              },
              {
                title: "Happy Plant Parents",
                value: "100,000+",
                description:
                  "Customers who've successfully grown their green family",
              },
              {
                title: "Varieties Offered",
                value: "1,000+",
                description:
                  "From rare exotics to hardy natives, we have it all",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-slate-50 p-6 rounded-lg text-center"
              >
                <h4 className="text-2xl font-bold  mb-2">
                  {item.title}
                </h4>
                <p className="text-4xl font-extrabold text-gray-600 mb-2">
                  {item.value}
                </p>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Call-to-Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <h3 className="text-3xl font-semibold text-green-600 mb-4">
            Join Our Green Revolution
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Whether you're a seasoned plant parent or a curious beginner,
            there's a perfect green companion waiting for you. Let's grow
            together!
          </p>
          <button className="px-8 py-3 bg-green-700 text-white text-lg font-semibold rounded-md hover:bg-green-800 transition duration-300 transform hover:scale-105">
            Explore Our Green World
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
