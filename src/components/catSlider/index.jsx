import React, { useState, useRef } from "react";
import "./style.css";
import Slider from "react-slick";

const CatSlider = () => {
  const itemBg = [
    "#fffceb", "#ecffec", "#feefea", "#fff3eb", "#fff3ff", "#f2fce4",
    "#feefea", "#fffceb", "#feefea", "#ecffec", "#feefea", "#fff3eb",
    "#fff3ff", "#f2fce4", "#feefea", "#fffceb", "#feefea", "#ecffec"
  ];

  const categories = [
    { img: "cat-13.png", name: "Cake & Milk", items: 26 },
    { img: "cat-12.png", name: "Organic Kiwi", items: 26 },
    { img: "cat-11.png", name: "Peach", items: 28 },
    { img: "cat-9.png", name: "Red Apple", items: 14 },
    { img: "cat-3.png", name: "Snack", items: 54 },
    { img: "cat-1.png", name: "Vegetables", items: 56 },
    { img: "cat-2.png", name: "Strawberry", items: 72 },
    { img: "cat-4.png", name: "Black Plum", items: 36 },
    { img: "cat-5.png", name: "Custard", items: 126 },
    { img: "cat-14.png", name: "Coffee & Tea", items: 34 },
  ];

  const slider = useRef();

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 2,
    fade: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="catSliderSection">
      <div className="container-fluid">
        <h2 className="hd">Featured Categories</h2>
        <Slider {...settings} className="cat_slider_Main">
          {categories.map((category, index) => (
            <div className="item" key={index}>
              <div className="info" style={{ background: itemBg[index % itemBg.length], width: "155px", height: "175px" }}>
                <img
                  src={`https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/${category.img}`}
                  alt={category.name}
                  style={{ width: "100px", height: "100px" }}
                />
                <h5>{category.name}</h5>
                <p>{category.items} items</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CatSlider;