import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../stylesheets/footer.css";

const AddBlame = () => {
  return (
    <div className="footer">
      Made with <FontAwesomeIcon icon="heart" /> by{" "}
      <a href="https://www.maximpekarsky.com" target="_blank">
        Max Pekarsky
      </a>{" "}
      with great inspiration by{" "}
      <a href="https://bonus.ly" target="_blank">
        Bonus.ly
      </a>
    </div>
  );
};

export default AddBlame;
