import React from 'react'
import './Navbar.css'
import {FaCoins} from 'react-icons/fa'
import {SiHappycow} from 'react-icons/si'

const Navbar = () => {
  return (
    <div className="navbar">
        <SiHappycow className="icon"/>
        <h1>Cash<span className="Blue">Cow</span></h1>
    </div>
  )
}


export default Navbar