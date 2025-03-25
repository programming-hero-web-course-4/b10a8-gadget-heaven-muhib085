import React, { useEffect, useState } from "react";
import SecondaryBanner from "../components/SecondaryBanner/SecondaryBanner";
import DashboardCart from "../components/DashboardCart/DashboardCart";
import DashboardWishlist from "../components/DashboardWishlist/DashboardWishlist";
import {
  getLocalStorage,
  removeFromLocalStorage,
} from "../Utilities/localStorage";

const Dashboard = () => {
  const [gadgets, setGadgets] = useState([]);
  useEffect(() => {
    const allGadgets = getLocalStorage();
    setGadgets(allGadgets);
  }, []);

  const [isActive, setIsActive] = useState({
    cart: true,
    status: "cart",
  });

  const handleIsActiveState = (status) => {
    if (status == "cart") {
      setIsActive({ cart: true, status: "cart" });
    } else {
      setIsActive({ cart: false, status: "wishlist" });
    }
  };
  const handleRemove = (id) => {
    removeFromLocalStorage(id);
    const allGadgets = getLocalStorage();
    setGadgets(allGadgets);
  };
  return (
    <div>
      <SecondaryBanner
        title={"Dashboard"}
        subtitle={
          "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        }
      ></SecondaryBanner>
      <div className="flex gap-4 justify-center relative -top-64">
        <button
          onClick={() => handleIsActiveState("cart")}
          className={`${
            isActive.cart
              ? "px-16 py-2 bg-white rounded-full font-extrabold text-xl text-[#9538E2] cursor-pointe"
              : "px-16 py-2 bg-[#9538E2] rounded-full font-extrabold text-xl text-white cursor-pointer border-2 border-white"
          }`}
        >
          Cart
        </button>
        <button
          onClick={() => handleIsActiveState("wishlist")}
          className={`${
            isActive.cart
              ? "px-16 py-2 bg-[#9538E2] rounded-full font-extrabold text-xl text-white cursor-pointer border-2 border-white"
              : "px-16 py-2 bg-white rounded-full font-extrabold text-xl text-[#9538E2] cursor-pointer"
          }`}
        >
          Wishlist
        </button>
      </div>
      {isActive.cart ? (
        <DashboardCart
          handleRemove={handleRemove}
          gadgets={gadgets}
        ></DashboardCart>
      ) : (
        <DashboardWishlist
          handleRemove={handleRemove}
          gadgets={gadgets}
        ></DashboardWishlist>
      )}
    </div>
  );
};

export default Dashboard;
