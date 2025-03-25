import React from "react";
import DashboardSingleCart from "../DashboardSingleCart/DashboardSingleCart";

const DashboardWishlist = ({ gadgets, handleRemove }) => {
  return (
    <div className="pb-12">
      <h1 className="font-bold text-2xl ">WishList</h1>
      <div className="grid grid-cols-1 gap-6 mt-8">
        {gadgets.map((gadget) => (
          <DashboardSingleCart
            handleRemove={handleRemove}
            key={gadget.product_id}
            gadget={gadget}
          ></DashboardSingleCart>
        ))}
      </div>
    </div>
  );
};

export default DashboardWishlist;
