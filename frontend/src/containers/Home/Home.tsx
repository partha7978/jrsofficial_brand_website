import "./Home.scss";
import useFetchData from "../../hooks/useFetchData";
import { urlFor } from "../../../client/client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import Particles from "../../components/ui/particles";

const Home = () => {
  const { data, loading, error } = useFetchData("homepage");
  const [color, setColor] = useState("#ffffff");

  if (error) {
    console.log(error);
  }

  return (
    <section className="homepage">
      {loading && <p>Loading...</p>}
      {data && (
        <div className="homepage-main">
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
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
    </section>
  );
};

export default Home;
