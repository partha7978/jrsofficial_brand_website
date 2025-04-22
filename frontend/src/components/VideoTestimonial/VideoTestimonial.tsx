import { useRef, useState } from "react";
import "./VideoTestimonials.scss";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import { motion } from "framer-motion";
import { IoPlayCircleOutline } from "react-icons/io5";
import { VideoPlayer } from "..";

const VideoTestimonial = () => {
  const sliderRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const handleVideoPopup = () => {
    setIsOpen(true);
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
      <>
        <VideoPlayer
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          videoLink={
            "https://videos.pexels.com/video-files/4562023/4562023-hd_1040_1848_30fps.mp4"
          }
        />
      </>
      <section className="videoTestimonial">
        <div className="videoTestimonial-heading">
          <h2>What our clients say</h2>
        </div>
        <div className="videoTestimonial-content">
          <div className="videoTestimonial-content-items" ref={sliderRef}>
            {Array.from({ length: 6 }).map((_, index) => (
              <div className="videoTestimonial-content-items-item" key={index}>
                <video
                  src={
                    "https://videos.pexels.com/video-files/4562023/4562023-hd_1040_1848_30fps.mp4"
                  }
                  autoPlay
                  loop
                  muted
                  preload="auto"
                  playsInline
                ></video>
                <div className="watchBtn" onClick={handleVideoPopup}>
                  <IoPlayCircleOutline />
                </div>
                <div className="video-overlay"></div>
              </div>
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
  );
};

export default VideoTestimonial;
