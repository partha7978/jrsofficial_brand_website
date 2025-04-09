import "./Course.scss";
import { IoIosArrowDown } from "react-icons/io";
import { Accordion, Button, Input, SmallLoader } from "../../components";
import { FaVideo } from "react-icons/fa6";
import { coursePage_img } from "../../assets";
import { FaPlay } from "react-icons/fa6";
import Footer from "../Footer/Footer";
import { Link } from "react-router";
import { useEffect, useRef, useState } from "react";
import { HiOutlineArrowRight } from "react-icons/hi2";
import { TbCameraSpark } from "react-icons/tb";
import { GiPublicSpeaker } from "react-icons/gi";
import { AccordionDataProps } from "../../interfaces/interface";

const accordionDummyData: AccordionDataProps[] = [
  {
    title: "Accordion 1",
    icon: <GiPublicSpeaker />,
    accordionContent:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque deserunt et molestias saepe enim, ipsam veniam laboriosam, commodi nesciunt ullam atque numquam libero amet, sunt deleniti. Impedit nihil aut sit. Perspiciatis nam numquam distinctio expedita fuga deserunt sint modi eum itaque deleniti magnam nihil consectetur pariatur exercitationem nisi culpa, dolor laborum molestiae, officiis accusantium repellat! Laborum reprehenderit quidem quis dolor.",
  },
  {
    title: "Accordion 2",
    icon: <TbCameraSpark />,
    accordionContent:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque deserunt et molestias saepe enim, ipsam veniam laboriosam, commodi nesciunt ullam atque numquam libero amet, sunt deleniti. Impedit nihil aut sit. Perspiciatis nam numquam distinctio expedita fuga deserunt sint modi eum itaque deleniti magnam nihil consectetur pariatur exercitationem nisi culpa, dolor laborum molestiae, officiis accusantium repellat! Laborum reprehenderit quidem quis dolor.",
  },
  {
    title: "Accordion 3",
    icon: <IoIosArrowDown />,
    accordionContent:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque deserunt et molestias saepe enim, ipsam veniam laboriosam, commodi nesciunt ullam atque numquam libero amet, sunt deleniti. Impedit nihil aut sit. Perspiciatis nam numquam distinctio expedita fuga deserunt sint modi eum itaque deleniti magnam nihil consectetur pariatur exercitationem nisi culpa, dolor laborum molestiae, officiis accusantium repellat! Laborum reprehenderit quidem quis dolor.",
  },
];

