import React from "react";
import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../components/pages/LandingPage";
import Home from "../components/pages/Home";
import LoginPage from "../components/pages/LoginPage";
import SingUpPage from "../components/pages/SingUpPage";
import Plants from "../components/pages/Plants";
import Accessories from "../components/pages/PlantCare";
import Cart from "../components/pages/Cart";
import PageNotFound from "../components/pages/PageNotFound";
import ProductDetails from "../components/utils/ProductDetails";
import Wishlist from "../components/pages/Wishlist";
import Admin from "../components/pages/adminpanel/Admin";
import About from "../components/pages/About";
import PlantCare from "../components/pages/PlantCare";
import CheckoutForm from "../components/pages/Shipping";
import Users from "../components/pages/adminpanel/Users";
import AddPlant from "../components/pages/adminpanel/products/AddPlant";
import Dashboard from "../components/pages/adminpanel/Dashboard";
import Product from "../components/pages/adminpanel/products/Product";
import AllPlants from "../components/pages/adminpanel/products/AllPlants";
import PlantOrder from "../components/pages/adminpanel/PlantOrder";
// import Hero from "../components/Hero";  // Import Hero component here

export let router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    children: [
      {
        path: "/",
        element: <Home />,
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
        path: "about",
        element: <About />,
      },
      {
        path: "wishlist",
        element: <Wishlist />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "/details",
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "/plantcare",
        element: <PlantCare></PlantCare>,
      },
      {
        path: "/shipping",
        element: <CheckoutForm></CheckoutForm>,
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
  {
    path: "*",
    element: <PageNotFound></PageNotFound>,
  },
  {
    path: "/admin",
    element: <Admin></Admin>,
    children: [
      {
        path: "/admin",
        element: <Dashboard />,
      },
      {
        path: "admin/plantorder",
        element: <PlantOrder />,
      },

      {
        path: "admin/userdata",
        element: <Users />,
      },
      {
        path: "admin/product",
        element: <Product />,
        children: [
          {
            path: "admin/product",
            element: <AllPlants />,
          },
          {
            path: "allplants",
            element: <AllPlants />,
          },
          {
            path: "addplant",
            element: <AddPlant />,
          },
          
        ],
      },
      {
        path: "admin/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);
