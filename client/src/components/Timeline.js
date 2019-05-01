import React from "react";
import AddBlame from "./AddBlame";
import BlameCards from "./BlameCards";
import SlimCards from "./SlimCards";

import "../stylesheets/timeline.css";

const Timeline = ({
  currentUser,
  blames,
  value,
  onBlameSubmit,
  error,
  clearError,
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
              onBlameSubmit={(target, points, text) =>
                onBlameSubmit(target, points, text)
              }
              team={team}
              error={error}
              clearError={clearError}
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
