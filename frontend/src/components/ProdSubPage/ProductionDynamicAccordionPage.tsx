import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import ProductionReusuableSeparator from "./ProductionReusuableSeparator";
import useFetchData from "../../hooks/useFetchData";
import { urlFor } from "../../../client/client";

const ProductionDynamicAccordionPage = () => {
  const {
    data,
    error,
  }: {
    data: any;
    error: any;
  } = useFetchData("production", "thirdPage");

  const [mainData, setMainData] = useState(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [imageUrl, setImageUrl] = useState<string>("");
  const progressRef = useRef<HTMLDivElement | null>(null);
  const [accordionData, setAccordionData] = useState<any>([]);

  useEffect(() => {
    if (data) {
      setMainData(data.thirdPage[0]);
      setAccordionData(data.thirdPage[0].dynamicSection);
      setImageUrl(data.thirdPage[0].dynamicSection[0].sectionImage);
    }
  }, [data]);

  useEffect(() => {
    if (mainData) {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % accordionData.length);
      }, 5000);
      setImageUrl(accordionData[activeIndex].sectionImage); // Set image based on active index
      console.log(accordionData[activeIndex].sectionHeading, "progress");
      return () => clearInterval(interval);
    }
  }, [activeIndex, accordionData]);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 4800;
    if (progressRef.current) {
      progressRef.current.style.width = "0%";
    }

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const percent = Math.min((elapsed / duration) * 100, 100);
      if (progressRef.current) {
        progressRef.current.style.width = `${percent}%`;
      }

      if (percent >= 100) {
        clearInterval(interval); // Stop when done
      }
    }, 100); // Smooth updates every 100ms

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <>
      {error && <h1>Something went wrong</h1>}
      {mainData && (
        <section className="production-accordion-main">
          <ProductionReusuableSeparator color="#ffffff" />

          <div className="production-accordion-main-heading">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "backInOut", delay: 0.4 }}
              //   viewport={{ once: true }}
            >
              {mainData.thirdPageTitle}
            </motion.h1>
          </div>
          <div className="production-accordion-main-content">
            <div className="production-accordion-main-content-action">
              {accordionData?.map((item, index) => (
                <div
                  className={`production-accordion-main-content-action-item ${
                    index === activeIndex && "active"
                  }`}
                  key={item.sectionHeading}
                  onClick={() => {
                    setActiveIndex(index);
                    setImageUrl(item.sectionImage);
                  }}
                >
                  <div className="production-accordion-main-content-action-item-heading">
                    <motion.h2
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        ease: "backInOut",
                        delay: 0.4,
                      }}
                      viewport={{ once: true }}
                    >
                      {item.sectionHeading}
                    </motion.h2>
                  </div>
                  <AnimatePresence initial={false}>
                    {index === activeIndex && (
                      <>
                        <motion.div
                          key={item.sectionDescription}
                          className="production-accordion-main-content-action-item-description"
                          initial={{ opacity: 0, y: 30, height: 0 }}
                          animate={{ opacity: 1, y: 0, height: "auto" }}
                          exit={{ opacity: 0, y: 30, height: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          style={{
                            overflow: "hidden",
                          }}
                        >
                          <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{
                              duration: 0.4,
                              ease: "easeInOut",
                              delay: 0.1,
                            }}
                          >
                            {item.sectionDescription}
                          </motion.span>
                        </motion.div>
                      </>
                    )}
                    {index === activeIndex && (
                      <div className="production-accordion-main-content-action-item-image">
                        <AnimatePresence mode="wait">
                          <motion.img
                            key={`${item.sectionHeading}-img`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            src={urlFor(imageUrl).url()}
                            alt="Production Home Image"
                            loading="lazy"
                            height={200}
                            width={200}
                          />
                        </AnimatePresence>
                        <div className="overlay"></div>
                      </div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <div className="dynamic-progressbar">
                <div ref={progressRef} className="progress"></div>
              </div>
            </div>
            <div className="production-accordion-main-content-image">
              <motion.img
                key={imageUrl}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "backInOut", delay: 0.1 }}
                src={urlFor(imageUrl).url()}
                alt="Production Home Image"
                loading="lazy"
                height={200}
                width={200}
              />
              <div className="overlay"></div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ProductionDynamicAccordionPage;
