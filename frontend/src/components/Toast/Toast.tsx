import { PiWarning } from "react-icons/pi";
import { RxCrossCircled } from "react-icons/rx";
import { FiInfo } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import Portal from "../ReactPortal/Portal";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Toast.scss";
import { SiTicktick } from "react-icons/si";


const Toast = ({
  isOpen = false,
  setIsOpen,
  message,
  type = "def",
  setToast,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setToast: React.Dispatch<
    React.SetStateAction<{
      message: string;
      type: "success" | "error" | "def" | "warning";
    }>
  >;
  message: string;
  type: "success" | "error" | "def" | "warning";
}) => {
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setIsOpen(false);
        setToast({ type: "def", message: "" });
      }, 3000);
    }
  }, [isOpen]);

  const toastStyle = {
    backgroundColor:
      type === "success"
        ? "#e9ffea"
        : type === "error"
        ? "#ffc6c6"
        : type === "warning"
        ? "#ffdfb8"
        : "#d8f3ff",

    borderColor:
      type === "success"
        ? "#43a047"
        : type === "error"
        ? "#d32f2f"
        : type === "warning"
        ? "#fb8c00"
        : "#29b6f6",
  };

  const iconStyle = {
    color:
      type === "success"
        ? "#43a047"
        : type === "error"
        ? "#d32f2f"
        : type === "warning"
        ? "#fb8c00"
        : "#29b6f6",
  };

  return (
    <AnimatePresence>
      <motion.div
        className={`toast ${isOpen ? "show" : ""}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, y: [-30, 0] }}
        exit={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.5, ease: "backInOut", delay: 0.2 }}
      >
        <div className="toast-main" style={toastStyle}>
          <div className="toast-main-message-section">
            <div className="toast-main-message-section-icon" style={iconStyle}>
              {type === "success" ? (
                <SiTicktick />
              ) : type === "error" ? (
                <RxCrossCircled />
              ) : type === "warning" ? (
                <PiWarning />
              ) : (
                <FiInfo />
              )}
            </div>
            <div className="toast-main-message-section-content">{message}</div>
          </div>

          <div className="toast-close" onClick={(e) => {
            e.preventDefault();
            setIsOpen(false)}}>
            <IoClose />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

const ToastWithPortal = Portal(Toast);
export default ToastWithPortal;
