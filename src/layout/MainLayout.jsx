import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <div className="p-5 bg-[#09080F0D]">
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
