import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import GadgetsCards from "../components/GadgetsCards/GadgetsCards";
import ProductDetails from "../pages/ProductDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../categories.json"),
        children: [
          {
            path: "/",
            element: <GadgetsCards></GadgetsCards>,
            loader: () => fetch("../gadgets.json"),
          },
          {
            path: "/category/:category",
            element: <GadgetsCards></GadgetsCards>,
            loader: () => fetch("../gadgets.json"),
          },
        ],
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/details/:id",
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch("../gadgets.json"),
      },
    ],
  },
]);

export default routes;
