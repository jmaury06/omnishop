import React from "react";
import image1 from "./../../images/product/23E221DR016-1333-990_7@2x.png";
import image2 from "./../../images/product/23E221DR016-1333-990_7-1@2x.png";
import image3 from "./../../images/product/23E221DR016-1333-990_7-2@2x.png";
import Slider from "react-slick";

// import Card from "../core/Card";

const SliderCard = () => {
  const otherProducts = [
    {
      img: image1,
      title: "Maroon Sweater square La robe Bari",
      price: "$760.000",
    },
    {
      img: image2,
      title: "Orange vest sweater La veste Baska",
      price: "$1.280.000",
    },
    {
      img: image3,
      title: "Dress Le pull Neve Fluffy long sleeve knit.",
      price: "$980.000",
    },
    {
        img: image1,
        title: "Maroon Sweater square La robe Bari",
        price: "$760.000",
      },
      {
        img: image2,
        title: "Orange vest sweater La veste Baska",
        price: "$1.280.000",
      },
      {
        img: image3,
        title: "Dress Le pull Neve Fluffy long sleeve knit.",
        price: "$980.000",
      },
  ];

  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "0px",
    // dots: false,
    infinite: true,
    slidesToShow: 3,
    // slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
    // rtl: false,
    arrows: false,
    sliderPerRow: 2,
  };

  return (
    <div className="wrap_slider">
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
      <div className="Row">
        <div className="Col">
          <h3>TAMBIÉN TE PODRÍA GUSTAR</h3>
        </div>
      </div>
      <Slider {...settings}>
        {otherProducts.map(({ img, title, price }) => (
          <div className="Col wrap-card">
            <div className="wrap-card-image">
              <img src={img} alt={title} />
            </div>
            <div className="wrap-card-information">
              <h4>{title}</h4>
              <h5>{price}</h5>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderCard;
