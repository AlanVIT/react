import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from './components/navbar'
import ItemListContainer from './components/itemListContainer';
import Error404 from './components/error';
import Cart from './components/cart';
import ItemDetailContainer from './components/itemDetailContainer';
import CartContextProvider from './components/cartContext';
import ThankYou from './components/thankYou';
import CheckOut from './components/checkOut';
import Publish from "./components/publish"

function App() {
  return(
    <CartContextProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes> 
          <Route exact path={"/"} element={<ItemListContainer />}/>
          <Route exact path={"/productos"} element={<ItemListContainer />}/>
          <Route exact path={"/productos/:id"} element={<ItemDetailContainer/>}/> 
          <Route exact path={"*"} element={<Error404/>}/>
          <Route exact path={'/category/:id'} element={<ItemListContainer/>}></Route>
          <Route exact path={'/thank/:id'} element={<ThankYou/>}> </Route>
          <Route exact path={"/cart"} element={<Cart/> }/>
          <Route exact path={"/checkOut"} element={<CheckOut/> }/>
          <Route exact path={"/publish"} element={<Publish/> }/>
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
//
}

export default App;
