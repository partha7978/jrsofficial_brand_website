import { useEffect, useRef, useState } from "react";
import { SliderEpisodeCard } from "../../components";
import "./EpisodesSlider.scss";
import useFetchData from "../../hooks/useFetchData";
import Loader from "../../components/Loader/Loader";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import { EpisodesArraySchemaForSlider } from "../../interfaces/interface";
import { motion } from "framer-motion";
import { Button } from "../../components";
import { Link } from "react-router";

const EpisodesSlider = () => {
  const {
    data,
    loading,
  }: { data: EpisodesArraySchemaForSlider[] | null; loading: boolean } =
    useFetchData(
      "episodes",
      "title, speakerName, episodeImage, episodeDate, category, shortDescription",
      undefined,
      "episodeDate desc"
    );
  const [showLatestResult, setShowLatestResult] = useState<
    EpisodesArraySchemaForSlider[]
  >([]);
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
      const sorted = [...data].sort(
        (a, b) =>
          new Date(b.episodeDate).getTime() - new Date(a.episodeDate).getTime()
      );
      setShowLatestResult(sorted.slice(0, 8));
    }
  }, [data]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section className="episodes">
          <div className="episodes-title-section">
            <h2>
              Our Most Recent <br /> Episodes
            </h2>
            <div className="episodes-title-section-action-btn">
              <Button
                name="View All"
                link="/episodes/all"
                backgroundColor="#141414"
                color="#ffffff"
                hoverBackgroundColor="#FFCA85"
                hoverColor="#000000"
                action="redirectInternal"
                actionData="/episodes/all"
                gtmKey="Episodes_Slider_View_All_Button_Click"
              />
            </div>
          </div>
          <div className="episodes-main__container">
            <div className="simple-slider">
              <div className="slider-container" ref={sliderRef}>
                {showLatestResult &&
                  showLatestResult.length > 0 &&
                  showLatestResult.map((episode, index) => (
                    <motion.div
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.5,
                        ease: "backInOut",
                        delay: 0.1 * index,
                      }}
                      viewport={{ once: true }}
                      className="slider-item"
                      key={episode.title + index}
                    >
                      <Link
                        to={`/episodes/${episode.category.toLowerCase()}/${encodeURIComponent(
                          episode.title.split(" ").join("_")
                        )}`}
                      >
                        <SliderEpisodeCard {...episode} />
                      </Link>
                    </motion.div>
                  ))}
              </div>
            </div>
            <div className="slider-action-btn">
              <motion.button
                className="slider-btn prev-btn"
                onClick={() => handleScroll("prev")}
                aria-label="previous"
              >
                <IoIosArrowRoundBack />
              </motion.button>
              <motion.button
                className="slider-btn next-btn"
                onClick={() => handleScroll("next")}
                aria-label="next"
              >
                <IoIosArrowRoundForward />
              </motion.button>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default EpisodesSlider;
