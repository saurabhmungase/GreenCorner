// import React from 'react'

// const Footer = () => {
//   return (
//     <div className='w-full bg-[#21543D] '>
//         <main>
//        <section>
//         <h1>GreenCorner</h1>
//         <p>GreenCorner is a platform to buy and sell plants, seeds and accessories.</p>
//        </section>
//        <section>
//         <div>
//             <h1>Company</h1>
//         </div>
//         <div>
//             <p>Site Map</p>
//         </div>
//         <div>
//             <p>Contact</p>
//         </div>
//         <div>social</div>
//        </section>
//        </main>
//        <hr />
//        <div>
//         <div>
//             <select name="" id="">
//                 <option value="">English</option>
//             </select>
//         </div>
        
//         <div>
//             <a href=""><img src="https://img.icons8.com/ios/50/000000/facebook-new.png" alt="" /></a>
//             <a href=""><img src="https://img.icons8.com/ios/50/000000/instagram-new--v1.png" alt="" /></a>
//             <a href=""><img src="https://img.icons8.com/ios/50/000000/twitter--v1.png" alt="" /></a>
//         </div>
//        </div>
//     </div>
//   )
// }

// export default Footer


// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="w-full bg-[#21543D] text-white py-8">
//       <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
//         {/* Section 1: About */}
//         <section>
//           <h1 className="text-2xl font-bold mb-4">GreenCorner</h1>
//           <p className="text-gray-300">
//             GreenCorner is a platform to buy and sell plants, seeds, and accessories.
//           </p>
//         </section>

//         {/* Section 2: Links */}
//         <section>
//           <h2 className="text-lg font-semibold mb-4">Company</h2>
//           <ul className="space-y-2 text-gray-300">
//             <li>
//               <a href="#" className="hover:text-white">
//                 Site Map
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-white">
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </section>

//         {/* Section 3: Social */}
//         <section>
//           <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
//           <div className="flex space-x-4">
//             <a href="#" className="hover:opacity-80">
//               <img
//                 src="https://img.icons8.com/ios/50/ffffff/facebook-new.png"
//                 alt="Facebook"
//                 className="w-6 h-6"
//               />
//             </a>
//             <a href="#" className="hover:opacity-80">
//               <img
//                 src="https://img.icons8.com/ios/50/ffffff/instagram-new--v1.png"
//                 alt="Instagram"
//                 className="w-6 h-6"
//               />
//             </a>
//             <a href="#" className="hover:opacity-80">
//               <img
//                 src="https://img.icons8.com/ios/50/ffffff/twitter--v1.png"
//                 alt="Twitter"
//                 className="w-6 h-6"
//               />
//             </a>
//           </div>
//         </section>
//       </div>

//       <hr className="border-gray-600 my-8" />

//       {/* Footer Bottom */}
//       <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center text-gray-300 text-sm">
//         <div>
//           <select
//             name="language"
//             id="language"
//             className="bg-[#21543D] border border-gray-600 rounded px-4 py-2 text-white focus:outline-none"
//           >
//             <option value="en">English</option>
//             <option value="es">Spanish</option>
//             <option value="fr">French</option>
//           </select>
//         </div>

//         <p className="mt-4 md:mt-0">&copy; {new Date().getFullYear()} GreenCorner. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



// import React from "react";
// import { BiSolidLeaf } from "react-icons/bi";


// const Footer = () => {
//   return (
//     <footer className="w-full bg-[#21543D] text-white py-8">
//       <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
//         {/* Section 1: About */}
//         <section>
//           <h1 className="text-2xl font-bold mb-4 flex">GreenCorner<BiSolidLeaf /></h1>
//           <p className="text-gray-300">
//             GreenCorner is a platform to buy and sell plants, seeds, and accessories.
//           </p>
//         </section>

//         {/* Section 2: Links */}
//         <section>
//           <h2 className="text-lg font-semibold mb-4">Company</h2>
//           <ul className="space-y-2 text-gray-300">
//             <li>
//              <a href="">Home</a>
//             </li>
//              <a href="">Collection</a>
//             <li>
//              <a href="">About us</a>
             
//             </li>
//           </ul>
//         </section>

//         <section>
        
