import React, { useState } from 'react'
import "./calc.css"
const Calc = () => {
  const [current, setCurrent] = useState("");
  const [dark,setdark]=useState(false);
  const [prevoius, setPrevoius] = useState("");
  const [operations, setOperations] = useState("");
  const appendValueHandler = (el) => {
    const value = el.target.getAttribute("data");

    if (value === "." && current.includes(".")) return;
    setCurrent(current + value);
  };
  const deleteHandler = () => {
    setCurrent(String(current).slice(0, -1));
  };
  const allclearHandler = () => {
    setCurrent("");
    setOperations("");
    setPrevoius("");
  };
  const chooseOperationHandler = (el) => {
    if (current === "") return;
    if (prevoius !== "") {
      const value=0;  
       value= compute();
      setPrevoius(value);
    } else {
      setPrevoius(current);
    }
    setCurrent("");
    setOperations(el.target.getAttribute("data"));
  };
  const equalHandler = () => {
    let value = compute();
    if (value === undefined || value == null) return;
    setCurrent(value);
    setPrevoius("");
    setOperations("");
  };
  const handleperc=()=>{
    setCurrent(current/100);
    setPrevoius("")
    setOperations("");
  }
  const compute = () => {
    let result;
    let previousNumber = parseFloat(prevoius);
    let currentNumber = parseFloat(current);
    if (isNaN(previousNumber) || isNaN(currentNumber)) return;
    switch (operations) {
      case "÷":
        result = previousNumber / currentNumber;
        break;
      case "x":
        result = previousNumber * currentNumber;
        break;
      case "+":
        result = previousNumber + currentNumber;
        break;
      case "-":
        result = previousNumber - currentNumber;
        break;
      default:
        return;
    }
    return result;
  };
  const handledark=()=>{
    if(dark==true){
        setdark(false);
    }
    else{
        setdark(true);
    }
  }
  return (
      <div className='container'>
        <div className={dark?"screen":"screen1"}>
            {
                dark?<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" onClick={handledark} class="bi bi-moon-fill" viewBox="0 0 16 16">
                <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/>
              </svg>:<svg xmlns="http://www.w3.org/2000/svg" onClick={handledark} width="16" height="16" fill="currentColor" class="bi bi-moon" viewBox="0 0 16 16">
  <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286"/>
</svg>
            }
        
          <div className={dark?"previous":"previous1"}>
            {prevoius} {operations}
          </div>
          <div className={dark?"current":"current1"}>{current}</div>
        </div>
        <button className={dark?"high":"low"} gridSpan={2} control onClick={allclearHandler}>
          AC
        </button>
        <button className={dark?"high":"low"} onClick={deleteHandler}><svg xmlns="http://www.w3.org/2000/svg" width="36" height="34" fill="currentColor" class="bi bi-arrow-left-square" viewBox="0 0 16 16">
  <path d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
</svg></button>
        <button className={dark?"high":"low"} data={"%"} operation onClick={handleperc}>%</button>
        <button className={dark?"high":"low"} data={"÷"} onClick={chooseOperationHandler} operation>÷</button>
        <button className='low' data={7} onClick={appendValueHandler}>
          7
        </button>
        <button className='low' data={8} onClick={appendValueHandler}>
          8
        </button>
        <button className='low' data={9} onClick={appendValueHandler}>9</button>
        <button className={dark?"high":"low"} data={"x"} operation onClick={chooseOperationHandler}>x</button>
        <button className='low'data={4} onClick={appendValueHandler}>
          4
        </button>
        <button className='low' data={5} onClick={appendValueHandler}>
          5
        </button>
        <button className='low' data={6} onClick={appendValueHandler}>
          6
        </button>
        <button className={dark?"high":"low"} data={"+"} operation onClick={chooseOperationHandler}>
          +
        </button>
        <button className='low'data={1} onClick={appendValueHandler}>
          1
        </button>
        <button className='low' data={2} onClick={appendValueHandler}>
          2
        </button>
        <button className='low' data={3} onClick={appendValueHandler}>
          3
        </button>
        <button className={dark?"high":"low"} data={"-"} operation onClick={chooseOperationHandler}>
          -
        </button>
        
        <button className='low' data={"00"} onClick={appendValueHandler}>
          00
        </button>
        <button  className='low' data={0} onClick={appendValueHandler}>
          0
        </button>
        <button className='low'  data={"."} onClick={appendValueHandler} decimal>
          .
        </button>
        <button className={dark?"high":"low"} gridSpan={2} equals onClick={equalHandler}>
          =
        </button>
      </div>
    
  );
}

export default Calc;
