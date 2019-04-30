import React, { Component } from "react";
import AddBlame from './AddBlame'
import BlameCards from './BlameCards'

import '../stylesheets/timeline.css';

const Timeline = ({currentUser, blames, value, onClick, onType}) => {

  return (
  	<div id="timeline-wrapper">
  		<div id="red-area"></div>
  		<div id="overlay-container">
  			<h2> {currentUser.name}, you have <strong>{currentUser.total_points} points</strong> to blame</h2>
  			<AddBlame 
          currentBlame={value}
          handleClick={onClick} 
          handleInput={onType}
        />


  			<BlameCards cards={blames} />
  		</div>
    		
    	</div>

  )
  
}

export default Timeline;
