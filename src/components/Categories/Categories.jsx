import React from "react";
import { NavLink } from "react-router-dom";
import "./Categories.css";

const Categories = ({ categories }) => {
  return (
    // <div className="flex flex-col gap-6">
    //   {categories.map((category) => (
    //     <NavLink
    //       className={({ isActive }) =>
    //         `bg-category${isActive ? "bg-category-active" : ""}`
    //       }
    //       key={category.id}
    //       to={`/category/${category.category}`}
    //     >
    //       <div key={category.id} className="bg-category">
    //         {category.category}
    //       </div>
    //     </NavLink>
    //   ))}
    // </div>
    <div className="flex flex-col gap-6">
      {categories.map((category) => (
        <NavLink key={category.id} to={`/category/${category.category}`}>
          {({ isActive }) => (
            <div
              key={category.id}
              className={isActive ? "bg-category-active" : "bg-category"}
            >
              {category.category}
            </div>
          )}
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;
