import React from "react";
import '../stylesheets/one-blame.css';


const OneBlame = ({blame}) => {

    return (
      <div className="card one-blame-wrapper">
        {blame.author}
        {blame.message}
        <span className = "point-change">- {blame.points}</span>
      </div>
    );
};

export default OneBlame;
