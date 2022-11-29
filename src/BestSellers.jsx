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
import { TbListDetails } from "react-icons/tb";
import { IoIosCloseCircle } from "react-icons/io";
import { useEffect, useState, createElement } from "react";
import { createRoot } from "react-dom/client";
import ReactDOM, { render } from "react-dom";
import e from "cors";

const dataContainer = [];
const cardContainer = [];

const BestSellers = () => {
  const [quantity, setQuantity] = useState(0);

  const minusQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const plusQuantity = () => {
    if (quantity < 30) {
      setQuantity(quantity + 1);
    }
  };

  const inspectRouter = (event) => {
    const typeToFind =
      event.target.parentElement.parentElement.children[0].children[1]
        .innerHTML + "s";
    const nameToFind =
      event.target.parentElement.parentElement.children[0].children[0]
        .innerHTML;
    const inspectMenu = document.querySelector(".menu-inspect-container");
    const to_top_button = document.querySelector("#to-top-button");
    const navbar = document.querySelector("nav");

    loadSavedData(nameToFind);
    inspectMenu.style.display = "flex";
    to_top_button.style.display = "none";
    navbar.style.display = "none";
  };

  const loadSavedData = (nameToFind) => {
    const menuItemName = document.querySelector("#menu-item-name");
    const menuItemPrice = document.querySelector("#menu-item-price");
    const menuItemDescription = document.querySelector(
      "#menu-item-description"
    );
    const menuItemReviewCount = document.querySelector("#menu-item-reviews");
    const menuItemLargeImage = document.querySelector("#menu-item-large-image");

    const menuItemSmallImageFirst = document.querySelector(
      "#menu-item-small-image-first"
    );
    const menuItemSmallImageSecond = document.querySelector(
      "#menu-item-small-image-second"
    );
    const menuItemSmallImageThird = document.querySelector(
      "#menu-item-small-image-third"
    );

    for (let i = 0; i < dataContainer.length; i++) {
      for (let j = 0; j < dataContainer[i].length; j++) {
        if (nameToFind == dataContainer[i][j].name) {
          menuItemName.innerHTML = dataContainer[i][j].name;
          menuItemPrice.innerHTML = dataContainer[i][j].price;
          menuItemDescription.innerHTML = dataContainer[i][j].description;
          menuItemReviewCount.innerHTML = dataContainer[i][j].reviews;
          menuItemLargeImage.setAttribute("src", dataContainer[i][j].img_large);
          menuItemLargeImage.setAttribute("alt", dataContainer[i][j].alt_large);

          menuItemSmallImageFirst.setAttribute(
            "src",
            dataContainer[i][j].img_small_first
          );
          menuItemSmallImageFirst.setAttribute(
            "alt",
            dataContainer[i][j].alt_small_first
          );

          menuItemSmallImageSecond.setAttribute(
            "src",
            dataContainer[i][j].img_small_second
          );
          menuItemSmallImageSecond.setAttribute(
            "alt",
            dataContainer[i][j].alt_small_second
          );

          menuItemSmallImageThird.setAttribute(
            "src",
            dataContainer[i][j].img_small_third
          );
          menuItemSmallImageThird.setAttribute(
            "alt",
            dataContainer[i][j].alt_small_third
          );
        }
      }
    }
  };

  const menuInspectCloser = () => {
    const inspectMenuElement = document.querySelector(
      ".menu-inspect-container"
    );
    const to_top_button = document.querySelector("#to-top-button");
    to_top_button.style.display = "flex";
    inspectMenuElement.style.display = "none";
    const navbar = document.querySelector("nav");
    navbar.style.display = "flex";
    setQuantity(0);
  };

  useEffect(() => {
    fetch("http://localhost:3000/api/Bestsellers")
      .then((response) => response.json())
      .then((data) => {
        dataContainer.push(data);

        for (let i = 0; i < data.length; i++) {
          let card;
          if (data[i].type == "ColdDrink" || data[i].type == "Tea") {
            card = (
              <div className="menu-card">
                <img
                  src={dataContainer[0][i].img_large}
                  alt={dataContainer[0][i].alt_large}
                />
                <div className="menu-card-main">
                  <div className="menu-card-upper-row">
                    <span>{dataContainer[0][i].name}</span>
                    <span>{dataContainer[0][i].type}</span>
                    <AiOutlineHeart />
                  </div>
                  <div className="menu-card-bottom-row">
                    <div className="menu-card-bottom-row-upper">
                      <span>Price</span>
                      <span>Reviews</span>
                    </div>
                    <div className="menu-card-bottom-row-bottom">
                      <span>${dataContainer[0][i].price}</span>
                      <span>
                        <AiFillStar fill="#FEB45A" />{" "}
                        {dataContainer[0][i].reviews}
                      </span>
                    </div>
                  </div>
                  <div className="menu-card-buttons">
                    <button onClick={() => alert("WIP!")}>Add To Cart</button>
                    <TbListDetails className="menu-details-button" />
                  </div>
                </div>
              </div>
            );
          } else {
            card = (
              <div className="menu-card">
                <img
                  src={dataContainer[0][i].img_large}
                  alt={dataContainer[0][i].alt_large}
                />
                <div className="menu-card-main">
                  <div className="menu-card-upper-row">
                    <span>{dataContainer[0][i].name}</span>
                    <span>{dataContainer[0][i].type}</span>
                    <AiOutlineHeart />
                  </div>
                  <div className="menu-card-bottom-row">
                    <div className="menu-card-bottom-row-upper">
                      <span>Price</span>
                      <span>Reviews</span>
                    </div>
                    <div className="menu-card-bottom-row-bottom">
                      <span>${dataContainer[0][i].price}</span>
                      <span>
                        <AiFillStar fill="#FEB45A" />{" "}
                        {dataContainer[0][i].reviews}
                      </span>
                    </div>
                  </div>
                  <div className="menu-card-buttons">
                    <button onClick={() => alert("WIP!")}>Add To Cart</button>
                    <TbListDetails
                      className="menu-details-button"
                      onClick={inspectRouter}
                    />
                  </div>
                </div>
              </div>
            );
          }
          cardContainer.push(card);
          let target = document.querySelector(
            "#bestSellers-content-menu-content"
          );
          let root = createRoot(target);
          root.render(cardContainer);
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
              {/* <BsFillArrowLeftSquareFill
                fill="#FF9A1E"
                className="menu-nav-button"
              />
              <BsFillArrowRightSquareFill
                fill="#FF9A1E"
                className="menu-nav-button"
              /> */}
            </div>
            <div id="bestSellers-content-menu-content"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
