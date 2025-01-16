import React from "react";
import "./SliderEpisodeCard.scss";
import { episodeCardProps } from "../../interfaces/interface";
import { urlFor } from "../../../client/client";
import { motion } from "framer-motion";
import { sliderImgPlaceholder } from "../../assets";

const SliderEpisodeCard = ({
  title,
  speakerName,
  episodeImage,
  episodeAudio,
  category,
  shortDescription,
  episodeDate,
}: episodeCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut", delay: 0.2 }}
      className="slider-card"
      style={{
        backgroundImage: `${
          episodeImage
            ? `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.6)), url(${urlFor(
                episodeImage
              ).url()})`
            : `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.6)), url(${sliderImgPlaceholder})`
        }`,
      }}
    >
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut", delay: 0.3 }}
        className="top-section"
      >
        <div className="slider-card-category">
          <p>{category}</p>
        </div>
        <div className="slider-card-title">
          <h3>{title}</h3>
        </div>
        <div className="slider-card-speakerName">
          <p>- {speakerName}</p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut", delay: 0.5 }}
        className="bottom-section"
      >
        <div className="bottom-section-text">
          <div className="slider-card-desc">
            <span>{shortDescription}</span>
          </div>
          {/* <div className="slider-card-date">
            <p>{new Date(episodeDate).getDate()}/{new Date(episodeDate).getMonth()}/{new Date(episodeDate).getFullYear()}</p>
          </div> */}
        </div>
        <div className="bottom-section-audio">
          {/* <audio controls src={episodeAudio} /> */}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SliderEpisodeCard;
