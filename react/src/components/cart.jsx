import React from "react";
import cart from '../cart.png'

const Cart = () => {
    return(
        <div className="futureCart"> 
        <img id="cart" src={cart}/><p>0</p>
      </div>
    )
}

export default Cart;
