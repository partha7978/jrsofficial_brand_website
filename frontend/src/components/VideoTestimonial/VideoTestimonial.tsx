import { useEffect, useRef, useState } from "react";
import "./VideoTestimonials.scss";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import { motion } from "framer-motion";
import { IoPlayCircleOutline } from "react-icons/io5";
import { VideoPlayer } from "..";
import useFetchData from "../../hooks/useFetchData";
import { getFileAsset } from "@sanity/asset-utils";
import { HiMiniPlay } from "react-icons/hi2";

const VideoTestimonial = () => {
  const sliderRef = useRef(null);
  const [mainData, setMainData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [currentPopupVideo, setCurrentPopupVideo] = useState(null);

  const {
    data,
    error,
    loading,
  }: {
    data: any;
    error: any;
  } = useFetchData("videoTestimonial");
  const projectId = import.meta.env.VITE_API_KEY_PROJECTID;
  const dataset = "production";

  useEffect(() => {
    if (data) {
      console.log(data, "data");
      setMainData(data);
    }
  }, [data]);

  const handleVideoPopup = (url) => {
    setIsOpen(true);
    setCurrentPopupVideo(url);
  };

  const handleScroll = (direction: "next" | "prev") => {
    if (sliderRef.current) {
      const scrollAmount =
        window.innerWidth < 768
          ? sliderRef.current.clientWidth / 1
          : sliderRef.current.clientWidth / 3; // Adjust this based on how much to slide
      sliderRef.current.scrollBy({
        left: direction === "next" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
    console.log(sliderRef.current);
  };

  return (
    <>
      {error && <h1>Something went wrong</h1>}
      {mainData && (
        <>
          <>
            {currentPopupVideo && (
              <VideoPlayer
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                videoLink={
                  getFileAsset(currentPopupVideo, { projectId, dataset }).url
                }
              />
            )}
          </>
          <section className="videoTestimonial">
            <div className="videoTestimonial-heading">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "backInOut", delay: 0.2 }}
              >
                Real People, Real Growth, Real Impact
              </motion.h2>
              <span>
                From self-doubt to self-made. How our community members transformed their lives. 
              </span>
            </div>
            <div className="videoTestimonial-content">
              <div className="videoTestimonial-content-items" ref={sliderRef}>
                {mainData.map((video, index) => (
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: [30, 0] }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      ease: "backInOut",
                      delay: 0.2,
                    }}
                    className="videoTestimonial-content-items-item"
                    key={video.title}
                  >
                    <video
                      src={
                        getFileAsset(video.video, { projectId, dataset }).url
                      }
                      autoPlay
                      loop
                      muted
                      preload="auto"
                      playsInline
                    ></video>
                    <div
                      className="watchBtn"
                      onClick={() =>
                        handleVideoPopup(
                          getFileAsset(video.video, { projectId, dataset }).url
                        )
                      }
                    >
                      <HiMiniPlay />
                    </div>
                    <div className="video-overlay"></div>
                    <div className="video-text">
                      <motion.h3
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          ease: "backInOut",
                          delay: 0.3,
                        }}
                      >
                        {video.title}
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          ease: "backInOut",
                          delay: 0.4,
                        }}
                      >
                        {video.name}
                      </motion.p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="videoTestimonial-content-action">
                <motion.button
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, ease: "backInOut", delay: 0.4 }}
                  className="slider-btn prev-btn"
                  viewport={{ once: true }}
                  onClick={() => handleScroll("prev")}
                  aria-label="previous"
                >
                  <IoIosArrowRoundBack />
                </motion.button>
                <motion.button
                  initial={{ opacity: 0, x: 50 }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, ease: "backInOut", delay: 0.4 }}
                  className="slider-btn next-btn"
                  onClick={() => handleScroll("next")}
                  aria-label="next"
                >
                  <IoIosArrowRoundForward />
                </motion.button>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default VideoTestimonial;
