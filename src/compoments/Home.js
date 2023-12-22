import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./Home.css ";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import Nav from "./Nav";

 function Home(){
      return (  
<>
        <Nav />
<div className="container">
      <div className="text">Quiz Tech</div>  
      <div className="sousTitre">Test your knowledge in both front-end and back-end.</div>  

     <div className="button" >
     <Link to="/Rules" className="text-button" >Go to Rules</Link>
          <AiOutlineArrowRight />
      </div>  
     <div className="button" >
          <Link to="/Quiz" className="text-button" >Go to Quiz</Link>
         <AiOutlineArrowRight />
     </div>
  </div>
  </>
  );
    }
    export default Home;