import React from "react";

import "../stylesheets/slim-cards.css";

const SlimCards = ({ balance, displayHint }) => {
  return (
    <div className="slim-card-wrapper">
      <div className="card slim-card">
        You are <strong>{balance} points</strong> closer to being fired
        <a
          href="https://linkedin.com/in/maxim-pekarsky"
          rel="noopener noreferrer"
          target="_blank"
        >
          <button className="secondary-button">Browse LinkedIn</button>
        </a>
      </div>

      <div className="card slim-card payment-hint">
        <div className="text">How you pay for Blame.ly</div>

        <button onClick={displayHint}>Learn more</button>
      </div>

      <div className="card slim-card">
        <div className="text">Daily motivation</div>
        <iframe
          src="https://www.youtube.com/embed/Q4PE2hSqVnk?start=40"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default SlimCards;
