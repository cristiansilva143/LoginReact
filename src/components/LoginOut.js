import React, { Component } from 'react';

/*class LoginOut extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    }

    this.loginHandler = this.loginHandler.bind(this);
    this.handleUsernameChange = this.handleChange.bind(this, 'username');
    this.handlePasswordChange = this.handleChange.bind(this, 'password');
  }

  handleChange(property, event) {
    this.setState({
      [property]: event.target.value
    });
  }

  loginHandler(e) {
    e.preventDefault();
    this.props.logUserIn(this.state.username, this.state.password);
  }

  render() {
    const { errorMessage } = this.props;

    return (
      <div>
        {errorMessage ? <p>{errorMessage}</p> : null}
        <h1>
          LOGIN React
        </h1>
        <form action="logeo" method="post">
            <p>Usuario:</p>
            <input id='username' name="username" value={this.state.username} onChange={this.handleUsernameChange} />
            <p>Clave:</p>
            <input id='password' name="password" value={this.state.password} onChange={this.handlePasswordChange}  type="password" />
            <button title="Aceptar" onClick={this.loginHandler} type="submit">Aceptar</button><br>
            </br>
        </form>
      </div>
    );
  }
}

export default LoginOut;*/

