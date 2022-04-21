import React from 'react'
import './button.css';

const Button = ({buttonName, type}) => {
  return (
    <button type={type}>
        {buttonName}
    </button>
  )
}

export default Button