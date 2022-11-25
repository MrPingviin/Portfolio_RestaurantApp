import "./Footer.css";
import {BsFillHeartFill} from "react-icons/bs";

function Footer() {
    return( 
        <div id="footer">

            <div id="footer-content">
                <div id="footer-main">

                    <div className="footer-item">
                        <h2>FOOD <span className="highlighted">FACTORY</span></h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem facere iusto fuga porro ut quos.</p>
                    </div>

                    <div className="footer-item">
                    <h2>FOOD FACTORY</h2>
                    <ul>
                       <li onClick={() => window.location.href = "#menu"}>Menu</li>
                       <li onClick={() => window.location.href = "#best-Sellers"}>Bestsellers</li>
                       <li onClick={() => window.location.href = "#testimonials"}>Reviews</li>
                       <li onClick={() => window.location.href = "#booking"}>Booking</li>
                    </ul>
                    </div>

                    <div className="footer-item">
                    <h2>SUPPORT</h2>
                    <ul>
                    <li onClick={() => window.location.href = "#"}>Get Help</li>
                    <li onClick={() => window.location.href = "#"}>Contact Us</li>
                    <li onClick={() => window.location.href = "#"}>Food Feedback</li>
                    </ul>
                    </div>

                    <div className="footer-item">
                    <h2>LEGAL</h2>
                    <ul>
                    <li onClick={() => window.location.href = "#"}>Terms and Conditions</li>
                    <li onClick={() => window.location.href = "#"}>Privacy Policy</li>
                    <li onClick={() => window.location.href = "#"}>Disclaimer</li>
                       
                    </ul>
                    </div>

                    

                </div>

                <div id="footer-bottom">
                <span>Food Factory @ 2022 - Made with <BsFillHeartFill fill="red"/> by <span onClick={() => window.location.href = "https://www.linkedin.com/in/szabo-richard"}>Richard Szabo</span> .</span>
                </div>
            </div>


        </div>
    );
}

export default Footer;