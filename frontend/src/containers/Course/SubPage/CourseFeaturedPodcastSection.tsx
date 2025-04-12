import { Button, Input } from "../../../components";
import { FaPlay } from "react-icons/fa";
import { getFileAsset } from "@sanity/asset-utils";
import { useEffect, useState } from "react";
import useFetchData from "../../../hooks/useFetchData";
import { urlFor } from "../../../../client/client";

const CourseFeaturedPodcastSection = () => {
  const {
    data,
    error,
  }: {
    data: any;
    error: any;
  } = useFetchData("course", "featuredPodcast");
  const projectId = "lnbqi1qv"; // Replace with your actual project ID
  const dataset = "production";

  const [mainData, setMainData] = useState(null);
  const [videoUrl, setVideoUrl] = useState(null);
  useEffect(() => {
    if (data) {
      setMainData(data.featuredPodcast[0]);
      const fileAsset = getFileAsset(
        data.featuredPodcast[0]?.podcastVideo[0]?.podcastBackgroundVideo,
        { projectId, dataset }
      );
      setVideoUrl(fileAsset.url);
    }
  }, [data]);
  return (
    <>
      {error && <h1>Something went wrong</h1>}
      {mainData && (
        <>
          <div className="featured-podcast-top-section">
            <div className="featured-podcast-top-section-banner">
              <div className="img-bg">
                <img
                  src={urlFor(mainData.podcastImage).url()}
                  alt="featured podcast banner"
                  loading="lazy"
                  height={200}
                  width={200}
                />
              </div>
            </div>
            <div className="featured-podcast-top-section-heading">
              <h2>{mainData.podcastTitle}</h2>
            </div>
          </div>
          <div className="featured-podcast-mobile-separator">
            <div className="featured-podcast-mobile-separator-line"></div>
            <div className="featured-podcast-mobile-separator-line"></div>
          </div>
          <div className="featured-podcast-bottom-section">
            <div className="featured-podcast-bottom-section-action">
              <h2>{mainData.podcastForm[0]?.podcastFormTitle}</h2>
              <span className="description">
                {mainData.podcastForm[0]?.podcastFormDescription}
              </span>
              <div className="featured-ratio">
                {mainData.podcastForm[0]?.podcastFormHighlights?.map((item) => (
                  <div className="ratio" key={item.highlightPercentageName}>
                    <p>{item.highlightPercentage}%</p>
                    <span>{item.highlightPercentageName}</span>
                  </div>
                ))}
              </div>
              <form action="">
                <Input
                  name="First Name"
                  type="text"
                  placeholder="First Name"
                  className="name"
                  background="#141414"
                  color="#ffffff"
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="email"
                  background="#141414"
                  color="#ffffff"
                  required={true}
                />
                <Input
                  name="phone"
                  type="phone"
                  placeholder="Phone"
                  className="phone"
                  background="#141414"
                  color="#ffffff"
                  required={true}
                />
                <Button
                  name="Send me invitations"
                  backgroundColor="rgb(255, 151, 0)"
                  color="#000000"
                  hoverBackgroundColor="#ffffff"
                  hoverColor="#000000"
                />
                {/* <span className="additional-description">
                FREE access to exclusive insights, private Q+As, and inspiring
                episodes of The JRS Show, delivered with 💜 to your inbox.
                (Unsub anytime in a click.)
              </span> */}
              </form>
            </div>
            <div className="featured-podcast-bottom-section-video">
              <video
                src={videoUrl}
                autoPlay
                loop
                muted
                preload="auto"
                playsInline
              ></video>
              <div className="video-overlay"></div>
              <div className="video-play-btn">
                <Button
                  name="Watch"
                  backgroundColor="rgb(0, 0, 0, 0.1)"
                  color="#ffffff"
                  hoverBackgroundColor="rgb(0, 0, 0, 0.1)"
                  hoverColor="#ffffff"
                  icon={<FaPlay />}
                  backgroundBlur={42}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CourseFeaturedPodcastSection;
