import { Button } from "../../../components";
import { Link } from "react-router";

const CourseAboutSection = () => {
  return (
    <div className="course-about-container">
      <div className="course-about-image-section">
        <img
          src="https://images.unsplash.com/photo-1604856420566-576ba98b53cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fGJsdWUlMjB0aGVtZXxlbnwwfHwwfHx8MA%3D%3D"
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
          <h2>I’m JRS</h2>
        </div>
        <span className="course-about-content-description">
          My hunch is someone you trust mentioned my name, or you stumbled upon
          one of my videos, quotes or articles online. Whatever path you took,
          I’m really glad you’re here. This site is full of incredible resources
          and ideas that can help you change your life (not kidding!). Here’s a
          quick lay of the land so you can find what you’re looking for and we
          can start something beautiful together.
        </span>
        <div className="course-about-content-action">
          <Link to="/about">
            <Button
              name="Know More"
              backgroundColor="rgb(0, 0, 0, 0.5)"
              color="#ffffff"
              hoverBackgroundColor="rgb(0, 0, 0, 0.5)"
              hoverColor="#ffffff"
              // backgroundBlur={42}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseAboutSection;
