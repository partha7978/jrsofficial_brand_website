import { GiPublicSpeaker } from "react-icons/gi";
import { TbCameraSpark } from "react-icons/tb";

const CourseWhosThisForSection = () => {
  return (
    <>
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
    </>
  );
};

export default CourseWhosThisForSection;
