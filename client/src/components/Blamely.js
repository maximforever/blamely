import React, { Component } from "react";

import Sidebar from "./Sidebar";
import Timeline from "./Timeline";
import Hint from "./Hint";

import "../stylesheets/blamely.css";

class Blamely extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: null,
      blames: null,
      team: null,
      currentUser: null,
      currentBlame: {
        target: null,
        points: 10,
        text: ""
      },
      error: null,
      hint: {
        display: false,
        x: 0,
        y: 0
      }
    };
  }

  componentDidMount() {
    fetch("/api/teams/megacorp")
      .then(response => response.json())
      .then(json => {
        this.setState({
          currentUser: json.current_user,
          users: json.users,
          blames: json.blames
        });
      })
      .catch(error => console.log(error));
  }

  recordBlame = () => {
    console.log(this.state.currentBlame);
    if (
      this.state.currentBlame.target == null ||
      !this.state.currentBlame.text.trim().length
    ) {
      this.setState({
        error: "Can't send in a blank message"
      });
      return;
    }

    const data = {
      blame: {
        recipient_id: this.state.currentBlame.target,
        message: this.state.currentBlame.text.trim(),
        points: this.state.currentBlame.points
      }
    };

    fetch("/api/blames", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(jsonResponse => {
        let cleanBlame = {
          points: 10,
          target: null,
          text: ""
        };

        this.setState({
          blames: jsonResponse.blames,
          currentUser: jsonResponse.user,
          currentBlame: cleanBlame
        });
      })
      .catch(error => {
        // could use React ErrorBoundary
        console.log(error);
      });
  };

  clearError = () => {
    this.setState({
      error: ""
    });
  };

  submitBlame = (target, points, text) => {
    let newBlame = {
      target: target,
      points: points,
      text: text
    };

    this.setState(
      {
        currentBlame: newBlame
      },
      () => {
        this.recordBlame();
      }
    );

    let self = this;
  };

  displayHint = event => {
    let newHintState = {
      display: true,
      x: event.clientX,
      y: event.clientY
    };

    this.setState({
      hint: newHintState
    });

    let self = this;

    setTimeout(function() {
      let newHintState = {
        display: false,
        x: 0,
        y: 0
      };

      self.setState({
        hint: newHintState
      });
    }, 1000);
  };

  renderHint = () => {
    return this.state.hint.display ? (
      <Hint xPos={this.state.hint.x} yPos={this.state.hint.y} />
    ) : null;
  };

  render() {
    if (this.state.users == null || this.state.blames == null) {
      return null;
    } else {
      let hint = this.renderHint();

      return (
        <div id="blamely-wrapper">
          <Sidebar displayHint={this.displayHint} />
          <Timeline
            currentUser={this.state.currentUser}
            blames={this.state.blames}
            value={this.state.currentBlame}
            onBlameSubmit={(target, points, text) =>
              this.submitBlame(target, points, text)
            }
            error={this.state.error}
            clearError={this.clearErr}
            displayHint={this.displayHint}
            team={this.state.users}
          />
          {hint}
        </div>
      );
    }
  }
}

export default Blamely;
