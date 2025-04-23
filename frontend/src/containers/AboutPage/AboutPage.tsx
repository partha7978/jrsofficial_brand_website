import { Button, BentoGrid } from "../../components";
import Footer from "../Footer/Footer";
import "./AboutPage.scss";
import { BsYoutube } from "react-icons/bs";
import { BsSpotify } from "react-icons/bs";
import useFetchData from "../../hooks/useFetchData";
import Loader from "../../components/Loader/Loader";
import { urlFor } from "../../../client/client";
import { MainAboutPageSchema } from "../../interfaces/interface";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  const [about, setAbout] = useState<MainAboutPageSchema | null>(null);

  const {
    data,
    loading,
    error,
  }: {
    data: MainAboutPageSchema | null;
    loading: boolean;
    error: any;
  } = useFetchData("mainAboutPage");

  useEffect(() => {
    if (data) {
      setAbout(data);
    }
  }, [data]);

  if (error) {
    console.log(error);
  }

  return (
    <main className="aboutPage">
      {error && <h1>Something went wrong</h1>}
      {loading && <Loader />}
      {about && (
        <>
          <section className="aboutPage-heading">
            <div className="heading-container">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "backInOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                {about.title || "About Us"}
              </motion.h1>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "backInOut", delay: 0.4 }}
                viewport={{ once: true }}
              >
                {about.description}
              </motion.span>
            </div>
          </section>
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "backInOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="aboutPage-main"
          >
            <div className="aboutPage-main-top">
              <div className="aboutPage-main-top-text">
                <motion.h2
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, ease: "backInOut", delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  {about.logoName}
                </motion.h2>
                <motion.span
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, ease: "backInOut", delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  {about.logoDesc}
                </motion.span>
              </div>
              <div className="aboutPage-main-top-img">
                <motion.img
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "backInOut", delay: 0.4 }}
                  viewport={{ once: true }}
                  src={urlFor(about.featuredImage).url()}
                  alt="About Us Image"
                  loading="lazy"
                />
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "backInOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="aboutPage-main-stats"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "backInOut", delay: 0.2 }}
                viewport={{ once: true }}
                className="aboutPage-main-stats-item"
              >
                <h2>{about.views || "N/A"}+</h2>
                <span>Views</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "backInOut", delay: 0.3 }}
                viewport={{ once: true }}
                className="aboutPage-main-stats-item"
              >
                <h2>{about.impressions || "N/A"}+</h2>
                <span>Impression</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "backInOut", delay: 0.4 }}
                viewport={{ once: true }}
                className="aboutPage-main-stats-item"
              >
                <h2>{about.clients || "N/A"}+</h2>
                <span>Clients</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "backInOut", delay: 0.5 }}
                viewport={{ once: true }}
                className="aboutPage-main-stats-item"
              >
                <h2>{about.hosts || "N/A"}+</h2>
                <span>Hosts</span>
              </motion.div>
            </motion.div>
          </motion.section>
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "backInOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="aboutPage-cta"
          >
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "backInOut", delay: 0.3 }}
              viewport={{ once: true }}
            >
              Because Every Contribution Counts — Let’s Keep the Momentum!
            </motion.p>
            <div className="aboutPage-cta-action">
              <Button
                name="Subscribe Now"
                color="#FFCA85"
                hoverColor="#000000"
                backgroundColor="#000000"
                hoverBackgroundColor="#FFCA85"
                icon={<BsYoutube />}
                action="redirectExternal"
                actionData={about.youtubeLink}
              ></Button>
              <Button
                name="Listen Now"
                color="#FFCA85"
                hoverColor="#000000"
                backgroundColor="#000000"
                hoverBackgroundColor="#FFCA85"
                icon={<BsSpotify />}
                action="redirectExternal"
                actionData={about.spotifyLink}
              ></Button>
            </div>
          </motion.section>
          {about.highlights && (
            <section className="aboutPage-highlights">
              <BentoGrid highlights={about.highlights} />
            </section>
          )}
        </>
      )}
    </main>
  );
};

const AboutWithFooter = Footer(AboutPage);

export default AboutWithFooter;
