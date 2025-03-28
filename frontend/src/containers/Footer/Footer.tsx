import "./Footer.scss";
import { MdOutlineFacebook } from "react-icons/md";
import { PiYoutubeLogoFill } from "react-icons/pi";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { SubscribeSectionImg } from "../../assets";
import { Button } from "../../components";
import { IoMdArrowRoundUp } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";

const Footer = (Component?: React.FC, className?: string) => {
  function HOC(props: any) {
    return (
      <>
        {Component && <Component {...props} />}
        <footer className={`footer ${className || ""}`}>
          <div className="footer-subscribe">
            <div className="footer-subscribe-input-section">
              <h2>Easy access to your favorite podcasts and hosts</h2>
              <div className="action-section">
                <div className="footerInput">
                  <input type="text" placeholder="Enter your email" />
                  <Button
                    name="Subscribe Now"
                    link="/episodes"
                    backgroundColor="#141414"
                    color="#ffffff"
                    hoverBackgroundColor="#ffffff"
                    hoverColor="#000000"
                  />
                </div>
              </div>
            </div>
            <div className="footer-subscribe-img-section">
              <img
                src={SubscribeSectionImg}
                alt="Subscribe Section Background"
                loading="lazy"
              />
            </div>
          </div>
          <div className="footer-section">
            <div className="footer-section-social">
              <h2 className="logo">TheJrsShow</h2>
              <div className="subtext">
                Explore vibrant soundscapes where stories of every kind come
                alive taking you.
              </div>
              <div className="social-links">
                <a href="#" className="social-link">
                  <FaInstagram />
                </a>
                <a href="#" className="social-link">
                  <MdOutlineFacebook />
                </a>
                <a href="#" className="social-link">
                  <PiYoutubeLogoFill />
                </a>
                <a href="#" className="social-link">
                  <TbBrandLinkedinFilled />
                </a>
              </div>
            </div>
            <div className="footer-section-vertical-separator"></div>
            <div className="footer-section-links">
              <div className="links-container">
                <span>Quick Links</span>
                <a href="http://" className="link">
                  Home
                </a>
                <a href="http://" className="link">
                  About
                </a>
                <a href="http://" className="link">
                  Episodes
                </a>
                <a href="http://" className="link">
                  Courses
                </a>
                <a href="http://" className="link">
                  Contact
                </a>
              </div>
              <div className="footer-section-vertical-separator-mobile"></div>
              <div className="additional-link">
                <span>Listen On</span>
                <a href="http://" className="link">
                  <img
                    src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Full_Logo_RGB_White.png"
                    alt="spotify"
                    loading="lazy"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <span>
              © {new Date().getFullYear()} TheJrsShow, All Rights Reserved
            </span>
          </div>
          <div className="footer-credits">
            <span>
              Crafted with ❤️ by
              <a
                target="_blank"
                href="https://www.linkedin.com/in/partha-sarathi-muduli/"
              >
                Partha
                <IoMdArrowRoundUp />
              </a>
              in India
            </span>
          </div>
        </footer>
      </>
    );
  }
  return HOC;
};

export default Footer;
