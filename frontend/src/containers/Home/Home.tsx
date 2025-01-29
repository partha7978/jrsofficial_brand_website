import "./Home.scss";
import { motion } from "framer-motion";
import useFetchData from "../../hooks/useFetchData";
import { urlFor } from "../../../client/client";
import AnimatedCircularProgressBar from "../../components/ui/animated-circular-progress-bar";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import Marquee from "react-fast-marquee";

import Particles from "../../components/ui/particles";

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
              <Marquee direction="left">
                {data.mainBackgroundImages &&
                  data.mainBackgroundImages.map((image, index) => (
                    <img
                      height={500}
                      width={500}
                      loading="lazy"
                      key={image._key + index}
                      src={urlFor(image).url()}
                      alt="main background image"
                      className="homepage-main-image-item"
                    />
                  ))}
              </Marquee>
              <Marquee direction="right">
                {data.mainBackgroundImages &&
                  data.mainBackgroundImages.map((image, index) => (
                    <div className="homepage-main-image-item-container"  key={image._key + index}>
                      <img
                        height={500}
                        width={500}
                        loading="lazy"
                        src={urlFor(image).url()}
                        alt="main background image"
                        className="homepage-main-image-item"
                      />
                    </div>
                  ))}
              </Marquee>
            </motion.section>
          )}
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
