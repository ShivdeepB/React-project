import { useState } from 'react'
import './App.css'

function Counter() {
    const [count, setCount] = useState(0)
    const up=()=>{
        setCount((prevcount)=>prevcount+1)
        setCount((prevcount)=>prevcount+1)
   
    }
    const down=()=>{
        setCount(count-1);
    }
  return (
    <>
      <h1>Counter</h1>
      <div className="card">
      count is {count}
       
      </div>
      <button onClick={up}>Up</button>{"    "}
      <button onClick={down}>Down</button>
    </>
  )
}

export default Counter
