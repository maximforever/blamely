import React, { Component } from "react";

import Sidebar from './Sidebar'
import Timeline from './Timeline'

import '../stylesheets/blamely.css';

class Blamely extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: null,
      blames: null,
      team: null,
      currentUser: null,
      currentBlame: ""
    };

  }

  componentDidMount() {
    fetch('/api/teams/megacorp')
      .then(response => response.json())
      .then((json) => {
       
        console.log(json);
        this.setState({
          currentUser: json.current_user,
          users: json.users,
          blames: json.blames
        });

      })
      .catch(error => console.log(error));
  }

  recordBlame = () => {

    const data = {
      blame: {
        recipient_id: 2,      // TODO: actually set this
        message: this.state.currentBlame,
        points: 10            // TODO: get points from typing/dropdown
      }
    }



    console.log(data);

    fetch('/api/blames', {
      method: "POST",
      body: JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then((jsonResponse) => {
       
        console.log(jsonResponse);

        // add to state

        this.setState({
          blames: jsonResponse.blames,
          currentUser: jsonResponse.user
        })

      })
      .catch(error => {
        console.log(error)
      });
    
  }

  updateBlame = (event) => {

    const blame = event.target.value.trim();

    this.setState({
      currentBlame: blame
    })
  }

  render() {

    if(this.state.users == null || this.state.blames == null){
      return null
    } else {

      return (
        <div id="blamely-wrapper">
          <Sidebar />
          <Timeline 
            currentUser={this.state.currentUser}
            blames={this.state.blames}
            value={this.state.currentBlame}
            onClick={() => this.recordBlame}
            onType={this.updateBlame}
          />
        </div>
      )
    }


    
  }
}

export default Blamely;
