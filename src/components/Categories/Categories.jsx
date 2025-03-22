import React from "react";
import { NavLink } from "react-router-dom";
import "./Categories.css";

const Categories = ({ categories }) => {
  return (
    <div className="flex flex-col gap-6">
      {categories.map((category) => (
        <NavLink key={category.id} to={`/category/${category.category}`}>
          <div key={category.id} className="bg-category">
            {category.category}
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;
