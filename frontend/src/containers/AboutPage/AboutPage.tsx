import { Button, BentoGrid } from "../../components";
import Footer from "../Footer/Footer";
import "./AboutPage.scss";
import { BsYoutube } from "react-icons/bs";
import { BsSpotify } from "react-icons/bs";
import useFetchData from "../../hooks/useFetchData";
import Loader from "../../components/Loader/Loader";
import { urlFor } from "../../../client/client";
import { MainAboutPageSchema } from "../../interfaces/interface";
import { useEffect, useState } from "react";

const AboutPage = () => {
  const [about, setAbout] = useState<MainAboutPageSchema | null>(null);

  const {
    data,
    loading,
    error,
  }: {
    data: MainAboutPageSchema | null;
    loading: boolean;
    error: any;
  } = useFetchData("mainAboutPage");

  useEffect(() => {
    if (data) {
      setAbout(data);
    }
  }, [data]);

  if (error) {
    console.log(error);
  }

  return (
    <main className="aboutPage">
      {error && <h1>Something went wrong</h1>}
      {loading && <Loader />}
      {about && (
        <>
          <section className="aboutPage-heading">
            <div className="heading-container">
              <h1>{about.title || "About Us"}</h1>
              <span>{about.description}</span>
            </div>
          </section>
          <section className="aboutPage-main">
            <div className="aboutPage-main-top">
              <div className="aboutPage-main-top-text">
                <h2>{about.logoName}</h2>
                <span>{about.logoDesc}</span>
              </div>
              <div className="aboutPage-main-top-img">
                <img
                  src={urlFor(about.featuredImage).url()}
                  alt="About Us Image"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="aboutPage-main-stats">
              <div className="aboutPage-main-stats-item">
                <h2>{about.views || "N/A"}+</h2>
                <span>Views</span>
              </div>
              <div className="aboutPage-main-stats-item">
                <h2>{about.impressions || "N/A"}+</h2>
                <span>Impression</span>
              </div>
              <div className="aboutPage-main-stats-item">
                <h2>{about.clients || "N/A"}+</h2>
                <span>Clients</span>
              </div>
              <div className="aboutPage-main-stats-item">
                <h2>{about.hosts || "N/A"}+</h2>
                <span>Hosts</span>
              </div>
            </div>
          </section>
          <section className="aboutPage-cta">
            <p>Because Every Contribution Counts — Let’s Keep the Momentum!</p>
            <div className="aboutPage-cta-action">
              <Button
                name="Subscribe Now"
                color="#FFCA85"
                hoverColor="#000000"
                backgroundColor="#000000"
                hoverBackgroundColor="#FFCA85"
                icon={<BsYoutube />}
                action="redirectExternal"
                actionData={about.youtubeLink}
              ></Button>
              <Button
                name="Listen Now"
                color="#FFCA85"
                hoverColor="#000000"
                backgroundColor="#000000"
                hoverBackgroundColor="#FFCA85"
                icon={<BsSpotify />}
                action="redirectExternal"
                actionData={about.spotifyLink}
              ></Button>
            </div>
          </section>
          {about.highlights && (
            <section className="aboutPage-highlights">
              <BentoGrid highlights={about.highlights} />
            </section>
          )}
        </>
      )}
    </main>
  );
};

const AboutWithFooter = Footer(AboutPage);

export default AboutWithFooter;
