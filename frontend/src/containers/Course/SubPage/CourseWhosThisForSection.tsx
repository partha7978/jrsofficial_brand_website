import { FaRegArrowAltCircleRight } from "react-icons/fa";
import useFetchData from "../../../hooks/useFetchData";
import { useEffect, useState } from "react";
import { urlFor } from "../../../../client/client";

const CourseWhosThisForSection = () => {
  const {
    data,
    error,
  }: {
    data: any;
    error: any;
  } = useFetchData("course", "whoIsThisFor");

  const [mainData, setMainData] = useState(null);
  useEffect(() => {
    if (data) {
      setMainData(data.whoIsThisFor[0]);
    }
  }, [data]);

  return (
    <>
      {error && <h1>Something went wrong</h1>}
      {mainData && (
        <>
          <div className="course-whose-this-for-section-title">
            <h2>{mainData.whoIsThisForTitle}</h2>
          </div>
          <div className="course-whose-this-for-section-items">
            {mainData.whoIsThisForItems?.map((item: any, index: number) => (
              <div className="item">
                {/* <TbCameraSpark /> */}
                {item.whoIsThisForItemImage ? (
                  <img
                    src={urlFor(item.whoIsThisForItemImage).url()}
                    alt={item.whoIsThisForItemTitle + "icon"}
                    loading="lazy"
                  />
                ) : (
                  <FaRegArrowAltCircleRight />
                )}
                <span>{item.whoIsThisForItemTitle}</span>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default CourseWhosThisForSection;
