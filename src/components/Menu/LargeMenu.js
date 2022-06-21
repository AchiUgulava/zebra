import React from "react";

const LargeMenu = ({ item }) => {
  return (
    <>
      
        <div className="h-[18rem]  relative cursor-pointer hover:scale-105 transition transform duration-300 ease-in group  hover:shadow-xl hover:shadow-gray-300 ">
          <img src={item.image} className="object-cover w-full h-full" alt="" />
          <div className="absolute px-7 py-3 mr-1.5 border-2 text-center transition duration-300 ease-in transform -translate-x-1/2 -translate-y-1/2 bg-black border-gray-800 rounded-full bg-opacity-20 top-1/2 left-1/2 group-hover:scale-75 hover:bg-opacity-30">
            <h1 className="font-bold text-white text-l">
              {item.title}
            </h1>
          </div>
        </div>
     
    </>
  );
};

export default LargeMenu;
