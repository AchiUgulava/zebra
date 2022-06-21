import React from 'react';
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Products from "./pages/Products/Products";
import Product from "./pages/Products/Product";
import Footer from "./components/Footer";
import Categories from "./pages/Categories";
import { SnackbarProvider } from "notistack";
import { Slide } from "@mui/material";
import Checkout from "./pages/Checkout";
import Register from "./pages/Register.js";


const App = () => {
  
  return (
    <>
      <div className="w-full mx-auto">
        <Router >
          <SnackbarProvider
            TransitionComponent={Slide}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Navbar>
            <Routes className="absolute max-w-6xl">
              <Route path="/" element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="cart" element={<Cart />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="shop">
                <Route index element={<Categories />}/>
                <Route path=":categoryName">
                  <Route index element={<Products/>}/>
                  <Route path=':productId' element={<Product/>}/>
                </Route>
                <Route path='*' element={"why RE YOU HERE"}/>
              </Route>
            </Routes>
            </Navbar>
          </SnackbarProvider>
        </Router>
        <Footer />
      </div>
    </>
  );
};

export default App;
