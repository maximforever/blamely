import React, { Component } from "react";

class Blamely extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: null,
      blames: null,
      team: null,
      currentUser: "Max"
    };

  }

  componentDidMount() {
    window.fetch('/api/users')
      .then(response => response.json())
      .then((json) => {
       
        console.log(json);
        this.setState({
          users: json,
        });

      })
      .catch(error => console.log(error));
  }

  render() {

    if(this.state.users == null){
      return null
    } else {
      return this.state.users.map((user) => {
        return (<div key={user.id}>{user.username}</div>)
      })
    }


    
  }
}

export default Blamely;
