import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle.js';

import { NavLink } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
    return (
        
        <div className="container-fluid Navbackground">
           <div className="row">
               <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-dark  bg-transparent">
        <NavLink className="navbar-brand " to="/"><h1 className='Title'>CricPedia</h1></NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className=" navbar-toggler-icon btn-sty"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto ">
            <li className="nav-item active">
              <NavLink activeClassName="menu_active" className="nav-link nav-li-sty " exact to="/">Blogs<span className="sr-only">(current)</span></NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="menu_active" className="nav-link nav-li-sty" exact to="/Matches">Matches</NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="menu_active" className="nav-link nav-li-sty" exact to="/Stadiums">Stadiums</NavLink>
            </li>

          </ul>
        </div>
      </nav>
               </div>
           </div>
        </div>
    )
}

export default Navbar
