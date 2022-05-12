import React, { useState } from 'react'
import ShowIcon from '@material-ui/icons/Visibility'
import ShowOffIcon from '@material-ui/icons/VisibilityOff'
import Button from './Button'

const Input = ({ label, type, placeholder, onChange, showForgetPassword, showVisibilityButton }) => {

    const [isRevPass, setIsRevPass] = useState(false)
  
  return (
    <div>
        <div className='pw-label'>
            <h4 className='pw-label-left'>{label}</h4>
            {showForgetPassword && (<a href='#' className='social-pw pw-label-right'>Forgot Password?</a>)}            
        </div>
        <div className='input-field'>
            <input type={type} placeholder={placeholder} label={label} onChange={onChange} className= 'userPH'/>
            {showVisibilityButton && (<Button className='btnPV' handleClick={() => setIsRevPass(!isRevPass)}>
                                        {isRevPass ? <ShowIcon/> : <ShowOffIcon/>}
                                      </Button>)}
        </div>
    </div>
  )
}

export default Input



