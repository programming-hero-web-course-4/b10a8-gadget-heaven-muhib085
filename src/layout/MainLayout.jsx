import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <div>
      <div className="bg-[#09080F0D]">
        <Toaster />
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
      <div className="bg-white">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
