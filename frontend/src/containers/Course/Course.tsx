import "./Course.scss";
import { IoIosArrowDown } from "react-icons/io";
import { Button } from "../../components";
import { FaVideo } from "react-icons/fa6";

const Course = () => {
  return (
    <main className="course">
      <section className="course-video">
        <video
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          autoPlay
          loop
          muted
          preload="auto"
          playsInline
        ></video>
        <div className="course-video-heading">
          <h1>
            Create a Business and Life You <span>Love</span>
          </h1>
        </div>
        <div className="course-video-action">
          <Button
            name="Watch the video"
            backgroundColor=""
            hoverBackgroundColor=""
            color=""
            hoverColor=""
            icon={<FaVideo />}
          />
        </div>
        <div className="course-video-navigation">
          <IoIosArrowDown />
        </div>
      </section>
    </main>
  );
};

export default Course;
