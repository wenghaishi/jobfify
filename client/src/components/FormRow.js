import React from 'react'

const FormRow = ({type, name, value, handleChange, labelText}) => {
  return (
    <div>
    <label htmlFor={name} className='form-label'>
      { labelText || name }
    </label>
    <input type={type} value={value} name={name} onChange={handleChange} className='form-input'></input>
  </div>
  )
}

export default FormRow