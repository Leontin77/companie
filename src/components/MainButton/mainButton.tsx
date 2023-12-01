import React from "react";
import "./mainButton.scss";

interface MainButtonProps {
  text: string;
  width: string | number;
  background: string;

}

export const MainButton: React.FC<MainButtonProps> = ({ text, width, background }) => {
  const buttonStyle = {
    width: width,
    background: background,
  };

  return (
    <button className="button" style={buttonStyle}>
      {text}
    </button>
  );
};
