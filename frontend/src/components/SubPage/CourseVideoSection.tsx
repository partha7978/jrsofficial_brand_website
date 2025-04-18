import React, { useEffect, useState } from "react";
import { Button } from "..";
import { FaVideo } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import useFetchData from "../../hooks/useFetchData";
import { VideoPlayer } from "../index";
import { getFileAsset } from "@sanity/asset-utils";
import { motion } from "framer-motion";

const projectId = import.meta.env.VITE_API_KEY_PROJECTID;
const dataset = "production";

const CourseVideoSection = () => {
  const {
    data,
    error,
  }: {
    data: any;
    error: any;
  } = useFetchData("course", "mainTitle, coursePageVideo");

  const [mainData, setMainData] = useState(null);
  const [mainVideoData, setMainVideoData] = useState<string>("");
  const [bgVideo, setBgVideo] = useState<string>("");
  useEffect(() => {
    if (data) {
      setMainData(data.mainTitle[0]);

      const mainVideoAsset = getFileAsset(
        data.coursePageVideo[0].mainBackgroundVideo,
        { projectId, dataset }
      );
      setMainVideoData(mainVideoAsset.url);
      const bgVideoAsset = getFileAsset(
        data.coursePageVideo[0].mainBackgroundVideo,
        { projectId, dataset }
      );
      setBgVideo(bgVideoAsset.url);
    }
  }, [data]);

  // Video Popup
  const [isOpen, setIsOpen] = useState(false);
  const handleVideoPopup = () => {
    setIsOpen(true);
  };

  const handleSmallScroll = () => {
    const element = document.querySelector(".course-video");
    if (element) {
      const yOffset = +150;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
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
          <video
            src={bgVideo}
            autoPlay
            loop
            muted
            preload="auto"
            playsInline
          ></video>
          <div className="course-video-heading">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: [30, 0] }}
              transition={{ duration: 0.5, ease: "backInOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              {mainData.title} <span>{mainData.pinkLine}</span>
            </motion.h1>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: "backInOut", delay: 0.4 }}
            viewport={{ once: true }}
            className="course-video-action"
          >
            <Button
              name="Watch the video"
              backgroundColor=""
              hoverBackgroundColor=""
              color=""
              hoverColor=""
              icon={<FaVideo />}
              action="triggerPopup"
              actionData={handleVideoPopup}
            />
          </motion.div>
          <div className="course-video-navigation" onClick={handleSmallScroll}>
            <IoIosArrowDown />
          </div>
        </>
      )}
    </>
  );
};

export default CourseVideoSection;
