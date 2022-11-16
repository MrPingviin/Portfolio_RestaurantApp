import "./BestSellers.css";
import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineStar,
  AiFillStar,
} from "react-icons/ai";

import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";
import { useEffect, useState, createElement } from "react";
import { createRoot } from "react-dom/client";
import ReactDOM, { render } from "react-dom";

function BestSellers() {
  useEffect(() => {
    fetch("http://localhost:3000/api/best-sellers")
      .then((response) => response.json())
      .then((data) => {

        const dataContainer = [];

        for (let i = 0; i < data.length; i++) {
          let card = (
            <div className="menu-card">
              <div className="menu-card-image">
              <img src={data[i].img} alt={data[i].alt} />
              </div>
              <div className="menu-card-main">
              <div className="menu-card-upper-row">
                <span>{data[i].name}</span>
                <AiOutlineHeart />
              </div>
              <div className="menu-card-bottom-row">
                <div className="menu-card-bottom-row-upper">
                  <span>Price</span>
                  <span>Reviews</span>
                </div>
                <div className="menu-card-bottom-row-bottom">
                  <span>${data[i].price}</span>
                  <span>
                    <AiFillStar fill="#FEB45A" /> {data[i].reviews}
                  </span>
                </div>
              </div>
              <button>Add To Cart</button>
              </div>
            </div>
          );
          dataContainer.push(card);
          let target = document.querySelector(
            "#bestSellers-content-menu-content"
          );
          let root = createRoot(target);
          root.render(dataContainer);
        }
      });
  }, []);

  return (
    <div id="best-Sellers" className="page">
      <div id="bestSellers">
        <div id="bestSellers-content">
          <div id="bestSellers-content-titles">
            <h3 className="highlighted">FEATURE PRODUCT</h3>
            <h2>
              Our Best Selling <span className="highlighted">Products</span>
            </h2>
            <img src="/img/chili.webp" alt="Red chili peppers." />
          </div>
          <div id="bestSellers-content-menu-section">
            <div id="bestSellers-content-menu-navbar">
              <BsFillArrowLeftSquareFill
                fill="#FF9A1E"
                className="menu-nav-button"
              />
              <BsFillArrowRightSquareFill
                fill="#FF9A1E"
                className="menu-nav-button"
              />
            </div>
            <div id="bestSellers-content-menu-content"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestSellers;
