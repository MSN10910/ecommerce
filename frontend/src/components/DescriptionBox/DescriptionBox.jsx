import React from "react";
import "./DescriptionBox.css";
const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box fade">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (110)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An eCommerce website is an online platform that facilitates commercial
          transactions over the internet. It allows businesses and individuals
          to buy and sell goods or services through digital means.
        </p>
        <p>
        An eCommerce website operates through a series of integrated systems and processes that facilitate online shopping. 
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
