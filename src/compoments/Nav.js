import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Nav.css";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";



 function Nav(){
      return (
  <nav className="navbar navbar-expand-lg navbar-dark" >
      <div className="container-fluid px-5 ">
        <a className="navbar-brand fs-3 " href="#">Quiz Tech</a>
        <ul   className="navbar-nav ms-auto" style={{display:"flex", flexDirection: "row"}}>
          <li  className="nav-item ps-5 "><Link to="/" className="nav-link active" >Home</Link></li>
          <li  className="nav-item ps-5"><Link to="/Rules" className="nav-link active" >Rules</Link></li>
          <li  className="nav-item ps-5"><Link to="/Quiz" className="nav-link active" >Quiz</Link></li>
        </ul>
    </div>
  </nav>  

  );
    }
    export default Nav;