import React from "react";
import "./slideshow.css";
import { Slide } from "react-slideshow-image";

const slideImages = [
  "https://coverfiles.alphacoders.com/108/108897.jpg",
  "https://images.unsplash.com/photo-1564385222835-80264869c85c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
  "https://i.pinimg.com/originals/9a/04/6d/9a046d8113aa415ea7bacf11ea7c824f.jpg",
];

const Slideshow = () => {
  return (
    <div className="slideshow">
      <Slide easing="ease">
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[0]})` }}>
            <span>Masala</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[1]})` }}>
            <span>local masala</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[2]})` }}>
            <span>cookware</span>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Slideshow;
