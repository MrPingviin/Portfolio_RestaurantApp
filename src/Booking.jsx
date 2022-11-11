import "./Booking.css";

function Booking() {

    return(
        <div id="booking" className="page">
            <div id="booking-content">
                <div id="booking-description">
                    <div id="booking-header">
                        TABLE BOOKING
                        <img src="/img/smoothie.webp" alt="Glass of strawberry smoothie." />
                    </div>
                    <div id="booking-middle">

                        <h2>Reserve Your</h2>
                        <h2>Table</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas in porro facilis omnis sint aliquam, fugit ea voluptate molestiae tenetur?</p>
                    </div>
                    <div id="booking-bottom">
                        <button>Book Now</button>
                    </div>
                </div>

                <div id="booking-image">
                    <img src="/img/restaurant.webp" alt="Dining area of a restaurant, people are sitting at the tables and eating." />
                </div>
            </div>
        </div>
    );
}

export default Booking;