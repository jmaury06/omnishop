import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import ProductScreen from "./screens/ProductScreen";

const App = () => {
  return (
    <div className="main_container">
      <Router>
        <Header />
        <main>
          <div>
            <Routes>
              <Route path="/" element=<Home /> exact />
              <Route path="/product" element=<ProductScreen /> />
            </Routes>
          </div>
        </main>
      </Router>
    </div>
  );
};

export default App;
