import React, { useState, useEffect } from 'react'

function HookCounterOne() {
    const[count, setCount] = useState(0);
    useEffect(()=>{
        document.title = `You Clicked ${count} times`
    })
  return (
    <div>
        <br/>
      <button onClick={()=> setCount(count+1)}>Hook Clicked {count} times</button>
    </div>
  )
}

export default HookCounterOne
