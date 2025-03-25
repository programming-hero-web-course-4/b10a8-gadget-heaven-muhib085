import React, { useEffect, useState } from "react";
import SecondaryBanner from "../components/SecondaryBanner/SecondaryBanner";
import { useLoaderData, useParams } from "react-router-dom";
import { IoStar } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import {
  addToCard,
  addToWishList,
  getLocalStorage,
} from "../Utilities/localStorage";

const ProductDetails = () => {
  const { id } = useParams();

  const data = useLoaderData();
  const [wishList, setWishList] = useState(false);
  const [gadget, setGadget] = useState({});
  const {
    product_title,
    product_image,
    price,
    description,
    Specification,
    availability,
    rating,
  } = gadget;
  useEffect(() => {
    const singleGadget = data.find(
      (gadget) => gadget.product_id === parseInt(id)
    );
    setGadget(singleGadget);
    console.log(singleGadget);

    const allLocalStorageData = getLocalStorage();
    console.log(allLocalStorageData);

    const isExist = allLocalStorageData.find(
      (item) => item.product_id == singleGadget.product_id
    );
    if (isExist) {
      setWishList(true);
    }
  }, [data, id]);

  const handleAddToCard = (product) => {
    addToCard(product);
  };

  const handleAddToWishList = (product) => {
    addToWishList(product);
    setWishList(true);
  };
  return (
    <div className="">
      <SecondaryBanner
        title={"Product Details"}
        subtitle={
          "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        }
      ></SecondaryBanner>
      <div className="grid grid-cols-3 gap-5 lg:p-8 bg-white lg:w-7xl mx-auto rounded-2xl relative -top-60">
        <div className="h-[503px]">
          <img
            className="h-full overflow-hidden rounded-xl bg-[#ECECEC]"
            src={product_image}
            alt=""
          />
        </div>
        <div className="col-span-2 space-y-3.5 pl-12">
          <h2 className="font-semibold text-3xl">{product_title}</h2>
          <p className="font-semibold text-xl">Price: ${price}</p>
          {availability ? (
            <span className="bg-[#309C081A] px-3 py-1 rounded-full font-medium text-[#309C08] outline-[#309C08] outline-1">
              In Stock
            </span>
          ) : (
            <span className="bg-[#309C081A] px-3 py-1 rounded-full font-medium text-[#309C08] outline-[#309C08] outline-1">
              Out of Stock
            </span>
          )}
          <p className="text-[#09080F99] mt-2.5">{description}</p>
          <h3 className="font-bold">Specification:</h3>
          <ul className="ml-4 text-[#09080F99]">
            {Specification &&
              Specification.map((i) => (
                <li className="list-decimal" key={i}>
                  {i}
                </li>
              ))}
          </ul>
          <h2 className="font-bold">Rating:</h2>
          <div className="flex gap-1.5">
            <IoStar size={25} color={"#F9C004"} />
            <IoStar size={25} color={"#F9C004"} />
            <IoStar size={25} color={"#F9C004"} />
            <IoStar size={25} color={"#F9C004"} />
            <IoStar size={25} color={"#F9C004"} />
            <span className="bg-[#09080F0D] px-3.5 py-1 ml-3 rounded-full">
              {rating}
            </span>
          </div>
          <div className="flex gap-3.5">
            <button
              onClick={() => handleAddToCard(gadget)}
              className="flex items-center justify-center gap-2 bg-[#9538E2] text-white font-bold text-xl px-4 py-2 rounded-full cursor-pointer transition hover:scale-110 duration-700 ease-in-out"
            >
              Add To Card <MdOutlineShoppingCart size={23} />
            </button>
            <button
              disabled={wishList}
              onClick={() => handleAddToWishList(gadget)}
              className="p-2.5 outline-3 outline-[#09080F0D] rounded-full cursor-pointer hover:font-bold hover:text-3xl hover:bg-fuchsia-400 hover:text-white transition hover:scale-110 duration-700 ease-in-out"
            >
              <CiHeart size={23} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
