import React from "react";
import loadingComponant from "./../../assets/loadingPages/loadingMainPage.json";
import loadingPage from "./../../assets/loadingPages/loadingComponanet.json";
import error from "./../../assets/loadingPages/error.json";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import { HiArrowUturnRight } from "react-icons/hi2";

function Loading({ status }) {
  return (
    <div className="w-100  flex " style={{ height: "100vh" }}>
      {status === "app" ? (
        <Lottie animationData={loadingPage} loop={true} className="w-50 " />
      ) : status === "componant" ? (
        <Lottie
          animationData={loadingComponant}
          loop={true}
          className="w-50 "
        />
      ) : status === "/error" ? (
        <>
          <Lottie animationData={error} loop={true} className="w-50 " />
          <br />
          <HiArrowUturnRight/><Link to={'/'} style={{fontSize:'33' , textDecoration:'none'}}> back to home page </Link>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default Loading;
