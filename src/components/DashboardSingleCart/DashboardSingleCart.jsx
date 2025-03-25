import React from "react";
import { RxCrossCircled } from "react-icons/rx";

const DashboardSingleCart = ({ gadget, handleRemove }) => {
  const { product_id, product_title, product_image, description, price } =
    gadget;
  return (
    <div>
      <div className="grid grid-cols-6 gap-6 bg-white rounded-2xl p-8">
        <figure className="w-52 h-32">
          <img
            className="w-full h-full rounded-2xl"
            src={product_image}
            alt=""
          />
        </figure>
        <div className="col-span-4 pl-10 space-y-5">
          <h1 className="font-semibold text-2xl">{product_title}</h1>
          <p className="text-[#09080F99]">{description}</p>
          <p className="font-semibold text-xl">Price: ${price}</p>
        </div>
        <div
          onClick={() => handleRemove(product_id)}
          className="ml-9 cursor-pointer w-9 h-9"
        >
          <RxCrossCircled size={40} />
        </div>
      </div>
    </div>
  );
};

export default DashboardSingleCart;
