import Button from "../Button/Button";
import { ProductionReusuableSeparator } from "./";
import { MdOutlineTrendingUp } from "react-icons/md";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import useFetchData from "../../hooks/useFetchData";

const ProductionPricePage = () => {
  const {
    data,
    error,
  }: {
    data: any;
    error: any;
  } = useFetchData("production", "membership");

  const [mainData, setMainData] = useState(null);

  useEffect(() => {
    if (data) {
      setMainData(data.membership[0]);
    }
  }, [data]);

  return (
    <>
      {error && <h1>Something went wrong</h1>}
      {mainData && (
        <section className="production-price-main">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "backInOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="production-price-main-heading"
          >
            <ProductionReusuableSeparator color="#000000" />
            <div className="production-price-main-heading-text">
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "backInOut", delay: 0.4 }}
                viewport={{ once: true }}
              >
                {mainData.membershipTitle}
              </motion.h1>
            </div>
            <div className="production-price-main-heading-subtext">
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "backInOut", delay: 0.6 }}
                viewport={{ once: true }}
              >
                {mainData.membershipDescription}
              </motion.span>
            </div>
          </motion.div>
          <div className="production-price-main-content">
            {mainData.membershipItem?.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: "backInOut",
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
                className="production-price-main-content-item"
                key={item.membershipItemTitle}
              >
                <div className="production-price-main-content-item-heading">
                  <motion.h2
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      ease: "backInOut",
                      delay: 0.3,
                    }}
                    viewport={{ once: true }}
                  >
                    {item.membershipItemTitle}
                  </motion.h2>
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      ease: "backInOut",
                      delay: 0.3,
                    }}
                    viewport={{ once: true }}
                    className="price"
                  >
                    <span>₹{item.membershipItemPrice}</span>
                    <span>{item.membershipItemPriceTime}</span>
                  </motion.div>
                </div>
                <div className="production-price-main-content-item-list">
                  {item.membershipItemList.map((list, index) => (
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        ease: "backInOut",
                        delay: index * 0.1,
                      }}
                      viewport={{ once: true }}
                      className="production-price-main-content-item-list-item"
                      key={list}
                    >
                      <MdOutlineTrendingUp />
                      <span>{list}</span>
                    </motion.div>
                  ))}
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: "backInOut",
                    delay: 0.3,
                  }}
                  viewport={{ once: true }}
                  className="production-price-main-content-item-action"
                >
                  <Button
                    name={item.membershipItemButton || "Get Started"}
                    backgroundColor="#000000"
                    color="#ffffff"
                    hoverBackgroundColor="#ffca85"
                    hoverColor="#000000"
                    action="redirectExternal"
                    actionData={item.membershipItemButtonRedirect}
                    width="100%"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default ProductionPricePage;
