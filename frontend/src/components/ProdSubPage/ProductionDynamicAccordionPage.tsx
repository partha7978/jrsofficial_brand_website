import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import ProductionReusuableSeparator from "./ProductionReusuableSeparator";
const accordionSchema = [
  {
    title: "The 3-Stage Growth Accelerator For Your Business1",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas reiciendis quibusdam, repellat quia quae",
    image:
      "https://images.unsplash.com/photo-1694869248420-4eb6d96a3bf2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ0fHxldmVuaW5nfGVufDB8fDB8fHww",
  },
  {
    title: "The 3-Stage Growth Accelerator For Your Business2",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas reiciendis quibusdam, repellat quia quae",
    image:
      "https://images.unsplash.com/photo-1743836623675-7f6c587390ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
  },
  {
    title: "The 3-Stage Growth Accelerator For Your Business3",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas reiciendis quibusdam, repellat quia quae",
    image:
      "https://images.unsplash.com/photo-1744000043352-eabd36a2ecb8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
  },
];
const ProductionDynamicAccordionPage = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [imageUrl, setImageUrl] = useState<string>(accordionSchema[0].image);
  const progressRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % accordionSchema.length);
    }, 5000);
    setImageUrl(accordionSchema[activeIndex].image); // Set image based on active index
    console.log(accordionSchema[activeIndex].title, "progress");

    return () => clearInterval(interval);
  }, [activeIndex]);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 4800;
    if (progressRef.current) {
      progressRef.current.style.width = "0%";
    }

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const percent = Math.min((elapsed / duration) * 100, 100);
      if (progressRef.current) {
        progressRef.current.style.width = `${percent}%`;
      }

      if (percent >= 100) {
        clearInterval(interval); // Stop when done
      }
    }, 100); // Smooth updates every 100ms

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section className="production-accordion-main">
      <ProductionReusuableSeparator color="#ffffff" />

      <div className="production-accordion-main-heading">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "backInOut", delay: 0.4 }}
          //   viewport={{ once: true }}
        >
          The 3-Stage Growth Accelerator For Your Business
        </motion.h1>
      </div>
      <div className="production-accordion-main-content">
        <div className="production-accordion-main-content-action">
          {accordionSchema.map((item, index) => (
            <div
              className={`production-accordion-main-content-action-item ${
                index === activeIndex && "active"
              }`}
              key={item.title}
              onClick={() => {
                setActiveIndex(index);
                setImageUrl(item.image);
              }}
            >
              <div className="production-accordion-main-content-action-item-heading">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: "backInOut",
                    delay: 0.4,
                  }}
                  viewport={{ once: true }}
                >
                  {item.title}
                </motion.h2>
              </div>
              <AnimatePresence initial={false}>
                {index === activeIndex && (
                  <>
                    <motion.div
                      key="description"
                      className="production-accordion-main-content-action-item-description"
                      initial={{ opacity: 0, y: 30, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: "auto" }}
                      exit={{ opacity: 0, y: 30, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      style={{
                        overflow: "hidden",
                      }}
                    >
                      <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{
                          duration: 0.4,
                          ease: "easeInOut",
                          delay: 0.1,
                        }}
                      >
                        {item.description}
                      </motion.span>
                    </motion.div>
                  </>
                )}
                {index === activeIndex && (
                  <div className="production-accordion-main-content-action-item-image">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={imageUrl}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        src={imageUrl}
                        alt="Production Home Image"
                        loading="lazy"
                        height={200}
                        width={200}
                      />
                    </AnimatePresence>
                    <div className="overlay"></div>
                  </div>
                )}
              </AnimatePresence>
            </div>
          ))}

          <div className="dynamic-progressbar">
            <div ref={progressRef} className="progress"></div>
          </div>
        </div>
        <div className="production-accordion-main-content-image">
          <motion.img
            key={imageUrl}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "backInOut", delay: 0.1 }}
            src={imageUrl}
            alt="Production Home Image"
            loading="lazy"
            height={200}
            width={200}
          />
          <div className="overlay"></div>
        </div>
      </div>
    </section>
  );
};

export default ProductionDynamicAccordionPage;
