import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <div className="p-5">
        <div className="bg-[#9538E2] text-white pb-36 lg:px-20">
          <Navbar></Navbar>
          <Banner></Banner>
        </div>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
