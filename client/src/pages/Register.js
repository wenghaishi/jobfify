import React from 'react'
import { useState, useEffect } from 'react'
import Wrapper from '../assets/wrappers/Testing';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true
}

const Register = () => {

  const [values, setValues] = useState(initialState);
  return (
    <Wrapper className='full-page'>
      register
    </Wrapper>
  )
}

export default Register