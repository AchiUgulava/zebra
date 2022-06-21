import React from "react";
import { Link } from "react-router-dom";

const MenuNav= () => {
    return (
      <div className="flex flex-row items-center justify-center">
        <div className="items-center justify-center hidden p-4 space-x-10 font-semibold text-pink-600 md:flex">
        <Link to={"/shop/hats"}>Hats</Link>
        <Link to={"/shop/jackets"}>Jackets</Link>
        <Link to={"/shop/shoes"}>Shoes</Link>
        <Link to={"/shop/womens"}>Womens</Link>
        <Link to={"/shop/mens"}>Mens</Link>
      </div>
      <div className="flex items-center justify-center space-x-10 font-semibold text-pink-600 md:hidden">
        <Link to={"/shop"}>All Categories</Link>
      </div>
      </div>
    );
  };
  export default MenuNav;