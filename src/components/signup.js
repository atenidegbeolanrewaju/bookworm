import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ShowIcon from '@material-ui/icons/Visibility'
import ShowOffIcon from '@material-ui/icons/VisibilityOff'
import Button from './Button';
import Input from './Input';

const Signup = () => {

  const [pwd, setPass] = useState('')
  const [isRevPass, setIsRevPass] = useState(false)

  return (
    <div className='container'>
      <div className='cont'>
        <div className='formContainer'>
          <h2 className='title'>Bookworm</h2>
          <form className='signin-form'>
            <div className='form-items'>
              <Input label='Username' type='text' placeholder='Username' />
              <Input label='Email' type='email' placeholder='Email' />
              <Input label='Password' type={isRevPass ? 'text' : 'password'} placeholder='********' onChange={e => setPass(e.target.value)} showVisibilityButton />
              <div className='signup-info'>
                <div className='signup-btn-div'>
                  <Button handleClick={() => alert('Signed Up successfully')} type='submit' className='btn solid'>
                    Sign Up
                  </Button>
                </div>
              </div>
              <div className='account_'>
                <p>Already have an account? <Link to='/signin' className='social-pw'>Sign in</Link></p>
              </div>
            </div>
          </form>
          <div className='social-text'>
            <p className='social-signin'>or Sign up with</p>
            <div className='social-media'>
              <a href='#' className='social-icon'>
                <i className='fab fa-github'></i>
              </a>
              <a href='#' className='social-icon'>
                <i className='fab fa-google'></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup