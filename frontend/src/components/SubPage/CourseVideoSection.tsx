import React, { useEffect, useState } from "react";
import { Button } from "..";
import { FaVideo } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import useFetchData from "../../hooks/useFetchData";
import { VideoPlayer } from "../index";
import { getFileAsset } from "@sanity/asset-utils";

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
            <h1>
              {mainData.title} <span>{mainData.pinkLine}</span>
            </h1>
          </div>
          <div className="course-video-action">
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
          </div>
          <div className="course-video-navigation" onClick={handleSmallScroll}>
            <IoIosArrowDown />
          </div>
        </>
      )}
    </>
  );
};

export default CourseVideoSection;
