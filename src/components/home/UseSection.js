import React from "react";
const UseSection = () => {
  return (
    <>
      <section className="py-8 bg-white border-b">
      <div className="container max-w-5xl m-8 mx-auto">
        <div className="w-full mb-4">
          <div className="w-64 h-1 py-0 mx-auto my-0 rounded-t opacity-25 gradient"></div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-5/6 p-6 sm:mt-10 sm:w-1/2">
            <h3 className="mb-3 text-3xl font-bold leading-none text-gray-800">
              Order The Items
            </h3>
            <p className="mb-8 text-gray-600">
             All of our products are carefully chosen by our team.<br/> Quality is guaranteed. 
            </p>
          </div>
          <div className="w-full p-6 sm:w-1/2">
            <img src={require('./shopping.svg').default} alt="deliveries"/>
          </div>
        </div>
        <div className="flex flex-col-reverse flex-wrap sm:flex-row">
          <div className="w-full p-6 sm:w-1/2">
          <img src={require('./deliveries.svg').default} alt="deliveries"/>
          </div>
          <div className="w-full p-6 mt-6 sm:w-1/2">
            <div className="align-middle">
              <h3 className="mb-3 text-3xl font-bold leading-none text-gray-800">
               We Deliver
              </h3>
              <p className="mb-8 text-gray-600">
                All you have to do is leave us your adress.
                <br />
                <br />
                Images from:

                <a className="text-pink-500 underline" href="https://undraw.co/">undraw.co</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default UseSection;