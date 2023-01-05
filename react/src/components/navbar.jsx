import React from "react";
import Cart from "./cartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
  // const search = () =>{
  // let result = []
  // let searched = document.querySelector(`#searcher`).value
  // console.log(searched)
  // result = data.filter((el) => el.title(searched))
  // console.table(result)
  // }
  
    return (
    <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to={"/"} className="nav-link active" aria-current="page">Home</Link>
          </li>
          <li className="nav-item">
            <Link id="publicar" to={"/publish"} className="nav-link">publicar</Link>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </Link>
            <ul className="dropdown-menu">
              <li><Link to={"category/procesadores"} className="dropdown-item" >Procesadores</Link></li>
              <li><Link to={"category/graficas"} className="dropdown-item" >Tarjetas Graficas</Link></li>
              <li><hr className="dropdown-divider"/></li>
              <li><Link to={"category/ram"} className="dropdown-item" >Ram</Link></li>
            </ul>
          </li>
          <li className="nav-item">
            <Link className="nav-link disabled">Disabled</Link>
          </li>
          <li>
            <Cart/>
          </li>
        </ul>
        <div className="d-flex" role="search">
          <input id="searched" className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success">Search</button>
        </div>
      </div>
    </div>
  </nav>
    )

}


  
export default Navbar;
