import { Button, Input, VideoPlayer } from "..";
import { FaPlay } from "react-icons/fa";
import { getFileAsset } from "@sanity/asset-utils";
import { useEffect, useState } from "react";
import useFetchData from "../../hooks/useFetchData";
import { urlFor } from "../../../client/client";
import { motion } from "framer-motion";

const CourseFeaturedPodcastSection = () => {
  const {
    data,
    error,
  }: {
    data: any;
    error: any;
  } = useFetchData("course", "featuredPodcast");
  const projectId = import.meta.env.VITE_API_KEY_PROJECTID;
  const dataset = "production";

  const [mainData, setMainData] = useState(null);
  const [mainVideoData, setMainVideoData] = useState<string>("");
  const [bgVideo, setBgVideo] = useState<string>("");
  useEffect(() => {
    if (data) {
      setMainData(data.featuredPodcast[0]);
      const bgVideoAsset = getFileAsset(
        data.featuredPodcast[0]?.podcastVideo[0]?.podcastBackgroundVideo,
        { projectId, dataset }
      );
      setBgVideo(bgVideoAsset.url);

      const mainVideoAsset = getFileAsset(
        data.featuredPodcast[0]?.podcastVideo[0]?.podcastVideo,
        { projectId, dataset }
      );
      setMainVideoData(mainVideoAsset.url);
    }
  }, [data]);

  // Video Popup
  const [isOpen, setIsOpen] = useState(false);
  const handleVideoPopup = () => {
    setIsOpen(true);
  };

  return (
    <>
      {error && <h1>Something went wrong</h1>}
      <>
        <VideoPlayer
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          videoLink={mainVideoData}
        />
      </>
      {mainData && (
        <>
          <div className="featured-podcast-top-section">
            <div className="featured-podcast-top-section-banner">
              <div className="img-bg">
                <motion.img
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, ease: "backInOut", delay: 0.3 }}
                  viewport={{ once: true }}
                  src={urlFor(mainData.podcastImage).url()}
                  alt="featured podcast banner"
                  loading="lazy"
                  height={200}
                  width={200}
                />
              </div>
            </div>
            <div className="featured-podcast-top-section-heading">
              <motion.h2
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "backInOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                {mainData.podcastTitle}
              </motion.h2>
            </div>
          </div>
          <div className="featured-podcast-mobile-separator">
            <div className="featured-podcast-mobile-separator-line"></div>
            <div className="featured-podcast-mobile-separator-line"></div>
          </div>
          <div className="featured-podcast-bottom-section">
            <div className="featured-podcast-bottom-section-action">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: [30, 0] }}
                transition={{ duration: 0.5, ease: "backInOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                {mainData.podcastForm[0]?.podcastFormTitle}
              </motion.h2>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: [30, 0] }}
                transition={{ duration: 0.5, ease: "backInOut", delay: 0.4 }}
                viewport={{ once: true }}
                className="description"
              >
                {mainData.podcastForm[0]?.podcastFormDescription}
              </motion.span>
              <div className="featured-ratio">
                {mainData.podcastForm[0]?.podcastFormHighlights?.map((item) => (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, y: [30, 0] }}
                    transition={{
                      duration: 0.5,
                      ease: "backInOut",
                      delay: 0.6,
                    }}
                    viewport={{ once: true }}
                    className="ratio"
                    key={item.highlightPercentageName}
                  >
                    <p>{item.highlightPercentage}%</p>
                    <span>{item.highlightPercentageName}</span>
                  </motion.div>
                ))}
              </div>
              <motion.form
                action=""
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: [30, 0] }}
                transition={{ duration: 0.5, ease: "backInOut", delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Input
                  name="First Name"
                  type="text"
                  placeholder="First Name"
                  className="name"
                  background="#141414"
                  color="#ffffff"
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="email"
                  background="#141414"
                  color="#ffffff"
                  required={true}
                />
                <Input
                  name="phone"
                  type="phone"
                  placeholder="Phone"
                  className="phone"
                  background="#141414"
                  color="#ffffff"
                  required={true}
                />
                <Button
                  name="Send me invitations"
                  backgroundColor="rgb(255, 151, 0)"
                  color="#000000"
                  hoverBackgroundColor="#ffffff"
                  hoverColor="#000000"
                  action="redirectExternal"
                  actionData={
                    "https://www.linkedin.com/in/partha-sarathi-muduli/"
                  }
                />
                {/* <span className="additional-description">
                FREE access to exclusive insights, private Q+As, and inspiring
                episodes of The JRS Show, delivered with 💜 to your inbox.
                (Unsub anytime in a click.)
              </span> */}
              </motion.form>
            </div>
            <div className="featured-podcast-bottom-section-video">
              <video
                src={bgVideo}
                autoPlay
                loop
                muted
                preload="auto"
                playsInline
              ></video>
              <div className="video-overlay"></div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: "backInOut", delay: 0.4 }}
                viewport={{ once: true }}
                className="video-play-btn"
              >
                <Button
                  name="Watch"
                  backgroundColor="rgb(0, 0, 0, 0.1)"
                  color="#ffffff"
                  hoverBackgroundColor="rgb(0, 0, 0, 0.1)"
                  hoverColor="#ffffff"
                  icon={<FaPlay />}
                  backgroundBlur={42}
                  action="triggerPopup"
                  actionData={handleVideoPopup}
                />
              </motion.div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CourseFeaturedPodcastSection;
