import React from 'react'
import Wrapper from '../assets/wrappers/Testing'
import img from '../assets/images/not-found.svg'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <Wrapper className='full-page'>
      <div>
        <img src={img} alt='not found'/>
        <h3>Oops, something went wrong</h3>
        <p>The page you are looking for cannot be found.</p>
        <Link to='/'>Back home</Link>
      </div>
    </Wrapper>

  )
}

export default Error