import React from "react";

import "./index.css";

const Footer = (props) => {
  return (
    <div className="footer">
      <div className="footer-title">{props.name}</div>
      <div></div>
    </div>
  );
};

export default Footer;
