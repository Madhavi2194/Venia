import React from "react";
import { useSelector } from "react-redux/es/exports";
import { useState } from "react";
import '../CartItem/CartItem.scss';
import minus from '../../../assests/minus-circle.png';
import plus from '../../../assests/plus-circle.png';
import save from '../../../assests/heart.png';
import edit from '../../../assests/edit-2.png';
import trash from '../../../assests/trash-2.png';
import elipsis from '../../../assests/more-horizontal.png';
import PricingSummary from "../PriceSummary/PriceSummary";
import Offer from "../Offer/offer";


function CartItem() {

    const addCart = useSelector((state) => state.cart.cart);
    //Quantity IncDec start
    const [quantity, setQuantity] = useState(1);
    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(prevCount => prevCount - 1); // decrement quantity

        }
    }

    const handleIncrement = () => {
        if (quantity < 10) {
            setQuantity(prevCount => prevCount + 1); // increment quantity
        }
    }


    return (
        <section className="ui grid container">
            <div className="shopping-cart-container">
                {
                    addCart.map((ad, i) => {
                        return (
                            <>
                                <section>
                                    <div className="mb-16">
                                        <div className ="display-l-36- text-center">Your Shopping Bag</div>
                                        <div className="horizontal-bar"></div>
                                    </div>
                                    <div className="cart-section-details aem-Grid aem-Grid--default--12 aem-Grid--phone--1">
                                        <div  className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--1">
                                            <div className="aem-Grid aem-Grid--default--12 aem-Grid--phone--1">
                                                <div key={ad.id} className="cart-section  aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--1 ">
                                                    <img src={ad.image} className="cartimg" alt={ad.title} />
                                                    <div >
                                                        <h5>{ad.title}</h5>
                                                        <p> Size: Medium</p>
                                                        <p> Color: Black</p>
                                                        <p> ${ad.price}</p>
                                                        <div className="quantity-cart display-block-sm">
                                                        <div className="visible_flex-display margin-cart">
                                                                <span type="button" onClick={handleDecrement} className="input-grp-txt"><img src={minus} className="minuscount-img-cart" alt="decrement" /></span>
                                                                <div className="count-box">
                                                                <input type="text" className="form-control quantity-button-mobile" value={quantity} />
                                                                </div>
                                                                <span type="button" onClick={handleIncrement} className="input-grp-txt"><img src={plus} className="pluscount-img-cart" alt="incerement-icon"/></span>
                                                        </div> 
                                                        </div>
                                                    </div>
                                                    <div className="action-section-mobile display-block-sm">
                                                        <img src= {elipsis} alt="elipsis"/>
                                                    </div>
                                                    
                                                </div>
                                                <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--1 cart-quantity-details">
                                                    <div className="quantity-cart visible_lg_block">
                                                        <span type="button" onClick={handleDecrement} className="input-grp-txt"><img src={minus} className="minuscount-img-cart" alt="decrement" /></span>
                                                        <div className="count-box">
                                                        <input type="text" className="form-control  quantity-btn" value={quantity} />
                                                        </div>
                                                        <span type="button" onClick={handleIncrement} className="input-grp-txt"><img src={plus} className="pluscount-img-cart" alt="increment-icon" /></span>
                                                    </div>
                                                    
                                                    <div className="action-section display-block-lg">
                                                        <div className="action-edit">
                                                            <span><img src={edit} className="edit-img" alt="edit-icon" /></span>  &nbsp;
                                                            <span>Edit</span>
                                                        </div>
                                                        <div className="action-delete">
                                                           <span><img src={trash} className="edit-img" alt="delete-icon" /></span> &nbsp;
                                                            <span>Delete</span>
                                                        </div>
                                                        <div className="action-wishlist">
                                                        <span><img src={save} className="edit-img" alt="delete-icon" /></span> &nbsp;
                                                        <span>Save for later</span>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                            <div className="aem-Grid aem-Grid--default--12 aem-Grid--phone--1">
                                            <Offer></Offer>
                                            </div>
                                        </div>
                                        
                                        <div  className=" aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--1">
                                            <div className="pricing">
                                               <PricingSummary />
                                            </div>
                                        </div>
                                    </div>
                                   
                                </section>
                                <section>
                                    {/* <div key={ad.id} className="shopping-cart-section">
                                    <div className="cart-section">
                                        <img src={ad.image} className="cartimg" alt={ad.title} />
                                    </div>
                                    <div className="cart-title-content">
                                        {ad.title} <br />
                                        ${ad.price}
                                    </div>

                                    <div className="quantity-cart">
                                        <button type="button" onClick={handleDecrement} className="input-grp-txt"><img  src={minus} className="minuscount-img-cart" alt="decrement"/></button>
                                        <div className="count-box">
                                            {quantity}
                                        </div>
                                        <button type="button" onClick={handleIncrement} className="input-grp-txt"><img  src={plus} className="pluscount-img-cart" /></button>
                                    </div> */}

                                    {/* <div className="cart-quantity-handdle">
                                        <div className="handdle-section">
                                            <img  src={edit} className="edit-img" alt="edit-icon" />
                                            <div className="cart-handle-name">
                                                <p>Edit Item</p>
                                            </div>
                                        </div>
                                        <div className="handdle-section">
                                            <img  src={trash} className="remove-img"  alt="delete-icon" />
                                            <div className="cart-handle-name">
                                                <p>Remove Item</p>
                                            </div>
                                        </div>
                                        <div className="handdle-section">
                                            <img  src={save} className="save-img" alt="wishlist-icon" />
                                            <div className="cart-handle-name">
                                                <p>Save for Later</p>
                                            </div>
                                        </div>
                                    </div> */}
                                    {/* <div className="pricing">
                                      <PricingSummary />
                                    </div> */}

                                    {/* </div> */}
                                </section>
                            </>
                        )
                    })
                }

            </div>
        </section>
    )




}
export default CartItem;