

import React from "react";
import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../components/pages/LandingPage";
import Home from "../components/pages/Home";
import LoginPage from "../components/pages/LoginPage";
import SingUpPage from "../components/pages/SingUpPage";
import Plants from "../components/pages/Plants";
import Accessories from "../components/pages/Accessories";
import Seeds from "../components/pages/Seeds";
import Favorites from "../components/pages/Favorites";
import Cart from "../components/pages/Cart";
// import Hero from "../components/Hero";  // Import Hero component here

export let router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />, 
    children: [
      {
        path: "/",
        element: <Home /> ,
      },
      {
        path: "home",
        element: <Home />,  
      },
      {
        path: "plants",
        element: <Plants />,
      },
      {
        path: "accessories",
        element: <Accessories />,
      },
      {
        path: "seeds",
        element: <Seeds />,
      },
      {
        path: "favorites",
        element: <Favorites />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SingUpPage />,
  },
]);
