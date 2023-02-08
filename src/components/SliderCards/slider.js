import React from "react";
import Slider from "react-slick";

const SliderComponent = ({ img, title, price }) => {
  const settings = {
    // className: "center",
    dots: false,
    infinite: true,
    // slidesToShow: 2,
    // slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: false,
    arrows: false,
  };

  return (
    <div>
      <link
        rel="stylesheet"
        type="text/css"
        charset="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <Slider {...settings}>
        <div className="Col">
          <div className="wrap-card">
            <div className="wrap-card-image">
              <img src={img} alt={title} />
            </div>
            <div className="wrap-card-information">
              <h5>{title}</h5>
              <h5>{price}</h5>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;
