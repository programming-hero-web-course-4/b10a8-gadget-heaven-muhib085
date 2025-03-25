import React from "react";
import Banner from "../components/Banner/Banner";
import banner from "../assets/banner.jpg";
import Categories from "../components/Categories/Categories";
import { Outlet, useLoaderData } from "react-router-dom";

const Home = () => {
  const categories = useLoaderData();

  return (
    <div>
      <div className="bg-[#9538E2] lg:mx-12 text-white lg:pb-36 pb-12 lg:px-20 rounded-3xl outline outline-[#9538E2] outline-offset-4">
        <Banner></Banner>
      </div>
      <div className="lg:w-[1062px] w-3/4 lg:h-[563px] relative lg:-top-52 lg:left-52 -top-28 left-12">
        <img
          className="rounded-2xl outline-2 outline-offset-[15px] outline-white "
          src={banner}
          alt=""
        />
      </div>
      <h1 className="lg:my-12 mb-14 font-bold text-4xl flex flex-col justify-center items-center text-center">
        Explore Cutting-Edge Gadgets
      </h1>

      <div className="grid lg:grid-cols-5 gap-5 mx-12 py-6">
        <div className="bg-white p-6 rounded-xl lg:h-[410px] lg:w-48">
          <Categories categories={categories}></Categories>
        </div>
        <div className="lg:col-span-4">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Home;
