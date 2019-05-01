import React from "react";

import SidebarLink from "./SidebarLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/blamely_logo.png";

import "../stylesheets/sidebar.css";

const Sidebar = ({ displayHint }) => {
  return (
    <nav id="sidebar">
      <a href="/" id="logo">
        <img src={logo} />
      </a>

      <div className="link-grouping">
        <div className="sidebar-link selected" onClick={displayHint}>
          <FontAwesomeIcon icon="search" />
          <div className="link-label">Search</div>
        </div>

        <SidebarLink
          fontAwesomeStyling={"home"}
          text={"Home"}
          clickAction={displayHint}
        />
        <SidebarLink
          fontAwesomeStyling={"shopping-cart"}
          text={"Rewards"}
          clickAction={displayHint}
        />
        <SidebarLink
          fontAwesomeStyling={"chart-bar"}
          text={"Analytics"}
          clickAction={displayHint}
        />
        <SidebarLink
          fontAwesomeStyling={"plug"}
          text={"Integrations"}
          clickAction={displayHint}
        />
      </div>

      <div className="link-grouping admin-links">
        <div className="admin-label-wrapper">
          <h4 className="link-label admin-label">Admin</h4>
        </div>

        <SidebarLink
          fontAwesomeStyling={"building"}
          text={"Company"}
          clickAction={displayHint}
        />
        <SidebarLink
          fontAwesomeStyling={"users"}
          text={"Users"}
          clickAction={displayHint}
        />
        <SidebarLink
          fontAwesomeStyling={"comment"}
          text={"Bonuses"}
          clickAction={displayHint}
        />
        <SidebarLink
          fontAwesomeStyling={"gift"}
          text={"Rewards"}
          clickAction={displayHint}
        />
      </div>
    </nav>
  );
};

export default Sidebar;
