import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Signup() {
  return (
    <div className='container'>
      <div className='cont'>
      <div className='formContainer'>
      <h2 className='title'>Bookworm</h2>
        <form className='signin-form'>
           <div className='form-items'>
            <h4 className='user-label'>Username</h4>             
            <div className='input-field'>
              <input type='Username' placeholder='Username' className='userPH'/>
              {/* <i className='fas fa-user'></i> */}
            </div>
            <h4 className='user-label'>Email</h4>             
            <div className='input-field'>
              <input type='email' placeholder='Email' className='userEM'/>
              {/* <i className='fas fa-user'></i> */}
            </div>
            <div className='pw-label'>
              <h4 className='pw-label-left'>Password</h4>
              {/* <a href='#' className='social-pw pw-label-right'>Forgot Password?</a> */}
            </div>
            <div className='input-field'>
              <input type='password' placeholder='******' className='pwPH'/>
              <i className='far fa-eye'></i>
            </div>
            <div className='signup-info'>
              <div className='signup-btn-div'><button type='button' className='btn solid'>Sign up</button></div>
            </div>
            
            </div>
            <div className='account_'>
              <p>Already have an account? <a to='/signin' className='social-pw'>Sign in</a></p>
            </div>
            </form>
            <div className='social-text'>
            <p className='social-signin'>or Sign up with</p>
            <div className='social-media'>
              <a href='#' className='social-icon'>
                <i class='fab fa-github'></i>
              </a>
              <a href='#' className='social-icon'>
                <i class='fab fa-google'></i>
              </a></div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Signup