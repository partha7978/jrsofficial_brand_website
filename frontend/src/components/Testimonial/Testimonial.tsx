import "./Testimonial.scss";
import { TestimonialSchema } from "../../interfaces/interface";
import { urlFor } from "../../../client/client";
import { motion } from "framer-motion";

const Testimonial = ({
  testimonial,
  idx,
}: {
  testimonial: TestimonialSchema;
  idx: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        ease: "backInOut",
        delay: 0.1 * idx,
      }}
      viewport={{ once: true }}
      className="testimonial-card"
    >
      <div className="testimonial-card-content">
        <h3 className="testimonial-card-content-title">{testimonial.title}</h3>
        <p className="testimonial-card-content-description">
          “{testimonial.description}”
        </p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: [30, 0] }}
          transition={{ duration: 0.5, ease: "backInOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="testimonial-card-content-info"
        >
          {testimonial.image && (
            <div className="profile-img">
              <img
                src={urlFor(testimonial.image).url()}
                loading="lazy"
                alt="Profile Image"
                height={20}
                width={20}
              />
            </div>
          )}
          <div className="text-section">
            <p>{testimonial.name}</p>
            <span>{testimonial.occupation}</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Testimonial;
