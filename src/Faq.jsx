import "./Faq.css";
import {AiFillPlusCircle} from 'react-icons/ai';

function Faq() {
    
    return(
        <div id="faq" className="page">
            <div id="faq-content">
                <div id="faq-content-titles">
                    <h3 className="highlighted">FAQ</h3>
                    <h2>Frequently Asked <span className="highlighted">Questions</span></h2>
                </div>

                <div id="faq-content-main">
                    <details>
                        <summary>
                            <span>Lorem ipsum dolor sit amet? </span>
                            <AiFillPlusCircle fill="#FF9A1E" class="faq-plus-icon"/>
                            </summary>
                        <p>Answer</p>
                    </details>

                    <details>
                        <summary>
                            <span>Lorem ipsum dolor sit amet? </span>
                            <AiFillPlusCircle fill="#FF9A1E" class="faq-plus-icon"/>
                            </summary>
                        <p>Answer</p>
                    </details>


                    <details>
                        <summary>
                            <span>Lorem ipsum dolor sit amet? </span>
                            <AiFillPlusCircle fill="#FF9A1E" class="faq-plus-icon"/>
                            </summary>
                        <p>Answer</p>
                    </details>

                    <details>
                        <summary>
                            <span>Lorem ipsum dolor sit amet? </span>
                            <AiFillPlusCircle fill="#FF9A1E" class="faq-plus-icon"/>
                            </summary>
                        <p>Answer</p>
                    </details>


                    <details>
                        <summary>
                            <span>Lorem ipsum dolor sit amet? </span>
                            <AiFillPlusCircle fill="#FF9A1E" class="faq-plus-icon"/>
                            </summary>
                        <p>Answer</p>
                    </details>



                   
                    
                </div>
            </div>
        </div>
    );
}

export default Faq;