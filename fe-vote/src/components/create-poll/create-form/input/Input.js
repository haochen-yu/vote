// Dependancies
import React from 'react';

const inputField = ({ input, label, type, optional, placeholder, meta: { touched, error } }) => (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} placeholder={placeholder} type={type} />
        {optional && <span>Optional</span>}
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  )
  
  export default inputField