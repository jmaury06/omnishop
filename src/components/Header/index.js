import React from "react";
import LogoWhite from "./../../images/LogoWhite.png";
import LogoBlack from "./../../images/product/logo-omni-black.png";
import HandLogo from "./../../images/handLogo.png";
import Hamburguer from "./../../images/product/hamburguer.png";
import { useGlobalContext } from "../../context";
import { useLocation } from "react-router-dom";

const Header = () => {
  const { showSuccess, showLoading } = useGlobalContext();
  const location = useLocation().pathname;

  return (
    <>
      {location === "/product" ? (
        <div className={`wrap_container_header_product`}>
          <div className={`container_header_product`}>
            <img className="logo_header_product" src={Hamburguer} alt="logo-omnishop" />
            <img className="logo_header_product" src={LogoBlack} alt="hand-logo" />
          </div>
        <div className={`white_up`}/>
        </div>
      ) : (
        <div
          className={`container_header ${
            (showSuccess || showLoading) && "displayNone"
          }`}
        >
          <img className="logo_header" src={LogoWhite} alt="logo-omnishop" />
          <img className="logo_header" src={HandLogo} alt="hand-logo" />
        </div>
      )}
    </>
  );
};
export default Header;
