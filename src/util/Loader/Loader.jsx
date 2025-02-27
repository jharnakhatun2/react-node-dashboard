import React from "react";
import Lottie from "lottie-react";
import loaderAnimation from "../../assets/loader.json"; 

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Lottie animationData={loaderAnimation} loop={true} className="w-32 h-32" />
    </div>
  );
};

export default Loader;