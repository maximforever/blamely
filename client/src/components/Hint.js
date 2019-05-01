import React from "react";

const Hint = ({ xPos, yPos }) => {
  xPos = xPos - 60 + "px";
  yPos = yPos - 40 + "px";

  return (
    <div
      className="hint"
      style={{ left: xPos, top: yPos, position: "absolute" }}
    >
      Hire me to build this out!
    </div>
  );
};

export default Hint;
