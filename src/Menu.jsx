import "./Menu.css";
import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineStar,
  AiFillStar,
} from "react-icons/ai";
import { useEffect, useState, createElement } from "react";
import { createRoot } from "react-dom/client";
import ReactDOM, { render } from "react-dom";

function Menu() {
  const [category, setCategory] = useState("burgers");

  useEffect(() => {
    fetch(`http://localhost:3000/api/${category}`)
      .then((response) => response.json())
      .then((data) => {

        const dataContainer = [];

        for (let i = 0; i < data.length; i++) {
          let card = (
            <div className="menu-card">
              <img src={data[i].img} alt={data[i].alt} />
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
          let target = document.querySelector("#menu-dishes");
          let root = createRoot(target);
          root.render(dataContainer);
        }
      });
  });

  function setSelected(event) {
    const target = document.querySelector("#menu-categories-content");
    for (let i = 0; i < target.childElementCount; i++) {
      target.children[i].style.background = "none";
    }
    event.target.style.backgroundColor = "#FF9A1E";
  }

  function categorySwitch_Burger(event) {
    setCategory("burgers");
    setSelected(event)
  }

  function categorySwitch_Chicken(event) {
    setCategory("chickens");
    setSelected(event)
  }

  function categorySwitch_Salad(event) {
    setCategory("salads");
    setSelected(event)
  }

  function categorySwitch_ColdDrink(event) {
    setCategory("coldDrinks");
    setSelected(event)
  }

  function categorySwitch_Tea(event) {
    setCategory("teas");
    setSelected(event)
  }

  return (
    <div id="menu" className="page">
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
            <li onClick={categorySwitch_Burger}>Burger</li>
            <li onClick={categorySwitch_Chicken}>Chicken</li>
            <li onClick={categorySwitch_Salad}>Salad</li>
            <li onClick={categorySwitch_ColdDrink}>Cold-Drink</li>
            <li onClick={categorySwitch_Tea}>Tea</li>
          </ul>
        </div>

        <div id="menu-dishes"></div>
      </div>
    </div>
  );
}

export default Menu;
