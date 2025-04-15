import { useEffect, useState } from "react";
import "./VideoPlayer.scss";
import { IoClose } from "react-icons/io5";

const VideoPlayer = ({ isOpen = false, setIsOpen, videoLink }) => {
  const [popupOpen, setPopupOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setPopupOpen(true);
      document.body.classList.add("no-scroll");
    } else {
      setPopupOpen(false);
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  const closeVideoPopup = (e) => {
    console.log(e.target);
    if (
      (e.target.classList.contains("video-player") ||
        e.target.closest(".video-player-close")) &&
      !e.target.classList.contains("video-player-video")
    ) {
      setPopupOpen(false);
      setIsOpen(false);
      return;
    }
  };

  return (
    <div
      className="video-player"
      style={{
        display: popupOpen ? "flex" : "none",
      }}
      onClick={closeVideoPopup}
    >
      <button className="video-player-close">
        <IoClose />
      </button>
      <video
        className="video-player-video"
        src={videoLink}
        autoPlay
        loop
        preload="auto"
        playsInline
        controls
      ></video>
    </div>
  );
};

export default VideoPlayer;
