import "./BestSellers.css";
import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineStar,
  AiFillStar,
} from "react-icons/ai";

import {BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from 'react-icons/bs'

function BestSellers() {
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
              <BsFillArrowLeftSquareFill fill="#FF9A1E" className="menu-nav-button"/>
              <BsFillArrowRightSquareFill fill="#FF9A1E" className="menu-nav-button"/>
            </div>
            <div id="bestSellers-content-menu-content">

          
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
                      <AiFillStar fill="#FEB45A"/> 345
                    </span>
                  </div>
                </div>
                <button>Add To Cart</button>
              </div>

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
                      <AiFillStar fill="#FEB45A"/> 345
                    </span>
                  </div>
                </div>
                <button>Add To Cart</button>
              </div>
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
                      <AiFillStar fill="#FEB45A"/> 345
                    </span>
                  </div>
                </div>
                <button>Add To Cart</button>
              </div>
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
                      <AiFillStar fill="#FEB45A"/> 345
                    </span>
                  </div>
                </div>
                <button>Add To Cart</button>
              </div>

              
              
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestSellers;
