import { FaSpotify, FaYoutube } from "react-icons/fa";
import "./MusicPlayer.scss";
import { FaCirclePlay } from "react-icons/fa6";
import { IoMdArrowForward } from "react-icons/io";
import { fetchDataOnDemand } from "../../service/fetchDataOnDemand";
import { useEffect, useState } from "react";
import { Toast } from "..";
import { BsFillPauseCircleFill } from "react-icons/bs";
import { useRef } from "react";
import { urlFor } from "../../../client/client";

const MusicPlayer = ({
  showRedirectBtn,
  backgroundColor,
  redirectionBgColor,
  redirectionColor,
  color,
  size,
  audioUrl,
}: {
  showRedirectBtn: boolean;
  backgroundColor?: string;
  color?: string;
  redirectionBgColor?: string;
  redirectionColor?: string;
  size?: "small" | "large";
  audioUrl: any;
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [audioSrc, setAudioSrc] = useState<any | null>(null);
  const [buttonLoader, setButtonLoader] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  const [toast, setToast] = useState<{
    type: "success" | "error" | "def" | "warning";
    message: string;
  }>({ type: "def", message: "" });
  const [progress, setProgress] = useState(0);

  const style = {
    background: backgroundColor || "#ffffff",
    color: color || "#000000",
  };

  const redirectionStyle = {
    background: redirectionBgColor || "#000000",
    color: redirectionColor || "#ffffff",
  };

  useEffect(() => {
    if (toast.message.length > 1 && toastOpen === false) {
      setToastOpen(true);
    }
  }, [toast]);

  useEffect(() => {
    if (audioSrc && audioRef.current && isPlaying) {
      audioRef.current.play();
    } else if (audioSrc && audioRef.current && !isPlaying) {
      audioRef.current.pause();
    }
  }, [audioSrc, isPlaying]);

  // Update progress bar dynamically
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const currentTime = audioRef.current.currentTime;
      const duration = audioRef.current.duration;
      const progressPercentage = (currentTime / duration) * 100;
      setProgress(progressPercentage);
    }
  };

  const playAudio = async (e: any, shouldFetchAudio: boolean) => {
    if (!shouldFetchAudio) {
      e.preventDefault();
      setButtonLoader(true);
      try {
        const audio = await fetchDataOnDemand(
          "episodes",
          "title, episodeAudio{asset->{url}}",
          `title == "${audioUrl}"`
        );
        console.log("Audio data:", audio);
        setButtonLoader(false);

        if (!audio.episodeAudio) {
          setToast({
            type: "error",
            message: "Audio not found for this episode",
          });
          setIsPlaying(false);
          return;
        }

        setAudioSrc(audio.episodeAudio); // 👈 Set source
        setToast({ type: "success", message: `Playing ${audio.title}` });
        setIsPlaying(true);

        // Do something with audio (set state, play audio, etc.)
      } catch (error) {
        console.error("Error fetching audio:", error);
        setToast({
          type: "error",
          message: "Error in fetching audio or Audio not found",
        });
      }
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <>
        <Toast
          type={toast.type}
          message={toast.message}
          isOpen={toastOpen}
          setIsOpen={setToastOpen}
          setToast={setToast}
        />
      </>
      <div
        className={`musicPlayer ${size === "large" ? "musicPlayer-large" : ""}`}
        style={style}
        onClick={(e) => e.preventDefault()}
      >
        <div className="musicPlayer-player">
          <div className="musicPlayer-player-control">
            <button
              className="musicPlayer-player-control-play"
              onClick={(e) => playAudio(e, isPlaying)}
            >
              {buttonLoader ? (
                <span className="loader"></span>
              ) : isPlaying ? (
                <BsFillPauseCircleFill />
              ) : (
                <FaCirclePlay />
              )}
            </button>
            {audioSrc && (
              <audio
                ref={audioRef}
                src={
                  audioSrc.asset?.url ||
                  "https://www.youtube.com/watch?v=UviO1u7BHOg"
                }
                hidden
                preload="auto"
                playsInline
                onTimeUpdate={handleTimeUpdate}
              />
            )}
            <div className="musicPlayer-player-control-progress">
              <div className="musicPlayer-player-control-progress-bar">
                <div
                  className="musicPlayer-player-control-progress-bar-fill"
                  style={{
                    backgroundColor: color || "#000000",
                    width: `${progress}%`,
                  }}
                ></div>
              </div>
              {audioRef.current && (
                <div className="musicPlayer-player-control-progress-time">
                  {audioRef.current
                    ? `${Math.floor(audioRef.current.currentTime / 60)
                        .toString()
                        .padStart(2, "0")}:${Math.floor(
                        audioRef.current.currentTime % 60
                      )
                        .toString()
                        .padStart(2, "0")}`
                    : "00:00"}
                </div>
              )}
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
    </>
  );
};

export default MusicPlayer;
