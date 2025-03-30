import "./Course.scss";
import { IoIosArrowDown } from "react-icons/io";
import { Button } from "../../components";
import { FaVideo } from "react-icons/fa6";
import { coursePage_img } from "../../assets";
import { FaPlay } from "react-icons/fa6";

const Course = () => {
  return (
    <main className="course">
      <section className="course-video">
        <video
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          autoPlay
          loop
          muted
          preload="auto"
          playsInline
        ></video>
        <div className="course-video-heading">
          <h1>
            Create a Business and Life You <span>Love</span>
          </h1>
        </div>
        <div className="course-video-action">
          <Button
            name="Watch the video"
            backgroundColor=""
            hoverBackgroundColor=""
            color=""
            hoverColor=""
            icon={<FaVideo />}
          />
        </div>
        <div className="course-video-navigation">
          <IoIosArrowDown />
        </div>
      </section>
      <section className="course-form"></section>
      <section className="featured-podcast">
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
              <input className="name" type="text" placeholder="First Name" />
              <input className="email" type="text" placeholder="Email" />
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
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Course;
