import React, { useContext, useState, useEffect } from "react";
import CartItem from "../components/CartItem";
import { CartContext } from "../context/cartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const {
    cartState: { cart },
    cartDispatch,
  } = useContext(CartContext);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <>
      {cart.length > 0 ? (
        <>
          <div className="min-h-[80vh] grid md:grid-cols-2">
            <div className="flex flex-col justify-center p-2 items-between">
              {cart.map((item) => {
                return <CartItem key={item.id} item={item} />;
              })}
            </div>
            <div>
              <div className="flex flex-col items-end justify-center p-5 space-y-5 mt-14">
                <h1 className="text-lg font-semibold text-pink-800">
                  YOUR CART SUMMARY
                </h1>
                <p>
                  <span className="font-semibold text-gray-700">
                    Total Items
                  </span>{" "}
                  : {cart.length}
                </p>
                <p>
                  {" "}
                  <span className="font-semibold text-gray-700">
                    Total Amount
                  </span>{" "}
                  : ${totalAmount}
                </p>
                <Link to={"/checkout"}>
                  <button className="p-3 mt-5 font-bold text-white transition duration-300 ease-linear bg-pink-700 border-2 border-pink-600 rounded-lg hover:bg-pink-50 hover:text-pink-700">
                    Checkout Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="min-h-[80vh] flex flex-col items-center justify-center">
            <h1 className="mb-2 text-xl font-semibold text-gray-700">
              Your cart is empty!
            </h1>
            <Link to={"/shop"}>
              <button className="p-3 mt-5 font-bold text-white transition duration-300 ease-linear bg-pink-700 border-2 border-pink-600 rounded-lg hover:bg-pink-50 hover:text-pink-700">
                SHOP NOW
              </button>
            </Link>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
