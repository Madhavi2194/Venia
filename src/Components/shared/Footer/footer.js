
import React from "react";
import "./footer.scss";


class Footer extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <footer>
                <div className="foo-container">
                    <div className="row">
                        <div className="footer-col">
                            <h4>Account</h4>
                            <ul>
                                <li><a href="#">Sign In</a></li>
                                <li><a href="#">Register</a></li>
                                <li><a href="#">Order Status</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>About Us</h4>
                            <ul>
                                <li><a href="#">Our Story</a></li>
                                <li><a href="#">Careers</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Help</h4>
                            <ul>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">Order Status</a></li>
                                <li><a href="#">Returns</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Follow Us!</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                           
        <div className="icons">
           <div><img src={require("../../../assests/instagram.png")}  className="insta"/></div>
           <div><img src= {require("../../../assests/facebook.png")} className="fcb"/></div>
           <div><img src={require("../../../assests/twitter.png")} className="twt"/></div>
            </div>  
                        </div>
                    </div>
                </div>
        <div className="btm-footer">
        <img src={require("../../../assests/logo.png")} alt="taste of fruit" className="logo-img"/> 
        <p className="content">© Company Name Address Ave, City Name, State ZIP</p>
        <ul className="btmtxt">
            <li className="list"><a href="#">Terms of Use</a></li>
            <li className="list"><a href="#">Privacy Policy</a></li>
         </ul>
        </div>
    </footer>
        );
    }
}

export default Footer;
