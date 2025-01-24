import React, { useState } from 'react'

const ShowHide = () => {
    const [show,setshow]=useState(true);
    
 
  return (
    <>
    <button onClick={()=> setshow(!show)}>Show/hide</button>
    {show ? <h1 style={{ color: 'green'}}>Hello there</h1>:<h1>Hello there </h1>} 
    </>
  )
}

export default ShowHide