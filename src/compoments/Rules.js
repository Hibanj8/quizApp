import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "./Nav.css"
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import Nav from "./Nav";

 function Rules(){
      return (
   <>
      <Nav />
    <div>
        <div className="title" >THE RULES OF THE QUIZ</div>
        <div className="rules">
            1. Participants must choose the right answer from the options provided.<br/>
            2. No changes to the answer are allowed once it has been submitted.<br/>
            3. Participants have a 10-minute time limit for the quiz.<br/>
            4. You cannot move on to the next question unless you have answered the current question. <br/>
            5. The final score for the frontend quiz is separate from the backend quiz.
        </div>
            <div className="button" style={{marginLeft: "1200px"}}>
            <Link to="/Quiz" className="text-button" >Go to Quiz</Link>
            <AiOutlineArrowRight />
              </div>
    </div> 
    </> 
  );
    }
    export default Rules;