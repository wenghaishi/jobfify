import React from 'react';
import { useState, useEffect } from 'react'
import { Logo, FormRow, Alert } from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
  showAlert: true
}

const Register = () => {

  const [values, setValues] = useState(initialState);

  const toggleMember = () => {
    setValues({...values, isMember: !values.isMember})
  }

  const handleChange = (e) => {
    console.log(e.target)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  }

  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={handleSubmit}>
        <Logo/>
        <h3>Login</h3>

        {values.showAlert && <Alert />}

        {/* name input */}
        <FormRow 
          type='text'
          name='name'
          value={values.name}
          handleChange={handleChange}
        />

        {/* email input */}
        <FormRow 
          type='text'
          name='email'
          value={values.email}
          handleChange={handleChange}
        />

        {/* password input */}
        <FormRow 
            type='text'
            name='password'
            value={values.password}
            handleChange={handleChange}
          />
        <button type='submit' className='btn btn-block'>
          Submit
        </button>
      <p>
        <button type='button' className='member-btn' onClick={toggleMember}>
          Register
        </button>
      </p>
      </form>
    </Wrapper>
  )
}

export default Register