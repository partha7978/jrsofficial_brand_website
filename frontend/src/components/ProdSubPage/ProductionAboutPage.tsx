import { motion } from "framer-motion";
import Button from "../Button/Button";
import { HiPlay } from "react-icons/hi2";
import { useEffect, useState } from "react";
import { VideoPlayer } from "..";
import useFetchData from "../../hooks/useFetchData";
import { getFileAsset } from "@sanity/asset-utils";
import { ProductionReusuableSeparator } from "./";

const ProductionAboutPage = () => {
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
        <section className="production-about-main">
          <div className="production-about-main-header">
            <ProductionReusuableSeparator color={"#ffffff"} />
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: [30, 0] }}
              transition={{ duration: 0.5, ease: "backInOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="production-about-main-header-title"
            >
              Learn the strategies JRS uses to generate 50 Lakh+ per year with
              100+ clients
            </motion.h1>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: [30, 0] }}
            transition={{ duration: 0.5, ease: "backInOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="production-about-main-content"
          >
            <video
              src={bgVideo}
              autoPlay
              loop
              muted
              preload="auto"
              playsInline
            ></video>
            <div className="production-about-main-content-video-overlay"></div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "backInOut", delay: 0.4 }}
              viewport={{ once: true }}
              className="production-about-main-content-btn"
            >
              <Button
                name="Watch"
                backgroundColor="rgb(0, 0, 0, 0.1)"
                color="#ffffff"
                hoverBackgroundColor="rgb(0, 0, 0, 0.1)"
                hoverColor="#ffffff"
                icon={<HiPlay />}
                backgroundBlur={42}
                action="triggerPopup"
                actionData={handleVideoPopup}
              />
            </motion.div>
          </motion.div>
        </section>
      )}
    </>
  );
};

export default ProductionAboutPage;
