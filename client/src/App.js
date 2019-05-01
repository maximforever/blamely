import React, { Component } from "react";
import logo from "./logo.svg";

/* font-awesome import - icon by icon*/
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faSearch,
  faHome,
  faShoppingCart,
  faChartBar,
  faPlug,
  faBuilding,
  faComment,
  faUsers,
  faGift,
  faHeart
} from "@fortawesome/free-solid-svg-icons";

import Blamely from "./components/Blamely";
import Footer from "./components/Footer";

import "./stylesheets/blamely.css";

library.add(
  faSearch,
  faHome,
  faShoppingCart,
  faChartBar,
  faPlug,
  faBuilding,
  faComment,
  faUsers,
  faGift,
  faHeart
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Blamely />
        <Footer />
      </div>
    );
  }
}

export default App;
