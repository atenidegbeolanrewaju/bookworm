import React from 'react'
import '../../App.css';
import Navbar from '../Navbar/Navbar';
import Home from './Home';


function Dashboard() {
  return (
    <div className='dashboard'>
        <Navbar />
        <Home />
    </div>
  )
}

export default Dashboard