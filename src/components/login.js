import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import ShowIcon from '@material-ui/icons/Visibility'
import ShowOffIcon from '@material-ui/icons/VisibilityOff'
import Button from './Button';


const Login = () => {

  const [pwd, setPass] = useState('')
  const [isRevPass, setIsRevPass] = useState(false)

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
              <input type={isRevPass ? 'text' : 'password'} placeholder='********' onChange={e => setPass(e.target.value)} className='pwPH'/>
              <button className='btnPV' type='button' onClick={() => setIsRevPass(prevState => !prevState)}>
                {isRevPass ? <ShowIcon/> : <ShowOffIcon/>}
              </button>
             </div>
            <div className='login-info'>
              <div className='logged-in'>
                <input type='checkbox' className='' />
                <p>Keep me logged in</p>
              </div>
                <div className='btn-div'>
                  {/* <button type='button' className='btn solid'>
                    Sign In
                  </button> */}
                  <Button handleClick={() => alert('Signed In successfully')} type='submit' className='btn solid'>
                    Sign In
                  </Button>
                </div>
            </div>
            <div className=''>
              <h4></h4>
            </div>
            </div>
            <div className='account_'>
              <p>Don't have an account? <Link to='/signup' className='social-pw'>Sign up</Link></p>
            </div>
            </form>
            <div className='social-text'>
            <p className='social-signin'>or Sign in with</p>
            <div className='social-media'>
              <a href='#' className='social-icon'>
                <i className='fab fa-github'></i>
              </a>
              <a href='#' className='social-icon'>
                <i className='fab fa-google'></i>
              </a></div>
            </div>
        </div>
        </div>
    </div>
  )
};

export default Login