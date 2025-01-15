import { useEffect, useRef, useState } from "react";
import { EpisodeCard, SliderEpisodeCard } from "../../components";
import "./Episodes.scss";
import useFetchData from "../../hooks/useFetchData";
import Loader from "../../components/Loader/Loader";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import { EpisodesArraySchemaForSlider } from "../../interfaces/interface";

const Episodes = () => {
  const {
    data,
    loading,
  }: { data: EpisodesArraySchemaForSlider[] | null; loading: boolean } = useFetchData(
    "episodes",
    "title, speakerName, episodeImage, episodeDate, category, shortDescription"
  );
  const [showLatestResult, setShowLatestResult] = useState(null);
  const sliderRef = useRef(null);

  const handleScroll = (direction: "next" | "prev") => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.clientWidth / 3; // Adjust this based on how much to slide
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
            <h2>
              Our Most Recent <br /> Episodes
            </h2>
            <div className="episodes-title-section-action-btn">
              <button>View All</button>
            </div>
          </div>
          <div className="episodes-main__container">
            <div className="simple-slider">
              <div className="slider-container" ref={sliderRef}>
                {showLatestResult &&
                  showLatestResult.map((episode, index) => (
                    <div key={episode.title + index} className="slider-item">
                      <SliderEpisodeCard {...episode} />
                    </div>
                  ))}
              </div>
            </div>
            <div className="slider-action-btn">
              <button
                className="slider-btn prev-btn"
                onClick={() => handleScroll("prev")}
              >
                <IoIosArrowRoundBack />
              </button>
              <button
                className="slider-btn next-btn"
                onClick={() => handleScroll("next")}
              >
                <IoIosArrowRoundForward />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Episodes;
