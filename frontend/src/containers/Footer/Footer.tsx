import "./Footer.scss";
import { MdOutlineFacebook } from "react-icons/md";
import { PiYoutubeLogoFill } from "react-icons/pi";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { SubscribeSectionImg } from "../../assets";
import { Button } from "../../components";
import { IoMdArrowRoundUp } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
import { youtubeLogo } from "../../assets";
import { Link } from "react-router";

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
                    backgroundColor="#141414"
                    color="#ffffff"
                    hoverBackgroundColor="#ffffff"
                    hoverColor="#000000"
                    action="formSubmit"
                    actionData={() => console.log("Subscribe Now")}
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
                <a href="https://www.youtube.com/@Thejrsshow" target="_blank" className="social-link">
                  <PiYoutubeLogoFill />
                </a>
                <a href="https://www.linkedin.com/in/jyotshnarani-senapati-23a180224/" target="_blank" className="social-link">
                  <TbBrandLinkedinFilled />
                </a>
              </div>
            </div>
            <div className="footer-section-vertical-separator"></div>
            <div className="footer-section-links">
              <div className="links-container">
                <span>Quick Links</span>
                <Link to="/" className="link">
                  Home
                </Link>
                <Link to="/about" className="link">
                  About
                </Link>
                <Link to="/episodes" className="link">
                  Episodes
                </Link>
                <Link to="/work/courses" className="link">
                  Courses
                </Link>
                <Link to="/contact" className="link">
                  Contact
                </Link>
              </div>
              <div className="footer-section-vertical-separator-mobile"></div>
              <div className="additional-link">
                <span>Listen On</span>
                <a href="https://www.youtube.com/@Thejrsshow" className="link">
                  <img
                    src={youtubeLogo}
                    alt="YouTube Logo"
                    loading="lazy"
                    height={20}
                    width={20}
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
