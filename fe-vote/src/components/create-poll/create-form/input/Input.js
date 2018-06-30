// Dependancies
import React from 'react';
import FontAwesome from 'react-fontawesome';

// CSS
import './Input.css';

const inputField = ({ label, input, type, placeholder, autoComplete, meta: { touched, error } }) => (
    <div className="Input-wrapper">
      <div className="label-wrapper">
        <label className="label">{label}</label>
      </div>
      <div>
        <input className={`text-input ${(touched && error) ? 'text-error' : ''}`} {...input} placeholder={placeholder} type={type} autoComplete={autoComplete} />
      </div>
      <div className="error-wrapper">
       {touched && error && <span className="error"><FontAwesome name="exclamation-circle" /> {error}</span>}
      </div>
    </div>
  )
  
  export default inputField