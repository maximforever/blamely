import React, { Component } from "react";

import UsernameSelector from "./UsernameSelector";
import "../stylesheets/add-blame.css";

class AddBlame extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      points: 10,
      target: null
    };
  }

  updateTarget = event => {
    this.setState({
      target: event.target.value
    });
  };

  updatePoints = event => {
    console.log(event.target.value);

    this.setState({
      points: event.target.value
    });
  };

  updateBlame = event => {
    const blame = event.target.value;

    if (blame.trim().length) {
      //this.props.clearError();
    }

    this.setState({
      text: blame
    });
  };

  render() {
    return (
      <div id="add-blame-wrapper" className="card">
        <div id="add-blame-error">{this.props.error}</div>

        <div id="dropdown-wrapper">
          <span>Blame</span>
          <UsernameSelector
            onSelect={this.updateTarget}
            team={this.props.team}
          />
          <span>for</span>

          <select
            name="points"
            id="points-to-charge"
            defaultValue="10"
            onChange={this.updatePoints}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
          <span> points</span>
        </div>

        <textarea
          value={this.state.text}
          onChange={this.updateBlame}
          placeholder="For disagreeing with me in a meeting"
        />
        <button
          onClick={() =>
            this.props.onBlameSubmit(
              this.state.target,
              this.state.points,
              this.state.text
            )
          }
        >
          Blame
        </button>
      </div>
    );
  }
}

export default AddBlame;
