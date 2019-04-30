import React, { Component } from 'react';
import logo from './logo.svg';


/* font-awesome import - icon by icon*/
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faChartBar } from '@fortawesome/free-solid-svg-icons'
import { faPlug } from '@fortawesome/free-solid-svg-icons'
import { faBuilding } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faGift } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import Blamely from './components/Blamely'
import Footer from './components/Footer'

import './stylesheets/blamely.css';

library.add(faSearch, faHome, faShoppingCart, faChartBar, faPlug, faBuilding, faComment, faUsers, faGift, faHeart)


class App extends Component {

    render(){
      return (
        <div className="App">
          <Blamely />
          <Footer />
        </div>  
      );
  }
  
}

export default App;