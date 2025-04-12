import { useEffect, useState } from "react";
import { Button } from "..";
import useFetchData from "../../hooks/useFetchData";
import { urlFor } from "../../../client/client";

const CourseStillHaveQuestionSection = () => {
  const {
    data,
    error,
  }: {
    data: any;
    error: any;
  } = useFetchData("course", "imageCTA");

  const [mainData, setMainData] = useState(null);
  useEffect(() => {
    if (data) {
      setMainData(data.imageCTA[0]);
    }
  }, [data]);

  return (
    <>
      {error && <h1>Something went wrong</h1>}
      {mainData && (
        <>
          <img
            src={urlFor(mainData?.imageCTAImage).url()}
            alt="The JRS Show Image"
            loading="lazy"
            height={200}
            width={200}
          />
          <div className="question-section">
            <h2 className="question-section-title">{mainData.imageCTATitle}</h2>
            <p className="question-section-desc">{mainData.imageCTAText}</p>
            <span className="question-section-desc2">
              {mainData.imageCTASubText}
            </span>{" "}
            <Button
              name={mainData.imageCTAButton}
              backgroundColor="rgb(255, 255, 255, 0.1)"
              color="#ffffff"
              hoverBackgroundColor="rgb(255, 255, 255, 0.1)"
              hoverColor="#ffffff"
              backgroundBlur={42}
              action="redirectExternal"
              actionData={mainData.imageCTALink}
            />
          </div>
        </>
      )}
    </>
  );
};

export default CourseStillHaveQuestionSection;
