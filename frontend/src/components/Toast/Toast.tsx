import { BiSolidError } from "react-icons/bi";
import { MdError } from "react-icons/md";
import { FiInfo } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import Portal from "../ReactPortal/Portal";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Toast.scss";
import { FaCircleCheck } from "react-icons/fa6";


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
        ? "#f5fff7"
        : type === "error"
        ? "#ffece5"
        : type === "warning"
        ? "#fff8e7"
        : "#f5feff",

    borderColor:
      type === "success"
        ? "#00520e"
        : type === "error"
        ? "#a13307"
        : type === "warning"
        ? "#884001"
        : "#004466",
  };

  const iconStyle = {
    color:
      type === "success"
        ? "#186325"
        : type === "error"
        ? "#aa451c"
        : type === "warning"
        ? "#945218"
        : "#185675",
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
                <FaCircleCheck />
              ) : type === "error" ? (
                <BiSolidError />
              ) : type === "warning" ? (
                <MdError />
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
