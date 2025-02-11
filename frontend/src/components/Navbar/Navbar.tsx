import { urlFor } from "../../../client/client";
import { useEffect, useState } from "react";
import "./Navbar.scss";
import { FaExternalLinkAlt } from "react-icons/fa";
import useFetchData from "../../hooks/useFetchData";
import { motion } from "framer-motion";
import ShimmerButton from "../ui/shimmer-button";
import { RiMenu3Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { MdArrowForward } from "react-icons/md";
import useCalculateScrollAndWidth from "../../hooks/useCalculateScroll";

const Navbar = () => {
  const navbarLinksSchema = [
    { name: "Home", extraLinks: false, link: "/" },
    { name: "About", extraLinks: false, link: "about" },
    {
      name: "Episodes",
      extraLinks: [
        {
          name: "Fitness",
          link: "https://www.fitness.com",
          imgUrl:
            "https://plus.unsplash.com/premium_photo-1667762241847-37471e8c8bc0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVhbHRofGVufDB8fDB8fHww",
        },
        { name: "Health", link: "https://www.health.com" },
        { name: "Diet", link: "https://www.diet.com" },
        { name: "Wellness", link: "https://www.wellness.com" },
      ],
      link: "/episodes",
    },
    { name: "Courses", extraLinks: false, link: "courses" },
    { name: "Contact", extraLinks: false, link: "contact" },
  ];
  const { data, loading, error }: any = useFetchData("navigationBar");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYNumber }: any = useCalculateScrollAndWidth();

  useEffect(() => {
    if (scrollYNumber > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, [scrollYNumber]);

  if (error) {
    console.log(error);
  }

  const handleMenuOpen = () => {
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <section className={`app__navbar ${isScrolled ? "scrolled__navbar" : ""}`}>
      {loading && <p>Loading...</p>}
      {data && (
        <>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "ease-in" }}
            className="app__navbar-logo"
          >
            <p className="logo-name">TheJrsShow</p>
          </motion.div>
          <div className="app__navbar-links">
            {navbarLinksSchema.map((item) => (
              <div className="app__navbar-links-item" key={item.link}>
                <div className="dot" />
                <a href={`#${item.link}`}>{item.name}</a>
                {item.extraLinks && item.extraLinks.length > 0 && (
                  <motion.div
                    className="app__navbar-links-item-extra"
                    initial={{ y: -100, opacity: 0 }}
                    whileInView={{ y: [+100, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.5, type: "ease-in-out" }}
                  >
                    {item.extraLinks.map((extraLink) => (
                      <motion.a
                        href={extraLink.link}
                        target="_blank"
                        rel="noreferrer"
                        key={extraLink.name}
                        className="app__navbar-links-item-extra-link"
                        whileInView={{
                          // y: [-100, 0],
                          opacity: [0, 1],
                          transition: {
                            duration: 0.5,
                            ease: "backInOut",
                            delay: 0.1,
                          },
                        }}
                      >
                        <span>{extraLink.name}</span>
                        {extraLink.imgUrl && (
                          <>
                            <img
                              className="extra-link-hover-img"
                              src={extraLink.imgUrl}
                              alt={extraLink.name}
                              loading="lazy"
                            />
                            <div className="gradient-overlay"></div>
                          </>
                        )}
                      </motion.a>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
          <div className="app__navbar-redirect">
            <a href={data.redirectLink} target="_blank" rel="noreferrer">
              <ShimmerButton
                className="shadow-2xl"
                shimmerSize="0.09rem"
                background="rgba(0,0,0,1)"
              >
                <span>{data.redirectButtonName}</span>
                <FaExternalLinkAlt />
              </ShimmerButton>
            </a>
          </div>
          <div className="app__navbar-hamburgerMenu">
            <RiMenu3Fill onClick={handleMenuOpen} />
            {/* overlay */}
            <div
              className={`app__navbar-hamburgerMenu-overlay ${
                menuOpen ? "active" : ""
              }`}
              onClick={handleMenuClose}
            ></div>
            {/* sliding menu content */}
            <div
              className={`app__navbar-hamburgerMenu-mainSection ${
                menuOpen ? "active" : ""
              }`}
            >
              <div className="menu-item__container">
                <IoClose
                  className="menu-close-icon"
                  onClick={handleMenuClose}
                />
                <h1 className="menu-item__container-title">THEJRSSHOW</h1>
                <div className="menu-item__container-links">
                  {navbarLinksSchema.map((item) => (
                    <a href={`#${item.link}`} key={item.link}>
                      <div className="menu-item__container-link">
                        {item.name}
                        <MdArrowForward />
                      </div>
                    </a>
                  ))}
                </div>
                <div className="menu-item__container-redirect">
                  <a href={data.redirectLink} target="_blank" rel="noreferrer">
                    <button>
                      {data.redirectButtonName}
                      <FaExternalLinkAlt />
                    </button>
                  </a>
                </div>
                {data.extraLinks &&
                  data.extraLinks.map((extraLink: any) => (
                    <div
                      className="menu-item__container-link"
                      key={extraLink.name}
                    >
                      <a href={extraLink.link} target="_blank" rel="noreferrer">
                        <span>{extraLink.name}</span>
                      </a>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Navbar;
