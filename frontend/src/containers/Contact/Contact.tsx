import { Meteors } from "../../components/ui/meteors";
import "./Contact.scss";
import { MdOutlineMail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { useState } from "react";
import { TiLocationArrowOutline } from "react-icons/ti";

const Contact = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="contact-container">
      <section className="contact">
        <Meteors number={30} />
        <div className="contact-data">
          <div className="contact-data-title">
            <h1>Get in Touch with us</h1>
          </div>
          <div className="contact-data-subtext">
            <span>
              Explore vibrant soundscapes where stories of every kind come
              alive, taking you on an immersive journey and through captivating
              narratives.
            </span>
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
                    color: isFocused ? "#FFCA85" : "rgba(194, 194, 194, 0.5)",
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
                    isFocused && value.length > 0 ? "bubble-animation" : ""
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
              <span>gEo7U@example.com</span>
            </div>
            <div className="contact-data-link-item">
              <FiPhoneCall />
              <span>+91 9999999999</span>
            </div>
          </div>
        </div>
      </section>
      /* FAQ COMPONENT */
    </div>
  );
};

export default Contact;
