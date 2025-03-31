import "./Course.scss";
import { IoIosArrowDown } from "react-icons/io";
import { Button, Input } from "../../components";
import { FaVideo } from "react-icons/fa6";
import { coursePage_img } from "../../assets";
import { FaPlay } from "react-icons/fa6";
import Footer from "../Footer/Footer";
import { Link } from "react-router";
import { useEffect } from "react";

const Course = () => {
  useEffect(() => {
    const rootElement = document.getElementById("root");
    if (rootElement && rootElement.style) {
      rootElement.style.background = "#000000";
    }

    return () => {
      if (rootElement && rootElement.style) {
        rootElement.style.background = "#FBF7EC";
      }
    };
  }, []);
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
      <section className="course-mini-form-container">
        <section className="mini-form">
          <div className="mini-form-section">
            <div className="mini-form-section-image">
              <img
                src={
                  "https://images.unsplash.com/photo-1742077414023-45a81fd63736?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"
                }
                alt="featured podcast banner"
                loading="lazy"
                height={200}
                width={200}
              />
            </div>
            <div className="mini-form-section-content">
              <h2>Learn How to Get Anything You Want</h2>
              <span className="mini-form-section-content-subtext">
                Signup to get 50+ AI tools for free instantly on your email.
              </span>
              <span className="mini-form-section-content-additionalText">
                No credit card required
              </span>
              <form action="" className="mini-form-section-content-form">
                <div className="input-box">
                  <Input
                    name="name"
                    type="text"
                    placeholder="Name"
                    className="input"
                    background="#e4e4e4"
                    color="#000000"
                    required={true}
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="input"
                    background="#e4e4e4"
                    color="#000000"
                    required={true}
                  />
                </div>
                <Button
                  name="Get Started"
                  backgroundColor="#141414"
                  color="#ffffff"
                  hoverBackgroundColor="#ffffff"
                  hoverColor="#141414"
                  width="100%"
                />
              </form>
              <div className="mini-form-section-content-terms">
                <span>
                  By entering your info, you’ll become a member with FREE access
                  to exclusive insights, and inspiring episodes of The JRS Show,
                  delivered with 💜 to your inbox. (Unsubscribe anytime in a
                  click.)
                </span>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="course-about">
        <div className="course-about-container">
          <div className="course-about-image-section">
            <img
              src="https://images.unsplash.com/photo-1604856420566-576ba98b53cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fGJsdWUlMjB0aGVtZXxlbnwwfHwwfHx8MA%3D%3D"
              alt="The JRS Show Image"
              loading="lazy"
              height={200}
              width={200}
            />
          </div>
          <div className="course-about-overlay"></div>
          <div className="course-about-content">
            <div className="course-about-content-heading">
              <p>Heya!</p>
              <h2>I’m JRS</h2>
            </div>
            <span className="course-about-content-description">
              My hunch is someone you trust mentioned my name, or you stumbled
              upon one of my videos, quotes or articles online. Whatever path
              you took, I’m really glad you’re here. This site is full of
              incredible resources and ideas that can help you change your life
              (not kidding!). Here’s a quick lay of the land so you can find
              what you’re looking for and we can start something beautiful
              together.
            </span>
            <div className="course-about-content-action">
              <Link to="/about">
                <Button
                  name="Know More"
                  backgroundColor="rgb(0, 0, 0, 0.5)"
                  color="#ffffff"
                  hoverBackgroundColor="rgb(0, 0, 0, 0.5)"
                  hoverColor="#ffffff"
                  // backgroundBlur={42}
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
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
      </section>
    </main>
  );
};

const CourseWithFooter = Footer(Course);

export default CourseWithFooter;
