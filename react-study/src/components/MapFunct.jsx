import React from 'react'
import MapValues from './MapValues';

const MapFunct = () => {
    const users = [
        {name:"jathu",age:21},
        {name:"meenu",age:22},
        {name:"jk",age:26},
    ];

  return (
    <>
    {users.map((user, index) => (
        <MapValues key={index} name={user.name} age={user.age} />
    ))}
    </>
  )
}

export default MapFunct
