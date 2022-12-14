import "./Menu.css";
import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineStar,
  AiFillStar,
} from "react-icons/ai";
import { TbListDetails } from "react-icons/tb";
import { useEffect, useState, createElement } from "react";
import { createRoot } from "react-dom/client";
import ReactDOM, { render } from "react-dom";
import { IoIosCloseCircle } from "react-icons/io";
import React from "react";
import { ConstructionOutlined } from "@mui/icons-material";

const dataContainer = [];

function Menu() {
  const menuCategories = [];

  // ! Fetch the menu categories from the /backend/db/ folder
  useEffect(() => {
    fetch("http://localhost:3000/api")
      .then((response) => response.json())
      .then((data) => {
        menuCategories.push(data);
        console.log("Categories => ", menuCategories);
        setCategory(`${menuCategories[0][0]}`);
        fillCategoryBar();
      });
  }, []);

  // ! Fills the category selector bar
  const fillCategoryBar = () => {
    const categoryStorage = [];

    for (let i = 0; i < menuCategories[0].length; i++) {
      const listItem = (
        <li
          onClick={() => setCategory(menuCategories[0][i])(setSelected(event))}
        >
          {menuCategories[0][i]}
        </li>
      );
      categoryStorage.push(listItem);
    }
    const target = document.querySelector("#menu-categories-content");
    const root = createRoot(target);
    root.render(categoryStorage);
  };

  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState(0);
  const cardContainer = [];

  // ? --------------------------------
  // ! Order quantity setter logic on the buttons
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
  // ? --------------------------------

  // ! Hides the navbar, to-top button and makes the inspect menu visible also calls the load script.
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

  // ! Loads the items's saved data from the local storage and gives it to the inspect menu
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

  // ** ------------------------------------------------------------------------------------------

  // ! Fetch the items of the wanted category from the backend
  const fetchItemData = async (data) => {
    await fetch(`http://localhost:3000/api/${data}`)
      .then((response) => response.json())
      .then((data) => {
        dataContainer.push(data);
      });
  };

  // ! At every category (state) changes checks if it's already downloaded or not.
  // ! If not, it downloads and saves the data.
  useEffect(() => {
    const targetType = category.slice(0, category.length - 1);

    let counter = 0;

    for (let i = 0; i < dataContainer.length; i++) {
      if (dataContainer[i][0].type == targetType) {
        renderMenu(i);
        return;
      }
    }

    if (counter == 0) {
      const downloadData = async () => {
        await fetchItemData(`${category}`);
        for (let i = 0; i < dataContainer.length; i++) {
          if (dataContainer[i][0].type == targetType) {
            renderMenu(i);
            return;
          }
        }
      };
      downloadData();
    }
  }, [category]);

  // ! Renders the menu cards of the selected category.
  const renderMenu = (j) => {
    for (let i = 0; i < dataContainer[j].length; i++) {
      let card;
      if (
        dataContainer[j][i].type == "Colddrink" ||
        dataContainer[j][i].type == "Tea"
      ) {
        card = (
          <div className="menu-card">
            <img
              src={dataContainer[j][i].img_large}
              alt={dataContainer[j][i].alt_large}
            />
            <div className="menu-card-main">
              <div className="menu-card-upper-row">
                <span>{dataContainer[j][i].name}</span>
                <span>{dataContainer[j][i].type}</span>
                <AiOutlineHeart />
              </div>
              <div className="menu-card-bottom-row">
                <div className="menu-card-bottom-row-upper">
                  <span>Price</span>
                  <span>Reviews</span>
                </div>
                <div className="menu-card-bottom-row-bottom">
                  <span>${dataContainer[j][i].price}</span>
                  <span>
                    <AiFillStar fill="#FEB45A" /> {dataContainer[j][i].reviews}
                  </span>
                </div>
              </div>
              <div className="menu-card-buttons">
                <button onClick={() => alert("WIP!")}>Add To Cart</button>
              </div>
            </div>
          </div>
        );
      } else {
        card = (
          <div className="menu-card">
            <img
              src={dataContainer[j][i].img_large}
              alt={dataContainer[j][i].alt_large}
            />
            <div className="menu-card-main">
              <div className="menu-card-upper-row">
                <span>{dataContainer[j][i].name}</span>
                <span>{dataContainer[j][i].type}</span>
                <AiOutlineHeart />
              </div>
              <div className="menu-card-bottom-row">
                <div className="menu-card-bottom-row-upper">
                  <span>Price</span>
                  <span>Reviews</span>
                </div>
                <div className="menu-card-bottom-row-bottom">
                  <span>${dataContainer[j][i].price}</span>
                  <span>
                    <AiFillStar fill="#FEB45A" /> {dataContainer[j][i].reviews}
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
      let target = document.querySelector("#menu-dishes");
      let root = createRoot(target);
      root.render(cardContainer);
    }
  };

  // ! logic for the inspect menu closer icon
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

  // ! Sets the selected category's background color to orange on change in the menu's category bar.
  const setSelected = (event) => {
    console.log(event.target);
    const target = document.querySelector("#menu-categories-content");
    for (let i = 0; i < target.childElementCount; i++) {
      target.children[i].style.background = "none";
    }
    event.target.style.backgroundColor = "#FF9A1E";
  };

  return (
    <div id="menu" className="page">
      <div id="menu-inspect-section">
        <div className="menu-inspect-container">
          <div className="menu-inspect-content">
            <IoIosCloseCircle
              className="menu-inspect-close-icon"
              fill="#FF9A1E"
              onClick={menuInspectCloser}
            />

            <div className="menu-inspect-image-section">
              <div className="menu-inspect-image-large-image">
                <img src="" alt="" id="menu-item-large-image" />
              </div>
              <div className="menu-inspect-image-mini-images">
                <img src="" alt="" id="menu-item-small-image-first" />
                <img src="" alt="" id="menu-item-small-image-second" />
                <img src="" alt="" id="menu-item-small-image-third" />
              </div>
            </div>

            <div className="menu-inspect-description-section">
              <div className="menu-inspect-description-title-section">
                <h1 id="menu-item-name"></h1>
                <div className="menu-inspect-description-ratings">
                  <span className="menu-inspect-description-rating hidden">
                    rating
                  </span>
                  <span className="menu-inspect-description-review-count">
                    <span id="menu-item-reviews"></span> reviews
                  </span>
                </div>
              </div>

              <div className="menu-inspect-description-price-section">
                <span>
                  $<span id="menu-item-price"></span>
                </span>
                {/* <span>Old Price</span>
                      <span>Save $2.00</span> */}
              </div>

              <div className="menu-inspect-description-main-section">
                <h2>Description</h2>

                <p id="menu-item-description"></p>

                <h2>Size</h2>

                <div className="menu-inspect-description-main-sizes">
                  <button>S</button>
                  <button>M</button>
                  <button>L</button>
                </div>

                <h2>Quantity</h2>

                <div className="menu-inspect-description-main-quantity-section">
                  <div className="menu-inspect-description-main-quantity-setquantity">
                    <button onClick={minusQuantity}>-</button>
                    <span id="menu-inspect-quantity">{quantity}</span>
                    <button onClick={plusQuantity}>+</button>
                  </div>
                </div>

                <button>Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="menu-content">
        <img
          src="/img/tomato.webp"
          id="tomato"
          alt="One half sliced and one whole piece of tomato."
        />
        <div id="menu-titles">
          <h3>TOP CATEGORIES</h3>
          <h2>
            Explore Our Best <span className="highlighted">Menu</span>
          </h2>
        </div>

        <div id="menu-categories">
          <ul id="menu-categories-content">
            {/* <li onClick={categorySwitch_Tea}>Tea</li>  */}
          </ul>
        </div>

        <div id="menu-dishes"></div>
      </div>
    </div>
  );
}

export default Menu;
