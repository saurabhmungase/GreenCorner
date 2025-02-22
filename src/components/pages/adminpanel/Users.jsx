// import axios from "axios";
// import { div } from "framer-motion/client";
// import React, { useEffect } from "react";

// const Users = () => {

//   let [userdata, setUserData] = useState([]);

//   useEffect(() => {
    
//       axios.get('http://116.75.62.44:8000/auth').then((response) => {
//         setUserData(response.data);
//       })
//   }, []);

//   const handlDelete = (userId) => {
//     axios.delete(`http://116.75.62.44:8000/deleteuser/${userId}`).then(() => {
//       axios.get('http://116.75.62.44:8000/auth').then((response) => {
//         setUserData(response.data);
//     })
//   };


//   return (
// <div>
//   <div>
//     {userdata.map((user) => (
//       return (
//         <div>
//           <h1>{user.username}</h1>
//           <h1>{user.email}</h1>
//           <h1>{user.contact}</h1>
//         </div>
//       );  
//       <button onClick={()={handlDelete(user.userId)}}>delete</button>
//     )}
//   </div>
// </div>
//   );
// };

// export default Users;

// import axios from "axios";
// import React, { useEffect, useState } from "react";

// const Users = () => {
//   const [userdata, setUserData] = useState([]);

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = async () => {
//     try {
//       const response = await axios.get("http://116.75.62.44:8000/auth");
//       setUserData(response.data);
//     } catch (error) {
//       console.error("Error fetching users:", error);
//     }
//   };

//   const handleDelete = async (userId) => {
//     try {
//       await axios.delete(`http://116.75.62.44:8000/deleteuser/${userId}`);
//       fetchUsers(); // Refresh user list after deletion
//     } catch (error) {
//       console.error("Error deleting user:", error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
//       <h1 className="text-3xl font-bold text-gray-800 mb-6">User List</h1>
//       {userdata.length > 0 ? (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
//           {userdata.map((user) => (
//             <div key={user.userId} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
//               <h2 className="text-xl font-semibold text-gray-700">{user.username}</h2>
//               <p className="text-gray-600">{user.email}</p>
//               <p className="text-gray-500">📞 {user.contact}</p>
//               <button
//                 onClick={() => handleDelete(user.userId)}
//                 className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all"
//               >
//                 Delete
//               </button>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p className="text-gray-500 text-lg">No users found</p>
//       )}
//     </div>
//   );
// };

// export default Users;


import axios from "axios";
import React, { useEffect, useState } from "react";

const Users = () => {
  const [userdata, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://116.75.62.44:8000/auth");
      setUserData(response.data);
      setError(null);
    } catch (error) {
      console.error("Error fetching users:", error);
      setError("Failed to fetch users. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`http://116.75.62.44:8000/deleteuser/${userId}`);
      fetchUsers(); // Refresh user list after deletion
    } catch (error) {
      console.error("Error deleting user:", error);
      setError("Failed to delete user. Please try again.");
    }
  };

  if (loading) {
    return <div className="min-h-screen bg-gray-100 p-6 flex justify-center items-center">Loading...</div>;
  }

  if (error) {
    return <div className="min-h-screen bg-gray-100 p-6 flex justify-center items-center text-red-500">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">User List</h1>
      {userdata.length > 0 ? (
        <div className="w-full max-w-5xl overflow-x-auto">
          <table className="min-w-full bg-white rounded-xl shadow-lg">
            <thead>
              <tr className="border-b">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Username</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {userdata.map((user) => (
                <tr key={user.userId} className="hover:bg-gray-50 transition-all">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.username}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">📞 {user.contact}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button
                      onClick={() => handleDelete(user.userId)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-500 text-lg">No users found</p>
      )}
    </div>
  );
};

export default Users;