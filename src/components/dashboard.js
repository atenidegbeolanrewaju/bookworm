import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';


function Dashboard() {
  return (
    <div className='App'>
        <Link to='/signin' className='social-p'>Sign in</Link>
        <Link to='/signup' className='social-p'>Sign up</Link>
    </div>
  )
}

export default Dashboard