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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: [30, 0] }}
          transition={{ duration: 0.5, ease: "backInOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="homepageCourse-top-section-banner"
        >
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
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: [30, 0] }}
          transition={{ duration: 0.5, ease: "backInOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="homepageCourse-top-section-heading"
        >
          <div className="heading-container">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: [30, 0] }}
              transition={{ duration: 0.5, ease: "backInOut", delay: 0.3 }}
              viewport={{ once: true }}
            >
              Course
            </motion.h2>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: [30, 0] }}
              transition={{ duration: 0.5, ease: "backInOut", delay: 0.3 }}
              viewport={{ once: true }}
              className="description"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              consequuntur in necessitatibus, numquam fuga eligendi facere omnis
              dignissimos non quae.{" "}
            </motion.span>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: [30, 0] }}
              transition={{ duration: 0.5, ease: "backInOut", delay: 0.4 }}
              viewport={{ once: true }}
              className="action"
            >
              <Button
                name="Visit Course"
                backgroundColor="#000"
                color="#fff"
                hoverBackgroundColor="#bce4e9"
                hoverColor="#000"
                action="redirectInternal"
                actionData={"/work/course"}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
      <div className="homepageCourse-mobile-separator">
        <div className="homepageCourse-mobile-separator-line"></div>
        <div className="homepageCourse-mobile-separator-line"></div>
      </div>
      <div className="homepageCourse-bottom-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: [30, 0] }}
          transition={{ duration: 0.5, ease: "backInOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="homepageCourse-bottom-section-action"
        >
          <div className="prod-section-content">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: [30, 0] }}
              transition={{ duration: 0.5, ease: "backInOut", delay: 0.3 }}
              viewport={{ once: true }}
            >
              Production
            </motion.h2>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: [30, 0] }}
              transition={{ duration: 0.5, ease: "backInOut", delay: 0.3 }}
              viewport={{ once: true }}
              className="description"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              consequuntur in necessitatibus, numquam fuga eligendi facere omnis
              dignissimos non quae.
            </motion.span>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: [30, 0] }}
              transition={{ duration: 0.5, ease: "backInOut", delay: 0.4 }}
              viewport={{ once: true }}
              className="action"
            >
              <Button
                name="Visit Production"
                backgroundColor="#000"
                color="#fff"
                hoverBackgroundColor="#bce4e9"
                hoverColor="#000"
                action="redirectInternal"
                actionData={"/work/production"}
              />
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: [30, 0] }}
          transition={{ duration: 0.5, ease: "backInOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="homepageCourse-bottom-section-img"
        >
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
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HomepageCourse;
