import "./Footer.scss";
import { MdOutlineFacebook } from "react-icons/md";
import { PiYoutubeLogoFill } from "react-icons/pi";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { SubscribeSectionImg } from "../../assets";
import { Button, Toast } from "../../components";
import { IoMdArrowRoundUp } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
import { youtubeLogo } from "../../assets";
import { Link } from "react-router";
import { client } from "../../../client/client";
import { useEffect, useState } from "react";
import { getCurrentDate } from "../../service/getCurrentDate";
import { FaXTwitter } from "react-icons/fa6";

const Footer = (Component?: React.FC, className?: string) => {
  function HOC(props: any) {
    const [formData, setFormData] = useState({
      email: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const [toast, setToast] = useState<{
      type: "success" | "error" | "def" | "warning";
      message: string;
    }>({ type: "def", message: "" });
    const [toastOpen, setToastOpen] = useState(false);

    const { email } = formData;
    const handleInputChange = (e: any) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
      if (!email) {
        setToast({ type: "warning", message: "Please enter your email" });
        return false;
      }

      if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        setToast({ type: "warning", message: "Please enter a valid email" });
        return false;
      }

      return true;
    };

    useEffect(() => {
      if (toast.message.length > 1 && toastOpen === false) {
        setToastOpen(true);
      }
    }, [toast]);

    const formDataSubmit = async (e: any) => {
      e.preventDefault();
      if (isSubmitting) return; // Prevent multiple clicks

      if (validateForm()) {
        setIsSubmitting(true);

        const alreadyExists = await checkDuplicate();
        if (alreadyExists) {
          setToast({ type: "warning", message: "Email already subscribed" });
          setIsSubmitting(false);
          return;
        }

        const alreadySubmitted = await hasSubmittedToday();
        if (alreadySubmitted) {
          setToast({
            type: "warning",
            message: "You already submitted today, please try again tomorrow",
          });
          setIsSubmitting(false);
          return;
        }

        const userSubmittedData = {
          _type: "userSubmittedData",
          source: "Footer Newsletter Subscription",
          name: "Only Email Provided",
          email: email,
          time: getCurrentDate(),
        };

        client
          .create(userSubmittedData)
          .then(() => {
            setToast({
              type: "success",
              message:
                "We have received your email, we will get back to you soon",
            });
            setFormData({ email: "" });
          })
          .catch((err) => {
            setToast({ type: "error", message: "Something went wrong" });
            setFormData({ email: "" });
          })
          .finally(() => {
            setTimeout(() => {
              setIsSubmitting(false);
            }, 15000);
          });
      }
    };

    const checkDuplicate = async () => {
      const query = `*[_type == "userSubmittedData" && (email == $email && source == "Footer Newsletter Subscription")]`;
      const existing = await client.fetch(query, { email });

      return existing.length > 0;
    };

    const hasSubmittedToday = async () => {
      const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
      const query = `*[_type == "userSubmittedData" && (email == $email && source == "Footer Newsletter Subscription") && time >= "${today}T00:00:00Z"]`;
      const result = await client.fetch(query, { email });
      return result.length > 0;
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
        {Component && <Component {...props} />}
        <footer className={`footer ${className || ""}`}>
          <div className="footer-subscribe">
            <div className="footer-subscribe-input-section">
              <h2>Easy access to your favorite podcasts and hosts</h2>
              <div className="action-section">
                <div className="footerInput">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    onChange={handleInputChange}
                    required={true}
                    value={email}
                  />
                  <Button
                    name="Subscribe Now"
                    backgroundColor="#141414"
                    color="#ffffff"
                    hoverBackgroundColor="#ffffff"
                    hoverColor="#000000"
                    action="formSubmit"
                    actionData={formDataSubmit}
                    disabled={isSubmitting}
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
                <a
                  href="https://www.instagram.com/jrsofficial_/?igsh=MXBhbzBqOHI1cGFwYg%3D%3D&utm_source=qr#"
                  className="social-link"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.facebook.com/share/19r6NXNV9w/?mibextid=wwXIfr"
                  className="social-link"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <MdOutlineFacebook />
                </a>
                <a
                  href="https://www.youtube.com/@Thejrsshow"
                  target="_blank"
                  className="social-link"
                  aria-label="YouTube"
                >
                  <PiYoutubeLogoFill />
                </a>
                <a
                  href="https://www.linkedin.com/in/jyotshnarani-senapati-23a180224/"
                  target="_blank"
                  className="social-link"
                  aria-label="LinkedIn"
                >
                  <TbBrandLinkedinFilled />
                </a>
                 <a
                  href="https://x.com/thejrsshow?s=11"
                  target="_blank"
                  className="social-link"
                  aria-label="Twitter/X"
                >
                  <FaXTwitter  />
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
                <a
                  href="https://www.youtube.com/@Thejrsshow"
                  className="link"
                  target="_blank"
                >
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
