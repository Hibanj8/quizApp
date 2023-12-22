import React, { useRef, useState , useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Quiz.css";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import Nav from "./Nav";
import { data } from "./data";

const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(data[index]);
  const [lock, setLock] = useState(false);
  const [scorefront, setScorefront] = useState(0);
  const [scoreback, setScoreback] = useState(0);
  const [result, setResult] = useState(false);


  const option1 = useRef(null);
  const option2 = useRef(null);
  const option3 = useRef(null);

  const optionArray = [option1, option2, option3];

  // time
  const[time , setTime] = useState(600);
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

useEffect(() => {
  let timer ;
  if (time > 0 && !result) {
    timer = setInterval(() => {
      setTime (prevTime => prevTime -1) 
    }, 1000);
    
  }
  return () => {
    clearInterval(timer)
  }
},[time])

  const checkAns = (e, ans) => {
    if (lock==false) {
      if (question.ans === ans && question.category==="Frontend") {
        e.target.classList.add("correct");
        setLock(true);
        setScorefront((prev) => prev + 1);
      }else if (question.ans === ans && question.category==="backend"){
        e.target.classList.add("correct");
        setLock(true);
        setScoreback((prev) => prev + 1);
      }else{
        e.target.classList.add("wrong");
        setLock(true);
        optionArray[question.ans - 1].current.classList.add("correct");
      }
    }
  };

  const next = () => {
    if (lock) {
      if (index === data.length - 1) {
        setResult(true);
        return;
      }

      setIndex((prevIndex) => prevIndex + 1);
      setQuestion(data[index + 1]);
      setLock(false);

      // Remove the 'wrong' and 'correct' classes when moving to the next question
      optionArray.forEach((option) => {
        option.current.classList.remove("wrong");
        option.current.classList.remove("correct");
      });
    }
  };

  return (
    <>
      <Nav />
      <div className="container" style={{ justifyContent: 'flex-start'}}>
        <hr />
        {result || time === 0 ? (
          <>
            <div className="text">Quiz : Fullstack</div>
          <h1 style={{ marginBottom:"40px"}} >
              { scorefront >= 3 && scoreback >= 3
                ? 'Frontend and Backend conquered! 🚀💻'
                : scorefront >= 3 && scoreback < 3
                ? 'Frontend mastered! 🚀 Backend, a little setback. Keep coding, you\'re on track! 💻🌟'
                : scorefront < 3 && scoreback < 3
                ? 'Try next time! Frontend and Backend need a bit more love. 💻❌'
                : 'Backend mastered! 🚀 Frontend, a little setback. Keep coding, you\'re on track! 💻🌟'
                }
          </h1>

            <h2>
              Your score frontend <span style={{ color: scorefront >= 3 ? "#00D26A" : "red" , fontSize:"50px", marginTop: "10px"}}>{scorefront}</span> out of 6
            </h2>
            <h2>
              Your score backend <span style={{ color: scoreback >= 3 ? "#00D26A" : "red" , fontSize:"50px", marginTop: "10px"}}>{scoreback}</span> out of 6
            </h2>
            <div className="button" style={{ width:"115px"}} >
                <Link to="/" className="text-button" >Home</Link>
              <AiOutlineArrowRight />
            </div>
          </>
        ) : (
          <>
             <div className="index" style={{marginLeft:"960px"}}>
               Time:    {minutes}:{seconds < 10 ? '0' : ''}{seconds}
            </div>
            <div className="title"  style={{ marginTop:"20px", fontSize:"55px" }}>{index + 1}. {question.question}</div>
            <div className="answers">
              <ol type="a">
                <li className="Choice" style={{width: "fit-content", cursor: "pointer" }} ref={option1} onClick={(e) => checkAns(e, 1)}>
                  {question.option1}
                </li>
                <li className="Choice" style={{width: "fit-content", cursor: "pointer" }} ref={option2} onClick={(e) => checkAns(e, 2)}>
                  {question.option2}
                </li>
                <li className="Choice" style={{width: "fit-content", cursor: "pointer" }} ref={option3} onClick={(e) => checkAns(e, 3)}>
                  {question.option3}
                </li>
              </ol>
            </div>

            <div onClick={next} className="button" style={{margin:"20px 1000px 10px 0px" , cursor: "pointer", width: "88px" }}>
              <div className="text-button">
                Next<AiOutlineArrowRight />
              </div>
            </div>
            <div className="index">
            {index+1} of {data.length} questions
            </div>

          </>
        )}
      </div>
    </>
  );
};

export default Quiz;
