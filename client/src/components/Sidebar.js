import React, { Component } from "react";

import '../stylesheets/sidebar.css';
import logo from '../assets/blamely_logo.png';

const Sidebar =  () => {
 
  return (
    <nav id="sidebar">
      <a href="/" id="logo">
        <img  src={logo} />
      </a>

    </nav>



  )
}

export default Sidebar;
