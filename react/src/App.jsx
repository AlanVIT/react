import './App.css';
import React from 'react';
import Navbar from './components/navbar'
import ItemListContainer from './components/itemListContainer';

function App() {
  return(
    <div className="App"> 
      <h1>Free shop</h1>
      <Navbar/> 
      <ItemListContainer/>
    </div>
  );
//
}

export default App;
