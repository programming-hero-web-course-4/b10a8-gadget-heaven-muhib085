import React from "react";
import Banner from "../components/Banner/Banner";
import banner from "../assets/banner.jpg";
import Categories from "../components/Categories/Categories";
import { Outlet, useLoaderData } from "react-router-dom";

const Home = () => {
  const categories = useLoaderData();

  return (
    <div>
      <div className="bg-[#9538E2] text-white pb-36 lg:px-20 rounded-3xl outline outline-[#9538E2] outline-offset-4">
        <Banner></Banner>
      </div>
      <div className="w-[1062px] h-[563px] relative -top-52 left-52">
        <img
          className="rounded-2xl outline-2 outline-offset-[15px] outline-white "
          src={banner}
          alt=""
        />
      </div>
      <h1 className="my-12 font-bold text-4xl flex flex-col items-center">
        Explore Cutting-Edge Gadgets
      </h1>

      <div className="flex gap-6">
        <div className="bg-white p-6 rounded-xl">
          <Categories categories={categories}></Categories>
        </div>
        <div className="bg-amber-300 grow">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Home;
