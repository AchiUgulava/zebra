import React, { useContext, useEffect, useState } from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  logInWithEmailAndPassword,
} from "../firebase";
import { UserContext } from "../context/userContext";
import { Link, useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const Login = () => {
  const { state, dispatch } = useContext(UserContext);
  const { user } = state;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    if (user !== null) {
      navigate("/");
    }
  }, [user]);

  const handleGoogleLogin = async () => {
    const response = await signInWithGooglePopup();
    createUserDocumentFromAuth(response.user);
    window.localStorage.setItem("user", JSON.stringify(response.user));
    dispatch({
      type: "LOGIN",
      payload: response.user,
    });
    enqueueSnackbar("You have successfully logged in", {
      variant: "success",
      autoHideDuration: 3000,
    });
  };

  const handleManualLogin = async () => {
    const response = await logInWithEmailAndPassword(email, password);
    console.log(JSON.stringify(response));
    window.localStorage.setItem("user", JSON.stringify(response.user));
    dispatch({
      type: "LOGIN",
      payload: response.user,
    });
    enqueueSnackbar("You have successfully logged in", {
      variant: "success",
      autoHideDuration: 3000,
    });
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center pt-8 ">
        <input
          type="text"
          className="p-2 my-2 bg-gray-300 rounded-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="p-2 my-2 bg-gray-300 rounded-md"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          className="p-4 px-3 font-bold text-white transition-transform duration-500 ease-in-out bg-gradient-to-r from-pink-700 to-pink-500 rounded-2xl hover:bg-gradient-to-l hover:from-pink-700 hover:to-pink-500 hover:scale-110"
          onClick={handleManualLogin}
        >
          Login
        </button>
        <button
          className="p-4 px-3 font-bold text-white transition-transform duration-500 ease-in-out bg-gradient-to-r from-pink-700 to-pink-500 rounded-2xl hover:bg-gradient-to-l hover:from-pink-700 hover:to-pink-500 hover:scale-110"
          onClick={handleGoogleLogin}
        >
          Login with Google
        </button>
        <div>
          Don't have an account? <Link to="/register">Register</Link> now.
        </div>
      </div>
    </>
  );
};

export default Login;
