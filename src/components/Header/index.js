import React from "react";
import LogoWhite from './../../images/LogoWhite.png'
import HandLogo from './../../images/handLogo.png'

const Header = () => {
  return (
    <div className="container_header">
      <img className="logo_header" src={LogoWhite} alt='logo-omnishop'/ >
      <img className="logo_header" src={HandLogo} alt='hand-logo'/ >
    </div>
  );
};
export default Header;
