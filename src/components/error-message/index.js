import { useHistory } from "react-router-dom";

import "./error-message.css";

const ErrorMessage = (props) => {
  const history = useHistory();

  return (
    <div className="error-container">
      <div className="error-message">
        Oops. Something went wrong.
        <div>
          <div
            onClick={() => {
              history.push(`${props.returnTo}`);
            }}
            className="redirect"
          >
            Click here
          </div>{" "}
          to return to the Homepage
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;
