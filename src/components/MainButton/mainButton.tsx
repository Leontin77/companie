import React from "react";
import "./mainButton.scss";

interface MainButtonProps {
  text: string;
  width: string | number;
  background: string;
  className?: string;
}

export const MainButton: React.FC<MainButtonProps> = ({ text, width, background, className }) => {
  const buttonStyle = {
    width: width,
    background: background,
    className: className,
  };

  return (
    <button className="button" style={buttonStyle}>
      {text}
    </button>
  );
};
