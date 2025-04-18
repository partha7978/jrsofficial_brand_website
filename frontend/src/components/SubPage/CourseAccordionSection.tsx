import { Accordion } from "..";
import { useEffect, useState } from "react";
import useFetchData from "../../hooks/useFetchData";
import { motion } from "framer-motion";

const CourseAccordionSection = () => {
  const {
    data,
    error,
  }: {
    data: any;
    error: any;
  } = useFetchData("course", "faq");

  const [mainData, setMainData] = useState(null);
  useEffect(() => {
    if (data) {
      setMainData(data.faq[0]);
    }
  }, [data]);

  return (
    <>
      {error && <h1>Something went wrong</h1>}
      {mainData && (
        <>
          <div className="course-accordion-title">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "backInOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              {mainData.faqTitle}
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "backInOut", delay: 0.3 }}
            viewport={{ once: true }}
            className="accordion-items"
          >
            <Accordion accordionData={mainData.faqItems} />
          </motion.div>
        </>
      )}
    </>
  );
};

export default CourseAccordionSection;
