import React, { Component } from "react";

import Sidebar from './Sidebar'
import Timeline from './Timeline'
import Hint from './Hint'


import '../stylesheets/blamely.css';

class Blamely extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: null,
      blames: null,
      team: null,
      currentUser: null,
      currentBlame: "",
      error: null,
      hint: {
        display: false,
        x: 0,
        y: 0
      }
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

    if(this.state.currentBlame == null || !this.state.currentBlame.trim().length){
      this.setState({
        error: "Can't send in a blank message"
      })
      return;
    }

    const data = {
      blame: {
        recipient_id: 2,      // TODO: actually set this
        message: this.state.currentBlame.trim(),
        points: 10            // TODO: get points from typing/dropdown
      }
    }

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
          currentUser: jsonResponse.user,
          currentBlame: ""
        })

      })
      .catch(error => {
        console.log(error)
      });
    
  }

  updateBlame = (event) => {

    const blame = event.target.value;

    this.setState({
      currentBlame: blame,
      error: ""
    })
  }

  displayHint = (event) => {

    let newHintState = {
      display: true,
      x: event.clientX,
      y: event.clientY
    }

    this.setState({
      hint: newHintState
    })

    let self = this;

    setTimeout(function(){
        let newHintState = {
          display: false,
          x: 0,
          y: 0
        }

        self.setState({
          hint: newHintState
        })
    }, 1000)

  }

  renderHint = () => {

    return (this.state.hint.display) ? <Hint xPos={this.state.hint.x} yPos={this.state.hint.y} /> : null;

  }




  render() {

    if(this.state.users == null || this.state.blames == null){
      return null
    } else {

      let hint = this.renderHint();

      return (
        <div id="blamely-wrapper">
          <Sidebar displayHint={this.displayHint} />
          <Timeline 
            currentUser={this.state.currentUser}
            blames={this.state.blames}
            value={this.state.currentBlame}
            onClick={() => this.recordBlame}
            onType={this.updateBlame}
            error={this.state.error}
            displayHint={this.displayHint}
            team={this.state.users}
          />
          {hint}
        </div>
        

        
      )
    }


    
  }
}

export default Blamely;
