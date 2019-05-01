import React, { Component } from "react";
import AddBlame from "./AddBlame";
import BlameCards from "./BlameCards";
import SlimCards from "./SlimCards";

import "../stylesheets/timeline.css";

const Timeline = ({
  currentUser,
  blames,
  value,
  onClick,
  onType,
  error,
  displayHint,
  team
}) => {
  return (
    <div id="timeline-wrapper">
      <div id="red-area" />
      <div id="overlay-container">
        <div id="point-counter">
          <h2>
            {" "}
            {currentUser.name}, you have{" "}
            <strong>{currentUser.points_to_give} points</strong> to blame
          </h2>
        </div>

        <div id="column-wrapper">
          <div className="timeline-column column-left">
            <AddBlame
              currentBlame={value}
              handleClick={onClick}
              handleInput={onType}
              team={team}
              error={error}
            />

            <BlameCards cards={blames} />
          </div>

          <div className="timeline-column column-right">
            <SlimCards
              balance={currentUser.points_to_redeem}
              displayHint={displayHint}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
