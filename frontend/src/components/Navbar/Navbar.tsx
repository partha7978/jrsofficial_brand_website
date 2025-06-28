import { useEffect, useState } from "react";
import "./Navbar.scss";
import { FaExternalLinkAlt } from "react-icons/fa";
import useFetchData from "../../hooks/useFetchData";
import { AnimatePresence, motion } from "framer-motion";
import ShimmerButton from "../ui/shimmer-button";
import { RiMenu3Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { MdArrowForward } from "react-icons/md";
import useCalculateScrollAndWidth from "../../hooks/useCalculateScroll";
import { NavLink } from "react-router";
import { EpisodesArraySchemaForSlider } from "../../interfaces/interface";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const navbarLinksSchema = [
    { name: "Home", extraLinks: false, link: "/" },
    { name: "About", extraLinks: false, link: "about" },
    {
      name: "Episodes",
      extraLinks: [] as string[],
      link: "episodes",
    },
    {
      name: "Work With Me",
      extraLinks: ["courses", "production"],
      link: "work",
    },
    { name: "Contact", extraLinks: false, link: "contact" },
  ];
  const { data, loading, error }: any = useFetchData("navigationBar");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYNumber }: any = useCalculateScrollAndWidth();
  const [navbarLinks, setNavbarLinks] = useState(navbarLinksSchema);
  const [smallScreenAccordion, setSmallScreenAccordion] = useState(-1);

  // for episodes navbar items starts
  const {
    data: episodesData,
    error: episodesError,
  }: {
    data: EpisodesArraySchemaForSlider[] | null;
    error: any;
  } = useFetchData("episodes", " category", undefined, "episodeDate desc");

  function removeDuplicate(arr: string[]) {
    const unique = arr.filter((item, index) => arr.indexOf(item) === index);
    return unique.length > 3 ? unique.slice(0, 3) : unique;
  }

  useEffect(() => {
    if (episodesData) {
      const updatedNavbarLinks = [...navbarLinksSchema];
      updatedNavbarLinks[2].extraLinks = removeDuplicate(
        episodesData.map((card) => card.category)
      );
      setNavbarLinks(updatedNavbarLinks);
    }
  }, [episodesData]);
  // for episodes navbar items ends

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

  const sendGtmData = (gtmKey: string) => {
    if (gtmKey === 'Navbar_Redirect_Button_Click') {
      (window as any).dataLayer.push({
        event: gtmKey,
        buttonName: data.redirectButtonName,
        buttonLink: data.redirectLink,
        additionalData: "Navbar Redirect Button Clicked",
      });
    }
  };

  const handleMenuOpen = () => {
    setMenuOpen(true);
  };

  const handleMenuClose = (closeSubMenu?: boolean) => {
    setMenuOpen(false);
    if (closeSubMenu) {
      setSmallScreenAccordion(-1);
    }
  };

  const handleSubMenu = (index: number) => {
    if (smallScreenAccordion === index) {
      setSmallScreenAccordion(-1);
    } else {
      setSmallScreenAccordion(index);
    }
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
            {navbarLinks?.map((item) => (
              <NavLink to={item.link} key={item.link} className="route-link">
                <div className="app__navbar-links-item">
                  <div className="dot" />
                  <a href={`#${item.link}`}>{item.name}</a>
                  {item.extraLinks && item.extraLinks.length > 0 && (
                    <motion.div
                      className="app__navbar-links-item-extra"
                      initial={{ y: -100, opacity: 0 }}
                      whileInView={{ y: [+100, 0], opacity: [0, 1] }}
                      transition={{ duration: 0.5, type: "ease-in-out" }}
                    >
                      {item.extraLinks?.map((extraLink) => (
                        <NavLink
                          to={`/${item.link}/${extraLink?.toLowerCase()}`}
                          key={extraLink}
                          className="app__navbar-links-item-extra-link"
                        >
                          <motion.span
                            key={extraLink}
                            whileInView={{
                              opacity: [0, 1],
                              transition: {
                                duration: 0.5,
                                ease: "backInOut",
                                delay: 0.1,
                              },
                            }}
                          >
                            <span>{extraLink}</span>
                          </motion.span>
                        </NavLink>
                      ))}
                    </motion.div>
                  )}
                </div>
              </NavLink>
            ))}
          </div>
          <div className="app__navbar-redirect">
            <a href={data.redirectLink} target="_blank" rel="noreferrer" onClick={() => sendGtmData('Navbar_Redirect_Button_Click')}>
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
              onClick={() => handleMenuClose(true)}
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
                  onClick={() => handleMenuClose(true)}
                />
                <h1 className="menu-item__container-title">THEJRSSHOW</h1>
                <div className="menu-item__container-links">
                  {navbarLinks?.map((item, index) =>
                    item.extraLinks && item.extraLinks?.length > 0 ? (
                      <>
                        <div
                          className="menu-item__container-link"
                          onClick={() => handleSubMenu(index)}
                        >
                          {item.name}
                          {smallScreenAccordion === index ? (
                            <IoIosArrowDown
                              style={{
                                transform: "rotate(180deg)",
                                transition: "transform 0.3s ease-in-out",
                              }}
                            />
                          ) : (
                            <IoIosArrowDown />
                          )}
                        </div>
                        <AnimatePresence mode="wait">
                          {smallScreenAccordion === index && (
                            <motion.div
                              className="extra-link-container"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.1, ease: "backInOut" }}
                            >
                              {item.extraLinks?.map((extraLink: any, idx) => (
                                <motion.div
                                  key={extraLink}
                                  initial={{ y: 20, opacity: 0 }}
                                  animate={{ y: 0, opacity: 1 }}
                                  exit={{ y: 20, opacity: 0 }}
                                  transition={{
                                    duration: 0.25,
                                    ease: "easeInOut",
                                    delay: idx * 0.05,
                                  }}
                                >
                                  <NavLink
                                    to={`/${
                                      item.link
                                    }/${extraLink.toLowerCase()}`}
                                    className="extra-link-container-extra"
                                    onClick={() => handleMenuClose(false)}
                                  >
                                    <span>{extraLink}</span>
                                  </NavLink>
                                </motion.div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <NavLink
                        to={item.link}
                        key={item.link}
                        className="hamburger-link"
                      >
                        <div
                          className="menu-item__container-link"
                          onClick={() => handleMenuClose(true)}
                        >
                          {item.name}
                          <MdArrowForward />
                        </div>
                      </NavLink>
                    )
                  )}
                </div>
                <div className="menu-item__container-redirect">
                  <a href={data.redirectLink} target="_blank" rel="noreferrer">
                    <button onClick={() => sendGtmData('Navbar_Redirect_Button_Click')}>
                      {data.redirectButtonName}
                      <FaExternalLinkAlt />
                    </button>
                  </a>
                </div>
                {/* {data.extraLinks &&
                  data.extraLinks.map((extraLink: any) => (
                    <div
                      className="menu-item__container-link"
                      key={extraLink.name}
                    >
                      <a href={extraLink.link} target="_blank" rel="noreferrer">
                        <span>{extraLink.name}</span>
                      </a>
                    </div>
                  ))} */}
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Navbar;
