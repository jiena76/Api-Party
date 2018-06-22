import React, { Component } from 'react'

class GithubUser extends Component{
  render(){
    const {params} = this.props.match;

    return(
      <div className="GithubUser">
        {/* if the number of "."s bother you: (line 5)
        {this.props.match.params.username} */}
        {params.username}
      </div>
    );
  }
}

export default GithubUser;