import { useEffect, useState } from "react";
import { client, urlFor } from "../../../client/client";
import "./Navbar.scss";
import { FaExternalLinkAlt } from "react-icons/fa";
import useFetchData from "../../hooks/useFetchData";

const Navbar = () => {
  // const [navBar, setNavBar] = useState([]);
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
              src={data.black_logo && urlFor(data.black_logo).url()}
              alt="The Jrs Show Logo"
            />
            <p className="logo-name">The JRS Show</p>
          </div>
          <div className="app__navbar-links">
            {["home", "about", "episodes", "courses", "contact"].map((item) => (
              <div className="app__navbar-links-item" key={item}>
                <div className="dot" />
                <a href={`#${item.toLowerCase()}`}>{item}</a>
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
