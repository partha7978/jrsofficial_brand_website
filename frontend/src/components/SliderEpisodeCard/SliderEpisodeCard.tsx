import React from "react";
import "./SliderEpisodeCard.scss";
import { episodeCardProps } from "../../interfaces/interface";
import { urlFor } from "../../../client/client";
import { motion } from "framer-motion";

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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut", delay: 0.2 }}
      className="slider-card"
      style={{
        backgroundImage: `${
          episodeImage
            ? `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.6)), url(${urlFor(
                episodeImage
              ).url()})`
            : `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1607743882420-4412ee605bac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJsYWNrfGVufDB8fDB8fHww)`
        }`,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut", delay: 0.4 }}
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
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut", delay: 0.2 }}
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
