import useFetchData from "../../hooks/useFetchData";
import Loader from "../../components/Loader/Loader";
import { motion } from "framer-motion";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import "./Testimonials.scss";
import { Testimonial } from "../../components";
import { TestimonialSchema } from "../../interfaces/interface";
import { useRef, useState } from "react";

const Testimonials = () => {
  const { data, loading, error }: any = useFetchData("testimonial");
  const testimonialSliderRef = useRef<HTMLDivElement>(null);
  const [disableButton, setDisableButton] = useState(0);

  const handleTestimonial = (direction: string) => {
    // const container = document.querySelector('.testimonial-carousel-content');
    if (testimonialSliderRef.current) {
      const scrollAmount = testimonialSliderRef.current.scrollWidth;
      console.log(scrollAmount, "scrollAmount");
      testimonialSliderRef.current.scrollBy({
        left:
          scrollAmount && direction === "next"
            ? scrollAmount / data.length
            : -scrollAmount / data.length,
        behavior: "smooth",
      });
      setDisableButton(
        direction === "next" ? disableButton + 1 : disableButton - 1
      );
    }
  };

  return (
    <section className="testimonial">
      {error && <h1>Something went wrong</h1>}
      {loading && <Loader />}
      {data && !loading && (
        <>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: [30, 0] }}
            transition={{ duration: 0.5, ease: "backInOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="testimonial-title"
          >
            Audiocast Creating Audio Adventure
          </motion.h2>
          <div className="testimonial-carousel">
            <div
              className="testimonial-carousel-content"
              ref={testimonialSliderRef}
            >
              {data &&
                data.map((testimonial: TestimonialSchema, idx) => (
                  <Testimonial
                    key={testimonial._id}
                    testimonial={testimonial}
                  />
                ))}
            </div>
            <div className="testimonial-carousel-action">
              <motion.button
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: [-50, 0] }}
                transition={{ duration: 0.5, ease: "backInOut", delay: 0.2 }}
                viewport={{ once: true }}
                className={`prev ${disableButton === 0 ? "disabled" : ""}`}
                onClick={() => {
                  handleTestimonial("prev");
                }}
                aria-label="prev"
              >
                <IoIosArrowBack />
              </motion.button>
              <motion.button
                initial={{ opacity: 0, x: +50 }}
                whileInView={{ opacity: 1, x: [+50, 0] }}
                transition={{ duration: 0.5, ease: "backInOut", delay: 0.2 }}
                viewport={{ once: true }}
                className={`next ${
                  disableButton === data.length - 1 ? "disabled" : ""
                }`}
                aria-label="next"
                onClick={() => {
                  handleTestimonial("next");
                }}
              >
                <IoIosArrowForward />
              </motion.button>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Testimonials;
