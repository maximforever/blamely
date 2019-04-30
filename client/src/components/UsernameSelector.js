import React, { Component } from "react";

import '../stylesheets/add-blame.css';


const UsernameSelector = ({team}) => {

	console.log(team);

  return (
  		<select name="teammate" id="teammate-to-blame">
  		{ 
  			team.map((teammate) => (<option key={teammate.id} value={teammate.id}>{teammate.username}</option>))
  		}
  		</select>
	)
};

export default UsernameSelector;
