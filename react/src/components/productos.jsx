import React from 'react'

const Prods = ({array}) => {
//Definiendo variables
const productosHTML = (array) =>{
    let tabla
    let fila = ``
    array.forEach(producto =>{
        let { title, price} = producto
            fila = 
                    <div>
                      {/* <img src="${img}"> */}
                      <div>
                          <h5>{title}</h5>
                          <p>Valor: {price}$</p>
                          <input type="button" id="btn" value="Agregar al carrito"></input>
                          </div>
                      </div>
            
            tabla += fila
    })
    return tabla
}
//
    // console.log(array)


  

  return (
    <div>
        {productosHTML(array)}
    </div>
  )
}
export default Prods