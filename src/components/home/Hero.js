import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="relative overflow-hidden bg-no-repeat bg-cover heroImg">
        <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full overflow-hidden bg-fixed bg">
          <div className="flex justify-center h-full pt-6 items-top">
            <div className="px-6 text-center text-gray-800 md:px-12">
              <h1 className="mb-20 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
                 
              </h1>
              <Link
                to={"/shop "}
                className="mt-auto bg-black bg-opacity-20 inline-block px-7 py-3 mr-1.5 border-2 border-gray-600 text-white font-bold text-md leading-snug uppercase rounded-full shadow-md  hover:bg-opacity-30 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                role="button"
              >
                Shop now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
