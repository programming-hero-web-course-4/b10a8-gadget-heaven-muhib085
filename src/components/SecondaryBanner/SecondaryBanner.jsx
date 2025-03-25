import React from "react";
import Heading from "../Heading/Heading";

const SecondaryBanner = ({ title, subtitle }) => {
  return (
    <div className="text-center bg-[#9538E2] pt-9 pb-80">
      <Heading title={title} subtitle={subtitle}></Heading>
    </div>
  );
};

export default SecondaryBanner;
