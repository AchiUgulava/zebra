import React from "react";
import { Link, Outlet } from "react-router-dom";
import LargeMenu from "../components/Menu/LargeMenu";
import SmallMenu from "../components/Menu/SmallMenu";
import { LargeMenuItems, SmallMenuItems } from "../data";

const Categories = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto">
        <div>
          <div className="grid gap-5 p-5 sm:grid-cols-3 ">
            {SmallMenuItems.map((item) => {
              return (
                <Link to={item.route} key={item.id}>
                  <SmallMenu item={item} />
                </Link>
              )
            })}
          </div>
          <div className="grid gap-5 p-5 sm:grid-cols-2 ">
            {LargeMenuItems.map((item) => {
              return (
                <Link to={`/shop/${item.title.toLowerCase()}`} key={item.id}>
                  <LargeMenu item={item} />
                </Link>
              )
            })}
          </div>
         
          <Outlet/>
        </div>
      </div>
    </>
  );
};

export default Categories;
