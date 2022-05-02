import React from 'react'

const Button = ({ type='button', handleClick, children, className}) => {

    return (
        <button type={type} onClick={handleClick} className={className}>
            {children}
        </button>
        )
    }

export default Button