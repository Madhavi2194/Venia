import React from "react";
import CartItem from "../../Components/Cart/CartItem/CartItem";
import PricingSummary from "../../Components/Cart/PriceSummary/PriceSummary";
import Recentlyviewed from "../../Components/Cart/RecentlyViewed/Recentlyviewd";
import Offer from "../../Components/Cart/Offer/offer";




function CartPage() {
    return (
       <div>
         <CartItem></CartItem>
         <Offer></Offer>
         <Recentlyviewed></Recentlyviewed> 
           
           
       </div>
    )
           
   }
 export default CartPage;