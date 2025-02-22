// import { div } from 'framer-motion/client'
// import React from 'react'
// import { Link } from 'react-router-dom'

// const Product = () => {
//   return (
//     <div>
//         <nav>
//             <Link to='allplants'>All Plants</Link>
//             <Link to='addplant'>Add Plants</Link>
//         </nav>
//         <div>
//             <Outlet></Outlet>
//         </div>
//     </div>
//   )
// }

// export default Product

import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Product = () => {
  return (
    <div>
      <nav className="flex gap-4 p-4 bg-gray-100">
        <Link to="allplants" className="text-blue-600 hover:underline">All Plants</Link>
        <Link to="addplant" className="text-blue-600 hover:underline">Add Plants</Link>
      </nav>
      <div className="p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Product;
