import { GiPublicSpeaker } from "react-icons/gi";
import { AccordionDataProps } from "../../../interfaces/interface";
import { TbCameraSpark } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { Accordion } from "../../../components";

const accordionDummyData: AccordionDataProps[] = [
  {
    title: "Accordion 1",
    icon: <GiPublicSpeaker />,
    accordionContent:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque deserunt et molestias saepe enim, ipsam veniam laboriosam, commodi nesciunt ullam atque numquam libero amet, sunt deleniti. Impedit nihil aut sit. Perspiciatis nam numquam distinctio expedita fuga deserunt sint modi eum itaque deleniti magnam nihil consectetur pariatur exercitationem nisi culpa, dolor laborum molestiae, officiis accusantium repellat! Laborum reprehenderit quidem quis dolor.",
  },
  {
    title: "Accordion 2",
    icon: <TbCameraSpark />,
    accordionContent:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque deserunt et molestias saepe enim, ipsam veniam laboriosam, commodi nesciunt ullam atque numquam libero amet, sunt deleniti. Impedit nihil aut sit. Perspiciatis nam numquam distinctio expedita fuga deserunt sint modi eum itaque deleniti magnam nihil consectetur pariatur exercitationem nisi culpa, dolor laborum molestiae, officiis accusantium repellat! Laborum reprehenderit quidem quis dolor.",
  },
  {
    title: "Accordion 3",
    icon: <IoIosArrowDown />,
    accordionContent:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque deserunt et molestias saepe enim, ipsam veniam laboriosam, commodi nesciunt ullam atque numquam libero amet, sunt deleniti. Impedit nihil aut sit. Perspiciatis nam numquam distinctio expedita fuga deserunt sint modi eum itaque deleniti magnam nihil consectetur pariatur exercitationem nisi culpa, dolor laborum molestiae, officiis accusantium repellat! Laborum reprehenderit quidem quis dolor.",
  },
];

const CourseAccordionSection = () => {
  return (
    <>
      <div className="course-accordion-title">
        <h2>Quick Answers to Your Questions</h2>
      </div>
      <div className="accordion-items">
        <Accordion accordionData={accordionDummyData} />
      </div>
    </>
  );
};

export default CourseAccordionSection;
