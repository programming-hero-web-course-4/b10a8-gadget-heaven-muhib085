import React from "react";

const Card = ({ gadget }) => {
  const { product_title } = gadget || {};
  return (
    <div>
      <h1>{product_title}</h1>
    </div>
  );
};

export default Card;
