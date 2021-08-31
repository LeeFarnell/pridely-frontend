import { useHistory } from "react-router-dom";

import "./no-search-results.css";

const NoSearchResults = (props) => {
  const history = useHistory();

  return (
    <div className="error-container">
      <div className="error-message">
        There are no search results for this category. Please try a different
        category.
        <div>
          Alternatively,{" "}
          <div
            onClick={() => {
              history.push(`${props.returnTo}`);
            }}
            className="redirect"
          >
            click here
          </div>{" "}
          to return to the Homepage
        </div>
      </div>
    </div>
  );
};

export default NoSearchResults;
