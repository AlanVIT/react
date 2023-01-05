import React, {createContext, useState} from "react";

export const CartContext = createContext()

const CartContextProvider = ({children}) =>{
    const [cart, setCart] = useState([])

    const isInCart = (id) =>{
        return cart.some(x => x.id === id)
    }

    const addItem = (item, quantity) =>{
        if(isInCart(item.index)){
            let position = cart.findIndex(x => x.index === item.index)
            cart[position].quantity += quantity
            setCart([...cart]) 
        }
        else {
            setCart([...cart, {...item, quantity:quantity}])
        }
    }
    
    const removeItem = (id) =>{
        const prds = cart.filter(x => x.index !== id)
        setCart([...prds])
    }

    const clear = () =>{
        setCart([])
    }

    const cartTotal = () => {
        return cart.reduce((total, item) => total += item.quantity, 0) 
    }

    const priceTotal = () =>{
        let total = 0
        cart.map((item)=>(
            total += item.quantity * item.price 
        ))
        return total
    } 

    return (
        <CartContext.Provider value={{priceTotal ,removeItem, addItem,clear, cartTotal, cart}}>
            {children} 
        </CartContext.Provider>
    )
}
export default CartContextProvider
