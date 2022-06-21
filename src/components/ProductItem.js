import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { useSnackbar } from "notistack";
import { Link } from "react-router-dom";
const ProductItem = ({ item, link }) => {
  const {
    cartState: { cart },
    cartDispatch,
  } = useContext(CartContext);
  const { enqueueSnackbar } = useSnackbar();

  const addToCart = () => {
    cartDispatch({
      type: "ADD_TO_CART",
      payload: item,
    });
    enqueueSnackbar(`Added ${item.name} to your cart`, {
      variant: "success",
      autoHideDuration: 3000,
    });
  };

  const removeItemFromCart = () => {
    cartDispatch({
      type: "REMOVE_FROM_CART",
      payload: item,
    });
    enqueueSnackbar(`Removed ${item.name} from your cart!`, {
      variant: "warning",
      autoHideDuration: 3000,
    });
  };

  return (
    <>
      <div className="mt-5 single flex flex-col mx-auto w-[275px] sm:w-60  shadow-xl hover:shadow-gray-400  rounded-xl hover:scale-105 transition-transform duration-200 ease-in group">
        <Link to={link}>
          <img
            src={item.imageUrl}
            className="object-fill w-full h-64 rounded-t-lg"
            alt="product image"
          />
        </Link>
        <div className="flex justify-center mt-3">
          <h1 className="text-lg font-bold text-gray-700">{item.name}</h1>
        </div>
        <div className="flex items-center justify-between px-5 py-3">
          <p className="text-gray-700">${item.price}</p>

          {cart.some((p) => p.id === item.id) ? (
            <>
              <button
                className="p-2 text-sm font-semibold text-white transition-transform duration-300 ease-in-out bg-pink-700 border-2 border-pink-700 rounded-lg hover:bg-pink-50 hover:text-pink-700 hover:border-pink-700"
                onClick={removeItemFromCart}
              >
                Remove Item
              </button>
            </>
          ) : (
            <>
              <button
                className="p-2 text-sm font-semibold text-pink-700 transition-transform duration-300 ease-in-out border-2 border-pink-700 rounded-lg group-hover:bg-pink-700 group-hover:text-white group-hover:border-white"
                onClick={addToCart}
              >
                Add to Cart
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductItem;
