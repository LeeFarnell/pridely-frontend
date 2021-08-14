import Button from "../button";
import React from "react";

import "./index.css";

const SearchBar = (props) => {
  return (
    <div className="search-bar-container">
      <form>
        <input
          type="text"
          className="search-bar"
          placeholder="Search Bar"
        ></input>
        <Button name="Search" />
      </form>
    </div>
  );
};

export default SearchBar;
