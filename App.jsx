import React,{useState} from "react";
import './App.css'

function App(){
const[count,setCount]= useState(0)

function handleClick(){
const increase = count+1;
setCount(increase)
}
function handleClick2(){
  const dicrease = count-1;
  setCount(dicrease)
}
function handleClick3(){
  setCount(0)
}

  return(
    <>
    <div className="container" >
      <h1>React Counter App</h1>
      <h1>{count}</h1>
      <button onClick={handleClick} >increase</button>
      <button onClick={handleClick2}>dicrease</button>
      <button onClick={handleClick3}>Reset</button>
    </div>
    </>
  )
}

export default App;