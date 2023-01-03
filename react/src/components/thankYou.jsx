import React from "react";
import { useParams, Link } from "react-router-dom";

const ThankYou = () => {
    const {id} = useParams()
    return(
        <div>
            <h1>Gracias por tu compra</h1>
            <h3>Tu numero de orden es: {id}</h3>
            <Link to={'/'}>Volver</Link>
        </div>
    )
}

export default ThankYou;