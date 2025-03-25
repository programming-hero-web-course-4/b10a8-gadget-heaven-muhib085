import React from "react";

const Heading = ({ title, subtitle }) => {
  return (
    <div className="text-white space-y-3">
      <h1 className="font-bold text-4xl">{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
};

export default Heading;
