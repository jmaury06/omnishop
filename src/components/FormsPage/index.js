import React, { useState } from "react";
import Button from "../core/Button";
import Login from "./Login";
import RegisterForm from "./Register";
import "./styles.less";

const FormsPage = () => {
  const [isActive, setIsActive] = useState(0);

  const handleActive = (key) => {
    setIsActive(key)
  }

  return (
    <div className="container_form">
      <div
        className="wrap_buttoms_form"
        style={{ flexDirection: `${isActive === 0 ? "row" : "row-reverse"}` }}
      >
        <Button
          active={isActive === 0}
          buttom_primary={isActive === 0}
          height="42px"
          width="88px"
          onClick={()=>handleActive(0)}
        >
          Ingreso
        </Button>
        <Button
          active={isActive === 1}
          buttom_primary={isActive === 1}
          height="42px"
          width="88px"
          onClick={()=>handleActive(1)}
        >
          Registro
        </Button>
      </div>
      <div className="wrap_forms">
        <p>
          {isActive === 0
            ? "Ingresa con tus datos"
            : "Completa tus datos para registrarte"}
        </p>
        {isActive === 0 ? <Login /> : <RegisterForm />}
        {isActive === 0 && <p>¿Olvidaste tu contraseña?</p>}
      </div>
    </div>
  );
};

export default FormsPage;
