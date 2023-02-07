import React from "react";
import LogoWhite from "./../../images/LogoWhite.png";

const TransitionPage = ({isLoading}) => {
  return (
    <div className="style_transition_page">
      <img src={LogoWhite} alt="" />
      <h1>{isLoading ? "Ingresando" : "Registro Completo"}</h1>
    </div>
  );
};

export default TransitionPage;
