import React from "react";
import { useGlobalContext } from "../../../context";
import FormsPage from "../../FormsPage";
import TransitionPage from "../../TransferPage";

const Home = () => {
  const { showSuccess } = useGlobalContext();
  return (
    <div>
      {showSuccess ? (
        <TransitionPage success />
      ) : (
        <div className="container_home">
          <h1>
            <span className="sp_color_pink">Bienvenido</span> a Omnishop
          </h1>
          <p>Ingresa o regístrate en Omniapp</p>
          <FormsPage />
        </div>
      )}
    </div>
  );
};

export default Home;
