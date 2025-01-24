import React from 'react'

const planets =[ 
    {name:"Mars",isgasplanet:false},
    {name:"Earth",isgasplanet:false},
    {name:"Jupiter",isgasplanet:true},
    {name:"Venus",isgasplanet:false},
    {name:"Neptune",isgasplanet:true},
    {name:"Uranus",isgasplanet:true},
    
]

const Planets = () => {
   
  return (
    <>
    {planets.map((planet,key)=>{
        if(planet.isgasplanet) 
            return <h1> {planet.name} </h1>
    })}
    </>
  )
}

export default Planets