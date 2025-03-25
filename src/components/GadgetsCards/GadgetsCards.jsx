import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Card from "../Card/Card";

const GadgetsCards = () => {
  const { category } = useParams();

  const data = useLoaderData();

  const [gadgets, setGadgets] = useState([]);
  useEffect(() => {
    if (category) {
      const filteredGadgets = [...data].filter(
        (gadget) => gadget.category === category
      );
      setGadgets(filteredGadgets);
    } else if (category == "All Products") {
      setGadgets(data);
    } else {
      setGadgets(data.slice(0, 8));
    }
  }, [data, category]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {gadgets.map((gadget) => (
        <Card key={gadget.product_id} gadget={gadget}></Card>
      ))}
    </div>
  );
};

export default GadgetsCards;
