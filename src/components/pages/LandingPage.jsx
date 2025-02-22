import React, { useContext, useState } from 'react'
import { context } from '../../context/AppContext';

import { Outlet } from 'react-router-dom';
import Navbar from '../utils/Navbar';
import Footer from '../utils/Footer';
import { SearchItems } from './SearchItems';

const LandingPage = () => {
     let data = useContext(context)
     let [search, setSearch] = useState('')
     const [searchData, setSearchData] = useState([])
    

     let searchHandler = (value) => {
        setSearch(value)
        setSearchData(value)
     }
     
  return (
    <div>
      <Navbar searchHandler={searchHandler}></Navbar>
      {search ? <div > <SearchItems searchData ={searchData}/></div> :<Outlet></Outlet>}
      <Footer></Footer>
     
    </div>
  )
}

export default LandingPage
