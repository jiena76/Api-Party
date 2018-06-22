import React, { Component } from 'react'

import './Github.css'

class Github extends Component{

  state={
    username: "",
  }

  handleChange = (e) => {
    this.setState({username: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push(`/github/${this.state.username}`);
  }

  render(){
    return(
      <div className="Github">
        <img
          src="http://www.aha.io/assets/github.7433692cabbfa132f34adb034e7909fa.png"
          alt="GitHub"
          className="logo"
        />

        <form onSubmit={this.handleSubmit}>
          <div>
            <input 
              type="text"
              placeholder="Enter a GitHub user"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button type="submit">Look up GitHub user</button>
          </div>
        </form>

      </div>
    );
  }
}

export default Github;