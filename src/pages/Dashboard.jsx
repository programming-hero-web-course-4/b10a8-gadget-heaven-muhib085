import React from "react";
import SecondaryBanner from "../components/SecondaryBanner/SecondaryBanner";

const Dashboard = () => {
  return (
    <div>
      <SecondaryBanner
        title={"Dashboard"}
        subtitle={
          "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        }
      ></SecondaryBanner>
      <div className="flex gap-4 justify-center">
        <button className="px-16 py-3.5 bg-white rounded-full font-extrabold text-xl text-[#9538E2] cursor-pointer">
          Cart
        </button>
        <button className="px-14 py-3.5 bg-white rounded-full font-extrabold text-xl text-[#9538E2] cursor-pointer">
          Wishlist
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
