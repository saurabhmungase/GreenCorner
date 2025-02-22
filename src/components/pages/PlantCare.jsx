// import React from 'react'

// import { motion } from "framer-motion";

// const PlantCare = () => {
//   const careTips = [
//     {
//       title: "Watering",
//       description: "Most plants prefer deep, infrequent watering, allowing the soil to dry slightly between waterings. Be cautious not to overwater as it can lead to root rot.",
//       icon: "💧",
//     },
//     {
//       title: "Lighting",
//       description: "Plants generally need bright, indirect light. Place them near windows where they receive plenty of natural light, but avoid direct sunlight for long periods.",
//       icon: "🌞",
//     },
//     {
//       title: "Soil",
//       description: "Use well-draining soil that provides adequate aeration for the roots. Regularly check for compacted soil and replace it when necessary to maintain root health.",
//       icon: "🌱",
//     },
//     {
//       title: "Fertilization",
//       description: "Feed plants with a balanced liquid fertilizer every 4-6 weeks during the growing season (spring and summer). Avoid fertilizing in winter when plants are dormant.",
//       icon: "🌾",
//     },
//     {
//       title: "Humidity",
//       description: "Many plants thrive in humid environments. Keep the humidity level high with regular misting or a humidifier, especially during dry months.",
//       icon: "💨",
//     },
//   ];

//   return (
//     <div className="max-w-7xl mx-auto py-16 px-6">
//       {/* Hero Section */}
//       <motion.div
//         className="bg-green-800 text-white p-12 rounded-lg shadow-xl mb-12"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <h1 className="text-4xl font-bold text-center mb-4">Plant Care Tips</h1>
//         <p className="text-lg text-center">
//           Learn how to take care of your plants and help them thrive with the right care and attention.
//         </p>
//       </motion.div>

//       {/* Care Tips Sections */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
//         {careTips.map((tip, index) => (
//           <motion.div
//             key={index}
//             className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.98 }}
//           >
//             <div className="text-4xl text-green-800 mb-4">{tip.icon}</div>
//             <h2 className="text-2xl font-semibold text-green-800 mb-2">{tip.title}</h2>
//             <p className="text-gray-600">{tip.description}</p>
//           </motion.div>
//         ))}
//       </div>

//       {/* Care Video or Guide Section */}
//       <motion.div
//         className="mt-16 bg-green-50 p-8 rounded-lg shadow-lg"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <h2 className="text-3xl font-bold text-green-800 text-center mb-6">Watch Our Care Guide</h2>
//         <div className="flex justify-center">
//           <iframe
//             className="rounded-lg shadow-lg"
//             width="560"
//             height="315"
//             src="https://www.youtube.com/embed/1ZnDFv1KvB8"
//             title="Plant Care Video"
//             frameBorder="0"
//             allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//           ></iframe>
//         </div>
//       </motion.div>
//     </div>
//   );
// };
// export default  PlantCare


import React from 'react';
import { motion } from 'framer-motion';

