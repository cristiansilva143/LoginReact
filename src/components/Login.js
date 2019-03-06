import React, { Component } from 'react';

/*class Login extends Component {

  render() {
    return (
      <div>
         {this.c.Login}
      </div>
    );
  }
}

export default Login;*/
<html>
  <head>

      <script>
      function validar() {
           var  usuario = document.getElementById("usuario").value;
           var  password = document.getElementById("password").value;
    
          if (usuario == 'Cristian' && password== "1234")
          {
            alert("Usuario valido")
          }
          else{
            alert("datos incorrectos")
          }
        }
      </script>


    <meta charSet = "utf-8">
    <title>
      PANTALLA DE ACCESO
    </title>

    </meta>
      <body>
        <table>
          <tr>
          <td><label>Usuario:</label>
              <input type="text" name ="usuario" id="usuario">
              
              </input></td>
              <td><label>Pass:</label>
              <input type="password" name ="pass" id="pass"></input></td>
          
           </tr>
           <input type = "button" name = "BtnVerificar" id = "BtnVerificar" onClick="validad()" value= "verificarr">

           </input>
        </table>

      </body>

  </head>

</html>

