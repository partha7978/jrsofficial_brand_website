import React from "react";
import Button from "../Button/Button";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import { motion } from "framer-motion";

const ProductionHomePage = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "backInOut", delay: 0.2 }}
      viewport={{ once: true }}
      className="production-home-main"
    >
      <div className="production-home-main-image">
        <img
          src="https://images.unsplash.com/photo-1694869248420-4eb6d96a3bf2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ0fHxldmVuaW5nfGVufDB8fDB8fHww"
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
            <VscDebugBreakpointLog /> Producton Page Name
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: [30, 0] }}
            transition={{ duration: 0.7, ease: "backInOut", delay: 0.3 }}
            viewport={{ once: true }}
            className="production-home-main-content-text-title"
          >
            Accelerate your path to business success
          </motion.h1>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: [30, 0] }}
            transition={{ duration: 0.9, ease: "backInOut", delay: 0.3 }}
            viewport={{ once: true }}
            className="production-home-main-content-text-subtitle"
          >
            A curated community to give you the guidance and knowledge to make
            record profits this year. Interested !! Join for free
          </motion.span>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "backInOut", delay: 0.5 }}
            viewport={{ once: true }}
            className="production-home-main-content-text-action"
          >
            <Button
              name="Know More"
              backgroundColor="rgb(0, 0, 0, 0.5)"
              color="#ffffff"
              hoverBackgroundColor="#ffffff"
              hoverColor="#000000"
              action="redirectInternal"
              actionData={"/about"}
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
            src="https://images.unsplash.com/photo-1519414442781-fbd745c5b497?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGV2ZW5pbmd8ZW58MHx8MHx8fDA%3D"
            alt="production mini banner "
            loading="lazy"
            height={200}
            width={200}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProductionHomePage;
