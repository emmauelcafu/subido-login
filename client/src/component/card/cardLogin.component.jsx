import "./cardLogin.component.css";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function CardLogin() {
  const [logi, setLogi] = useState({
    username: "",
    password: ""
  });
  const [showPassword, setShowPassword] = useState(false); // Estado para mostrar/ocultar la contraseña

  const changeHandler = (event) => {
    const property = event.target.name;
    let value = event.target.value;
    setLogi({ ...logi, [property]: value });
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const loginData = JSON.stringify(logi);
    axios
      .post("http://localhost:3001/datos/login", loginData, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then((res) => {
        if (res.data.token) {
          alert("Inicio de sesión exitoso");
          // Aquí puedes redirigir al usuario a la página de inicio o realizar otras acciones necesarias.
        } else {
          alert("Inicio de sesión fallido");
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Error al iniciar sesión. Verifica tus credenciales.");
      });
  };

  return (
    <div className="div-content-card">
      <form onSubmit={submitHandler}>
        <div className="div-h4">
          <h1>BIENVENIDO</h1>
        </div>

        <div className="div-input">
          <input
            type="text"
            placeholder="Username"
            onChange={changeHandler}
            name="username"
          />
        </div>

        <div className="div-input">
          <input
            type={showPassword ? "text" : "password"} // Cambia el tipo de input entre "text" y "password" según el estado
            placeholder="Contraseña"
            onChange={changeHandler}
            name="password"
          />
          <div >
          <button className="div-button"
            type="button"
            onClick={toggleShowPassword}
          >
            {showPassword ? "o" : "m"} {/* Cambia el texto del botón según el estado */}
          </button>
          </div>
        </div>

        <div className="div-submit">
          <input type="submit" value="Iniciar Sesión" />
        </div>

        <div className="div-p">
          <p>¿Perdiste la contraseña?</p>
          <p>¿No tienes cuenta? <Link to="/registrar"> Registrarme </Link></p>
        </div>
      </form>
    </div>
  );
}

export default CardLogin;


