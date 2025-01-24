import React from 'react'
import { useState } from 'react'
import '../style.css'



const UseHooks = () => {
    const [age,setAge] = useState(0)
  return (
    <>
    <div id='age' >Age:{age}</div>
    <div class='buttons'>
    <button onClick={()=>setAge(age+1)}>Increase</button>
    <button onClick={()=>setAge(age-1)}>Decrease</button>
    <button onClick={()=>setAge(0)}>Set To Zero</button>
    </div>
    </>
    
  )
}

export default UseHooks