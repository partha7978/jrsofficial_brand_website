import { Button } from "../../components";
import "./HomepageCourse.scss";
import { motion } from "framer-motion";
const HomepageCourse = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "backInOut", delay: 0.3 }}
      viewport={{ once: true }}
      className="homepageCourse"
    >
      <div className="homepageCourse-top-section">
        <div className="homepageCourse-top-section-banner">
          <div className="img-bg">
            <img
              src={
                "https://images.unsplash.com/photo-1464618663641-bbdd760ae84a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJsdWUlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww"
              }
              alt="homepage course banner"
              loading="lazy"
              height={200}
              width={200}
            />
          </div>
        </div>
        <div className="homepageCourse-top-section-heading">
          <div className="heading-container">
            <h2>Course</h2>
            <span className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              consequuntur in necessitatibus, numquam fuga eligendi facere omnis
              dignissimos non quae.{" "}
            </span>
            <div className="action">
              <Button
                name="Visit Course"
                backgroundColor="#000"
                color="#fff"
                hoverBackgroundColor="#bce4e9"
                hoverColor="#000"
                action="redirectInternal"
                actionData={"/work/course"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="homepageCourse-mobile-separator">
        <div className="homepageCourse-mobile-separator-line"></div>
        <div className="homepageCourse-mobile-separator-line"></div>
      </div>
      <div className="homepageCourse-bottom-section">
        <div className="homepageCourse-bottom-section-action">
          <div className="prod-section-content">
            <h2>Production</h2>
            <span className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              consequuntur in necessitatibus, numquam fuga eligendi facere omnis
              dignissimos non quae.
            </span>
            <div className="action">
              <Button
                name="Visit Production"
                backgroundColor="#000"
                color="#fff"
                hoverBackgroundColor="#bce4e9"
                hoverColor="#000"
                action="redirectInternal"
                actionData={"/work/production"}
              />
            </div>
          </div>
        </div>
        <div className="homepageCourse-bottom-section-img">
          <img
            src={
              "https://images.unsplash.com/photo-1604856420566-576ba98b53cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGJsdWUlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww"
            }
            alt="homepage course banner"
            loading="lazy"
            height={200}
            width={200}
          />
          <div className="img-overlay"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default HomepageCourse;
