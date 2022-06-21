import React, { useState, useContext } from "react";
import {
  Home,
  Logout,
  Menu,
  Person,
  ShoppingBasket,
  Shop
} from "@mui/icons-material";
import { Drawer, useTheme, useMediaQuery, Avatar } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";
import { CartContext } from "../context/cartContext";
import { signOutUser } from "../firebase";
import { useSnackbar } from "notistack";

const Navbar = ({ children }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const { state, dispatch } = useContext(UserContext);
  const {
    cartState: { cart },
    cartDispatch,
  } = useContext(CartContext);
  const navigate = useNavigate();
  const { user } = state;
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const { enqueueSnackbar } = useSnackbar();

  const logoutHandler = async () => {
    await signOutUser();
    enqueueSnackbar("You have successfully logged out", {
      variant: "success",
      autoHideDuration: 3000,
    });
    window.localStorage.removeItem("user");
    dispatch({
      type: "LOGOUT",
    });
    setOpenDrawer(false);

    navigate("/");
  };

  return (
    <>
      <nav className="fixed top-0 z-10 flex items-center justify-between w-full h-20 mx-auto bg-white ">
        <div>
          <Link to={"/"}>
            <h1 className="px-4 text-5xl font-bold tracking-wider text-black cursor-pointer logo">
              ZEBRA
            </h1>
          </Link>
        </div>
        <div className="flex items-center mr-5 space-x-6 font-semibold text-gray-700 list-none -tracking-tighterr">
          {isMatch ? (
            <>
              <Drawer
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                anchor="top"
              >
                <div className="flex flex-col items-center bg-pink-50">
                  <Link to={"/"}>
                    <div
                      onClick={() => setOpenDrawer(false)}
                      className="flex items-center mt-10 space-x-10 text-gray-700"
                    >
                      <div>
                        <Home />
                      </div>
                      <h3 className="font-semibold">Home</h3>
                    </div>
                  </Link>
                  <Link to={"/shop"}>
                    <div
                      onClick={() => setOpenDrawer(false)}
                      className="flex items-center mt-10 space-x-10 text-gray-700"
                    >
                      <div>
                        <Shop />
                      </div>
                      <h3 className="font-semibold">Shop</h3>
                    </div>
                  </Link>

                  {user !== null ? (
                    <div
                      onClick={logoutHandler}
                      className="flex items-center mt-16 mb-5 space-x-5 text-gray-700"
                    >
                      <div>
                        <Logout />
                      </div>
                      <h3 className="font-semibold">Logout</h3>
                    </div>
                  ) : (
                    <Link to={"/login"}>
                      <div
                        onClick={() => setOpenDrawer(false)}
                        className="flex items-center mt-16 mb-5 space-x-5 text-gray-700"
                      >
                        <div>
                          <Person />
                        </div>
                        <h3 className="font-semibold">Login</h3>
                      </div>
                    </Link>
                  )}
                </div>
              </Drawer>
            </>
          ) : (
            <>
              <Link to="/">
                <li className="transition duration-200 transform cursor-pointer hover:text-pink-600">
                  Home
                </li>
              </Link>
              <Link to="/shop">
                <li className="transition duration-200 transform cursor-pointer hover:text-pink-600">
                  Shop
                </li>
              </Link>
              {user !== null ? (
                <li
                  onClick={logoutHandler}
                  className="transition duration-200 transform cursor-pointer hover:text-pink-600"
                >
                  Logout
                </li>
              ) : (
                <Link to="/login">
                  <li className="transition duration-200 transform cursor-pointer hover:text-pink-600">
                    Login
                  </li>
                </Link>
              )}
            </>
          )}

          <Link to={"/cart"}>
            <div className="relative">
              <ShoppingBasket className="text-2xl transition duration-200 transform cursor-pointer hover:text-pink-600" />
              {cart.length > 0 && (
                <div className="absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-pink-600 rounded-full animate-bounce -top-1 -right-2 top-">
                  {cart.length}
                </div>
              )}
            </div>
          </Link>

          {isMatch && (
            <Menu
              className="text-3xl text-gray-700"
              onClick={() => setOpenDrawer(!openDrawer)}
            />
          )}
        </div>
      </nav>
      <div className="pt-20 realtive">
      { children }
      </div>
      </>
  );
};

export default Navbar;
