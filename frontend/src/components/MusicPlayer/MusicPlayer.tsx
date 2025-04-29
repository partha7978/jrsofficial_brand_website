import { FaSpotify, FaYoutube } from "react-icons/fa";
import "./MusicPlayer.scss";
import { FaCirclePlay } from "react-icons/fa6";
import { IoMdArrowForward } from "react-icons/io";
const MusicPlayer = ({
  showRedirectBtn,
  backgroundColor,
  redirectionBgColor,
  redirectionColor,
  color,
  size,
}: {
  showRedirectBtn: boolean;
  backgroundColor?: string;
  color?: string;
  redirectionBgColor?: string;
  redirectionColor?: string;
  size?: "small" | "large";
}) => {
  const style = {
    background: backgroundColor || "#ffffff",
    color: color || "#000000",
  };

  const redirectionStyle = {
    background: redirectionBgColor || "#000000",
    color: redirectionColor || "#ffffff",
  };

  return (
    <div
      className={`musicPlayer ${size === "large" ? "musicPlayer-large" : ""}`}
      style={style}
    >
      <div className="musicPlayer-player">
        <div className="musicPlayer-player-control">
          <button className="musicPlayer-player-control-play">
            <FaCirclePlay />
          </button>
          <div className="musicPlayer-player-control-progress">
            <div className="musicPlayer-player-control-progress-bar">
              <div
                className="musicPlayer-player-control-progress-bar-fill"
                style={{ backgroundColor: color || "#000000" }}
              ></div>
            </div>
            <div className="musicPlayer-player-control-progress-time">
              00:00
            </div>
          </div>
        </div>
      </div>

      {showRedirectBtn && (
        <div className="musicPlayer-player-action">
          <button
            className="musicPlayer-player-action-link"
            style={redirectionStyle}
          >
            <FaSpotify />
            Spotify
            <div className="redirect-icon">
              <IoMdArrowForward />
            </div>
          </button>
          <button
            className="musicPlayer-player-action-link"
            style={redirectionStyle}
          >
            <FaYoutube />
            Youtube
            <div className="redirect-icon">
              <IoMdArrowForward />
            </div>
          </button>
        </div>
      )}
    </div>
  );
};

export default MusicPlayer;
