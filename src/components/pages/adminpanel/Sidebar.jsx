// import React from "react";
// import { Link } from "react-router-dom";

// const Sidebar = () => {
//   return (
//     <div className="bg-green-800 text-white w-64 min-h-screen p-4">
//       <h1 className="text-2xl font-bold mb-6">GreenCorner Admin</h1>
//       <ul>
//         <li className="mb-3">
//           <Link to="admin/dashboard" className="hover:text-green-300">Dashboard</Link>
//         </li>
//         <li className="mb-3">
//           <Link to="admin/userdata" className="hover:text-green-300">Users</Link>
//         </li>
//         <li className="mb-3">
//           <Link to="admin/product" className="hover:text-green-300">Products</Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;

import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-green-800 text-white w-64 min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-6">GreenCorner Admin</h1>
      <ul>
        <li className="mb-3">
          <Link to="admin/dashboard" className="hover:text-green-300">Dashboard</Link>
        </li>
        <li className="mb-3">
          <Link to="admin/userdata" className="hover:text-green-300">Users</Link>
        </li>
        <li className="mb-3">
          <Link to="admin/product" className="hover:text-green-300">Products</Link>
        </li>
        <li className="mb-3">
          <Link to="admin/plantorder" className="hover:text-green-300">Plants Orders</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
