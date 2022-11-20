import "./WelcomePage.css";
import {
  AiFillClockCircle,
  AiOutlineMenu,
  AiFillCloseCircle,
} from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import { BsFillTelephoneFill, BsFillArrowUpCircleFill } from "react-icons/bs";
import { useEffect, useState } from "react";

function WelcomePage() {
  const [isMenuOpen, setMenu] = useState(false);

  const [yOffset, setYOffset] = useState(window.pageYOffset);


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  function handleScroll() {
    const currentYOffset = window.pageYOffset;
    const visible = yOffset > currentYOffset;
    const navbar = document.querySelector("nav");

    setYOffset(currentYOffset);


    if (visible == true ? navbar.style.transform = "translateY(-10vh)" : navbar.style.transform = "translateY(0vh)" );
  }

  function closeMenu() {
    const target = document.querySelector("#mobile-menu-container");
    target.style.display = "none";
    setMenu(false);
  }


  useEffect(() => {
    const target = document.querySelector("#mobile-menu-container");
    if (
      isMenuOpen == false
        ? (target.style.display = "none")
        : (target.style.display = "flex")
    );
  }, [isMenuOpen]);

  return (
    <div id="welcomePage" className="page">
      <div id="to-top-button">
      <BsFillArrowUpCircleFill fill="#FF9A1E" onClick={() => window.location.href = "#"}/>
      </div>
      <nav>
        <div id="navbar">
          <div id="nav-content">
            <div id="nav-logo">
              <a href="#">
                <span>
                  Food <span className="highlighted">Factory</span>
                </span>
              </a>
            </div>

            <div id="mobile-menu-container" className="mobile">
              <div id="mobile-menu-content">
                <AiFillCloseCircle
                  id="mobile-menu-close-icon"
                  onClick={() => setMenu(false)}
                />
                <h1>Menu</h1>
                <ul>
                  <li>
                    <a href="#" onClick={closeMenu}>Home</a>
                  </li>
                  <hr />
                  <li>
                    <a href="#best-Sellers" onClick={closeMenu}>Best sellers</a>
                  </li>
                  <hr />
                  <li>
                    <a href="#menu" onClick={closeMenu}>Menu</a>
                  </li>
                  <hr />
                  <li>
                    <a href="#booking" onClick={closeMenu}>Book Table</a>
                  </li>
                  <hr />
                  <li>
                    <a href="#our-Services" onClick={closeMenu}>About</a>
                  </li>
                  <hr />
                  <li>
                    <a href="#testimonials" onClick={closeMenu}>Reviews</a>
                  </li>
                  <hr />
                  <li>
                    <a href="#faq" onClick={closeMenu}>Faq</a>
                  </li>
                  <li>
                    <button onClick={closeMenu}>Sign Up</button>
                  </li>
                </ul>
              </div>
            </div>

            <div id="nav-optionSection">
              <div id="nav-options">
                <ul>
                  <a href="#" className="hidden">
                    DEBUG
                  </a>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#best-Sellers">Best sellers</a>
                  </li>

                  <li>
                    <a href="#menu">Menu</a>
                  </li>

                  <li>
                    <a href="#booking">Book Table</a>
                  </li>

                  <li>
                    <a href="#our-Services">About</a>
                  </li>

                  <li>
                    <a href="#testimonials">Reviews</a>
                  </li>

                  <li>
                    <a href="#faq">Faq</a>
                  </li>
                </ul>

                <div id="mobile-menu" className="mobile">
                  <AiOutlineMenu onClick={() => setMenu(true)} />
                </div>
              </div>

              <div id="nav-signup">
                <button>Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div id="welcomePage-content">
        <div id="welcomePage-middle">
          <div id="welcomePage-message">
            <div id="welcomePage-message-title">
              <h1>The Best Quality</h1>
              <h1>
                {" "}
                <span className="highlighted">Food</span> of Your
              </h1>
              <h1>Choice</h1>
            </div>
            <div id="welcomePage-message-text">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                necessitatibus quibusdam facere ipsum? Modi itaque voluptates
                atque quibusdam delectus odio.
              </p>
            </div>
            <div id="welcomePage-message-button">
              <button>Order Now</button>
              <button>Get the Food</button>
            </div>
          </div>
          <div id="welcomePage-image">
            <img
              src="/img/chef.webp"
              alt="Chef holding a plate of cooked chicken with salad."
            />
            <img
              src="/img/steak.webp"
              alt="Clipart from a steak."
              className="welcomePage-side-icon-steak"
            />
            <img
              src="/img/hamburger.webp"
              alt="Clipart from a hamburger."
              className="welcomePage-side-icon-hamburger"
            />
          </div>
        </div>

        <div id="welcomePage-bottom">
          <div id="welcomePage-bottom-content">
            <div className="welcomePage-bottom-card">
              <span>
                <AiFillClockCircle fill="#FF9A1E" />
              </span>
              <span>Our working hours</span>
              <span>Mon - Fri 10:00am - 11:00pm</span>
            </div>

            <div className="welcomePage-bottom-card">
              <span>
                <ImLocation fill="#FF9A1E" />
              </span>
              <span>Our Location</span>
              <span>HCQR+G58, Kohat</span>
            </div>

            <div className="welcomePage-bottom-card">
              <span>
                <BsFillTelephoneFill fill="#FF9A1E" />
              </span>
              <span>Call Online</span>
              <span>0334 3575757</span>
            </div>
          </div>
          <img
            src="/img/hotdog.webp"
            alt="Clipart from a hotdog."
            className="welcomePage-side-icon-hotdog"
          />
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
