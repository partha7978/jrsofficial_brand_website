import "./About.scss";
import { BsArrowRightCircle } from "react-icons/bs";
import useFetchData from "../../hooks/useFetchData";
import Loader from "../../components/Loader/Loader";
import { urlFor } from "../../../client/client";
import { useMemo } from "react";
import useCalculateScrollAndWidth from "../../hooks/useCalculateScroll";
import { motion } from "framer-motion";
import { Button } from "../../components";

const About = () => {
  const { innerWidth } = useCalculateScrollAndWidth();

  // Dynamically set API parameters based on screen width
  const fetchDataArgs = useMemo(() => {
    return innerWidth > 768
      ? ["about", "title, description, featuredImage, featuredList"]
      : ["about", "title, description, featuredImageForMobile, featuredList"];
  }, [innerWidth]);

  const { data, loading, error } = useFetchData(
    fetchDataArgs[0],
    fetchDataArgs[1]
  );

  return (
    <section className="about">
      {error && <h1>Something went wrong</h1>}
      {loading && <Loader />}
      {data && !loading && (
        <motion.div
          className="about-card"
          initial={{ opacity: 0, y: 50 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: [50, 0] }}
          transition={{ duration: 0.5, ease: "backInOut", delay: 0.2 }}
        >
          <motion.div
            className="about-card-img"
            viewport={{ once: true }}
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ opacity: 1, y: [100, 0] }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
          >
            <img
              src={urlFor(
                data.featuredImage || data.featuredImageForMobile
              ).url()}
              alt="Profile Image"
              height={400}
              width={200}
            />
          </motion.div>
          <div className="about-card-content">
            <div className="about-card-content-title">
              <motion.h2
                viewport={{ once: true }}
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ opacity: 1, y: [100, 0] }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
              >
                {data.title}
              </motion.h2>
            </div>
            <div className="about-card-content-subText">
              <motion.span
                viewport={{ once: true }}
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ opacity: 1, y: [100, 0] }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }}
              >
                {data.description}
              </motion.span>
            </div>
            <div className="about-card-content-list">
              {data.featuredList && (
                <ul>
                  {data.featuredList?.map((item, index) => (
                    <motion.li
                      viewport={{ once: true }}
                      initial={{ y: 30, opacity: 0 }}
                      whileInView={{ opacity: 1, y: [30, 0] }}
                      transition={{
                        duration: index / 3 + 0.2,
                        ease: "backInOut",
                        delay: 0.3,
                      }}
                      key={item + index}
                    >
                      <BsArrowRightCircle />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              )}
            </div>
            <motion.div
              viewport={{ once: true }}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ opacity: 1, y: [100, 0] }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
              className="about-card-content-action-btn"
            >
              <Button name="Know More" action="redirectInternal" actionData="/about" />
            </motion.div>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default About;
