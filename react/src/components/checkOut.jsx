import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "./cartContext";
import {addDoc, getFirestore, collection} from "firebase/firestore"


const CheckOut = () => {
    const {cart, priceTotal} = useContext(CartContext)
    const [nombre, setNombre] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [orderId, setOrderId] = useState("")

    const generarOrden = () => {
        const fecha = new Date()
        const orden = {
            buyer:  {name:nombre, phone:telefono, email:email},
            items:  cart.map(item => ({id:item.id, title:item.title, price:item.price, quantity:item.quantity})),
            total:  priceTotal(), 
            date:   `${fecha.getFullYear()}-${fecha.getMonth()}-${fecha.getDay()}`,
            orderId:orderId
        }
        const db = getFirestore()
        const orderCollection = collection(db, "orders")
        addDoc(orderCollection, orden).then((snapshot)=>{
            setOrderId(snapshot.id)
        })
    console.log(orden)

    }
    return(
        <form>
                <input className="mb-3" onInput={(e)=>setNombre(e.target.value)} type="text" id="1" required placeholder={"Nombre y apellido"}/>
                <input className="mb-3" onInput={(e)=>setEmail(e.target.value)} type="mail" id="2" required placeholder={"Mail"}/>
                <input className="mb-3" onInput={(e)=>setTelefono(e.target.value)} type="number" id="3" required placeholder={"Telefono"}/>
                <button type="button" onClick={generarOrden}>generar orden</button>
        </form>
    )

}   

export default CheckOut