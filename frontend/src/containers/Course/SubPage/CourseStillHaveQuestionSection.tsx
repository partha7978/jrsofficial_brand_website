import { Button } from "../../../components";

const CourseStillHaveQuestionSection = () => {
  return (
    <>
      <img
        src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2FsbHBhcGVyJTIwNGt8ZW58MHx8MHx8fDA%3D"
        alt="Register for masterclass background"
        loading="lazy"
        height={200}
        width={200}
      />
      <div className="question-section">
        <h2 className="question-section-title">Still have questions?</h2>
        <p className="question-section-desc">Join the free Masterclass</p>
        <span className="question-section-desc2">Limited Seats Available</span>
        <Button
          name="Register Now"
          backgroundColor="rgb(255, 255, 255, 0.1)"
          color="#ffffff"
          hoverBackgroundColor="rgb(255, 255, 255, 0.1)"
          hoverColor="#ffffff"
          backgroundBlur={42}
        />
      </div>
    </>
  );
};

export default CourseStillHaveQuestionSection;
