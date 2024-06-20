import React, { useState } from 'react'

function HookCounterTwo() {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count=> count+1);
    }
    const reset = () => {
        setCount(count=> 0);
    }
    const decrement = () => {
        setCount(count=> count-1);
    }

    const increment5 = () => {
        for(let i=0; i<5; i++){
            setCount(prevCount=> prevCount+1);
        }
    }

  return (
    <div>
        <br></br>
       <h1> {count} </h1><br></br>
      <button onClick={increment}>Increment</button>&nbsp; &nbsp; &nbsp;
      <button onClick={reset}>Reset</button>&nbsp; &nbsp; &nbsp;
      <button onClick={decrement}>Decrement</button>&nbsp; &nbsp; &nbsp;
      <button onClick={increment5}>Increment-5</button>
    </div>
  )
}

export default HookCounterTwo
