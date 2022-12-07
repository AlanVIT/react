import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from './components/navbar'
import ItemListContainer from './components/itemListContainer';
import Error404 from './components/error';
import Cart from './components/cart';
import ItemDetailContainer from './components/itemDetailContainer';

function App() {
  return(
    <BrowserRouter>
      <Navbar/>
      <Routes> 
        <Route exact path={"/"} element={<ItemListContainer />}/>
        <Route exact path={"/productos"} element={<ItemListContainer />}/>
        <Route exact path={"/productos/:id"} element={<ItemDetailContainer/>}/> 
        <Route exact path={"*"} element={<Error404/>}/>
        <Route exact path={'/category/:id'} element={<ItemListContainer/>}></Route>
        <Route exact path={"/cart"} element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
  );
//
}

export default App;
