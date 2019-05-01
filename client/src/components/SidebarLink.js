import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SidebarLink = ({ fontAwesomeStyling, text, clickAction }) => {
  return (
    <div className="sidebar-link" onClick={clickAction}>
      <FontAwesomeIcon icon={fontAwesomeStyling} />
      <div className="link-label">{text}</div>
    </div>
  );
};

export default SidebarLink;
