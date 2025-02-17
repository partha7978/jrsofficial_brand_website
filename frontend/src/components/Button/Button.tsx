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
  height,
  width,
}: MainButton) {
  const buttonStyle = {
    backgroundColor: backgroundColor || "#FFCA85",
    color: color || "#000000",
  };

  const hoverAction = (e, bg, textColor, type) => {
    const button = e.currentTarget;
    const icon = button.querySelector(".button-arrow-icon");

    if (type === "add") {
      button.style.backgroundColor = bg || "#000000";
      button.style.color = textColor || "#ffffff";
      if (icon) icon.style.color = textColor || "#ffffff";
    } else {
      button.style.backgroundColor = backgroundColor || "#FFCA85";
      button.style.color = color || "#000000";
      if (icon) icon.style.color = color || "#000000";
    }
  };

  return (
    <a href={link}>
      <button
        style={buttonStyle}
        onMouseOver={(e) =>
          hoverAction(e, hoverBackgroundColor, hoverColor, "add")
        }
        onMouseOut={(e) => hoverAction(e, backgroundColor, color, "remove")}
      >
        {name}
        <HiArrowSmRight className="button-arrow-icon" />
      </button>
    </a>
  );
}

export default Button;
