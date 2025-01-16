import "./Home.scss";
import { motion } from "framer-motion";
import useFetchData from "../../hooks/useFetchData";
import { urlFor } from "../../../client/client";
import AnimatedCircularProgressBar from "../../components/ui/animated-circular-progress-bar";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Loader from "../../components/Loader/Loader";

import Particles from "../../components/ui/particles";
import { main } from "motion/react-client";

const Home = () => {
  const { data, loading, error } = useFetchData("homepage");
  const [color, setColor] = useState("#ffffff");
  const [mainLinkSchema, setMainLinkSchema] = useState("");
  useEffect(() => {
    if (data?.mainLink) {
      setMainLinkSchema(data.mainLink);
    }
  }, [data]);

  if (error) {
    console.log(error);
  }

  return (
    <section className="homepage">
      {loading && <Loader />}
      {data && (
        <div className="homepage-main">
          <section className="homepage-main-content">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, y: [30, 0] }}
              transition={{ duration: 0.5, ease: "backInOut", delay: 0.2 }}
              className="main-heading"
            >
              <h1>{data.mainHeadingFirstLine}</h1>
              <h1>{data.mainHeadingSecondLine}</h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, y: [30, 0] }}
              transition={{ duration: 0.5, ease: "backInOut", delay: 0.4 }}
              className="main-subheading"
            >
              <p>{data.mainSubheading}</p>
            </motion.div>
          </section>
          {data.mainBackgroundImages && (
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "backInOut", delay: 0.8 }}
              className="homepage-main-image"
            >
              {data.mainBackgroundImages.map((image: any) => (
                <div>
                  <img
                    src={urlFor(image).url()}
                    alt=""
                    key={image._key}
                    loading="lazy"
                  />
                </div>
              ))}
            </motion.section>
          )}
          {/* <motion.section
            className="homepage-main-link-section"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, y: [30, 0] }}
            transition={{ duration: 0.5, ease: "backInOut", delay: 0.6 }}
          >
            <p className="main-link-title">Now Streaming on</p>
            <div className="main-link">
              {mainLinkSchema &&
                mainLinkSchema.map((link: any) => (
                  <a
                    href={link.link}
                    target="_blank"
                    rel="noreferrer"
                    key={link.name}
                  >
                    <div className="main-link-item">
                      <img
                        src={urlFor(link.icon).url()}
                        alt={link.name}
                        loading="lazy"
                        height={80}
                        width={80}
                      />
                    </div>
                  </a>
                ))}
            </div>
          </motion.section> */}
        </div>
      )}
      <Particles
        className="absolute inset-0"
        quantity={150}
        ease={80}
        color={color}
        refresh
      />
    </section>
  );
};

export default Home;
