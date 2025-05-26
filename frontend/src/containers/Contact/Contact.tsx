import "./Contact.scss";
import { MdOutlineMail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { useEffect, useState } from "react";
import { TiLocationArrowOutline } from "react-icons/ti";
import useFetchData from "../../hooks/useFetchData";
import { ContactSchema } from "../../interfaces/interface";
import Loader from "../../components/Loader/Loader";
import Footer from "../Footer/Footer";
import { motion } from "framer-motion";
import { useRef } from "react";
import { Toast } from "../../components";
import { getCurrentDate } from "../../service/getCurrentDate";
import { client } from "../../../client/client";

const Contact = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const formSchema = [
    {
      type: "text",
      placeholder: "Name",
      name: "name",
    },
    {
      type: "email",
      placeholder: "Email",
      name: "email",
    },
    {
      type: "phone",
      placeholder: "Phone",
      name: "phone",
    },
  ];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const loaderStyle = {
    border: `2px solid ${"#ffffff"}`,
    borderBottomColor: "#000000",
  };
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
  const [currentFormContent, setCurrentFormContent] = useState(formSchema[0]);
  const [buttonLoader, setButtonLoader] = useState(false);
  const [formError, setFormError] = useState("");
  const [showFinalMessage, setShowFinalMessage] = useState(false);
  const [toast, setToast] = useState<{
    type: "success" | "error" | "def" | "warning";
    message: string;
  }>({ type: "def", message: "" });
  const [toastOpen, setToastOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (data) {
      setContactData(data);
    }
  }, [data]);

  useEffect(() => {
    document.body.style.backgroundColor = "#000000";

    return () => {
      document.body.style.backgroundColor = "#fbf7ec";
    };
  }, []);

  useEffect(() => {
    // you can trigger next action here too if needed\
    if (formData.name && formData.email && formData.phone) {
      formDataSubmit();
    }
  }, [formData]);

  useEffect(() => {
    if (toast.message.length > 1 && toastOpen === false) {
      setToastOpen(true);
    }
  }, [toast]);

  const handleBtnClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setButtonLoader(true);

    if (await validateForm({ value, type: currentFormContent.type })) {
      setTimeout(() => {
        setFormData((prevData) => {
          const updatedData = {
            ...prevData,
            [currentFormContent.name]: value,
          };
          console.log("Form submitted with value:", value);
          console.log("Updated formData:", updatedData);
          return updatedData;
        });

        setButtonLoader(false);
        setIsFocused(false);
        setValue("");
        const index = formSchema.findIndex(
          (item) => item.name === currentFormContent.name
        );
        if (index === formSchema.length - 1) {
          // setCurrentFormContent(formSchema[0]);
        } else {
          setCurrentFormContent(formSchema[index + 1]);
        }

        ref.current?.focus();
      }, 1500);
    } else {
      setButtonLoader(false);
      if (currentFormContent.name === "name") {
        setFormError("Please enter a valid name.");
      } else if (currentFormContent.name === "email") {
        setFormError("Please enter a valid email address.");
      } else if (currentFormContent.name === "phone") {
        setFormError("Please enter a valid phone number.");
      } else {
        setFormError("Please fill out this field.");
      }
    }
  };

  const formDataSubmit = async () => {
    if (isSubmitting) return; // Prevent multiple clicks
    setIsSubmitting(true);

    const alreadyExists = await checkDuplicate();
    if (alreadyExists) {
      setToast({
        type: "warning",
        message: "We already have your email, we will get back to you soon",
      });
      setIsSubmitting(false);
      setCurrentFormContent(formSchema[0]);
      setFormData({ name: "", email: "", phone: "" });
      return;
    }

    const alreadySubmitted = await hasSubmittedToday();
    if (alreadySubmitted) {
      setToast({
        type: "warning",
        message: "You already submitted today, please try again tomorrow",
      });
      setIsSubmitting(false);
      setCurrentFormContent(formSchema[0]);
      setFormData({ name: "", email: "", phone: "" });
      return;
    }

    const userSubmittedData = {
      _type: "userSubmittedData",
      source: "Contact Page Form",
      name: formData.name || "N/A",
      email: formData.email,
      phone: formData.phone || "N/A",
      time: getCurrentDate(),
    };

    client
      .create(userSubmittedData)
      .then(() => {
        setToast({
          type: "success",
          message:
            "We have received your details, we will get back to you soon",
        });
        setFormData({ name: "", email: "", phone: "" });
        setShowFinalMessage(true);
        setCurrentFormContent(formSchema[0]);
      })
      .catch((err) => {
        setToast({ type: "error", message: "Something went wrong" });
        setFormData({ name: "", email: "", phone: "" });
        setCurrentFormContent(formSchema[0]);
      })
      .finally(() => {
        setTimeout(() => {
          setIsSubmitting(false);
        }, 7000);
        setCurrentFormContent(formSchema[0]);
      });
  };

  const checkDuplicate = async () => {
    if (!formData.email) return false;
    const query = `*[_type == "userSubmittedData" && (email == $email && source == "Contact Page Form")]`;
    const existing = await client.fetch(query, { email: formData.email });

    return existing.length > 0;
  };

  const hasSubmittedToday = async () => {
    if (!formData.email) return false;
    const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
    const query = `*[_type == "userSubmittedData" && (email == $email && source == "Footer Newsletter Subscription") && time >= "${today}T00:00:00Z"]`;
    const result = await client.fetch(query, { email: formData.email });
    return result.length > 0;
  };

  const getCurrentDate = () => {
    const now = new Date();

    const formattedDate = now.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const formattedTime = now.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
    return `${formattedDate} — ${formattedTime}`;
  };

  const validateForm = async ({
    value,
    type,
  }: {
    value: string;
    type: string;
  }) => {
    if (type === "email") {
      const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      return emailRegex.test(value.trim());
    } else if (type === "phone") {
      const phoneRegex = /^\d{10}$/; // Indian 10-digit numbers
      return phoneRegex.test(value.trim());
    } else if (type === "name") {
      const nameRegex = /^[a-zA-Z\s]{2,}$/; // Only letters and spaces, at least 2 characters
      return nameRegex.test(value.trim());
    }
    return value.trim().length > 0; // Default check for any other types
  };

  return (
    <>
      {error && <h1>Something went wrong</h1>}
      {loading && (
        <div style={{ marginBottom: "20rem" }}>
          <Loader />
        </div>
      )}
      <>
        <Toast
          type={toast.type}
          message={toast.message}
          isOpen={toastOpen}
          setIsOpen={setToastOpen}
          setToast={setToast}
        />
      </>
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
                    {!showFinalMessage && (
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
                          {currentFormContent.placeholder}
                        </label>
                        <input
                          ref={ref}
                          type={currentFormContent.type}
                          name={currentFormContent.name}
                          value={value}
                          onChange={(e) => {
                            setValue(e.target.value);
                            setFormError("");
                          }}
                          onFocus={() => setIsFocused(true)}
                          onBlur={() => setIsFocused(value.length > 0)}
                        />
                        {buttonLoader ? (
                          <span className="loader" style={loaderStyle}></span>
                        ) : (
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
                            onClick={(e) => handleBtnClick(e)}
                          >
                            <TiLocationArrowOutline />
                          </button>
                        )}
                      </div>
                    )}
                    <div className="contact-data-form-error">
                      {formError && <span>{formError}</span>}
                    </div>
                    {showFinalMessage && (
                      <div className="contact-data-form-message">
                        <h2>Thanks for reaching out.</h2>
                        <p>
                          We will get back to you as soon as possible. In the
                          meantime, feel free to explore our website for more
                          information.
                        </p>
                      </div>
                    )}
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
