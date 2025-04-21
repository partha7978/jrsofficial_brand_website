import { motion } from "framer-motion";
import Button from "../Button/Button";
import useFetchData from "../../hooks/useFetchData";
import { useEffect, useState } from "react";
import { urlFor } from "../../../client/client";

const ProductionEndCtaPage = () => {
  const {
    data,
    error,
  }: {
    data: any;
    error: any;
  } = useFetchData("production", "bottomImageCTA");

  const [mainData, setMainData] = useState(null);

  useEffect(() => {
    if (data) {
      setMainData(data.bottomImageCTA[0]);
    }
  }, [data]);

  return (
    <>
      {error && <h1>Something went wrong</h1>}
      {mainData && (
        <section className="production-end-cta">
          <motion.img
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "backInOut", delay: 0.2 }}
            viewport={{ once: true }}
            src={urlFor(mainData?.imageCTAImage).url()}
            alt="production end cta image"
          />
          <div className="production-end-cta-overlay"></div>
          <div className="production-end-cta-content">
            <div className="production-end-cta-content-text">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "backInOut", delay: 0.4 }}
                viewport={{ once: true }}
              >
                {mainData.imageCTATitle}
              </motion.h1>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "backInOut", delay: 0.5 }}
                viewport={{ once: true }}
              >
                {mainData.imageCTADescription}
              </motion.span>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "backInOut", delay: 0.6 }}
              viewport={{ once: true }}
              className="production-end-cta-content-button"
            >
              <Button
                name={mainData.imageCTAButton}
                backgroundColor="#ffffff"
                color="#000000"
                hoverBackgroundColor="#ffca85"
                hoverColor="#000000"
                action="redirectExternal"
                actionData={mainData.imageCTALink}
              />
            </motion.div>
          </div>
        </section>
      )}
    </>
  );
};

export default ProductionEndCtaPage;
