import { Button } from "..";
import { Link } from "react-router";
import useFetchData from "../../hooks/useFetchData";
import { useEffect, useState } from "react";
import { urlFor } from "../../../client/client";

const CourseAboutSection = () => {
  const {
    data,
    error,
  }: {
    data: any;
    error: any;
  } = useFetchData("course", "aboutCard");

  const [mainData, setMainData] = useState(null);
  useEffect(() => {
    if (data) {
      setMainData(data.aboutCard[0]);
    }
  }, [data]);

  return (
    <>
      {error && <h1>Something went wrong</h1>}
      {mainData && (
        <div className="course-about-container">
          <div className="course-about-image-section">
            <img
              src={urlFor(mainData?.aboutCardImage).url()}
              alt="The JRS Show Image"
              loading="lazy"
              height={200}
              width={200}
            />
          </div>
          <div className="course-about-overlay"></div>
          <div className="course-about-content">
            <div className="course-about-content-heading">
              <p>Heya!</p>
              <h2>{mainData?.aboutCardTitle}</h2>
            </div>
            <span className="course-about-content-description">
              {mainData?.aboutCardDescription}
            </span>
            <div className="course-about-content-action">
                <Button
                  name="Know More"
                  backgroundColor="rgb(0, 0, 0, 0.5)"
                  color="#ffffff"
                  hoverBackgroundColor="rgb(0, 0, 0, 0.5)"
                  hoverColor="#ffffff"
                  action="redirectInternal"
                  actionData={"/about"}
                />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CourseAboutSection;
