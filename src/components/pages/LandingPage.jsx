import React, { useContext } from 'react'
import { context } from '../../context/AppContext';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const LandingPage = () => {
     let data = useContext(context)
     console.log(data);
     
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
     
    </div>
  )
}

export default LandingPage