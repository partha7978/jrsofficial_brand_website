import { useEffect, useRef, useState } from "react";
import { EpisodeCard, SliderEpisodeCard } from "../../components";
import "./Episodes.scss";
import useFetchData from "../../hooks/useFetchData";
import Loader from "../../components/Loader/Loader";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import { EpisodesArraySchemaForSlider } from "../../interfaces/interface";
import { motion } from "framer-motion";

const Episodes = () => {
  const {
    data,
    loading,
  }: { data: EpisodesArraySchemaForSlider[] | null; loading: boolean } =
    useFetchData(
      "episodes",
      "title, speakerName, episodeImage, episodeDate, category, shortDescription"
    );
  const [showLatestResult, setShowLatestResult] = useState(null);
  const sliderRef = useRef(null);

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

  useEffect(() => {
    if (data && data.length > 0) {
      setShowLatestResult(
        data.sort((a, b) => new Date(b.episodeDate) - new Date(a.episodeDate))
      );
    }
    console.log(showLatestResult);
  }, [data]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="episodes">
          <div className="episodes-title-section">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "backInOut", delay: 0.2 }}
            >
              Our Most Recent <br /> Episodes
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "backInOut", delay: 0.2 }}
              className="episodes-title-section-action-btn"
            >
              <button>View All</button>
            </motion.div>
          </div>
          <div className="episodes-main__container">
            <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "backInOut", delay: 0.4 }}
            className="simple-slider">
              <div className="slider-container" ref={sliderRef}>
                {showLatestResult &&
                  showLatestResult.map((episode, index) => (
                    <div key={episode.title + index} className="slider-item">
                      <SliderEpisodeCard {...episode} />
                    </div>
                  ))}
              </div>
            </motion.div>
            <div className="slider-action-btn">
              <motion.button
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "backInOut", delay: 0.4 }}
                className="slider-btn prev-btn"
                onClick={() => handleScroll("prev")}
                aria-label="previous"
              >
                <IoIosArrowRoundBack />
              </motion.button>
              <motion.button
                initial={{ opacity: 0, x: 50 }}
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
        </div>
      )}
    </>
  );
};

export default Episodes;
