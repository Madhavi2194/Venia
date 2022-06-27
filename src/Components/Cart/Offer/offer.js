import React from "react";
import '../Offer/offer.scss';
import down from '../../../assests/chevron-down.png';

function Offer() {
    return(
<section className="ui grid">
    <div className="cart-accordian-section">
        <div className="cart-accordian-info">
            <div className="cart-accordian-title">
                <p>Estimate your Shipping</p>
            </div>
            <div className="cart-left-section">
            <div className="cart-accordian-text-right">
                <p>Shipping to 91001</p>
            </div>
            <div className="cart-accordian-down-arrow">
            <img src={down}  className="cart-accordian-down"  alt="down-icon" />
            </div>
            </div>
        </div>
        <div className="cart-accordian-info">
            <div className="cart-accordian-title">
                <p>Enter a Coupon Code</p>
            </div>
            <div className="cart-left-section">
            <div className="cart-accordian-text-right">
                <p>40% discount applied</p>
            </div>
            <div className="cart-accordian-down-arrow">
            <img src={down}  className="cart-accordian-down"  alt="down-icon"/>
            </div>
            </div>
        </div>
        <div className="cart-accordian-info">
            <div className="cart-accordian-title">
                <p>Apply Gift Card</p>
            </div>
            <div className="cart-left-section">
            <div className="cart-accordian-down-arrow">
            <img src={down}  className="cart-accordian-down"  alt="down-icon"/>
            </div>
            </div>
        </div>

        </div>


        </section>
    )
}
export default Offer;