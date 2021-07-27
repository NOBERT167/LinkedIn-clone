import React from "react";
import "./Widgets.styles.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
  const article = (Heading, subtitle) => (
    <div className="widgets_article">
      <div className="widget_articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widget_articleright">
        <h4>{Heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets_header">
        <h2>LinkedIn news</h2>
        <InfoIcon />
      </div>
      {article("Nobert is the new CSS master", "Top news - 550 Readers")}
      {article("Bitcoin break $22k", "Cryptocurrency - 988 Readers")}
      {article(
        "Is redux the best state management tool?",
        "Programming & coding news - 800 readers"
      )}
      {article(
        "Top reasons why react js is the best Javascript library",
        "Software engineering - 1234 readers"
      )}
      {article(
        "Apple set to release its new flagship smartphones at september",
        "Tech - 550 Reader"
      )}
    </div>
  );
}

export default Widgets;