const Course = () => {
  const [loadedSections, setLoadedSections] = useState<number[]>([0]); // load only first section
  const [loadingSections, setLoadingSections] = useState<number[]>([]);

  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    // changing the cooter color and overflow when on load for this page only
    const rootElement = document.getElementById("root");
    if (rootElement && rootElement.style) {
      rootElement.style.background = "#000000";
      rootElement.style.overflow = "hidden";
    }

    return () => {
      if (rootElement && rootElement.style) {
        rootElement.style.background = "#FBF7EC";
        rootElement.style.overflow = "auto";
      }
    };
  }, []);

  const loadSection = async (index: number) => {
    if (loadedSections.includes(index) || loadingSections.includes(index))
      return;

    setLoadingSections((prev) => [...prev, index]);

    try {
      //Fetch logic
      await new Promise((res) => setTimeout(res, 1000));

      setLoadedSections((prev) => [...prev, index]);
    } finally {
      setLoadingSections((prev) => prev.filter((i) => i !== index));
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = Number(entry.target.getAttribute("data-index"));
        if (entry.isIntersecting) {
          loadSection(index + 1); // Load next section(s) when current is visible
        }
      });
    });

    sectionRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [loadedSections]);

  return (
    <main className="course">
      {loadedSections.includes(0) && (
        <section
          className="course-video"
          data-index={0}
          ref={(el) => (sectionRefs.current[0] = el)}
        >
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
      )}
      {loadingSections.includes(1) && (
        <section className="section-loader">
          <SmallLoader />
        </section>
      )}
      {loadedSections.includes(1) && (
        <section
          className="course-mini-form-container"
          data-index={1}
          ref={(el) => (sectionRefs.current[1] = el)}
        >
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
                    By entering your info, you’ll become a member with FREE
                    access to exclusive insights, and inspiring episodes of The
                    JRS Show, delivered with 💜 to your inbox. (Unsubscribe
                    anytime in a click.)
                  </span>
                </div>
              </div>
            </div>
          </section>
        </section>
      )}
      {loadingSections.includes(2) && (
        <section className="section-loader">
          <SmallLoader />
        </section>
      )}
      {loadedSections.includes(2) && (
        <section
          className="course-about"
          data-index={2}
          ref={(el) => (sectionRefs.current[2] = el)}
        >
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
                incredible resources and ideas that can help you change your
                life (not kidding!). Here’s a quick lay of the land so you can
                find what you’re looking for and we can start something
                beautiful together.
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
      )}
      {loadingSections.includes(3) && (
        <section className="section-loader">
          <SmallLoader />
        </section>
      )}
      {loadedSections.includes(3) && (
        <section
          className="featured-podcast"
          data-index={3}
          ref={(el) => (sectionRefs.current[3] = el)}
        >
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
                Achieve lasting transformation in all areas of your life.
                Discover the support you need to do more, be more and serve more
                with one-on-one strategy sessions with our expert results
                coaches.
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
      )}
      {loadingSections.includes(4) && (
        <section className="section-loader">
          <SmallLoader />
        </section>
      )}
      {loadedSections.includes(4) && (
        <section
          className="course-membership"
          data-index={4}
          ref={(el) => (sectionRefs.current[4] = el)}
        >
          <div className="course-membership-title">
            <h2>Our Membership</h2>
            <span>
              Join the community Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Illum error porro accusamus ipsam earum optio
              esse exercitationem placeat minima aliquam.
            </span>
          </div>
          <div className="course-membership-cards">
            <div className="card">
              <div className="card-title">
                <h3>Basic</h3>
              </div>
              <div className="card-price">
                <h3>
                  <span>₹</span>19.99
                </h3>
              </div>
              <div className="card-chip">
                <span>Great to start</span>
              </div>
              <div className="card-description">
                {Array(10)
                  .fill(0)
                  .map((_, index) => (
                    <p key={index + 1}>
                      <HiOutlineArrowRight />
                      Unlimited recordings
                    </p>
                  ))}
              </div>
              <div className="card-action">
                <Button
                  name="Get Started"
                  backgroundColor="rgb(255, 255, 255, 0.1)"
                  color="#ffffff"
                  hoverBackgroundColor="rgb(255, 255, 255, 0.1)"
                  hoverColor="#ffffff"
                  backgroundBlur={42}
                  width="100%"
                />
              </div>
            </div>
            <div className="card bestSeller">
              <div className="card-title">
                <h3>Pro</h3>
              </div>
              <div className="card-price">
                <h3>
                  <span>₹</span>19.99
                </h3>
              </div>
              <div className="card-chip">
                <span>Best Seller</span>
              </div>
              <div className="card-description">
                {Array(10)
                  .fill(0)
                  .map((_, index) => (
                    <p key={index + 1}>
                      <HiOutlineArrowRight />
                      Unlimited recordings
                    </p>
                  ))}
              </div>
              <div className="card-action">
                <Button
                  name="Get Started"
                  backgroundColor="rgb(255, 255, 255, 0.1)"
                  color="#ffffff"
                  hoverBackgroundColor="rgb(255, 255, 255, 0.1)"
                  hoverColor="#ffffff"
                  backgroundBlur={42}
                  width="100%"
                />
              </div>
            </div>
            <div className="card">
              <div className="card-title">
                <h3>Pro Plus</h3>
              </div>
              <div className="card-price">
                <h3>
                  <span>₹</span>19.99
                </h3>
              </div>
              <div className="card-chip">
                <span>Ultimate value</span>
              </div>
              <div className="card-description">
                {Array(10)
                  .fill(0)
                  .map((_, index) => (
                    <p key={index + 1}>
                      <HiOutlineArrowRight />
                      Unlimited recordings
                    </p>
                  ))}
              </div>
              <div className="card-action">
                <Button
                  name="Get Started"
                  backgroundColor="rgb(255, 255, 255, 0.1)"
                  color="#ffffff"
                  hoverBackgroundColor="rgb(255, 255, 255, 0.1)"
                  hoverColor="#ffffff"
                  backgroundBlur={42}
                  width="100%"
                />
              </div>
            </div>
          </div>
        </section>
      )}
      {loadingSections.includes(5) && (
        <section className="section-loader">
          <SmallLoader />
        </section>
      )}
      {loadedSections.includes(5) && (
        <section
          className="course-whose-this-for-section"
          data-index={5}
          ref={(el) => (sectionRefs.current[5] = el)}
        >
          <div className="course-whose-this-for-section-title">
            <h2>Whose this for</h2>
          </div>
          <div className="course-whose-this-for-section-items">
            <div className="item">
              <TbCameraSpark />
              <span>Content Creators</span>
            </div>
            <div className="item">
              <GiPublicSpeaker />
              <span>Aspiring Public Speakers</span>
            </div>
            <div className="item">
              <TbCameraSpark />
              <span>Content Creators</span>
            </div>
            <div className="item">
              <TbCameraSpark />
              <span>Content Creators</span>
            </div>
            <div className="item">
              <TbCameraSpark />
              <span>Content Creators</span>
            </div>
          </div>
        </section>
      )}
      {loadingSections.includes(6) && (
        <section className="section-loader">
          <SmallLoader />
        </section>
      )}
      {loadedSections.includes(6) && (
        <section
          className="course-why-different-section"
          data-index={6}
          ref={(el) => (sectionRefs.current[6] = el)}
        >
          <div className="course-why-different-section-title">
            <h2>Why Parivartan is different</h2>
          </div>
          <div className="course-why-different-section-desc">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum,
              necessitatibus aut quae consequatur eligendi eius nam repellendus
              nihil fugit quisquam modi est facilis non in alias. Ut odit,
              expedita ipsam doloribus esse incidunt cupiditate aliquid ipsum
              commodi, illum est, sed voluptas voluptatem officiis! Ipsa, eius
              asperiores. Beatae facere distinctio asperiores aspernatur ullam
              optio sapiente veniam? Adipisci voluptates officiis ex illum
              impedit fugit unde iure dolores ducimus facere quasi, temporibus
              optio.
            </span>
          </div>
        </section>
      )}
      {loadingSections.includes(7) && (
        <section className="section-loader">
          <SmallLoader />
        </section>
      )}
      {loadedSections.includes(7) && (
        <section
          className="course-accordion"
          data-index={7}
          ref={(el) => (sectionRefs.current[7] = el)}
        >
          <div className="course-accordion-title">
            <h2>Quick Answers to Your Questions</h2>
          </div>
          <div className="accordion-items">
            <Accordion accordionData={accordionDummyData} />
          </div>
        </section>
      )}
      {loadingSections.includes(8) && (
        <section className="section-loader">
          <SmallLoader />
        </section>
      )}
      {loadedSections.includes(8) && (
        <section
          className="section-still-have-question-section"
          data-index={8}
          ref={(el) => (sectionRefs.current[8] = el)}
        >
          <img
            src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2FsbHBhcGVyJTIwNGt8ZW58MHx8MHx8fDA%3D"
            alt="Register for masterclass background"
            loading="lazy"
            height={200}
            width={200}
          />
          <div className="question-section">
            <h2 className="question-section-title">Still have questions?</h2>
            <p className="question-section-desc">Join the free Masterclass</p>
            <span className="question-section-desc2">
              Limited Seats Available
            </span>
            <Button
              name="Register Now"
              backgroundColor="rgb(255, 255, 255, 0.1)"
              color="#ffffff"
              hoverBackgroundColor="rgb(255, 255, 255, 0.1)"
              hoverColor="#ffffff"
              backgroundBlur={42}
            />
          </div>
        </section>
      )}
      {loadingSections.includes(9) && (
        <section className="section-loader">
          <SmallLoader />
        </section>
      )}
      {loadedSections.includes(9) && (
        <section
          className="course-gallery"
          data-index={9}
          ref={(el) => (sectionRefs.current[9] = el)}
        >
          <div className="photos">
            {Array(20)
              .fill(0)
              .map((_, index) => (
                <div
                  className={`photo-item ${index % 2 === 0 ? "big" : "small"}`}
                  key={index}
                >
                  <img
                    src={
                      index % 2 === 0
                        ? "https://images.unsplash.com/photo-1485470733090-0aae1788d5af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2FsbHBhcGVyJTIwNGt8ZW58MHx8MHx8fDA%3D"
                        : "https://images.unsplash.com/photo-1579550752291-74213f625700?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHdhbGxwYXBlciUyMDRrfGVufDB8MXwwfHx8MA%3D%3D"
                    }
                    alt="Gallery Image"
                    loading="lazy"
                  />
                </div>
              ))}
          </div>
        </section>
      )}
    </main>
  );
};

const CourseWithFooter = Footer(Course);

export default CourseWithFooter;
