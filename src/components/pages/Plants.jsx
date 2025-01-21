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


import React, { useContext } from "react";
import { context } from "../../context/AppContext";
import { MdOutlineCurrencyRupee } from "react-icons/md";

const Plants = () => {
  const data = useContext(context);

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-6">
      {/* Filter Section */}
      <section className="lg:w-1/4 w-full bg-gray-100 p-4 rounded-md shadow-md">
        <h2 className="text-xl font-bold mb-4">Filter</h2>
        <div>
          <h3 className="font-semibold mb-2">Categories</h3>
          <ul className="space-y-2">
            <li>
              <input
                type="checkbox"
                id="gardening"
                className="mr-2"
                checked
                readOnly
              />
              <label htmlFor="gardening">Gardening</label>
            </li>
            <li>
              <input type="checkbox" id="plants" className="mr-2" />
              <label htmlFor="plants">Plants</label>
            </li>
            <li>
              <input type="checkbox" id="seeds" className="mr-2" />
              <label htmlFor="seeds">Seeds</label>
            </li>
            <li>
              <input type="checkbox" id="bulbs" className="mr-2" />
              <label htmlFor="bulbs">Bulbs</label>
            </li>
            <li>
              <input type="checkbox" id="planters" className="mr-2" />
              <label htmlFor="planters">Planters</label>
            </li>
            <li>
              <input type="checkbox" id="others" className="mr-2" />
              <label htmlFor="others">Others</label>
            </li>
          </ul>
        </div>
      </section>

      {/* Product Section */}
      <section className="flex-1">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Sort:</h2>
          <div className="flex gap-2">
            {["Set Price", "Popular", "Most New", "Price"].map((sort, index) => (
              <button
                key={index}
                className="px-4 py-2 border rounded-md bg-gray-100 hover:bg-gray-200"
              >
                {sort}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {data.Allplants.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-md shadow-md p-4 flex flex-col items-center"
            >
              <img
                src={item.primaryImage}
                alt={item.name}
                className="h-40 w-auto mb-4"
              />
              <h1 className="text-lg font-bold text-center">{item.name}</h1>
              <div className="text-green-700 font-bold text-lg flex items-center gap-1">
                <MdOutlineCurrencyRupee />
                {item.price}
              </div>
              {item.discount && (
                <p className="text-gray-500 text-sm line-through">
                  <MdOutlineCurrencyRupee />
                  {item.originalPrice}
                </p>
              )}
              <button className="mt-4 bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800">
                Add to Basket
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Plants;
