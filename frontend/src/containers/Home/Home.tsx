import "./Home.scss";
import { motion } from "framer-motion";
import useFetchData from "../../hooks/useFetchData";
import React, { Suspense, useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import Particles from "../../components/ui/particles";
import { Button } from "../../components";

const Home = () => {
  const { data, loading, error } = useFetchData(
    "homepage",
    "mainHeadingFirstLine,mainHeadingSecondLine,mainSubheading,mainButton"
  );

  const [mainData, setMainData] = useState(null);

  useEffect(() => {
    if (data) {
      setMainData(data);
    }
  }, [data]);

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
      {mainData && (
        <div className="homepage-main">
          <section className="homepage-main-content">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: [30, 0] }}
              transition={{ duration: 0.5, ease: "backInOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="main-heading"
              layoutId="main-heading"
            >
              <h1>{mainData.mainHeadingFirstLine}</h1>
              <h1>{mainData.mainHeadingSecondLine}</h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: [30, 0] }}
              transition={{ duration: 0.5, ease: "backInOut", delay: 0.3 }}
              viewport={{ once: true }}
              className="main-subheading"
              layoutId="main-subheading"
            >
              <p>{mainData.mainSubheading}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, y: [30, 0] }}
              transition={{ duration: 0.5, ease: "backInOut", delay: 0.4 }}
              viewport={{ once: true }}
              className="homepage-cta"
            >
              {mainData.mainButton && (
                <Button
                  name={mainData.mainButton[0]?.buttonText}
                  backgroundColor="#ffffff"
                  color="#000000"
                  hoverBackgroundColor="#ffca85"
                  hoverColor="#000000"
                  action="redirectExternal"
                  actionData={mainData.mainButton[0]?.buttonLink}
                />
              )}
            </motion.div>
          </section>
          <Suspense fallback={<Loader />}>
            <MainMarquee />
          </Suspense>
        </div>
      )}
      <div className="homepage-bg-particles">
        <Particles
          className="absolute inset-0"
          quantity={250}
          ease={80}
          color={"#ffffff"}
          refresh
        />
      </div>
    </section>
  );
};

export default Home;
