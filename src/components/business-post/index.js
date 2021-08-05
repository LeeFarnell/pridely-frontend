import React from "react";

import Button from "../button";

import "./index.css";

const BusinessPost = (props) => {
  return (
    <form className="post-form">
      <div className="business-post">
        <h2>Create Post</h2>

        <div>
          <input
            className="post-input"
            placeholder="Post Title"
            required
          ></input>
        </div>

        <div>
          <input className="post-input" placeholder="Post Subtitle"></input>
        </div>

        <div>
          <textarea
            className="post-input"
            placeholder="Write your post"
            required
          ></textarea>
        </div>

        <div>
          <input
            className="post-input"
            type="url"
            placeholder="Add URL here"
          ></input>
        </div>

        <Button name="Create Post" type="submit" />
      </div>
    </form>
  );
};

export default BusinessPost;
