import React from 'react';
import './inputField.css'

const InputField = ({label, inputName, type, placeholder, register, required, min}) => {
  return (
    <>
        <label>{label}</label> <br />
        <input className="input" type={type} placeholder={placeholder} {...register(inputName, { required, min:min })} />
    </>
  )
}

export default InputField