import React, {useContext, useEffect, useState } from "react";
import { Link, useNavigate  } from "react-router-dom";
import {registerWithEmailAndPassword,createUserDocumentFromAuth} from "../firebase";
import { UserContext } from "../context/userContext";

function Register() {
  const { state, dispatch } = useContext(UserContext);
  const { user } = state;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (user !== null) {
      navigate("/");
    }
  }, [user]);

  const register  = async () => {
    registerWithEmailAndPassword(email,password);
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
  
  return (
    <>
      <div className="flex flex-col items-center justify-center pt-8 ">
        <input
          type="text"
          className="p-2 my-2 bg-gray-300 rounded-md"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
        />
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
        <button className="register__btn" onClick={register}>
          Register
        </button>
        <div>
          Already have an account? <Link to="/">Login</Link> now.
        </div>
      </div>
    </>
  );
}
export default Register;