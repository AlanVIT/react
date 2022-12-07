import cartImg from '../cart.png'
import items from "../productos.json"

// import { arrayPrds} from "./item";

// let cartLength = 0
let arrayPrds = []


const Cart = () => {
  // const [length, setLength] = useState(0);

  // useEffect(()=>{
  //   const promesa = new Promise((resolve, reject)=>{
  //     resolve()
  //   })
  //   promesa.then(length);{
  //     setLength()
  //   }
  // })

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