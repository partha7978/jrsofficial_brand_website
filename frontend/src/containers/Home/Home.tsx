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

    console.log(mainLinkSchema, "mainLinkSchema");
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
            <div className="main-heading">
              <h1>{data.mainHeadingFirstLine}</h1>
              <h1>{data.mainHeadingSecondLine}</h1>
            </div>
            <div className="main-subheading">
              <p>{data.mainSubheading}</p>
            </div>
          </section>
          <motion.section
            className="homepage-main-link-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "backInOut", delay: 0.7 }}
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
                        height={20}
                        width={20}
                      />
                      <p>{link.name}</p>
                    </div>
                  </a>
                ))}
            </div>
          </motion.section>
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
