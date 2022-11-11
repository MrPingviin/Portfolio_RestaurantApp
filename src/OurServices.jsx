import "./OurServices.css";
import {HiOutlineShoppingBag} from "react-icons/hi";
import {TbPaperBag, TbTruckDelivery} from "react-icons/tb";
import {BsCreditCard} from "react-icons/bs";

function OurServices() {

    return( 
        <div id="our-Services" className="page">
            <div id="our-Services-Content">
                <div id="our-Services-Content-Titles">
                    <h3>OUR SERVICES</h3>
                    <h2>How We <span className="highlighted">Work</span></h2>
                </div>
                <div id="our-Services-Cardholder">

                    <div className="our-Services-Card">
                        <HiOutlineShoppingBag/>
                        <span>Easy To Order</span>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, aperiam!</p>
                    </div>

                    <div className="our-Services-Card">
                        <TbPaperBag/>
                        <span>Pick & Eat</span>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, aperiam!</p>
                    </div>

                    <div className="our-Services-Card">
                        <BsCreditCard/>
                        <span>Make Payment</span>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, aperiam!</p>
                    </div>

                    <div className="our-Services-Card">
                        <TbTruckDelivery/>
                        <span>Fastest Delivery</span>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, aperiam!</p>
                    </div>

                </div>

                <div id="our-Services-Appholder">
                    <div id="our-Services-Appholder-Description">
                        <div id="our-Services-Titles">
                        <div id="our-Services-Bigtitle">
                        <h2>To Get Food Download</h2>
                        <h2>Our <span className="highlighted">Mobile App</span></h2>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, nulla.</p>
                        </div>
                        <div id="our-Services-Appholder-MobileApps">
                            <img src="/img/appstore.webp" alt="Apple Appstore badge." />
                            <img src="/img/playstore.webp" alt="Google Playstore badge." />
                        </div>
                    </div>
                    <div id="our-Services-Appholder-Image">
                        <img src="/img/phoneapp.webp" alt="Food Factory smartphone app." />
                    </div>
                </div>

            </div>
        </div>
    );

}

export default OurServices;