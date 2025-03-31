import { MainButton } from "../../interfaces/interface";
import "./Button.scss";
import { HiArrowSmRight } from "react-icons/hi";

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
}: MainButton) {
  const buttonStyle = {
    backgroundColor: backgroundColor || "#FFCA85",
    color: color || "#000000",
    border: borderColor ? `1px solid ${borderColor || ""}` : "none",
    backdropFilter: `blur(${backgroundBlur || 0}px)`,
    height: height,
    width: width,
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

  return (
    <a href={link} style={{ width: width ? width : "auto" }}>
      <button
        style={buttonStyle}
        onMouseOver={(e) => hoverAction(e, "add")}
        onMouseOut={(e) => hoverAction(e, "remove")}
      >
        {icon && <div className="icon">{icon}</div>}
        {name}
        <HiArrowSmRight className="button-arrow-icon" />
      </button>
    </a>
  );
}

export default Button;
