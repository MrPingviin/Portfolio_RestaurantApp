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
                        <a href="#menu"><li>Menu</li></a>
                        <a href="#best-Sellers"><li>Best Sellers</li></a>
                        <a href="#testimonials"><li>Reviews</li></a>
                        <a href="#booking"><li>Booking</li></a>
                    </ul>
                    </div>

                    <div className="footer-item">
                    <h2>SUPPORT</h2>
                    <ul>
                        <a href="#"><li>Get Help</li></a>
                        <a href="#"><li>Contact Us</li></a>
                        <a href="#"><li>Food feedback</li></a>
                    </ul>
                    </div>

                    <div className="footer-item">
                    <h2>LEGAL</h2>
                    <ul>
                        <a href="#"><li>Terms and Conditions</li></a>
                        <a href="#"><li>Privacy Policy</li></a>
                        <a href="#"><li>Disclaimer</li></a>
                       
                    </ul>
                    </div>

                    

                </div>

                <div id="footer-bottom">
                <span>Food Factory @ 2022 - Made with <BsFillHeartFill fill="red"/> by <a href="https://www.linkedin.com/in/szabo-richard/" target='_blank'>Richard Szabo</a> .</span>
                </div>
            </div>


        </div>
    );
}

export default Footer;