import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

 class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }
  validarUsuario(){
    var Usuario = document.getElementById('usuario').value;
    var pass = document.getElementById("password").value;

      if (usuario == "cristiansilva143" && pass= '1234')
      {
        alert("Usuario valido");
      }
      else{
        alert("datos incorrectos");
      }
    }

  

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }
   

  

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
      <div className="Login">
       
      
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Usuario: </ControlLabel>

            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
                   
      
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password: </ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
             
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            
            //disabled={!this.validateForm()}
            disabled={!this.validateUsuario()}
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}

export default Login;