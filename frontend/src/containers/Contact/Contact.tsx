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
                  <h1>{contactData.title}</h1>
                </div>
                <div className="contact-data-subtext">
                  <span>{contactData.description}</span>
                </div>
                <div className="contact-data-form">
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
                </div>
                <div className="contact-data-link">
                  <div className="contact-data-link-item">
                    <MdOutlineMail />
                    <span>{contactData.email}</span>
                  </div>
                  <div className="contact-data-link-item">
                    <FiPhoneCall />
                    <span>+91 {contactData.phone}</span>
                  </div>
                </div>
              </div>
            </section>
            /* FAQ COMPONENT */ /* TESTIMONIAL COMPONENT */
          </div>
          <Testimonials />
        </div>
      )}
    </>
  );
};
const ContactWithFooter = Footer(Contact, "contact-footer");

export default ContactWithFooter;
