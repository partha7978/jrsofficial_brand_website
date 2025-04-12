import { useEffect, useState } from "react";
import useFetchData from "../../../hooks/useFetchData";

const CourseWhyDiffSection = () => {
  const {
    data,
    error,
  }: {
    data: any;
    error: any;
  } = useFetchData("course", "whyDifferent");

  const [mainData, setMainData] = useState(null);
  useEffect(() => {
    if (data) {
      setMainData(data.whyDifferent[0]);
    }
  }, [data]);

  return (
    <>
      {error && <h1>Something went wrong</h1>}
      {mainData && (
        <>
          <div className="course-why-different-section-title">
            <h2>{mainData.whyDifferentTitle}</h2>
          </div>
          <div className="course-why-different-section-desc">
            <span>{mainData.whyDifferentText}</span>
          </div>
        </>
      )}
    </>
  );
};

export default CourseWhyDiffSection;
