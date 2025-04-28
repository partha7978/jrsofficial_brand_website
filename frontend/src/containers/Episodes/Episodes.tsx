import "./Episodes.scss";
import { CgProfile } from "react-icons/cg";
import { MdAccessTime } from "react-icons/md";
import useFetchData from "../../hooks/useFetchData";
import React, { useState, useEffect } from "react";
import { EpisodesArraySchemaForSlider } from "../../interfaces/interface";
import { urlFor } from "../../../client/client";
import Loader from "../../components/Loader/Loader";
import { sliderImgPlaceholder } from "../../assets";
import { Link } from "react-router";
import { motion } from "framer-motion";
import Footer from "../Footer/Footer";
import { useParams } from "react-router";
import { MusicPlayer } from "../../components";

const Episodes = () => {
  const {
    data,
    error,
    loading,
  }: {
    data: EpisodesArraySchemaForSlider[] | null;
    loading: boolean;
    error: any;
  } = useFetchData(
    "episodes",
    "title, speakerName, episodeMainImage, episodeDate, category, shortDescription",
    undefined,
    "episodeDate desc"
  );
  const { urlCategory } = useParams();
  const [episodeCards, setEpisodeCards] = useState<any[]>([]);
  const [topEpisodeCards, setTopEpisodeCards] = useState<any[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    if (data) {
      setTopEpisodeCards(data.slice(0, 2));
      setEpisodeCards(data);
      setCategories(removeDuplicate(data.map((card) => card.category)));
    }
  }, [data]);

  const handleFilterSearch = (e: any) => {
    //using event delegation in order to prevent eventlistener from being added multiple times in childs
    const target = e.target;
    setAnimateCard({ y: 100, opacity: 0 });
    if (target.classList.contains("filter-item")) {
      document
        .querySelectorAll(".filter-item")
        .forEach((item) => item.classList.remove("selected"));

      target.classList.add("selected");

      const category = target.textContent;

      if (category === "All") {
        setEpisodeCards(data);
      } else {
        setEpisodeCards(
          data.filter(
            (card) => card.category?.toLowerCase() === category.toLowerCase()
          )
        );
      }

      setAnimateCard({ y: 0, opacity: 1 });
    }
  };

  function removeDuplicate(arr: string[]) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
  }

  const EpisodeCardComponent = ({ card }: any) => {
    return (
      <Link
        to={`/episodes/${card.category.toLowerCase()}/${card.title
          .split(" ")
          .join("_")}`}
      >
        <motion.div
          className="episodePage-card"
          animate={animateCard}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="episodePage-card-image">
            <img
              loading="lazy"
              src={
                card.episodeMainImage
                  ? urlFor(card.episodeMainImage).url()
                  : sliderImgPlaceholder
              }
              alt="Episode Image"
            />
            <div className="episode-card-category">{card.category}</div>
          </div>
          <div className="episode-card-musicplayer">
            <MusicPlayer />
          </div>
          <div className="episodePage-card-details">
            <div>
              <CgProfile />
              <span>{card.speakerName}</span>
            </div>
            <div>
              <MdAccessTime />
              <span>
                {new Date(card.episodeDate)
                  .toLocaleDateString("en-US", {
                    month: "2-digit",
                    year: "numeric",
                  })
                  .replace("/", "/")}
              </span>
            </div>
          </div>
          <div className="episodePage-card-title">
            <h3>{card.title}</h3>
          </div>
        </motion.div>
      </Link>
    );
  };

  const memoizedFeatureCards = React.useMemo(
    () =>
      topEpisodeCards.map((card) => (
        <React.Fragment key={card._id + card.title}>
          <EpisodeCardComponent card={card} viewOnce={true} />
        </React.Fragment>
      )),
    [topEpisodeCards]
  );

  return (
    <>
      {error && <h1>Something went wrong</h1>}
      {loading && <Loader />}
      {data && (
        <div className="episodesPage">
          <section className="episodesPage-top">
            <div className="episodesPage-top-title">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "backInOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                Listen Featured Episodes
              </motion.h1>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "backInOut", delay: 0.3 }}
                viewport={{ once: true }}
              >
                Explore vibrant soundscapes where stories of every kind come
                alive, taking you on an immersive journey and through
                captivating narratives.
              </motion.span>
            </div>
            <div className="episodesPage-featureCards">
              {
                topEpisodeCards && memoizedFeatureCards
                // topEpisodeCards.map((card) => (
                //   <React.Fragment key={card._id + card.title}>
                //     <EpisodeCardComponent card={card} />
                //   </React.Fragment>
                // ))
              }
            </div>
          </section>
          <section className="episodesPage-episodes">
            <div className="episodesPage-episodes-title">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "backInOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our All Episodes
              </motion.h2>
            </div>
            <div
              className="episodesPage-episodes-filter"
              onClick={handleFilterSearch}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "backInOut" }}
                viewport={{ once: true }}
                className="filter-item selected"
              >
                All
              </motion.div>
              {categories.map((category, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: "backInOut",
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  className="filter-item"
                  key={category + index}
                >
                  {category}
                </motion.div>
              ))}
            </div>
            <div className="episodesPage-episodes-cards__container">
              {episodeCards &&
                episodeCards.map((card) => (
                  <React.Fragment key={card._id + card.title}>
                    <EpisodeCardComponent card={card} viewOnce={false} />
                  </React.Fragment>
                ))}
            </div>
          </section>
        </div>
      )}
    </>
  );
};

const EpisodesWithFooter = Footer(Episodes);

export default EpisodesWithFooter;
