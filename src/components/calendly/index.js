import React from "react";
import { Component } from "react";

import "./index.css";

class Calendly extends Component {
  componentDidMount() {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    head.appendChild(script);
  }
  componentWillUnmount() {
    // whatever you need to cleanup the widgets code
  }
  render(props) {
    console.log(this.props);
    return (
      <div>
        <div id="schedule_form">
          <div
            className="calendly-inline-widget"
            data-url={`https://calendly.com/${this.props.calendly}`}
            style={{ minWidth: "300px", maxWidth: "400px", height: "500px" }}
          />
        </div>
      </div>
    );
  }
}

export default Calendly;
