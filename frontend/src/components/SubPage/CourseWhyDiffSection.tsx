import { useEffect, useState } from "react";
import useFetchData from "../../hooks/useFetchData";
import { motion } from "framer-motion";

const CourseWhyDiffSection = () => {
  const {
    data,
    error,
  }: {
    data: any;
    error: any;
  } = useFetchData("course", "whyDifferent");

  const [mainData, setMainData] = useState(null);
  useEffect(() => {
    if (data) {
      setMainData(data.whyDifferent[0]);
    }
  }, [data]);

  return (
    <>
      {error && <h1>Something went wrong</h1>}
      {mainData && (
        <>
          <div className="course-why-different-section-title">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "backInOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              {mainData.whyDifferentTitle}
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "backInOut", delay: 0.4 }}
            viewport={{ once: true }}
            className="course-why-different-section-desc"
          >
            <span>{mainData.whyDifferentText}</span>
          </motion.div>
        </>
      )}
    </>
  );
};

export default CourseWhyDiffSection;
