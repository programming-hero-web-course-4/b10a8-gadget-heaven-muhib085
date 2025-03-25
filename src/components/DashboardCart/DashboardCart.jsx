import React, { useEffect, useState } from "react";
import DashboardSingleCart from "../DashboardSingleCart/DashboardSingleCart";

const DashboardCart = ({ gadgets, handleRemove }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const allPrices = gadgets.reduce(
      (previous, current) => previous + current.price,
      0
    );
    setTotal(allPrices);
  }, [gadgets]);
  return (
    <div className="lg:px-24">
      <div className="flex justify-between">
        <h1 className="font-bold text-2xl">Cart</h1>
        <div className="flex gap-3.5">
          <h2 className="lg:mr-9 font-bold text-2xl">Total Cost: {total}</h2>
          <div>
            <h3>Sort By Price</h3>
          </div>
        </div>
      </div>
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

export default DashboardCart;
