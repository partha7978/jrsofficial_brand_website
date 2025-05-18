import "./Contact.scss";
import { MdOutlineMail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { useEffect, useState } from "react";
import { TiLocationArrowOutline } from "react-icons/ti";
import useFetchData from "../../hooks/useFetchData";
import { ContactSchema } from "../../interfaces/interface";
import Loader from "../../components/Loader/Loader";
import Footer from "../Footer/Footer";
import Testimonials from "../Testimonials/Testimonials";
import { motion } from "framer-motion";

const Contact = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");
  const [contactData, setContactData] = useState<ContactSchema | null>(null);
  const {
    data,
    error,
    loading,
  }: {
    data: ContactSchema | null;
    loading: boolean;
    error: any;
  } = useFetchData("contact");

  useEffect(() => {
    if (data) {
      setContactData(data);
    }
  }, [data]);

  useEffect(() => {
    document.body.style.backgroundColor="#000000";

    return () => {
      document.body.style.backgroundColor = "#fbf7ec";
    };
  }, [])

  return (
    <>
      {error && <h1>Something went wrong</h1>}
      {loading && (
        <div style={{ marginBottom: "20rem" }}>
          <Loader />
        </div>
      )}
      {contactData && (
        <div className="contact-section-wrapper">
          <div className="contact-container">
            <section className="contact">
              <div className="contact-data">
                <div className="contact-data-title">
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      ease: "backInOut",
                      delay: 0.2,
                    }}
                    viewport={{ once: true }}
                  >
                    {contactData.title}
                  </motion.h1>
                </div>
                <div className="contact-data-subtext">
                  <motion.span
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      ease: "backInOut",
                      delay: 0.3,
                    }}
                    viewport={{ once: true }}
                  >
                    {contactData.description}
                  </motion.span>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "backInOut", delay: 0.4 }}
                  viewport={{ once: true }}
                  className="contact-data-form"
                >
                  <form>
                    <div
                      className="contact-data-form-item"
                      style={{
                        borderBottom: isFocused
                          ? "2px solid #FFCA85"
                          : "2px solid rgba(194, 194, 194, 0.5)",
                      }}
                    >
                      <label
                        style={{
                          top: isFocused || value ? "-8px" : "20%",
                          fontSize: isFocused || value ? "12px" : "16px",
                          color: isFocused
                            ? "#FFCA85"
                            : "rgba(194, 194, 194, 0.5)",
                        }}
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(value.length > 0)}
                      />
                      <button
                        style={{
                          color:
                            isFocused && value.length > 0
                              ? "#FFCA85"
                              : "rgba(194, 194, 194, 0.5)",
                        }}
                        className={`${
                          isFocused && value.length > 0
                            ? "bubble-animation"
                            : ""
                        }`}
                      >
                        <TiLocationArrowOutline />
                      </button>
                    </div>
                  </form>
                </motion.div>
                <div className="contact-data-link">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      ease: "backInOut",
                      delay: 0.5,
                    }}
                    viewport={{ once: true }}
                    className="contact-data-link-item"
                  >
                    <MdOutlineMail />
                    <span>{contactData.email}</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      ease: "backInOut",
                      delay: 0.6,
                    }}
                    viewport={{ once: true }}
                    className="contact-data-link-item"
                  >
                    <FiPhoneCall />
                    <span>+91 {contactData.phone}</span>
                  </motion.div>
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
    </>
  );
};
const ContactWithFooter = Footer(Contact, "contact-footer");

export default ContactWithFooter;
