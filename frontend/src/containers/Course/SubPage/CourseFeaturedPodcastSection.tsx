import { Button, Input } from "../../../components";
import { FaPlay } from "react-icons/fa";
import { coursePage_img } from "../../../assets";

const CourseFeaturedPodcastSection = () => {
  return (
    <>
      <div className="featured-podcast-top-section">
        <div className="featured-podcast-top-section-banner">
          <div className="img-bg">
            <img
              src={coursePage_img}
              alt="featured podcast banner"
              loading="lazy"
              height={200}
              width={200}
            />
          </div>
        </div>
        <div className="featured-podcast-top-section-heading">
          <h2>Expert guidance for your path</h2>
        </div>
      </div>
      <div className="featured-podcast-mobile-separator">
        <div className="featured-podcast-mobile-separator-line"></div>
        <div className="featured-podcast-mobile-separator-line"></div>
      </div>
      <div className="featured-podcast-bottom-section">
        <div className="featured-podcast-bottom-section-action">
          <h2>Learn How to Get Anything You Want</h2>
          <span className="description">
            Achieve lasting transformation in all areas of your life. Discover
            the support you need to do more, be more and serve more with
            one-on-one strategy sessions with our expert results coaches.
          </span>
          <div className="featured-ratio">
            <div className="ratio">
              <p>81%</p>
              <span>People got their Niche Clarity</span>
            </div>
            <div className="ratio">
              <p>72%</p>
              <span>People got their productivity boost</span>
            </div>
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
            src="https://www.w3schools.com/html/mov_bbb.mp4"
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
  );
};

export default CourseFeaturedPodcastSection;
