import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Header from "../components/Header";
import Home from "../components/pages/Home";
import ProductPage from "../components/pages/Product/Product";
import { useGlobalContext } from "../context";

const RoutesPage = () => {
  // const location = useLocation().pathname;
  const { showSuccess, showLoading, getBackground } = useGlobalContext();
  return (
    <div className={`${getBackground} main_container`}>
      <Router>
        <Header hiddenHeader={showSuccess || showLoading} />
        <main>
          <div>
            <Routes>
              <Route path="/" element=<Home /> exact />
              <Route path="/product" element=<ProductPage /> />
            </Routes>
          </div>
        </main>
      </Router>
    </div>
  );
};

export default RoutesPage;
