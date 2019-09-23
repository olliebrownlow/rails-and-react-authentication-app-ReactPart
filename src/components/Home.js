import React, { Component } from 'react';
import Registration from './auth/Registration';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
  }

  handleSuccessfulAuth(data) {
    //TODO update parent component
    this.props.history.push("/dasboard");
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <h1>Status: {this.props.loggedInStatus}</h1>
        <Registration handleSuccessfulAuth/>
      </div>
    );
  }
}
