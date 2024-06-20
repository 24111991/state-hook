import React, { useState } from 'react'

function HookCounterThree() {
const [name, setName] = useState({firstName:'', lastName:''})
  return (
    <div>
      <form>
        <br/>
        <label>First name: </label>
        <input type="text" value={name.firstName} 
        onChange={e => setName({...name, firstName: e.target.value})}/> -- {name.firstName}<br/><br/>
        <label>Last name: </label>
        <input type="text" value={name.lastName} 
        onChange={e => setName({...name, lastName: e.target.value})}/> --{name.lastName}
        <h2>{JSON.stringify(name)}</h2>
      </form>
    </div>
  )
}

export default HookCounterThree
