import Axios from 'axios'
import React, { useEffect, useState } from 'react'

const Age = () => {
    const [age,setAge]= useState("")
    const [name,setname]= useState("")

    const fetchage = () => {
        Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
            setAge(res.data.age)
        })
    }
    useEffect(()=>{
        fetchage()
    },[])

  return (
    <>
    <input type="text" onChange={(event) => {setname(event.target.value)}}/>
    <button onClick={fetchage}>
        Predict age
    </button>
    {age}
    </>
    
  )
}

export default Age