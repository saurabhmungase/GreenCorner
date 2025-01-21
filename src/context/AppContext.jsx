import axios from 'axios'
import React, { Children, createContext, useEffect, useState } from 'react'

export let context = createContext()
const AppContext = ({children}) => {
    let [Allplants , setplants] = useState([])
    useEffect(()=>{
        axios.get("http://116.75.62.44:8000/plants").then((res)=>{
            setplants(res.data)
        })
    },[])
    
    
  return (
    <context.Provider value={{Allplants}}>{children}</context.Provider>

  )
}

export default AppContext