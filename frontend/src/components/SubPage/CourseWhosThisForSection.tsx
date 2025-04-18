import { FaRegArrowAltCircleRight } from "react-icons/fa";
import useFetchData from "../../hooks/useFetchData";
import { useEffect, useState } from "react";
import { urlFor } from "../../../client/client";
import { motion } from "framer-motion";

const CourseWhosThisForSection = () => {
  const {
    data,
    error,
  }: {
    data: any;
    error: any;
  } = useFetchData("course", "whoIsThisFor");

  const [mainData, setMainData] = useState(null);
  useEffect(() => {
    if (data) {
      setMainData(data.whoIsThisFor[0]);
    }
  }, [data]);

  return (
    <>
      {error && <h1>Something went wrong</h1>}
      {mainData && (
        <>
          <div className="course-whose-this-for-section-title">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "backInOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              {mainData.whoIsThisForTitle}
            </motion.h2>
          </div>
          <div className="course-whose-this-for-section-items">
            {mainData.whoIsThisForItems?.map((item: any, index: number) => (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: "backInOut",
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
                className="item"
                key={item.whoIsThisForItemTitle}
              >
                {/* <TbCameraSpark /> */}
                {item.whoIsThisForItemImage ? (
                  <img
                    src={urlFor(item.whoIsThisForItemImage).url()}
                    alt={item.whoIsThisForItemTitle + "icon"}
                    loading="lazy"
                  />
                ) : (
                  <FaRegArrowAltCircleRight />
                )}
                <span>{item.whoIsThisForItemTitle}</span>
              </motion.div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default CourseWhosThisForSection;
