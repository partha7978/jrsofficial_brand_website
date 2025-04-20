import Button from "../Button/Button";
import { ProductionReusuableSeparator } from "./";
import { MdOutlineTrendingUp } from "react-icons/md";
import { motion } from "framer-motion";

const ProductionPricePage = () => {
  return (
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
            Get the ultimate return on your investment
          </motion.h1>
        </div>
        <div className="production-price-main-heading-subtext">
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "backInOut", delay: 0.6 }}
            viewport={{ once: true }}
          >
            We are committed to delivering the highest quality products and
            services to our clients.
          </motion.span>
        </div>
      </motion.div>
      <div className="production-price-main-content">
        {Array.from({ length: 2 })
          .fill(Math.random() * 100)
          .map((_, index) => (
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
              key={index}
            >
              <div className="production-price-main-content-item-heading">
                <motion.h2
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, ease: "backInOut", delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Price Heading {index + 1}
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, ease: "backInOut", delay: 0.3 }}
                  viewport={{ once: true }}
                  className="price"
                >
                  <span>₹{Math.floor(Math.random() * 100000)}</span>
                  <span>per month</span>
                </motion.div>
              </div>
              <div className="production-price-main-content-item-list">
                {Array.from({ length: 6 }).map((item, index) => (
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
                    key={index.toString()}
                  >
                    <MdOutlineTrendingUp />
                    <span>Feature {index + 1}</span>
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "backInOut", delay: 0.3 }}
                viewport={{ once: true }}
                className="production-price-main-content-item-action"
              >
                <Button
                  name="Get Started"
                  backgroundColor="#000000"
                  color="#ffffff"
                  hoverBackgroundColor="#ffca85"
                  hoverColor="#000000"
                  action="redirectExternal"
                  actionData="https://www.linkedin.com/in/partha-sarathi-muduli/"
                  width="100%"
                />
              </motion.div>
            </motion.div>
          ))}
      </div>
    </section>
  );
};

export default ProductionPricePage;
