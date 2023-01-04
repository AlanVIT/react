import React, {useContext} from "react";
import { CartContext } from "./cartContext";
import { Link } from "react-router-dom";
import Delete from '../Delete.png'
import CheckOut from "./checkOut";

const Cart = () =>{
    const {cart, cartTotal, removeItem, priceTotal, clear, finish} = useContext(CartContext)

    // console.table(cart)
    if (cartTotal()===0){
        return(
            <div className="alert alert-danger text-center" role="alert">
            No hay productos
            </div>
        )
    }

    return(
        <div className="container">

                    <table className="table table-dark table-hover">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Producto</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Precio</th>
                            <th scope="col"><Link to={"/checkOut"} className="btn btn-primary">Terminar compra</Link></th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item)=>(
                                <tr key={item.index}>
                                    <td>{item.index}</td>
                                    <td>{item.title}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.price * item.quantity}</td>
                                    <td><Link onClick={()=>removeItem(item.index)}><img src={Delete}alt={"Eliminar producto"} width={25}></img></Link></td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">#</th>
                                <th scope="col">{cartTotal()}</th>
                                <th scope="col">{priceTotal()}</th>
                                <th scope="col"><button className="btn btn-primary" onClick={clear}>Vaciar carrito</button></th>
                            </tr>
                        </tfoot>   
                    </table>
        </div>
    )
}

export default Cart