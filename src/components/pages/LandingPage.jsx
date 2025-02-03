import React, { useContext } from 'react'
import { context } from '../../context/AppContext';

import { Outlet } from 'react-router-dom';
import Navbar from '../utils/Navbar';
import Footer from '../utils/Footer';

const LandingPage = () => {
     let data = useContext(context)
     
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
     
    </div>
  )
}

export default LandingPage