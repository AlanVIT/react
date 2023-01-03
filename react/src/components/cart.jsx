import React, {useContext} from "react";
import { CartContext } from "./cartContext";
import { Link } from "react-router-dom";
import Delete from '../Delete.png'

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
                        <tbody>
                                <tr><td scope="col" ><input type="text" id="1" required placeholder={"Nombre y apellido"}/></td></tr>
                                <tr><td scope="col" ><input type="text" id="2" required placeholder={"Mail"}/></td></tr>
                                <tr><td scope="col" ><input type="text" id="3" required placeholder={"Telefono"}/></td></tr>
                        </tbody>
                    </table>
                    <table className="table table-dark table-hover">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Producto</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Precio</th>
                            <th scope="col"><button className="btn btn-primary" onClick={()=>finish({"totalPrice":priceTotal(), "name":document.querySelector(`#1`).value, "mail":document.querySelector(`#2`).value, "tel":document.querySelector(`#3`).value})}>Terminar compra</button></th>
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