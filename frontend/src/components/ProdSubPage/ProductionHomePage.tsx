import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import { motion } from "framer-motion";
import useFetchData from "../../hooks/useFetchData";
import { urlFor } from "../../../client/client";
import Loader from "../Loader/Loader";

const ProductionHomePage = () => {
  const {
    data,
    error,
    loading,
  }: {
    data: any;
    error: any;
  } = useFetchData("production", "firstPage");

  const [mainData, setMainData] = useState(null);

  useEffect(() => {
    if (data) {
      setMainData(data.firstPage[0]);
    }
  }, [data]);

  return (
    <>
      {loading && <h2 style={{ color: "#ffffff" }}>Loading ...</h2>}
      {error && <h1>Something went wrong</h1>}
      {mainData && (
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "backInOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="production-home-main"
        >
          <div className="production-home-main-image">
            <img
              src={urlFor(mainData?.mainImage).url()}
              alt="Production Home Image"
              loading="lazy"
              height={200}
              width={200}
            />
          </div>
          <div className="production-home-main-overlay"></div>
          <div className="production-home-main-content">
            <div className="production-home-main-content-text">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: [30, 0] }}
                transition={{ duration: 0.5, ease: "backInOut", delay: 0.2 }}
                viewport={{ once: true }}
                className="production-home-main-content-text-courseName"
              >
                <VscDebugBreakpointLog />
                {mainData.shortTitle}
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: [30, 0] }}
                transition={{ duration: 0.7, ease: "backInOut", delay: 0.3 }}
                viewport={{ once: true }}
                className="production-home-main-content-text-title"
              >
                {mainData.title}
              </motion.h1>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: [30, 0] }}
                transition={{ duration: 0.9, ease: "backInOut", delay: 0.3 }}
                viewport={{ once: true }}
                className="production-home-main-content-text-subtitle"
              >
                {mainData.description}
              </motion.span>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: "backInOut", delay: 0.5 }}
                viewport={{ once: true }}
                className="production-home-main-content-text-action"
              >
                <Button
                  name={mainData.buttonText}
                  backgroundColor="rgb(39 39 39 / 50%)"
                  color="#ffffff"
                  hoverBackgroundColor="#ffffff"
                  hoverColor="#000000"
                  action="redirectExternal"
                  actionData={mainData.buttonRedirect}
                />
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "backInOut", delay: 0.3 }}
              viewport={{ once: true }}
              className="production-home-main-content-miniBanner"
            >
              <img
                src={urlFor(mainData?.smallImage).url()}
                alt="production mini banner image"
                loading="lazy"
                height={200}
                width={200}
              />
            </motion.div>
          </div>
        </motion.section>
      )}
    </>
  );
};

export default ProductionHomePage;
