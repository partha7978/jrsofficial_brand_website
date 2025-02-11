import "./About.scss";
import { BsArrowRightCircle } from "react-icons/bs";
import useFetchData from "../../hooks/useFetchData";
import Loader from "../../components/Loader/Loader";
import { urlFor } from "../../../client/client";
import { useMemo } from "react";
import useCalculateScrollAndWidth from "../../hooks/useCalculateScroll";

const About = () => {
  const { innerWidth } = useCalculateScrollAndWidth();

  // Dynamically set API parameters based on screen width
  const fetchDataArgs = useMemo(() => {
    return innerWidth > 768
      ? ["about", "title, description, featuredImage, featuredList"]
      : ["about", "title, description, featuredImageForMobile, featuredList"];
  }, [innerWidth]);

  const { data, loading, error } = useFetchData(
    fetchDataArgs[0],
    fetchDataArgs[1]
  );

  return (
    <div className="about">
      {error && <h1>Something went wrong</h1>}
      {loading && <Loader />}
      {data && !loading && (
        <div className="about-card">
          <div className="about-card-img">
            <img
              src={urlFor(
                data.featuredImage || data.featuredImageForMobile
              ).url()}
              alt="Profile Image"
              height={400}
              width={200}
            />
          </div>
          <div className="about-card-content">
            <div className="about-card-content-title">
              <h2>{data.title}</h2>
            </div>
            <div className="about-card-content-subText">
              <span>{data.description}</span>
            </div>
            <div className="about-card-content-list">
              {data.featuredList && (
                <ul>
                  {data.featuredList?.map((item, index) => (
                    <li key={item + index}>
                      <BsArrowRightCircle />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="about-card-content-action-btn">
              <a href="/">
                <button>Know More</button>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
