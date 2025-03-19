import { Button } from "../../components";
import Footer from "../Footer/Footer";
import "./AboutPage.scss";
import { BsYoutube } from "react-icons/bs";
import { BsSpotify } from "react-icons/bs";

const AboutPage = () => {
  return (
    <main className="aboutPage">
      <section className="aboutPage-heading">
        <div className="heading-container">
          <h1>About Us</h1>
          <span>
            So it seems like you're curious to know more about us. We're
            thrilled to share our story, our journey, and everything that makes
            us who we are!
          </span>
        </div>
      </section>
      <section className="aboutPage-main">
        <div className="aboutPage-main-top">
          <div className="aboutPage-main-top-text">
            <h2>The Jrs Show</h2>
            <span>
              We are a team of passionate individuals who are dedicated to
              creating high-quality content that resonates with our audience.
              Our mission is to provide valuable insights and entertainment to
              our viewers.
            </span>
          </div>
          <div className="aboutPage-main-top-img">
            <img
              src="https://images.unsplash.com/photo-1741207171370-3cee390e85da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3OHx8fGVufDB8fHx8fA%3D%3D"
              alt="About Us Image"
              loading="lazy"
            />
          </div>
        </div>
        <div className="aboutPage-main-stats">
          <div className="aboutPage-main-stats-item">
            <h2>100K+</h2>
            <span>Views</span>
          </div>
          <div className="aboutPage-main-stats-item">
            <h2>10M+</h2>
            <span>Impression</span>
          </div>
          <div className="aboutPage-main-stats-item">
            <h2>100+</h2>
            <span>Clients</span>
          </div>
          <div className="aboutPage-main-stats-item">
            <h2>50+</h2>
            <span>Hosts</span>
          </div>
        </div>
      </section>
      <section className="aboutPage-cta">
        <p>Together, We Create Impact — Your Support Fuels Our Journey!</p>
        <div className="aboutPage-cta-action">
          <Button
            name="Subscribe Now"
            link="/episodes"
            color="#FFCA85"
            hoverColor="#000000"
            backgroundColor="#000000"
            hoverBackgroundColor="#FFCA85"
            icon={<BsYoutube />}
          ></Button>
          <Button
            name="Listen Now"
            link="/episodes"
            color="#FFCA85"
            hoverColor="#000000"
            backgroundColor="#000000"
            hoverBackgroundColor="#FFCA85"
            icon={<BsSpotify />}
          ></Button>
        </div>
      </section>
      <section className="aboutPage-highlights"></section>
    </main>
  );
};

const AboutWithFooter = Footer(AboutPage);

export default AboutWithFooter;
