import { urlFor } from "../../../client/client";
import "./BentoGrid.scss";
import { motion } from "framer-motion";

const BentoGrid = ({ highlights }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "backInOut", delay: 0.2 }}
      viewport={{ once: true }}
      className="bento-grid"
    >
      {!highlights && <h1>We cant load this right now. Try again later</h1>}
      {highlights && highlights.length > 0 && (
        <>
          {/* First Row */}
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "backInOut", delay: 0.3 }}
            className="grid-item small"
          >
            <img
              loading="lazy"
              src={urlFor(highlights[0]?.image).url()}
              alt="JRS Old Image"
            />
          </motion.div>
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "backInOut", delay: 0.3 }}
            className="grid-item large"
          >
            <h2>{highlights[0]?.title}</h2>
            <span>{highlights[0]?.text}</span>
          </motion.div>

          {/* Second Row */}
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "backInOut", delay: 0.3 }}
            className="grid-item large"
          >
            <h2>{highlights[1]?.title}</h2>
            <span>{highlights[1]?.text}</span>
          </motion.div>
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "backInOut", delay: 0.3 }}
            className="grid-item small"
          >
            <img
              loading="lazy"
              src={urlFor(highlights[1]?.image).url()}
              alt="JRS New Image"
            />
          </motion.div>
        </>
      )}
    </motion.div>
  );
};

export default BentoGrid;
