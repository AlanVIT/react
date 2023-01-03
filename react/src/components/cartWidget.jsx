import React from 'react'
import cartImg from '../cart.png'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from './cartContext'


const Cart = () => {
      const {cartTotal} = useContext(CartContext) 

    return (
    <Link to={"./cart"} className='futureCart text-decoration-none bg-light'>
          <img id="cart" alt="image" src={cartImg}/><p id="numberCart" >{cartTotal()}</p>
    </Link>   
      )
    
}



export default Cart; 
