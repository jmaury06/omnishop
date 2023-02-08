import React, { useEffect } from "react";
import TransitionPage from "../../TransferPage";
import { useGlobalContext } from "../../../context";
import SliderCard from "../../SliderCards";

const ProductPage = () => {
  const { showLoading, getBackgroundCase, getBackground } = useGlobalContext();

  useEffect(() => {
    !showLoading && getBackgroundCase("bg_product");
  }, [getBackground]);

  return (
    <div className="style_product">
      {showLoading ? (
        <TransitionPage isLoading />
      ) : (
        <div>
          <div className="falseBackground"></div>
          <div></div>
          <div></div>
          <SliderCard />
        </div>
      )}
    </div>
  );
};

export default ProductPage;
