import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <Link to ="/" > Home</Link>
    <Link to = "/profile" > Profile</Link>
    </>
  )
}

export default Navbar