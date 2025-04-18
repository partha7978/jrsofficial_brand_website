import { Button } from "..";
import { Link } from "react-router";
import useFetchData from "../../hooks/useFetchData";
import { useEffect, useState } from "react";
import { urlFor } from "../../../client/client";
import { motion } from "framer-motion";

const CourseAboutSection = () => {
  const {
    data,
    error,
  }: {
    data: any;
    error: any;
  } = useFetchData("course", "aboutCard");

  const [mainData, setMainData] = useState(null);
  useEffect(() => {
    if (data) {
      setMainData(data.aboutCard[0]);
    }
  }, [data]);

  return (
    <>
      {error && <h1>Something went wrong</h1>}
      {mainData && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "backInOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="course-about-container"
        >
          <div className="course-about-image-section">
            <img
              src={urlFor(mainData?.aboutCardImage).url()}
              alt="The JRS Show Image"
              loading="lazy"
              height={200}
              width={200}
            />
          </div>
          <div className="course-about-overlay"></div>
          <div className="course-about-content">
            <div className="course-about-content-heading">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: "backInOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                Heya!
              </motion.p>
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: "backInOut", delay: 0.4 }}
                viewport={{ once: true }}
              >
                {mainData?.aboutCardTitle}
              </motion.h2>
            </div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "backInOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="course-about-content-description"
            >
              {mainData?.aboutCardDescription}
            </motion.span>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "backInOut", delay: 0.4 }}
              viewport={{ once: true }}
              className="course-about-content-action"
            >
              <Button
                name="Know More"
                backgroundColor="rgb(0, 0, 0, 0.5)"
                color="#ffffff"
                hoverBackgroundColor="rgb(0, 0, 0, 0.5)"
                hoverColor="#ffffff"
                action="redirectInternal"
                actionData={"/about"}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default CourseAboutSection;
