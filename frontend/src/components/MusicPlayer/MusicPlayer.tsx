import "./MusicPlayer.scss";
import { FaCirclePlay } from "react-icons/fa6";
import { FaSpotify } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";

const MusicPlayer = () => {
  return (
    <div className="musicPlayer">
      <div className="musicPlayer-player">
        <div className="musicPlayer-player-control">
          <button className="musicPlayer-player-control-play">
            <FaCirclePlay />
          </button>
          <div className="musicPlayer-player-control-progress">
            <div className="musicPlayer-player-control-progress-bar">
              <div className="musicPlayer-player-control-progress-bar-fill"></div>
            </div>
            <div className="musicPlayer-player-control-progress-time">
              00:00
            </div>
          </div>
        </div>
        <div className="musicPlayer-player-action">
          <button className="musicPlayer-player-action-link">
            <FaSpotify />
            Spotify
            <div className="redirect-icon">
              <IoMdArrowForward />
            </div>
          </button>
          <button className="musicPlayer-player-action-link">
            <FaYoutube />
            Youtube
            <div className="redirect-icon">
              <IoMdArrowForward />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
