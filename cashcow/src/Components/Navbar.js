import React from 'react'
import './Navbar.css'
import {SiHappycow} from 'react-icons/si'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <Link to="/">
    <div className="navbar">
        <SiHappycow className="icon"/>
        <h1>Cash<span className="Blue">Cow</span></h1>
    </div>
    </Link>
  )
}


export default Navbar