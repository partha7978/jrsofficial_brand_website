import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { placeholder_image } from "../../assets";
import { urlFor } from "../../../client/client";
import "./MainMarquee.scss";
import useFetchData from "../../hooks/useFetchData";

const MainMarquee = () => {
  const defaultImageSchema = [...Array(8)].map((_, index) => ({
    key: `placeholder-${index}`,
    value: `Value ${index}`,
  }));

  const { data, loading, error } = useFetchData(
    "homepage",
    "mainBackgroundImages"
  );

  return (
    <motion.section
      layoutId="marquee"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "backInOut", delay: 0.8 }}
      className="homepage-main-image"
    >
      {!loading ? (
        <>
          <Marquee direction="left">
            {data?.mainBackgroundImages?.length > 0 &&
              data?.mainBackgroundImages.map((image, index) => (
                <div
                  className="homepage-main-image-item-container white-bg"
                  key={image._key + index}
                >
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
          <Marquee direction="right">
            {data?.mainBackgroundImages?.length > 0 &&
              data?.mainBackgroundImages.map((image, index) => (
                <div
                  className="homepage-main-image-item-container black-bg"
                  key={image._key + index}
                >
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
        </>
      ) : (
        <>
          <Marquee direction="left">
            {defaultImageSchema.map((image, index) => (
              <div
                className="homepage-main-image-item-container white-bg"
                key={image.key + index}
              >
                <img
                  height={500}
                  width={500}
                  loading="lazy"
                  src={placeholder_image}
                  alt="main background image"
                  className="homepage-main-image-item"
                />
              </div>
            ))}
          </Marquee>
          <Marquee direction="right">
            {defaultImageSchema.map((image, index) => (
              <div
                className="homepage-main-image-item-container black-bg"
                key={image.key + index}
              >
                <img
                  height={500}
                  width={500}
                  loading="lazy"
                  src={placeholder_image}
                  alt="main background image"
                  className="homepage-main-image-item"
                />
              </div>
            ))}
          </Marquee>
        </>
      )}
    </motion.section>
  );
};

export default MainMarquee;
