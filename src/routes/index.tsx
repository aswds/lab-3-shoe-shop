import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "../index.css";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/Home/AddProduct";

export const AppRoutes = () => {
  const routes = [
    { path: "/", element: <Home /> },
    { path: "/addProduct", element: <AddProduct /> },
  ];

  return <RouterProvider router={createBrowserRouter(routes)} />;
};
