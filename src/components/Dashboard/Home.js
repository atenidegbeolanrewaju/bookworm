import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Dashboard.css'
import Input from '../Input'

const Home = () => {
  return (
    <div className='Dashboard'>
        <div className='main-body'>
            <div className='Home-container'>
                <div className='main-container'>
                    <div className='header'>
                        <h2>Account Details</h2>
                        <div className='header-p'>
                                <Link to='/'><p>Portal Home</p></Link>
                                <Link to='/' className='header-p2'><p>Client Area</p></Link>
                                <Link to='/' className='header-p2'><p>Account Details</p></Link>
                        </div>
                    </div>
                    <div className="wrap">
                        <div className="block">
                            <h3>Account</h3>
                            <nav className='side-Navbar'>
                                <NavLink to='/' className='side-nav'>
                                    <i className="fa-solid fa-user"></i>
                                    <p>Account Details</p>
                                </NavLink>
                                <NavLink to='/' className='side-nav'>
                                    <i className="fa-solid fa-list-check"></i>
                                    <p>User Management</p>
                                </NavLink>
                                <NavLink to='/' className='side-nav'>
                                    <i className="fa-solid fa-credit-card"></i>
                                    <p>Payment Methods</p>
                                </NavLink>
                                <NavLink to='/' className='side-nav'>
                                    <i className="fa-solid fa-user"></i>
                                    <p>Contacts</p>
                                </NavLink>
                                <NavLink to='/' className='side-nav'>
                                    <i className="fa-solid fa-shield"></i>
                                    <p>Account Security</p>
                                </NavLink>
                                <NavLink to='/' className='side-nav'>
                                    <i className="fa-solid fa-envelope"></i>
                                    <p>Email History</p>
                                </NavLink>
                            </nav>
                        </div>
                        <div className="Home-form">
                            <div className='Home-form-container'>
                                    <h3>Personal Information</h3>
                                    <div className='form-input'>
                                        <div className='input-div'>
                                            <Input label='First Name' type='text' placeholder='First Name' />  
                                            <Input label='Last Name' type='text' placeholder='Last Name' /> 
                                        </div>
                                        <div className='input-div'>
                                            <Input label='Email Address' type='text' placeholder='Email Address' />  
                                            <Input label='Phone Number' type='text' placeholder='Phone Number' /> 
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home