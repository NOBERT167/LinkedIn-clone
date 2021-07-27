import React from "react";
import "./InputOption.styles.css";

function InputOption({ Icon, title, color }) {
  return (
    <div className="inputOption">
      {Icon && <Icon className="inputOption_icon" style={{ color }} />}
      <h4 className="inputOption_title">{title}</h4>
    </div>
  );
}

export default InputOption;
