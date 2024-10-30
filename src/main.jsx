import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider, } from "react-router-dom";
import "./index.css";
import Product from "./pages/Product";
import Cancel from "./pages/Cancel";
import Cart from "./pages/Cart";
import Category from "./pages/Category";
import Favorite from "./pages/Favorite";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Success from "./pages/Success";
import Orders from "./pages/Orders";
import Blog from "./pages/Blog";
import App from "./App";
import Layout from "./ui/Layout";

const RouterLayout = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}

const router = createBrowserRouter([{
  path: "/", 
  element: <RouterLayout />,
  children:[
    {
      path: "/", 
      element: <App />,   
    },
    {
      path: "/product", 
      element: <Product />,   
    },
    {
      path: "/product/:id", 
      element: <Product />,   
    },
    {
      path: "/cancel", 
      element: <Cancel />,   
    },
    {
      path: "/cart", 
      element: <Cart />,   
    },
    {
      path: "/category", 
      element: <Category />,   
    },
    {
      path: "/category/:id", 
      element: <Category />,   
    },
    {
      path: "/favorite", 
      element: <Favorite />,   
    },
    {
      path: "*", 
      element: <NotFound />,   
    },
    {
      path: "/profile", 
      element: <Profile />,   
    },
    {
      path: "/success", 
      element: <Success />,   
    },
    {
      path: "/orders", 
      element: <Orders />,   
    },
    {
      path: "/blog", 
      element: <Blog />,   
    },
  ],
},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);