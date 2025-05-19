import { Button, Input, Toast, VideoPlayer } from "../index";
import { HiPlay } from "react-icons/hi2";
import { getFileAsset } from "@sanity/asset-utils";
import { useEffect, useState } from "react";
import useFetchData from "../../hooks/useFetchData";
import { motion } from "framer-motion";
import { client, urlFor } from "../../../client/client";

const CourseFeaturedPodcastSection = () => {
  const {
    data,
    error,
  }: {
    data: any;
    error: any;
  } = useFetchData("course", "featuredPodcast");
  const projectId = import.meta.env.VITE_API_KEY_PROJECTID;
  const dataset = "production";

  const [mainData, setMainData] = useState(null);
  const [mainVideoData, setMainVideoData] = useState<string>("");
  const [bgVideo, setBgVideo] = useState<string>("");
  const [toast, setToast] = useState<{
    type: "success" | "error" | "def" | "warning";
    message: string;
  }>({ type: "def", message: "" });
  const [toastOpen, setToastOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    if (data) {
      setMainData(data.featuredPodcast[0]);
      const bgVideoAsset = getFileAsset(
        data.featuredPodcast[0]?.podcastVideo[0]?.podcastBackgroundVideo,
        { projectId, dataset }
      );
      setBgVideo(bgVideoAsset.url);

      const mainVideoAsset = getFileAsset(
        data.featuredPodcast[0]?.podcastVideo[0]?.podcastVideo,
        { projectId, dataset }
      );
      setMainVideoData(mainVideoAsset.url);
    }
  }, [data]);

  useEffect(() => {
    if (toast.message.length > 1 && toastOpen === false) {
      setToastOpen(true);
    }
  }, [toast]);

  // Video Popup
  const [isOpen, setIsOpen] = useState(false);
  const handleVideoPopup = () => {
    setIsOpen(true);
  };

  //handling form
  const { name, email, phone } = formData;
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const validateForm = () => {
    if (!name || !email || !phone) {
      setToast({ type: "warning", message: "Please fill all fields" });
      return false;
    }

    //Validate email
    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setToast({ type: "warning", message: "Please enter a valid email" });
      return false;
    }

    // Validate phone number length
    if (phone.length < 10 || phone.length > 13) {
      setToast({
        type: "warning",
        message: "Please enter a valid phone number including country code",
      });
      return false;
    }

    // Validate phone number format (e.g., starts with + and contains only digits)
    if (!/^\+?[1-9]\d{9,12}$/.test(phone)) {
      setToast({
        type: "warning",
        message: "Please enter a valid phone number in the correct format",
      });
      return false;
    }

    return true;
  };

  useEffect(() => {
    if (toast.message.length > 1 && toastOpen === false) {
      setToastOpen(true);
    }
  }, [toast]);

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

  const formDataSubmit = (e: any) => {
    e.preventDefault();
    if (validateForm()) {
      const userSubmittedData = {
        _type: "userSubmittedData",
        source: "Course Featured Podcast Form",
        name: name || "N/A",
        email: email,
        phone: phone || "N/A",
        time: getCurrentDate(),
      };

      client
        .create(userSubmittedData)
        .then(() => {
          setToast({ type: "success", message: "Form submitted successfully" });
          setFormData({ name: "", email: "", phone: "" });
        })
        .catch((err) => {
          setToast({ type: "error", message: "Something went wrong" });
          setFormData({ name: "", email: "", phone: "" });
        });
    }
  };

  return (
    <>
      {error && <h1>Something went wrong</h1>}
      <>
        <VideoPlayer
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          videoLink={mainVideoData}
        />
      </>
      <>
        <Toast
          type={toast.type}
          message={toast.message}
          isOpen={toastOpen}
          setIsOpen={setToastOpen}
          setToast={setToast}
        />
      </>
      {mainData && (
        <>
          <div className="featured-podcast-top-section">
            <div className="featured-podcast-top-section-banner">
              <div className="img-bg">
                <motion.img
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, ease: "backInOut", delay: 0.3 }}
                  viewport={{ once: true }}
                  src={urlFor(mainData.podcastImage).url()}
                  alt="featured podcast banner"
                  loading="lazy"
                  height={200}
                  width={200}
                />
              </div>
            </div>
            <div className="featured-podcast-top-section-heading">
              <motion.h2
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "backInOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                {mainData.podcastTitle}
              </motion.h2>
            </div>
          </div>
          <div className="featured-podcast-mobile-separator">
            <div className="featured-podcast-mobile-separator-line"></div>
            <div className="featured-podcast-mobile-separator-line"></div>
          </div>
          <div className="featured-podcast-bottom-section">
            <div className="featured-podcast-bottom-section-action">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: [30, 0] }}
                transition={{ duration: 0.5, ease: "backInOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                {mainData.podcastForm[0]?.podcastFormTitle}
              </motion.h2>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: [30, 0] }}
                transition={{ duration: 0.5, ease: "backInOut", delay: 0.4 }}
                viewport={{ once: true }}
                className="description"
              >
                {mainData.podcastForm[0]?.podcastFormDescription}
              </motion.span>
              <div className="featured-ratio">
                {mainData.podcastForm[0]?.podcastFormHighlights?.map((item) => (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, y: [30, 0] }}
                    transition={{
                      duration: 0.5,
                      ease: "backInOut",
                      delay: 0.6,
                    }}
                    viewport={{ once: true }}
                    className="ratio"
                    key={item.highlightPercentageName}
                  >
                    <p>{item.highlightPercentage}%</p>
                    <span>{item.highlightPercentageName}</span>
                  </motion.div>
                ))}
              </div>
              <motion.form
                action=""
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: [30, 0] }}
                transition={{ duration: 0.5, ease: "backInOut", delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Input
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="name"
                  background="#141414"
                  color="#ffffff"
                  value={name}
                  required={true}
                  onChange={handleInputChange}
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="email"
                  background="#141414"
                  color="#ffffff"
                  required={true}
                  value={email}
                  onChange={handleInputChange}
                />
                <Input
                  name="phone"
                  type="number"
                  placeholder="Phone"
                  className="phone"
                  background="#141414"
                  color="#ffffff"
                  required={true}
                  value={phone}
                  onChange={handleInputChange}
                />
                <Button
                  name="Send me invitations"
                  backgroundColor="rgb(255, 151, 0)"
                  color="#000000"
                  hoverBackgroundColor="#ffffff"
                  hoverColor="#000000"
                  action="formSubmit"
                  actionData={formDataSubmit}
                />
              </motion.form>
            </div>
            <div className="featured-podcast-bottom-section-video">
              <video
                src={bgVideo}
                autoPlay
                loop
                muted
                preload="auto"
                playsInline
              ></video>
              <div className="video-overlay"></div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: "backInOut", delay: 0.4 }}
                viewport={{ once: true }}
                className="video-play-btn"
              >
                <Button
                  name="Watch"
                  backgroundColor="rgb(0, 0, 0, 0.1)"
                  color="#ffffff"
                  hoverBackgroundColor="rgb(0, 0, 0, 0.1)"
                  hoverColor="#ffffff"
                  icon={<HiPlay />}
                  backgroundBlur={42}
                  action="triggerPopup"
                  actionData={handleVideoPopup}
                />
              </motion.div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CourseFeaturedPodcastSection;
