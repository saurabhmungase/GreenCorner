// import React from 'react'

// const DeatailsPage = () => {
//   return (
//     <div>
//         <div>
//             <div className='flex'>
//                 <section className='w-[50vw] h-[70vh] flex justify-center items-center '>
//                     <img src="src\assets\indoor-plants-studio.png" alt="" className=' h-[90%]'/>
//                 </section>
//                 <section className='bg-gray-100 w-[50vw] h-[70vh] flex flex-col justify-center items-center'>
//                     <div>
//                         <h1>plant name</h1>
//                         <h3>ratings</h3>
//                     </div>
//                     <div>
//                         <h4>Select Size</h4>
//                         <div>
//                             <p>small</p>
//                             <p>Medium</p>
//                             <p>Large</p>
//                         </div>
//                         <hr />
//                         </div>
//                     <div>
//                     <h2>Price</h2>
//                     <p>Desciption</p>

//                     </div>
//                     <div></div>
//                 </section>
//             </div>
//             <div>
//                 <nav className='flex w-[90%] bg-gray-200'>
//                 <p>plant care</p>
//                 <p>Plant Requirment</p>
//                 <p>Other Deatils</p>
//                 </nav>
//                 <div>
//                     all datails
//                 </div>
//             </div>
//             <div>
//                 Customer Review
//             </div>
//         </div>
//     </div>
//   )
// }

// export default DeatailsPage

import React from "react";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { useLocation } from "react-router-dom";

const DetailsPage = () => {
  let location = useLocation();
  console.log(location.state);
  return (
    <div className="min-h-screen flex justify-center ">

      
    <div className="min-h-screen w-[95%] ">
      {/* Product Section */}
      <div className="flex flex-wrap">
        {/* Image Section */}
        <section className="w-full md:w-1/2 h-[90vh] flex justify-center items-center bg-white">
          <img
            src="src/assets/indoor-plants-studio.png"
            alt="Indoor Plant"
            className="h-[90%] object-contain"
          />
        </section>

        {/* Details Section */}
        <section className="w-full md:w-1/2 h-[90vh] flex flex-col text-green-900 p-8 justify-evenly bg-white">
          <div>
            <h1 className="text-3xl font-bold ">Plant Name</h1>
            <h3 className="text-lg text-yellow-500"> ★★★★☆</h3>
          </div>

          <div className="">
            <h4 className="text-lg font-semibold mb-2">Select Size</h4>
            <div className="flex gap-4">
              <button className="px-4 py-2 border rounded-lg hover:bg-gray-200">
                Small
              </button>
              <button className="px-4 py-2 border rounded-lg hover:bg-gray-200">
                Medium
              </button>
              <button className="px-4 py-2 border rounded-lg hover:bg-gray-200">
                Large
              </button>
            </div>
            <hr className="mt-8 text-black" />
          </div>

          <div>
            <h2 className="text-2xl font-bold flex mb-2">
            
              <MdOutlineCurrencyRupee />
              50.00
            </h2>
            <p className="text-gray-700">
              This plant is perfect for indoor decoration. It adds a touch of
              green and helps improve air quality.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex mb-3">
              <button className="p-2 rounded-l-3xl w-20  border-b bg-gray-100 hover:bg-gray-200">-</button>
              <div className="w-24 text-center text-2xl border items-center">{0}</div>
              <button className="p-2 rounded-r-3xl w-20 border-b bg-gray-100 hover:bg-gray-200">+</button>
            </div>
            <div className="flex gap-2">
              <button className=" p-4 w-48 bg-gray-100 border text-green-900 rounded-l-3xl hover:bg-gray-200">
                Add to Cart
              </button>
              <button className=" p-4 w-48 bg-gray-100  border   text-green-900 rounded-r-3xl  hover:bg-gray-200">
                Buy Now
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Tabs Section */}
      <div className="w-full text-green-800 border-b py-4">
        <nav className="flex justify-evenly gap-8 text-gray-700">
          <button className="px-4 py-2 border-b-2 border-transparent hover:border-gray-500">
            Plant Care
          </button>
          <button className="px-4 py-2 border-b-2 border-transparent hover:border-gray-500">
            Plant Requirements
          </button>
          <button className="px-4 py-2 border-b-2 border-transparent hover:border-gray-500">
            Other Details
          </button>
        </nav>
      </div>

      {/* Details Content */}
      <div className="w-full py-8 px-4 text-center">
        <p className="text-gray-600">
          Here are all the details about the plant, its care, and requirements.
        </p>
      </div>

      {/* Customer Reviews Section */}
      <div className="w-full bg-white py-8 px-4">
        <h3 className="text-2xl font-bold mb-4">Customer Reviews</h3>
        <p className="text-gray-600">
          No reviews yet. Be the first to leave a review!
        </p>
      </div>
    </div>
    </div>
  );
};

export default DetailsPage;
