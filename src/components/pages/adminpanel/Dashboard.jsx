// import React, { useEffect, useState } from "react";

// const Dashboard = () => {
//   const [userdata, setUserData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [plants , setPlants] = useState([])

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = async () => {
//     try {
//       const response = await axios.get("http://116.75.62.44:8000/auth");
//       setUserData(response.data);
//       setError(null);
//     } catch (error) {
//       console.error("Error fetching users:", error);
//       setError("Failed to fetch users. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchPlant = async () =>{
//     try{
//       const response = await axios.get("http://116.75.62.44:8000/plants").then((res)=>{

//         setPlants(res.data)
//       })
//     };
//   };


//   if (loading) {
//     return <div className="min-h-screen bg-gray-100 p-6 flex justify-center items-center">Loading...</div>;
//   }

//   if (error) {
//     return <div className="min-h-screen bg-gray-100 p-6 flex justify-center items-center text-red-500">{error}</div>;
//   }
//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <div className="bg-white p-6 rounded-lg shadow">
//           <h3 className="text-lg font-semibold">Total Users</h3>
//           <p className="text-3xl font-bold">{userdata.length}</p>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow">
//           <h3 className="text-lg font-semibold">Total Products</h3>
//           <p className="text-3xl font-bold">{plants.length}</p>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow">
//           <h3 className="text-lg font-semibold">Revenue</h3>
//           <p className="text-3xl font-bold">$12,345</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [userdata, setUserData] = useState([]);
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [usersResponse, plantsResponse] = await Promise.all([
          axios.get("http://116.75.62.44:8000/auth"),
          axios.get("http://116.75.62.44:8000/plants")
        ]);

        setUserData(usersResponse.data);
        setPlants(plantsResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="min-h-screen flex justify-center items-center text-gray-700">Loading...</div>;
  }

  if (error) {
    return <div className="min-h-screen flex justify-center items-center text-red-500">{error}</div>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <DashboardCard title="Total Users" value={userdata.length} />
        <DashboardCard title="Total Products" value={plants.length} />
        <DashboardCard title="Revenue" value="$12,345" />
      </div>
    </div>
  );
};

const DashboardCard = ({ title, value }) => (
  <div className="bg-white p-6 rounded-lg shadow">
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-3xl font-bold">{value}</p>
  </div>
);

export default Dashboard;
