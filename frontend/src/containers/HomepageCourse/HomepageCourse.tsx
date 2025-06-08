import { useEffect, useState } from "react";
import { Button } from "../../components";
import "./HomepageCourse.scss";
import { motion } from "framer-motion";
import useFetchData from "../../hooks/useFetchData";
import Loader from "../../components/Loader/Loader";
import { urlFor } from "../../../client/client";
import { HomepageCourseSchema } from "../../interfaces/interface";

const HomepageCourse = () => {
  const { data, loading, error } = useFetchData("homepageCourse");
  const [mainData, setMainData] = useState<HomepageCourseSchema | null>(null);

  useEffect(() => {
    if (data) {
      setMainData(data);
    }
  }, [data]);

  return (
    <>
      {error && <h1>Something went wrong</h1>}
      {loading && <Loader />}
      {mainData && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "backInOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="homepageCourse"
        >
          <div className="homepageCourse-top-section">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: [30, 0] }}
              transition={{ duration: 0.5, ease: "backInOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="homepageCourse-top-section-banner"
            >
              <div className="img-bg">
                <img
                  src={urlFor(mainData?.coursePage[0].courseBanner).url()}
                  alt="homepage course banner"
                  loading="lazy"
                  height={200}
                  width={200}
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: [30, 0] }}
              transition={{ duration: 0.5, ease: "backInOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="homepageCourse-top-section-heading"
            >
              <div className="heading-container">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: [30, 0] }}
                  transition={{ duration: 0.5, ease: "backInOut", delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  {mainData?.coursePage[0].title}
                </motion.h2>
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: [30, 0] }}
                  transition={{ duration: 0.5, ease: "backInOut", delay: 0.3 }}
                  viewport={{ once: true }}
                  className="description"
                >
                  {mainData?.coursePage[0].description}
                </motion.span>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: [30, 0] }}
                  transition={{ duration: 0.5, ease: "backInOut", delay: 0.4 }}
                  viewport={{ once: true }}
                  className="action"
                >
                  <Button
                    name={mainData?.coursePage[0].buttonText}
                    backgroundColor="#000"
                    color="#fff"
                    hoverBackgroundColor="#bce4e9"
                    hoverColor="#000"
                    action="redirectInternal"
                    actionData={"/work/course"}
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
          <div className="homepageCourse-mobile-separator">
            <div className="homepageCourse-mobile-separator-line"></div>
            <div className="homepageCourse-mobile-separator-line"></div>
          </div>
          <div className="homepageCourse-bottom-section">
            <div
              className="homepageCourse-bottom-section-action"
            >
              <div className="prod-section-content">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: [30, 0] }}
                  transition={{ duration: 0.5, ease: "backInOut", delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  {mainData?.productionPage[0].title}
                </motion.h2>
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: [30, 0] }}
                  transition={{ duration: 0.5, ease: "backInOut", delay: 0.3 }}
                  viewport={{ once: true }}
                  className="description"
                >
                  {mainData?.productionPage[0].description}
                </motion.span>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: [30, 0] }}
                  transition={{ duration: 0.5, ease: "backInOut", delay: 0.4 }}
                  viewport={{ once: true }}
                  className="action"
                >
                  <Button
                    name={mainData?.productionPage[0].buttonText}
                    backgroundColor="#000"
                    color="#fff"
                    hoverBackgroundColor="#bce4e9"
                    hoverColor="#000"
                    action="redirectInternal"
                    actionData={"/work/production"}
                  />
                </motion.div>
              </div>
            </div>
            <div
              className="homepageCourse-bottom-section-img"
            >
              <img
                src={urlFor(mainData?.productionPage[0].courseBanner).url()}
                alt="homepage course banner"
                loading="lazy"
                height={200}
                width={200}
              />
              <div className="img-overlay"></div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default HomepageCourse;
