import { useEffect, useState } from "react";
import { urlFor } from "../../../client/client";
import "./Navbar.scss";
import { FaExternalLinkAlt } from "react-icons/fa";
import useFetchData from "../../hooks/useFetchData";

const Navbar = () => {
  // const [navBar, setNavBar] = useState([]);
  const navbarLinks = [
    { name: "home", extraLinks: false, link: "/" },
    { name: "about", extraLinks: false, link: "about" },
    {
      name: "episodes",
      extraLinks: [
        { name: "Fitness", link: "https://www.fitness.com" },
        { name: "Health", link: "https://www.health.com" },
        { name: "Diet", link: "https://www.diet.com" },
        { name: "Wellness", link: "https://www.wellness.com" },
      ],
      link: "/episodes",
    },
    { name: "courses", extraLinks: false, link: "courses" },
    { name: "contact", extraLinks: false, link: "contact" },
  ];
  const { data, loading, error } = useFetchData("navigationBar");

  if (error) {
    console.log(error);
  }

  return (
    <section className="app__navbar">
      {loading && <p>Loading...</p>}
      {data && (
        <>
          <div className="app__navbar-logo">
            <img
              src={data.white_logo && urlFor(data.white_logo).url()}
              alt="The Jrs Show Logo"
            />
            <p className="logo-name">Jrsofficial</p>
          </div>
          <div className="app__navbar-links">
            {navbarLinks.map((item) => (
              <div className="app__navbar-links-item" key={item.link}>
                <div className="dot" />
                <a href={`#${item.link}`}>{item.name}</a>
                {item.extraLinks && item.extraLinks.length > 0 && (
                  <div className="app__navbar-links-item-extra">
                    {item.extraLinks.map((extraLink) => (
                      <a
                        href={extraLink.link}
                        target="_blank"
                        rel="noreferrer"
                        key={extraLink.name}
                        className="app__navbar-links-item-extra-link"
                      >
                        <span>{extraLink.name}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="app__navbar-redirect">
            <a href={data.redirectLink} target="_blank" rel="noreferrer">
              <button>
                {data.redirectButtonName}
                <FaExternalLinkAlt />
              </button>
            </a>
          </div>
        </>
      )}
    </section>
  );
};

export default Navbar;
