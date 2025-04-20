import { motion } from "framer-motion";
const ProductionReusuableSeparator = ({ color }: { color: string }) => {
  const style = {
    backgroundColor: color || "#ffffff",
  };
  const largeStyle = {
    border: ` 2px solid ${color || "#ffffff"}`,
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "backInOut", delay: 0.2 }}
      viewport={{ once: true }}
      className="separator"
    >
      <div className="separator-large" style={largeStyle}></div>
      <div className="separator-small" style={style}></div>
    </motion.div>
  );
};

export default ProductionReusuableSeparator;
