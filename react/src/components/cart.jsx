import React from "react";
import cartImg from '../cart.png'
import items from "../productos.json"

// import { arrayPrds} from "./item";

// let cartLength = 0
let arrayPrds = []

// function CartLength() {
//   const [length, setLength] = useState(0);

//   useEffect(() => {
//   length+=1
// });
// }


const Cart = () => {
    return(
        <div className="futureCart"> 
        <img id="cart" alt="image" src={cartImg}/><p id="numberCart" >{0}</p>
      </div>
    )
}



export default Cart; 

export function addToCart(id, counter) {
  let found = items.find(element => element.index === id);
  for (let i = 0; i < counter; i++) {
    arrayPrds.push(found)
  }
  console.table(arrayPrds)
  // cartLength += 1
}