import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

// import Dashboard from "./components/Dashboard";
// import Users from "./components/Users";
// import Products from "./components/Products";
const Admin = () => {
  return (
  
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Header />
        
        </div>
      </div>
    
  );
}

export default Admin