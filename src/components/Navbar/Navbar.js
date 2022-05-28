import React, { useState } from 'react'
import './Navbar.css'  
import { Link } from 'react-router-dom';
import Button from '../Button';

const Navbar = () => {

  const [activeHam, setActiveHam] = useState(false)

  const menuItems = (
    <ul> 
      <li><Link to='#' className='Nav-link'>About</Link></li>
      <li><Link to='#' className='Nav-link'>Service</Link></li>
      <li><Link to='#' className='Nav-link'>Contact Us</Link></li>
      <li>
        <Link to='/signin'>
          <Button handleClick type='submit' className='btn solid'>
            Sign In
          </Button>
        </Link>
      </li>
    </ul>
  );

  return (
    <div className='Navbar-container'>  
      <nav className='Nav-bar'>
        <div className='Nav-logo'>
          <h2 className='logo'>Bookworm</h2>
        </div>
        <div className='Nav-bar-items Nav-menu'>
          {menuItems}
        </div>
        <button className={activeHam ? 'hamburger active-hamburger' : 'hamburger'} 
                onClick = {() => setActiveHam(!activeHam)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
      {activeHam && <div className='nav-dropdown'>{menuItems}</div>}
    </div>
  )
}

export default Navbar