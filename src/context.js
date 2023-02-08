import React, { useState, useContext, useEffect, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [getBackground, setGetBackground] = useState("bg_default");
  const [isActive, setIsActive] = useState(0);
  const getBackgroundCase = (key) => {
    var getBackground = "";
    switch (key) {
      case "bg_success":
        getBackground = "bg_success";
        break;
      case "bg_register":
        getBackground = "bg_register";
        break;
      case "bg_loading":
        getBackground = "bg_loading";
        break;
      case "bg_product":
        getBackground = "bg_product";
        break;
      default:
        getBackground = "bg_default";
    }
    return setGetBackground(getBackground);
  };
  useEffect(() => {
    setTimeout(() => {
      setGetBackground("bg_default");
      setShowLoading(false);
      setShowSuccess(false);
      setIsActive(0);
    }, 2000);
  }, [showSuccess, showLoading]);

  return (
    <AppContext.Provider
      value={{
        showSuccess,
        setShowSuccess,
        showLoading,
        setShowLoading,
        getBackground,
        getBackgroundCase,
        isActive,
        setIsActive,
        // location,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