//         </section>
//         <a href="#" className="hover:text-white transition-colors"> Site Map  </a>
//         <ul>
//           <li>Plant care </li>
//           <li>New Arrival</li>
//           <li>Commmunity</li>
//         </ul>
//         <section>
//         <a href="#" className="hover:text-white transition-colors">
//                 Contact
//               </a>
//               <ul>
//                 <li>+91 987656789</li>
//                 <li>greencorner@gmail.com</li>
//                 <li>makegreen@gmail.com</li>
//               </ul>
//         </section>
//       </div>

//       <hr className="border-gray-600 my-8" />

//       {/* Footer Bottom */}
//       <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center text-gray-300 text-sm">
//         <div>
//           <select
//             name="language"
//             id="language"
//             className="bg-green-700 border border-gray-600 rounded px-4 py-2 text-white focus:outline-none hover:bg-green-600 transition-colors"
//           >
//             <option value="en">English</option>
//             <option value="es">Spanish</option>
//             <option value="fr">French</option>
//           </select>
//         </div>

//         <p className="mt-4 md:mt-0">&copy; {new Date().getFullYear()} GreenCorner. All rights reserved.</p>
//       </div>
//       <div className="flex space-x-4">
//             <a href="#" className="hover:opacity-80 transition-opacity">
//               <img
//                 src="src\assets\social.png"
//                 alt="Instagram"
//                 className="w-6 h-6"
//               />
//             </a>
//             <a href="#" className="hover:opacity-80 transition-opacity">
//               <img
//                 src="src\assets\facebook.png"
//                 alt="Facebook"
//                 className="w-6 h-6"
//               />
//             </a>
//             <a href="#" className="hover:opacity-80 transition-opacity">
//               <img
//                 src="src\assets\social (1).png"
//                 alt="whatsapp"
//                 className="w-6 h-6"
//               />
//             </a>
//             <a href="#" className="hover:opacity-80 transition-opacity">
//               <img
//                 src="src\assets\youtube.png"
//                 alt="whatsapp"
//                 className="w-6 h-6"
//               />
//             </a>
//           </div>
//     </footer>
//   );
// };

// export default Footer;



// import React from "react";
// import { BiSolidLeaf } from "react-icons/bi";

// const Footer = () => {
//   return (
//     <footer className="w-full bg-[#21543D] text-white py-12">
//       <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
//         {/* Section 1: About */}
//         <section>
//           <h1 className="text-2xl font-bold flex items-center mb-4">
//             GreenCorner
//             <BiSolidLeaf className="ml-2 text-yellow-300" />
//           </h1>
//           <p className="text-gray-300 leading-relaxed">
//             GreenCorner is a platform to buy and sell plants, seeds, and accessories.
//           </p>
//         </section>

//         {/* Section 2: Links */}
//         <section>
//           <h2 className="text-lg font-semibold mb-4">Company</h2>
//           <ul className="space-y-2">
//             <li>
//               <a href="#" className="text-gray-300 hover:text-white transition-colors">
//                 Home
//               </a>
//             </li>
//             <li>
//               <a href="#" className="text-gray-300 hover:text-white transition-colors">
//                 Collection
//               </a>
//             </li>
//             <li>
//               <a href="#" className="text-gray-300 hover:text-white transition-colors">
//                 About Us
//               </a>
//             </li>
//           </ul>
//         </section>

//         {/* Section 3: Resources */}
//         <section>
//           <h2 className="text-lg font-semibold mb-4">Resources</h2>
//           <ul className="space-y-2">
//             <li>
//               <a href="#" className="text-gray-300 hover:text-white transition-colors">
//                 Plant Care
//               </a>
//             </li>
//             <li>
//               <a href="#" className="text-gray-300 hover:text-white transition-colors">
//                 New Arrivals
//               </a>
//             </li>
//             <li>
//               <a href="#" className="text-gray-300 hover:text-white transition-colors">
//                 Community
//               </a>
//             </li>
//             <li>
//               <a href="#" className="text-gray-300 hover:text-white transition-colors">
//                 Site Map
//               </a>
//             </li>
//           </ul>
//         </section>

//         {/* Section 4: Contact */}
//         <section>
//           <h2 className="text-lg font-semibold mb-4">Contact</h2>
//           <ul className="space-y-2">
//             <li className="text-gray-300">+91 987656789</li>
//             <li className="text-gray-300">greencorner@gmail.com</li>
//             <li className="text-gray-300">makegreen@gmail.com</li>
//           </ul>
//         </section>
//       </div>

