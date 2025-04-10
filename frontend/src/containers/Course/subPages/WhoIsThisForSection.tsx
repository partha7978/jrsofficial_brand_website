import React, { forwardRef } from "react";
import { TbCameraSpark } from "react-icons/tb";
import { GiPublicSpeaker } from "react-icons/gi";

const WhoIsThisForSection = forwardRef<HTMLElement, { index: number }>(
  ({ index }, ref) => {
    return (
      <section
        className="course-whose-this-for-section"
        data-index={index}
        ref={ref}
      >
        <div className="course-whose-this-for-section-title">
          <h2>Whose this for</h2>
        </div>
        <div className="course-whose-this-for-section-items">
          <div className="item">
            <TbCameraSpark />
            <span>Content Creators</span>
          </div>
          <div className="item">
            <GiPublicSpeaker />
            <span>Aspiring Public Speakers</span>
          </div>
          <div className="item">
            <TbCameraSpark />
            <span>Content Creators</span>
          </div>
          <div className="item">
            <TbCameraSpark />
            <span>Content Creators</span>
          </div>
          <div className="item">
            <TbCameraSpark />
            <span>Content Creators</span>
          </div>
        </div>
      </section>
    );
  }
);

export default WhoIsThisForSection;
