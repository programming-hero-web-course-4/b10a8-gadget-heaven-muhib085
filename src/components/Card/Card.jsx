import React from "react";
import { Link } from "react-router-dom";

const Card = ({ gadget }) => {
  const { product_id, product_title, product_image, price } = gadget || {};
  return (
    <div className="p-5 bg-white rounded-xl space-y-3">
      <figure className="lg:max-w-full lg:h-48 overflow-hidden rounded-xl">
        <img src={product_image} alt="" />
      </figure>

      <h1 className="font-semibold text-2xl">{product_title}</h1>
      <p className="text-[#09080F99] font-medium text-xl">Price: ${price}</p>
      <div>
        <Link
          to={`/details/${product_id}`}
          className="btn btn-outline outline-[#9538E2] rounded-full font-semibold text-[#9538E2] hover:bg-[#9538E2] hover:text-white"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default Card;
