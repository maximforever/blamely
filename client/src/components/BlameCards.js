import React, { Component } from "react";

import OneBlame from "./OneBlame";
import "../stylesheets/blame-cards.css";

const BlameCards = ({ cards }) => {
  return (
    <div id="blame-cards">
      {cards.map(card => (
         <OneBlame key={card.id} blame={card} />
      ))}
    </div>
  );
};

export default BlameCards;
