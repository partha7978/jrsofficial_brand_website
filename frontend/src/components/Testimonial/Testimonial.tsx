import "./Testimonial.scss";
import { TestimonialSchema } from "../../interfaces/interface";
import { urlFor } from "../../../client/client";
import { motion } from "framer-motion";

const Testimonial = ({ testimonial }: { testimonial: TestimonialSchema }) => {
  return (
    <div className="testimonial-card">
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "backInOut", delay: 0.2 }}
        className="testimonial-card-content"
      >
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: [30, 0] }}
          transition={{ duration: 0.5, ease: "backInOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="testimonial-card-content-title"
        >
          {testimonial.title}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: [30, 0] }}
          transition={{ duration: 0.7, ease: "backInOut", delay: 0.4 }}
          viewport={{ once: true }}
          className="testimonial-card-content-description"
        >
          “{testimonial.description}”
        </motion.p>
        <div className="testimonial-card-content-info">
          {testimonial.image && (
            <div className="profile-img">
              <motion.img
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "backInOut", delay: 0.2 }}
                src={urlFor(testimonial.image).url()}
                loading="lazy"
                alt="Profile Image"
                height={20}
                width={20}
              />
            </div>
          )}
          <div className="text-section">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: [30, 0] }}
              transition={{ duration: 0.5, ease: "backInOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              {testimonial.name}
            </motion.p>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: [30, 0] }}
              transition={{ duration: 0.8, ease: "backInOut", delay: 0.6 }}
              viewport={{ once: true }}
            >
              {testimonial.occupation}
            </motion.span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Testimonial;
