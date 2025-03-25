import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="text-center space-y-9 mt-7">
      <h2 className="text-6xl font-bold pt-6">
        Upgrade Your Tech Accessorize with Gadget Heaven Accessories
      </h2>
      <p className="font-normal">
        Explore the latest gadgets that will take your experience to the next
        level. From smart devices to the coolest accessories, we have it all!
      </p>
      <div className="mt-12 pb-36">
        <Link
          to={"/dashboard"}
          className="py-4 px-8 font-bold text-[#9538E2] bg-white rounded-full"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default Banner;