const PlantCare = () => {
  const careTips = [
    {
      title: 'Watering',
      description:
        'Most plants prefer deep, infrequent watering, allowing the soil to dry slightly between waterings. Be cautious not to overwater as it can lead to root rot.',
      icon: '💧',
    },
    {
      title: 'Lighting',
      description:
        'Plants generally need bright, indirect light. Place them near windows where they receive plenty of natural light, but avoid direct sunlight for long periods.',
      icon: '🌞',
    },
    {
      title: 'Soil',
      description:
        'Use well-draining soil that provides adequate aeration for the roots. Regularly check for compacted soil and replace it when necessary to maintain root health.',
      icon: '🌱',
    },
    {
      title: 'Fertilization',
      description:
        'Feed plants with a balanced liquid fertilizer every 4-6 weeks during the growing season (spring and summer). Avoid fertilizing in winter when plants are dormant.',
      icon: '🌾',
    },
    {
      title: 'Humidity',
      description:
        'Many plants thrive in humid environments. Keep the humidity level high with regular misting or a humidifier, especially during dry months.',
      icon: '💨',
    },
    {
      title: 'Pruning',
      description:
        'Regular pruning helps plants grow healthier and bushier. Remove dead or yellowing leaves and trim overgrown branches to encourage new growth.',
      icon: '✂️',
    },
  ];

  const plantBenefits = [
    'Improves air quality by filtering toxins',
    'Boosts mood and reduces stress',
    'Enhances concentration and productivity',
    'Adds aesthetic appeal to your space',
    'Promotes better sleep by increasing oxygen levels',
  ];

  return (
    <div className="max-w-7xl mx-auto py-16 px-6">
      {/* Hero Section */}
      <motion.div
        className="bg-green-800 text-white p-12 rounded-lg shadow-xl mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold text-center mb-4">Plant Care Tips</h1>
        <p className="text-lg text-center">
          Learn how to take care of your plants and help them thrive with the right care and attention.
        </p>
      </motion.div>

      {/* Care Tips Sections */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {careTips.map((tip, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="text-4xl text-green-800 mb-4">{tip.icon}</div>
            <h2 className="text-2xl font-semibold text-green-800 mb-2">{tip.title}</h2>
            <p className="text-gray-600">{tip.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Benefits of Plants Section */}
      <motion.div
        className="mt-16 bg-green-50 p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold text-green-800 text-center mb-6">Benefits of Having Plants</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {plantBenefits.map((benefit, index) => (
            <li key={index} className="flex items-center bg-white p-4 rounded-lg shadow-md">
              <span className="text-green-800 text-2xl mr-4">🌿</span>
              <p className="text-gray-600">{benefit}</p>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Care Video or Guide Section */}
      <motion.div
        className="mt-16 bg-green-50 p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold text-green-800 text-center mb-6">Watch Our Care Guide</h2>
        <div className="flex justify-center">
          <iframe
            className="rounded-lg shadow-lg"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/1ZnDFv1KvB8"
            title="Plant Care Video"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </motion.div>

      {/* Call to Action Section */}
      <motion.div
        className="mt-16 bg-green-800 text-white p-12 rounded-lg shadow-xl text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Space?</h2>
        <p className="text-lg mb-6">
          Start your plant care journey today and enjoy the benefits of a greener, healthier home.
        </p>
        <button className="bg-white text-green-800 px-8 py-3 rounded-lg font-semibold hover:bg-green-100 transition-colors">
          Get Started
        </button>
      </motion.div>
    </div>
  );
};

export default PlantCare;

// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';

// const PlantCare = () => {
//   const [plants, setPlants] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch plant data from the API
//   useEffect(() => {
//     const fetchPlants = async () => {
//       try {
//         const response = await fetch('http://116.75.62.44:8000/plants'); // Replace with your API endpoint
//         if (!response.ok) {
//           throw new Error('Failed to fetch data');
//         }
//         const data = await response.json();
//         setPlants(data);
//         setLoading(false);
//       } catch (error) {
//         setError(error.message);
//         setLoading(false);
//       }
//     };

//     fetchPlants();
//   }, []);

//   if (loading) {
//     return <div className="text-center py-16">Loading...</div>;
//   }

//   if (error) {
//     return <div className="text-center py-16 text-red-500">Error: {error}</div>;
//   }

//   return (
//     <div className="max-w-7xl mx-auto py-16 px-6">
//       {/* Hero Section */}
//       <motion.div
//         className="bg-green-800 text-white p-12 rounded-lg shadow-xl mb-12"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <h1 className="text-4xl font-bold text-center mb-4">Plant Care Tips</h1>
//         <p className="text-lg text-center">
//           Learn how to take care of your plants and help them thrive with the right care and attention.
//         </p>
//       </motion.div>

//       {/* Plant Care Tips Sections */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
//         {plants.map((plant) => (
//           <motion.div
//             key={plant.id}
//             className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.98 }}
//           >
//             <div className="text-4xl text-green-800 mb-4">🌿</div>
//             <h2 className="text-2xl font-semibold text-green-800 mb-2">{plant.name}</h2>
//             <p className="text-gray-600">{plant.description}</p>
//             <div className="mt-4">
//               <h3 className="text-lg font-semibold text-green-800">Care Tips:</h3>
//               <ul className="list-disc list-inside text-gray-600">
//                 <li>Sunlight: {plant.sunlightRequirement}</li>
//                 <li>Moisture: {plant.moistureRequirement}</li>
//                 <li>Soil: {plant.soilType}</li>
//               </ul>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Reviews Section */}
//       <motion.div
//         className="mt-16 bg-green-50 p-8 rounded-lg shadow-lg"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <h2 className="text-3xl font-bold text-green-800 text-center mb-6">Customer Reviews</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {plants.map((plant) =>
//             plant.reviews.map((review, index) => (
//               <div key={index} className="bg-white p-6 rounded-lg shadow-md">
//                 <div className="flex items-center mb-4">
//                   <span className="text-green-800 text-2xl mr-4">👤</span>
//                   <p className="text-gray-600 font-semibold">{review.username}</p>
//                 </div>
//                 <p className="text-gray-600">{review.comment}</p>
//                 <div className="mt-4 flex items-center">
//                   <span className="text-yellow-500">⭐️</span>
//                   <span className="text-gray-600 ml-2">{review.rating}/5</span>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//       </motion.div>

//       {/* Call to Action Section */}
//       <motion.div
//         className="mt-16 bg-green-800 text-white p-12 rounded-lg shadow-xl text-center"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Space?</h2>
//         <p className="text-lg mb-6">
//           Start your plant care journey today and enjoy the benefits of a greener, healthier home.
//         </p>
//         <button className="bg-white text-green-800 px-8 py-3 rounded-lg font-semibold hover:bg-green-100 transition-colors">
//           Get Started
//         </button>
//       </motion.div>
//     </div>
//   );
// };

// export default PlantCare;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { motion } from "framer-motion";

// const PlantCare = () => {
//   const [plants, setPlants] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch plant data using Axios
//   useEffect(() => {
//     const fetchPlants = async () => {
//       try {
//         const response = await axios.get("http://116.75.62.44:8000/plants"); // Replace with your API
//         setPlants(response.data);
//       } catch (error) {
//         setError(error.response ? error.response.data.message : error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPlants();
//   }, []);

//   if (loading) return <div className="text-center py-16 text-lg">🌱 Loading plant details...</div>;
//   if (error) return <div className="text-center py-16 text-red-500 font-semibold">⚠️ Error: {error}</div>;

//   return (
//     <div className="max-w-7xl mx-auto py-16 px-6">
//       {/* Hero Section */}
//       <motion.div
//         className="bg-green-700 text-white p-12 rounded-lg shadow-xl mb-12 text-center"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         <h1 className="text-5xl font-bold mb-4">🌿 Plant Care Guide</h1>
//         <p className="text-lg max-w-2xl mx-auto">
//           Discover the best ways to nurture your plants, ensuring they thrive with proper care and attention.
//         </p>
//       </motion.div>

//       {/* Plant Care Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
//         {plants.map((plant) => (
//           <motion.div
//             key={plant.id}
//             className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2"
//             whileHover={{ scale: 1.05 }}
//           >
//             <img src={plant.primaryImage || "https://via.placeholder.com/150"} alt={plant.name} className="w-full h-48 object-cover rounded-md mb-4" />
//             <h2 className="text-2xl font-semibold text-green-800 mb-2">{plant.name}</h2>
//             <p className="text-gray-600 mb-4">{plant.description}</p>

//             <div className="mt-4">
//               <h3 className="text-lg font-semibold text-green-700">🌞 Sunlight:</h3>
//               <p className="text-gray-600">{plant.sunlightRequirement}</p>

//               <h3 className="text-lg font-semibold text-green-700 mt-2">💧 Watering:</h3>
//               <p className="text-gray-600">{plant.wateringFrequency}</p>

//               <h3 className="text-lg font-semibold text-green-700 mt-2">🌱 Soil Type:</h3>
//               <p className="text-gray-600">{plant.soilType}</p>

//               <h3 className="text-lg font-semibold text-green-700 mt-2">🌡 Temperature:</h3>
//               <p className="text-gray-600">{plant.temperatureRange}</p>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Reviews Section */}
//       <motion.div
//         className="mt-16 bg-green-50 p-10 rounded-lg shadow-lg"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <h2 className="text-3xl font-bold text-green-800 text-center mb-6">💬 Customer Reviews</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {plants.flatMap((plant) =>
//             plant.reviews.map((review, index) => (
//               <div key={index} className="bg-white p-6 rounded-lg shadow-md">
//                 <div className="flex items-center mb-4">
//                   <img src="https://via.placeholder.com/50" alt="User avatar" className="w-10 h-10 rounded-full mr-4" />
//                   <p className="text-gray-600 font-semibold">{review.username}</p>
//                 </div>
//                 <p className="text-gray-600 italic">"{review.comment}"</p>
//                 <div className="mt-4 flex items-center">
//                   <span className="text-yellow-500 text-lg">⭐️ {review.rating}/5</span>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//       </motion.div>

//       {/* Call to Action Section */}
//       <motion.div
//         className="mt-16 bg-green-800 text-white p-12 rounded-lg shadow-xl text-center"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <h2 className="text-4xl font-bold mb-4">Transform Your Space with Greenery 🌿</h2>
//         <p className="text-lg max-w-2xl mx-auto mb-6">
//           Start your journey to a greener, fresher home. Find the perfect plants and learn how to care for them!
//         </p>
//         <button className="bg-white text-green-800 px-8 py-3 rounded-lg font-semibold hover:bg-green-100 transition-colors">
//           Explore More
//         </button>
//       </motion.div>
//     </div>
//   );
// };

// export default PlantCare;
