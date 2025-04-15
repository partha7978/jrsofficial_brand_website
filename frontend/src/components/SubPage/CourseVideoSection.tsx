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

      const fileAsset = getFileAsset(
        data.coursePageVideo[0].mainBackgroundVideo,
        { projectId, dataset }
      );
      setMainVideoData(fileAsset.url);
      const bgAsset = getFileAsset(
        data.coursePageVideo[0].mainBackgroundVideo,
        { projectId, dataset }
      );
      setBgVideo(bgAsset.url);
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
          <div className="course-video-navigation">
            <IoIosArrowDown />
          </div>
        </>
      )}
    </>
  );
};

export default CourseVideoSection;
