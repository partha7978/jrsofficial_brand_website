import "./Home.scss";
import { useState, useEffect } from "react";
import useFetchData from "../../hooks/useFetchData.js";
import { urlFor } from "../../../client/client";

const Home = () => {
  const { data, loading, error } = useFetchData("homepage");

  if (error) {
    console.log(error);
  }

  return (
    <section className="homepage">
      {loading && <p>Loading...</p>}
      {data && (
        <div className="homepage-main">
          <div
            className="homepage-main-img"
            style={{
              backgroundImage: `url(${urlFor(data.mainBackgroundImage).url()})`,
            }}
          >
            <div className="homepage-main-overlay"></div>
          </div>

          <div className="homepage-main-content">
            <div className="main-heading">
              <h1>{data.mainHeadingFirstLine}</h1>
              <h1>{data.mainHeadingSecondLine}</h1>
            </div>
            <div className="main-subheading">
              <p>{data.mainSubheading}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
