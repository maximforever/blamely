import React from "react";

import "../stylesheets/add-blame.css";

const UsernameSelector = ({ onSelect, team }) => {
  return (
    <select
      name="teammate"
      id="teammate-to-blame"
      defaultValue="2"
      onChange={onSelect}
    >
      {team.map(teammate => (
        <option key={teammate.id} value={teammate.id}>
          {teammate.username}
        </option>
      ))}
    </select>
  );
};

export default UsernameSelector;
