import React from 'react'
// import Link from '@material-ui/core/Link';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Login() {
  return (
    <div className='container'>
      <div className='cont'>
      <div className='formContainer'>
      <h2 className='title'>Bookworm</h2>
        <form className='signin-form'>
           <div className='form-items'><h4 className='user-label'>Username</h4>             
            <div className='input-field'>
              <input type='Username' placeholder='Username' className='userPH'/>
              {/* <i className='fas fa-user'></i> */}
            </div>
            <div className='pw-label'>
              <h4 className='pw-label-left'>Password</h4>
              <a href='#' className='social-pw pw-label-right'>Forgot Password?</a>
            </div>
            <div className='input-field'>
              <input type='password' placeholder='******' className='pwPH'/>
              <i className='far fa-eye'></i>
            </div>
            <div className='login-info'>
              <div className='logged-in'>
                <i className=''></i>
                <p>Keep me logged in</p>
              </div>
                <div className='btn-div'><button type='button' className='btn solid'>Sign In</button></div>
            </div>
            <div className=''>
              <h4></h4>
            </div>
            </div>
            <div className='account_'>
              <p>Don't have an account? <a href='/signup' className='social-pw'>Sign up</a></p>
            </div>
            </form>
            <div className='social-text'>
            <p className='social-signin'>or Sign in with</p>
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

export default Login