//       {/* Divider */}
//       <hr className="border-gray-600 my-8" />

//       {/* Footer Bottom */}
//       <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-gray-300 text-sm">
//         {/* Language Selector */}
//         <div>
//           <select
//             name="language"
//             id="language"
//             className="bg-green-700 border border-gray-600 rounded px-4 py-2 text-white focus:outline-none hover:bg-green-600 transition-colors"
//           >
//             <option value="en">English</option>
//             <option value="es">Spanish</option>
//             <option value="fr">French</option>
//           </select>
//         </div>

//         {/* Copyright */}
//         <p>&copy; {new Date().getFullYear()} GreenCorner. All rights reserved.</p>

//         {/* Social Media Icons */}
//         <div className="flex space-x-4">
//           <a href="#" className="hover:opacity-80 transition-opacity">
//             <img
//               src="src/assets/social.png"
//               alt="Instagram"
//               className="w-6 h-6"
//             />
//           </a>
//           <a href="#" className="hover:opacity-80 transition-opacity">
//             <img
//               src="src/assets/facebook.png"
//               alt="Facebook"
//               className="w-6 h-6"
//             />
//           </a>
//           <a href="#" className="hover:opacity-80 transition-opacity">
//             <img
//               src="src/assets/social (1).png"
//               alt="WhatsApp"
//               className="w-6 h-6"
//             />
//           </a>
//           <a href="#" className="hover:opacity-80 transition-opacity">
//             <img
//               src="src/assets/youtube.png"
//               alt="YouTube"
//               className="w-6 h-6"
//             />
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import React from "react";
import { BiSolidLeaf } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="bg-[#0D2A26] text-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Section 1: About */}
        <section className="md:col-span-2">
          <div className="flex items-center mb-4">
            <h1 className="text-2xl font-bold">GreenCorner</h1>
            <BiSolidLeaf className="text-yellow-300 text-3xl mr-2" />
          </div>
          <p className="text-gray-400 leading-relaxed">
            The Planet Kingdom encompassed all living things that were not animals, and included algae.
          </p>
        </section>

        {/* Section 2: Company */}
        <section>
          <h2 className="text-lg font-semibold mb-4">Company</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Collection
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                About Us
              </a>
            </li>
          </ul>
        </section>

        {/* Section 3: Site Map */}
        <section>
          <h2 className="text-lg font-semibold mb-4">Site Map</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Plant Care
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                New Arrival
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Community
              </a>
            </li>
          </ul>
        </section>

        {/* Section 4: Contact */}
        <section>
          <h2 className="text-lg font-semibold mb-4">Contact</h2>
          <ul className="space-y-2">
            <li className="text-gray-400">+91 987654321</li>
            <li className="text-gray-400">info@email.com</li>
            <li className="text-gray-400">data@email.com</li>
          </ul>
        </section>
      </div>

      {/* Divider */}
      <hr className="border-gray-600 my-8" />

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
        {/* Language Selector */}
        <div className="mb-4 md:mb-0">
          <select
            name="language"
            id="language"
            className="bg-transparent border border-gray-600 rounded px-4 py-2 focus:outline-none hover:bg-gray-700 transition-colors text-white"
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
          </select>
        </div>

        {/* Copyright */}
        <p className="mb-4 md:mb-0 text-center">
          &copy; 2024 Internship@Greencorner. All rights reserved.
        </p>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="#" className="hover:opacity-80 transition-opacity">
            <img
              src="src/assets/facebook.png"
              alt="Facebook"
              className="w-6 h-6"
            />
          </a>
          <a href="#" className="hover:opacity-80 transition-opacity">
            <img
              src="src\assets\social.png"
              alt="Twitter"
              className="w-6 h-6"
            />
          </a>
          <a href="#" className="hover:opacity-80 transition-opacity">
            <img
              src="src\assets\social (1).png"
              alt="LinkedIn"
              className="w-6 h-6"
            />
          </a>
          <a href="#" className="hover:opacity-80 transition-opacity">
            <img
              src="src/assets/youtube.png"
              alt="YouTube"
              className="w-6 h-6"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
