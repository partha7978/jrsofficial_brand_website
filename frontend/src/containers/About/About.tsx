import "./About.scss";
import useFetchData from "../../hooks/useFetchData";
import Loader from "../../components/Loader/Loader";
import { urlFor } from "../../../client/client";
import { useMemo } from "react";
import useCalculateScrollAndWidth from "../../hooks/useCalculateScroll";
import { motion } from "framer-motion";
import { Button } from "../../components";
import { TiLocationArrowOutline } from "react-icons/ti";
import { Link } from "react-router";
import { FaSpotify } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

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
          <div className="about-card-img">
            <img
              src={urlFor(
                data.featuredImage || data.featuredImageForMobile
              ).url()}
              alt="Profile Image"
              height={400}
              width={200}
            />
          </div>
          <div className="about-card-content">
            <div className="about-card-content-title">
              <h2>{data.title}</h2>
            </div>
            <div className="about-card-content-subText">
              <span>{data.description}</span>
            </div>
            <div className="about-card-content-list">
              <a
                href={
                  data.spotifyLink ||
                  "https://open.spotify.com/show/4qBCmtPsd77nPadhNlFHxv?si=74638e733b6c4a0d"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: [50, 0] }}
                  transition={{
                    duration: 0.5,
                    ease: "backInOut",
                    delay: 0.1,
                  }}
                  viewport={{ once: true }}
                  className="about-card-content-list-item"
                >
                  <div className="icon">
                    <FaSpotify />
                  </div>
                </motion.div>
              </a>
              <a
                href={data.youtubeLink || "https://www.youtube.com/@Thejrsshow"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: [50, 0] }}
                  transition={{
                    duration: 0.5,
                    ease: "backInOut",
                    delay: 0.2,
                  }}
                  viewport={{ once: true }}
                  className="about-card-content-list-item"
                >
                  <div className="icon">
                    <FaYoutube />
                  </div>
                </motion.div>
              </a>
              <a
                href={
                  data.instagramLink ||
                  "https://www.instagram.com/jrsofficial_/"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: [50, 0] }}
                  transition={{
                    duration: 0.3,
                    ease: "backInOut",
                    delay: 0.4,
                  }}
                  viewport={{ once: true }}
                  className="about-card-content-list-item"
                >
                  <div className="icon">
                    <RiInstagramFill />
                  </div>
                </motion.div>
              </a>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: [50, 0] }}
              transition={{ duration: 0.5, ease: "backInOut", delay: 0.3 }}
              viewport={{ once: true }}
              className="about-card-content-redirection"
            >
              <Link
                to="/work/courses"
                className="about-card-content-redirection-item"
              >
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1602661287394-ccf02e1a0893?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVuc3BhbHNofGVufDB8fDB8fHww"
                    alt="course redirection image"
                    height={100}
                    width={100}
                  />
                  <div className="overlay"></div>
                  <div className="about-card-content-redirection-item-text">
                    Course <TiLocationArrowOutline />
                  </div>
                </div>
              </Link>
              <Link
                to="/work/production"
                className="about-card-content-redirection-item"
              >
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1626366657705-84fb039744f7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHVuc3BhbHNofGVufDB8fDB8fHww"
                    alt="production redirection image"
                    height={100}
                    width={100}
                  />
                  <div className="overlay"></div>
                  <div className="about-card-content-redirection-item-text">
                    Production <TiLocationArrowOutline />
                  </div>
                </div>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: [50, 0] }}
              transition={{ duration: 0.5, ease: "backInOut", delay: 0.4 }}
              viewport={{ once: true }}
              className="about-card-content-action-btn"
            >
              <Button
                name="Know More"
                action="redirectInternal"
                actionData="/about"
                width="100%"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default About;
