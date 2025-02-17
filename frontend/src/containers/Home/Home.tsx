import "./Home.scss";
import { motion } from "framer-motion";
import useFetchData from "../../hooks/useFetchData";
import AnimatedCircularProgressBar from "../../components/ui/animated-circular-progress-bar";
import React, { Suspense, useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import Particles from "../../components/ui/particles";

const Home = () => {
  const { data, loading, error } = useFetchData(
    "homepage",
    "mainHeadingFirstLine,mainHeadingSecondLine,mainSubheading"
  );

  const MainMarquee = React.lazy(
    () => import("../../components/Marquee/MainMarquee")
  );

  if (error) {
    console.log(error);
  }

  return (
    <section className="homepage">
      {error && <h1>Something went wrong</h1>}
      {loading && <Loader />}
      {data && (
        <div className="homepage-main">
          <section className="homepage-main-content">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, y: [30, 0] }}
              transition={{ duration: 0.5, ease: "backInOut", delay: 0.2 }}
              className="main-heading"
              layoutId="main-heading"
              viewport={{ once: true }}
            >
              <h1>{data.mainHeadingFirstLine}</h1>
              <h1>{data.mainHeadingSecondLine}</h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, y: [30, 0] }}
              transition={{ duration: 0.5, ease: "backInOut", delay: 0.4 }}
              className="main-subheading"
              layoutId="main-subheading"
              viewport={{ once: true }}
            >
              <p>{data.mainSubheading}</p>
            </motion.div>
          </section>
          <Suspense fallback={<Loader />}>
            <MainMarquee />
          </Suspense>
        </div>
      )}
      <Particles
        className="absolute inset-0"
        quantity={150}
        ease={80}
        color={"#ffffff"}
        refresh
      />
    </section>
  );
};

export default Home;
