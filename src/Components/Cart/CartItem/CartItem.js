import React from "react";
import { useSelector } from "react-redux/es/exports";
import { useState } from "react";
import "./CartItem.scss";
import minus from '../../../assests/minus-circle.png';
import plus from '../../../assests/plus-circle.png';
import save from '../../../assests/heart.png';
import edit from '../../../assests/edit-2.png';
import trash from '../../../assests/trash-2.png';
import PricingSummary from "../PriceSummary/PriceSummary";


function CartItem () {

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

    // const CartItems = () => {
        return(
            <section className="ui grid container">
                <div className="shopping-cart-container">
                    {
                        addCart.map((ad, i) => {
                            return (
                                <div key={ad.id} className="shopping-cart-section">
                                    <div className="cart-img-section">
                                        <img src={ad.image} className="cartimg" alt="" />
                                    </div>
                                    <div className="cart-title-content">
                                        {ad.title} <br />
                                        ${ad.price}
                                    </div>

                                    <div className="quantity-cart">
                                        <button type="button" onClick={handleDecrement} className="input-grp-txt"><img  src={minus} className="minuscount-img-cart" /></button>
                                        <div className="count-box">
                                            {quantity}
                                        </div>
                                        <button type="button" onClick={handleIncrement} className="input-grp-txt"><img  src={plus} className="pluscount-img-cart" /></button>
                                    </div>

                                    <div className="cart-quantity-handdle">
                                        <div className="handdle-section">
                                            <img  src={edit} className="edit-img" />
                                            <div className="cart-handle-name">
                                                <p>Edit Item</p>
                                            </div>
                                        </div>
                                        <div className="handdle-section">
                                            <img  src={trash} className="remove-img" />
                                            <div className="cart-handle-name">
                                                <p>Remove Item</p>
                                            </div>
                                        </div>
                                        <div className="handdle-section">
                                            <img  src={save} className="save-img" />
                                            <div className="cart-handle-name">
                                                <p>Save for Later</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pricing">
                                      <PricingSummary />
                                    </div>

                                </div>
                            )
                        })
                    }

                </div>
            </section>  
        )
      
    
   

}
export default CartItem;