import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <nav className='navBar'>
        <h2><Link className='logo' to='/'>Logo</Link></h2>
        
        <ul className="menu">
            <li className='link_menu'><Link to='/'>Incio</Link></li>
            <li className='link_menu'><Link to='/juegos'>Juegos</Link></li>
            <li className='link_menu'><Link to='/nosotros'>Nosotros</Link></li>
            <li><CartWidget/></li>
        </ul>
    </nav>
  )
}

export default NavBar