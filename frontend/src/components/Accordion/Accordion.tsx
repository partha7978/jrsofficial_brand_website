import { useState } from "react";
import {
  AccordionDataProps,
  AccordionStyleProps,
} from "../../interfaces/interface";
import "./Accordion.scss";
import { IoIosArrowDown } from "react-icons/io";
import { urlFor } from "../../../client/client";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

interface AccordionProps extends AccordionStyleProps {
  accordionData: AccordionDataProps[];
}

const AccordionItem = ({
  item,
  accordionStyle,
  index,
  showAccordion,
  setShowAccordionIndex,
  color,
}: {
  item: AccordionDataProps;
  accordionStyle: AccordionStyleProps;
  index: number;
  showAccordion: boolean;
  setShowAccordionIndex: React.Dispatch<React.SetStateAction<number>>;
  color: string;
}) => {
  const handleAccordionClick = () => {
    if (showAccordion) {
      setShowAccordionIndex(-1);
    } else {
      setShowAccordionIndex(index);
    }
  };

  return (
    <div
      className="accordion"
      style={accordionStyle}
      key={item.faqItemTitle}
      onClick={() => handleAccordionClick()}
    >
      <div className={`accordion-title ${showAccordion ? "active" : ""}`}>
        <div className="accordion-title-text">
          <div className="accordion-icon">
            {item.faqItemImage ? (
              <img
                src={urlFor(item.faqItemImage).url()}
                alt={item.faqItemTitle + " icon"}
                loading="lazy"
              />
            ) : (
              <FaRegArrowAltCircleRight />
            )}
          </div>
          <div className="accordion-title-text">{item.faqItemTitle}</div>
        </div>
        <div className={`accordion-icon ${showAccordion ? "rotate" : ""}`}>
          <IoIosArrowDown />
        </div>
      </div>
      <div
        className="accordion-content"
        style={{
          maxHeight: showAccordion ? "500px" : "0px",
          overflow: "hidden",
        }}
      >
        <div
          className="accordion-divider"
          style={{
            backgroundColor: color ?? "#ffffff",
          }}
        ></div>
        {item.faqItemText}
      </div>
    </div>
  );
};

const Accordion: React.FC<AccordionProps> = ({ accordionData, ...rest }) => {
  const {
    backgroundColor,
    color,
    borderColor,
    backgroundBlur,
    parentBackgroundColor,
  } = rest;

  const [showAccordionIndex, setShowAccordionIndex] = useState(0);

  const accordionParentStyle = {
    backgroundColor: parentBackgroundColor || "#000000",
  };

  const accordionStyle = {
    background: backgroundColor
      ? backgroundColor
      : "linear-gradient(90deg, rgb(41 18 1) -10%, rgb(0, 0, 0) 55%, rgb(10 9 9) 110%) !important",
    color: color ?? "#ffffff",
    border: borderColor
      ? `1px solid ${borderColor}`
      : "1px solid rgba(255, 255, 255, 0.3)",
    backdropFilter: `blur(${backgroundBlur || 0}px)`,
  };

  return (
    <section className="accordion-container" style={accordionParentStyle}>
      {accordionData?.map((item, index) => (
        <AccordionItem
          key={item.faqItemTitle}
          item={item}
          accordionStyle={accordionStyle}
          index={index}
          showAccordion={index === showAccordionIndex}
          setShowAccordionIndex={setShowAccordionIndex}
          color={color}
        />
      ))}
    </section>
  );
};

export default Accordion;
