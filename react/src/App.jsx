import './App.css';
import React from 'react';
import Navbar from './components/navbar'
import ItemListContainer from './components/itemListContainer';

// import Prods from './components/productos'
// import productos from './productos.json'
function App() {
  return(
    <div className="App"> 
      <h1>Free shop</h1>
      <Navbar/> 
      <ItemListContainer greeting={"Hola, bienvenido al e-comerce"}/>
    </div>
  );
//
}

export default App;
