import { useEffect, useState } from "react";
import { Button } from "..";
import useFetchData from "../../hooks/useFetchData";
import { urlFor } from "../../../client/client";
import { motion } from "framer-motion";

const CourseStillHaveQuestionSection = () => {
  const {
    data,
    error,
  }: {
    data: any;
    error: any;
  } = useFetchData("course", "imageCTA");

  const [mainData, setMainData] = useState(null);
  useEffect(() => {
    if (data) {
      setMainData(data.imageCTA[0]);
    }
  }, [data]);

  return (
    <>
      {error && <h1>Something went wrong</h1>}
      {mainData && (
        <>
          <motion.img
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "backInOut", delay: 0.2 }}
            viewport={{ once: true }}
            src={urlFor(mainData?.imageCTAImage).url()}
            alt="The JRS Show Image"
            loading="lazy"
            height={200}
            width={200}
          />
          <div className="question-section">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "backInOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="question-section-title"
            >
              {mainData.imageCTATitle}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "backInOut", delay: 0.4 }}
              viewport={{ once: true }}
              className="question-section-desc"
            >
              {mainData.imageCTAText}
            </motion.p>
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "backInOut", delay: 0.4 }}
              viewport={{ once: true }}
              className="question-section-desc2"
            >
              {mainData.imageCTASubText}
            </motion.span>{" "}
            <Button
              name={mainData.imageCTAButton}
              backgroundColor="rgb(255, 255, 255, 0.1)"
              color="#ffffff"
              hoverBackgroundColor="rgb(255, 255, 255, 0.1)"
              hoverColor="#ffffff"
              backgroundBlur={42}
              action="redirectExternal"
              actionData={mainData.imageCTALink}
            />
          </div>
        </>
      )}
    </>
  );
};

export default CourseStillHaveQuestionSection;
