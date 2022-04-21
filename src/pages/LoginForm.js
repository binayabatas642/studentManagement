import '../css/loginForm.css';
import React from 'react';
import { useForm } from 'react-hook-form';

import InputField from '../components/InputField/InputField';
import Button from '../components/Button/Button';

const LoginForm = () => {
  const {register, handleSubmit, resetField} = useForm();

  const onSubmit = (data) => {
    console.log(data);

    resetField("email")
    resetField("password")
  }

  return (
    <div>
        <form class="form" onSubmit={handleSubmit(onSubmit)}>
            <InputField label="Email" type="text" inputName="email" register={register} required />
            <InputField label="Password" type="password" inputName="password" register={register} required /> 
        
            <Button type="submit" buttonName="Submit" />
        </form>
    </div>
  )
}

export default LoginForm