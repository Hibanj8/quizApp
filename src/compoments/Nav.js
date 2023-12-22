import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Nav.css";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";



 function Nav(){
      return (
  <nav className="navbar navbar-expand-lg navbar-dark" >
      <div className="container-fluid px-5 ">
        <a className="navbar-brand fs-3 " href="#">Dev Recruit</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul   className="navbar-nav ms-auto">
            <li  className="nav-item ps-5 "><Link to="/" className="nav-link active" >Home</Link></li>
            <li  className="nav-item ps-5"><Link to="/Rules" className="nav-link active" >Rules</Link></li>
            <li  className="nav-item ps-5"><Link to="/Quiz" className="nav-link active" >Quiz</Link></li>
          </ul>
      </div>
    </div>
  </nav>  

  );
    }
    export default Nav;
