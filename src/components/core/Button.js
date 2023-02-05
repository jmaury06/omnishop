import * as React from "react";

const Button = ({ children, buttom_primary, active, onClick, ...props }) => {
  return (
    <div
    onClick={onClick}
      className={`buttom ${
        buttom_primary ? "buttom_primary" : "buttom_secondary"
      }
      ${
        active && 'buttom_active'
      }`}
      style={{ ...props }}
    >
      <p>{children}</p>
    </div>
  );
};

export default Button;
