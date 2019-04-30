import React, { Component } from "react";

import '../stylesheets/add-blame.css';


const AddBlame = ({currentBlame, handleClick, handleInput}) => {
    return (
      <div id="add-blame-wrapper" className="card">
        <textarea value={currentBlame} onChange={handleInput} placeholder="-5 @railsetter for disagreeing with me in a meeting"></textarea>
        <button onClick={handleClick()} >Blame</button>
      </div>


    )
};

export default AddBlame;
