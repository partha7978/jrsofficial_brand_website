import { motion } from "framer-motion";
import Button from "../Button/Button";

const ProductionEndCtaPage = () => {
  return (
    <section className="production-end-cta">
      <motion.img
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "backInOut", delay: 0.2 }}
        viewport={{ once: true }}
        src="https://images.unsplash.com/photo-1509356843151-3e7d96241e11?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        srcSet="
            https://images.unsplash.com/photo-1509356843151-3e7d96241e11?q=80&w=400&auto=format&fit=crop 400w,
            https://images.unsplash.com/photo-1509356843151-3e7d96241e11?q=80&w=800&auto=format&fit=crop 800w,
            https://images.unsplash.com/photo-1509356843151-3e7d96241e11?q=80&w=1200&auto=format&fit=crop 1200w,
            https://images.unsplash.com/photo-1509356843151-3e7d96241e11?q=80&w=1600&auto=format&fit=crop 1600w,
            https://images.unsplash.com/photo-1509356843151-3e7d96241e11?q=80&w=2071&auto=format&fit=crop 2071w
        "
        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
        alt="production end cta image"
      />
      <div className="production-end-cta-overlay"></div>
      <div className="production-end-cta-content">
        <div className="production-end-cta-content-text">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "backInOut", delay: 0.4 }}
            viewport={{ once: true }}
          >
            Make this your groundbreaking year
          </motion.h1>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "backInOut", delay: 0.5 }}
            viewport={{ once: true }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            reiciendis quibusdam, repellat quia quae quod. Quisquam, quos
          </motion.span>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "backInOut", delay: 0.6 }}
          viewport={{ once: true }}
          className="production-end-cta-content-button"
        >
          <Button
            name="Get Started"
            backgroundColor="#ffffff"
            color="#000000"
            hoverBackgroundColor="#ffca85"
            hoverColor="#000000"
            action="redirectExternal"
            actionData={"https://www.linkedin.com/in/partha-sarathi-muduli/"}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ProductionEndCtaPage;
