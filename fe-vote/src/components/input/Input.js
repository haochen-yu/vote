// Dependancies
import React from 'react';
import FontAwesome from 'react-fontawesome';

// CSS
import './Input.css';

const inputField = ({ label, input, type, placeholder, autoComplete, inputRef, width, meta: { touched, error } }) => (
    <div className="Input-wrapper" style={{ width: `${width}px` }}>
      <div className="label-wrapper">
        <label className="input-label">{label}</label>
      </div>
      <div>
        <input className={`text-input ${(touched && error) ? 'text-error' : ''}`} {...input} placeholder={placeholder} type={type} autoComplete={autoComplete} style={{ width: `${width}px` }} ref={inputRef} />
      </div>
      <div className="error-wrapper">
       {touched && error && <span className="error"><FontAwesome name="exclamation-circle" /> {error}</span>}
      </div>
    </div>
  )
  
  export default inputField