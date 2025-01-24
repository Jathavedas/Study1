import React from 'react'
import { useState } from 'react'

const UseHookText = () => {
    const [text,settext]=useState('');
        
  return (
    <>
    <input type="text" onChange={(event)=>settext(event.target.value)} />
    <h1>{text}</h1>
    </>
  )
}

export default UseHookText