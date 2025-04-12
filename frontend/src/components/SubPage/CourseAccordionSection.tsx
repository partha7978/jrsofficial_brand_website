import { Accordion } from "..";
import { useEffect, useState } from "react";
import useFetchData from "../../hooks/useFetchData";

const CourseAccordionSection = () => {
  const {
    data,
    error,
  }: {
    data: any;
    error: any;
  } = useFetchData("course", "faq");

  const [mainData, setMainData] = useState(null);
  useEffect(() => {
    if (data) {
      setMainData(data.faq[0]);
    }
  }, [data]);

  return (
    <>
      {error && <h1>Something went wrong</h1>}
      {mainData && (
        <>
          <div className="course-accordion-title">
            <h2>{mainData.faqTitle}</h2>
          </div>
          <div className="accordion-items">
            <Accordion accordionData={mainData.faqItems} />
          </div>
        </>
      )}
    </>
  );
};

export default CourseAccordionSection;
