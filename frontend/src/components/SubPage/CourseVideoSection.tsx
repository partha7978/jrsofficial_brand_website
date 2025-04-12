import React, { useEffect, useState } from "react";
import { Button } from "..";
import { FaVideo } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import useFetchData from "../../hooks/useFetchData";

const CourseVideoSection = () => {
  const {
    data,
    error,
  }: {
    data: any;
    error: any;
  } = useFetchData("course", "mainTitle");

  const [mainData, setMainData] = useState(null);
  useEffect(() => {
    if (data) {
      setMainData(data.mainTitle[0]);
    }
  }, [data]);

  return (
    <>
      {error && <h1>Something went wrong</h1>}
      {mainData && (
        <>
          <video
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            autoPlay
            loop
            muted
            preload="auto"
            playsInline
          ></video>
          <div className="course-video-heading">
            <h1>
              {mainData.title}
              {" "}<span>{mainData.pinkLine}</span>
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
