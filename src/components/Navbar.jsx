import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../icons/iphone-logo-21.gif"
import { useSelector } from 'react-redux'
import "../App.css"


const Navbar = () => {
  const productData = useSelector(state => state.stateCount.count)

    const click = (e) => {
        location.reload(true)
    }


  return (
    <nav>
      <ul>
        <li>
            <NavLink to="/" className="navbar-link">Market</NavLink>
        </li>
        <li>
            <NavLink to="/basket" className="navbar-link">Basket</NavLink>
        </li>
      </ul>
      <div>&#128722; {productData}</div>
      <img onClick={click} src={logo} alt="mem veka)" className="logo" />
    </nav>
  )
}

export default Navbar