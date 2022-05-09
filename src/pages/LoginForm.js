import '../css/loginForm.css';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import InputField from '../components/InputField/InputField';
import Button from '../components/Button/Button';

const LoginForm = () => {
  const {register, handleSubmit, resetField} = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);

    resetField("email")
    resetField("password")

    navigate('/student-list')
  }

  return (
    <div>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <InputField label="Email" type="text" inputName="email" register={register} required />
            <InputField label="Password" type="password" inputName="password" register={register} required /> 
        
            <button type="submit">Login</button>
            <p style={{color: 'grey', fontSize: '12px', textAlign: 'center', letterSpacing: '0.5px'}}>
              Do not have an account? 
              <Link to='/user-registration'>
                Register
              </Link>
            </p>
        </form>
    </div>
  )
}

export default LoginForm