import React, { Component } from 'react';
import LoggedOut from '../components/LoginOut';
import LoggedIn from '../components/Login';
import config from '../components/Config';

const defaultFetchOptions = {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
};

class Page extends Component {
  constructor() {
    super();

    this.state = {
      userLoggedIn: false,
      errorMessage: '',
      userId: null
    }
    this.logUserIn = this.logUserIn.bind(this);
  }

  parseLogInResponse({user = {}}) {
    if (user.success) {
      this.setState({
        userLoggedIn: true,
        userId: user.id
      });
    } else {
      this.setState({
        errorMessage: 'Error de usuario / password'
      })
    }
  }

  logUserIn(username, password) {
    const fetchOptions = Object.assign({}, defaultFetchOptions);
    fetchOptions.body = JSON.stringify({
      username: username,
      password: password
    });
    return fetch(config.USER_URL, fetchOptions)
      .then(results => results.json())
      .then(response => this.parseLogInResponse(response));
  }

  render() {
    return (
      <div>
        {this.state.userLoggedIn ?
          (<LoggedIn userId={this.state.userId} />) :
          (<LoggedOut errorMessage={this.state.errorMessage} logUserIn={this.logUserIn} />)
        }
      </div>
    )
  }
}

export default Page;
