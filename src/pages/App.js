import React from "react";
import { AppProvider } from "../context";
import RoutesPage from "./RoutesPage";

const App = () => {
  return (
    <AppProvider>
      <RoutesPage />
    </AppProvider>
  );
};

export default App;
