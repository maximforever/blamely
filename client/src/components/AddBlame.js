import React, { Component } from "react";

import UsernameSelector from "./UsernameSelector";
import "../stylesheets/add-blame.css";

const AddBlame = ({ currentBlame, handleClick, handleInput, team, error }) => (
  <div id="add-blame-wrapper" className="card">
    <div id="add-blame-error">{error}</div>

    <div id="dropdown-wrapper">
      <span>Blame</span>
      <UsernameSelector team={team} />
      <span>for</span>

      <select name="points" id="points-to-charge" defaultValue="10">
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
      </select>
      <span> points</span>
    </div>

    <textarea
      value={currentBlame}
      onChange={handleInput}
      placeholder="For disagreeing with me in a meeting"
    />
    <button onClick={handleClick()}>Blame</button>
  </div>
);

export default AddBlame;
