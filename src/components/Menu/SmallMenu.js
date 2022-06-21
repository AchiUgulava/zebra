import React from "react";

const SmallMenu = ({ item }) => {
  return (
    <>
        <div className="relative cursor-pointer h-[12rem] hover:scale-110 transition transform duration-300 ease-in bg group hover:shadow-xl hover:shadow-gray-300">
          <img src={item.image} alt="" className="object-cover w-full h-full" />
          <div className="absolute px-7 py-3 mr-1.5 border-2 text-center transition duration-300 ease-in transform -translate-x-1/2 -translate-y-1/2 bg-black border-gray-800 rounded-full bg-opacity-20 top-1/2 left-1/2 group-hover:scale-75 group-hover:bg-opacity-30">
            <h1 className="font-bold text-white text-l">
              {item.title}
            </h1>
          </div>
        </div>
    </>
  );
};

export default SmallMenu;
