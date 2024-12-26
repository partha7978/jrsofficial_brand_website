import { urlFor } from "../../../client/client";
import "./Navbar.scss";
import { FaExternalLinkAlt } from "react-icons/fa";
import useFetchData from "../../hooks/useFetchData";
import { motion } from "framer-motion";
import ShimmerButton from "../ui/shimmer-button";

const Navbar = () => {
  const navbarLinksSchema = [
    { name: "home", extraLinks: false, link: "/" },
    { name: "about", extraLinks: false, link: "about" },
    {
      name: "episodes",
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
    { name: "courses", extraLinks: false, link: "courses" },
    { name: "contact", extraLinks: false, link: "contact" },
  ];
  const { data, loading, error }: any = useFetchData("navigationBar");

  if (error) {
    console.log(error);
  }

  return (
    <section className="app__navbar">
      {loading && <p>Loading...</p>}
      {data && (
        <>
          <motion.div
            whileInView={{ y: [+100, 0], opacity: [0, 1] }}
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
              <ShimmerButton className="shadow-2xl" shimmerSize="0.09rem" background="rgba(0,0,0,1)">
                <span>{data.redirectButtonName}</span>
                <FaExternalLinkAlt />
              </ShimmerButton>
            </a>
          </div>
        </>
      )}
    </section>
  );
};

export default Navbar;
