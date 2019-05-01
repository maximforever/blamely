import React from "react";
import "../stylesheets/one-blame.css";

const OneBlame = ({ blame }) => {
  return (
    <div className="card one-blame-wrapper">
      <div className="blame-row">
        <div className="blame-value">- {blame.points}</div>
      </div>

      <div className="blame-row blame-text">
        <span className="blame-text-body">
          <strong>{blame.sender}: </strong> {blame.message}
          <strong>
            {" "}
            <a href="#">@{blame.recipient}</a>
          </strong>
        </span>
        <span className="point-change">- {blame.points}</span>
      </div>

      <textarea
        className="blame-row comment-row"
        rows="1"
        wrap="hard"
        maxLength="100"
        placeholder="Add a comment"
      />
    </div>
  );
};

export default OneBlame;
