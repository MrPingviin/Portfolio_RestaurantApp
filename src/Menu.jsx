import "./Menu.css";
import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineStar,
  AiFillStar,
} from "react-icons/ai";

function Menu() {
  return (
    <div id="menu" className="page">
      <div id="menu-content">
        <img src="/img/tomato.webp" id="tomato" alt="One half sliced and one whole piece of tomato." />
        <div id="menu-titles">
          <h3>TOP CATEGORIES</h3>
          <h2>
            Explore Our Best <span className="highlighted">Menu</span>
          </h2>
        </div>

        <div id="menu-categories">
          <ul>
            <li>Burger</li>
            <li>Chicken</li>
            <li>Salads</li>
            <li>Cold-Drinks</li>
            <li>Tea</li>
          </ul>
        </div>

        <div id="menu-dishes">
          <div className="menu-card">
            <img
              src="/img/card-dish.webp"
              alt="A plate of cooked chicken and salad."
            />
            <div className="menu-card-upper-row">
              <span>Green Salad</span>
              <AiOutlineHeart />
            </div>
            <div className="menu-card-bottom-row">
              <div className="menu-card-bottom-row-upper">
                <span>Price</span>
                <span>Reviews</span>
              </div>
              <div className="menu-card-bottom-row-bottom">
                <span>$10.00</span>
                <span>
                  <AiFillStar fill="#FEB45A" /> 345
                </span>
              </div>
            </div>
            <button>Add To Cart</button>
          </div>
        


        </div>
      </div>
    </div>
  );
}

export default Menu;
