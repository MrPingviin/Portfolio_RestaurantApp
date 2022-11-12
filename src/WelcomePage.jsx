import './WelcomePage.css'
import { AiFillClockCircle } from 'react-icons/ai';
import { ImLocation } from 'react-icons/im'
import { BsFillTelephoneFill } from 'react-icons/bs'


function WelcomePage() {

  return (
   <div id="welcomePage" class="page">
    <nav>
      <div id="navbar">
        <div id="nav-content">

          <div id="nav-logo">
            <a href="#"><span>Food <span className="highlighted">Factory</span></span></a>
          </div>

          <div id="nav-optionSection">
            <div id="nav-options">
              <ul>
                <a href="#">DEBUG</a>
                <a href="#">Home</a>
                <a href="#best-Sellers">Best sellers</a>
                <a href="#menu">Menu</a>
                <a href="#booking">Book Table</a>
                <a href="#our-Services">About</a>
                <a href="#testimonials">Reviews</a>
              </ul>
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
          <h1> <span className="highlighted">Food</span> of Your</h1>
          <h1>Choice</h1>
          </div>
          <div id="welcomePage-message-text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore 
              necessitatibus quibusdam facere ipsum? Modi itaque voluptates atque 
              quibusdam delectus odio.</p>
              


          </div>
          <div id="welcomePage-message-button">
            <button>Order Now</button>
            <button>Get the Food</button>
          </div>
        </div>
        <div id="welcomePage-image">
        <img src="/img/chef.webp" alt="Chef holding a plate of cooked chicken with salad." />
        <img src="/img/steak.webp" alt="Clipart from a steak." className="welcomePage-side-icon-steak" />
        <img src="/img/hamburger.webp" alt="Clipart from a hamburger." className="welcomePage-side-icon-hamburger" />
        </div>
      </div>

      <div id="welcomePage-bottom">
        <div id="welcomePage-bottom-content">

        <div className="welcomePage-bottom-card">
          <span><AiFillClockCircle fill="#FF9A1E"/></span>
          <span>Our working hours</span>
          <span>Mon - Fri 10:00am - 11:00pm</span>
        </div>

        <div className="welcomePage-bottom-card">
          <span><ImLocation fill="#FF9A1E"/></span>
          <span>Our Location</span>
          <span>HCQR+G58, Kohat</span>
        </div>

        <div className="welcomePage-bottom-card">
          <span><BsFillTelephoneFill fill="#FF9A1E"/></span>
          <span>Call Online</span>
          <span>0334 3575757</span>
        </div>
        </div>
        <img src="/img/hotdog.webp" alt="Clipart from a hotdog." className="welcomePage-side-icon-hotdog" />
      </div>

      
    
    </div>

   </div>
  )
}

export default WelcomePage
