import React from 'react'
//  {createContext, useContext, useState} 
import cartImg from '../cart.png'





const Cart = () => {


    return (
    <div className='futureCart'>
          <img id="cart" alt="image" src={cartImg}/><p id="numberCart" >{0}</p>
    </div>   
      )
    
}



export default Cart; 
