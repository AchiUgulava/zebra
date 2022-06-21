import React, { useEffect, useContext } from "react";
import { getProduct } from "../../data";
import { useParams } from "react-router-dom";
import { useSnackbar } from "notistack";
import { CartContext } from "../../context/cartContext";

const Product = () => {
  useEffect(() => {
    const body = document.querySelector("#root");
    body.scrollIntoView();
  }, []);

  let params = useParams();
  let product = getProduct(params.categoryName, parseInt(params.productId, 10));

  const {
    cartState: { cart },
    cartDispatch,
  } = useContext(CartContext);
  const { enqueueSnackbar } = useSnackbar();

  const addToCart = () => {
    cartDispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
    enqueueSnackbar(`Added ${product.name} to your cart`, {
      variant: "success",
      autoHideDuration: 3000,
    });
  };

  const removeItemFromCart = () => {
    cartDispatch({
      type: "REMOVE_FROM_CART",
      payload: product,
    });
    enqueueSnackbar(`Removed ${product.name} from your cart!`, {
      variant: "warning",
      autoHideDuration: 3000,
    });
  };

  return (
    <>
      <div className="container px-6 pt-4 mx-auto">
        <div className="md:flex md:items-center">
          <div className="w-full md:w-1/2 ">
            <img
              className="object-cover w-full h-full max-w-lg mx-auto rounded-md"
              src={product.imageUrl}
              alt="Nike Air"
            />
          </div>
          <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
            <h3 className="text-lg text-gray-700 uppercase">{product.name}</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <span className="mt-3 text-gray-500">{product.price}$</span>
            <hr className="my-3" />
            {cart.some((p) => p.id === product.id) ? (
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
        <div className="mt-16">
          <h3 className="text-2xl font-medium text-gray-600">More Products</h3>
          <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="w-full max-w-sm mx-auto overflow-hidden rounded-md shadow-md">
              <div className="flex items-end justify-end w-full h-56 bg-cover"></div>
              <div className="px-5 py-3">
                <h3 className="text-gray-700 uppercase">Chanel</h3>
                <span className="mt-2 text-gray-500">$12</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
