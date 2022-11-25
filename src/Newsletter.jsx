import "./Newsletter.css";

function Newsletter() {

    return(
        <div id="newsletter" className="page">
            <div id="newsletter-content">
                <div id="newsletter-background"></div>
                <div id="newsletter-content-title">
                <h2>Subscribe To Our <span className="highlighted">Newsletter</span></h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, iure!</p>
                </div>

                <div id="newsletter-content-subscribe">
                <input type="email" name="subscribe" id="subscribe_input" placeholder="Your Email Address" />
                <button type="submit" name="subscribe" id="subscribe_button" onClick={() => (alert("WIP!"))}>Subscribe</button>
                </div>
            </div>
        </div>
    );
}

export default Newsletter;