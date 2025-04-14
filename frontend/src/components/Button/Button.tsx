import { useRef, useState } from "react";
import { MainButton } from "../../interfaces/interface";
import "./Button.scss";
import { HiArrowSmRight } from "react-icons/hi";
import { useNavigate } from "react-router";

function Button({
  name,
  link,
  color,
  hoverColor,
  backgroundColor,
  hoverBackgroundColor,
  backgroundBlur,
  borderColor,
  hoverBorderColor,
  icon,
  height,
  width,
  action,
  actionData,
}: MainButton) {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [buttonFixedWidth, setButtonFixedWidth] = useState<string | null>(null);

  const buttonStyle = {
    backgroundColor: backgroundColor || "#FFCA85",
    color: color || "#000000",
    border: borderColor ? `1px solid ${borderColor || ""}` : "none",
    backdropFilter: `blur(${backgroundBlur || 0}px)`,
    height: height,
    width: width,
  };

  const loaderStyle = {
    border: `3px solid ${hoverColor || "#ffffff"}`,
    borderBottomColor: hoverBackgroundColor || "#000000",
  };

  const hoverAction = (e, type: "add" | "remove") => {
    const button = e.currentTarget;
    const icon = button.querySelector(".button-arrow-icon");

    if (type === "add") {
      button.style.backgroundColor = hoverBackgroundColor || "#000000";
      button.style.color = hoverColor || "#ffffff";
      button.style.border = hoverBorderColor
        ? `1px solid ${hoverBorderColor || ""}`
        : "none";
      if (icon) icon.style.color = hoverColor || "#ffffff";
    } else {
      button.style.backgroundColor = backgroundColor || "#FFCA85";
      button.style.color = color || "#000000";
      button.style.border = borderColor
        ? `1px solid ${borderColor || ""}`
        : "none";
      if (icon) icon.style.color = color || "#000000";
    }
  };

  const handleClick = (e) => {
    if (action === "formSubmit" && typeof actionData === "function") {
      e.preventDefault();
    }

    if (buttonRef.current) {
      const width = buttonRef.current.offsetWidth;
      setButtonFixedWidth(`${width}px`);
    }

    setLoading(true);

    setTimeout(() => {
      if (action === "redirectExternal") {
        window.open(actionData, "_blank");
      } else if (action === "triggerPopup") {
        // Implement popup logic here
      } else if (action === "redirectInternal") {
        navigate(actionData);
      } else if (action === "formSubmit" && typeof actionData === "function") {
        actionData(e);
      } else {
        console.error("Invalid action");
      }

      setLoading(false);
      setButtonFixedWidth(null);
    }, 1000);
  };

  return (
    <button
      style={{
        ...buttonStyle,
        width: buttonFixedWidth || width || "auto",
      }}
      ref={buttonRef}
      onMouseOver={(e) => hoverAction(e, "add")}
      onMouseOut={(e) => hoverAction(e, "remove")}
      onClick={handleClick}
      className="button-main"
    >
      {loading ? (
        <span className="loader" style={loaderStyle}></span>
      ) : (
        <>
          {icon && <div className="icon">{icon}</div>}
          {name}
          <HiArrowSmRight className="button-arrow-icon" />
        </>
      )}
    </button>
  );
}

export default Button;
