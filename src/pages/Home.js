import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import Hero from "../components/home/Hero";
import UseSection from "../components/home/UseSection";

const HomePage = () => {
  useEffect(() => {
    const body = document.querySelector("#root");
    body.scrollIntoView(500);
  }, []);


  return (
    <>
      <Hero/>
      <UseSection/>
    </>
  );
};

export default HomePage;
