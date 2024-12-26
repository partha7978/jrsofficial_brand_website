import React from "react";
import { useEffect, useState } from "react";

import AnimatedCircularProgressBar from "../ui/animated-circular-progress-bar";
import { useSelector } from "react-redux";

const Loader = () => {
  const {isLoading, value} = useSelector((state: any) => state.loader);
  return (
    <div className="main__loader">
      <AnimatedCircularProgressBar
        max={100}
        min={0}
        value={value}
        gaugePrimaryColor="rgb(79 70 229)"
        gaugeSecondaryColor="#ffeace"
      />
    </div>
  );
};

export default Loader;
