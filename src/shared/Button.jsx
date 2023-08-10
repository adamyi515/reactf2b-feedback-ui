import React from 'react'

const Button = ({ children, type = 'button', version = 'primary', isDisabled = false}) => {
  return (
    <button type={type} isDisabled className={`btn btn-${version}`}>
      { children }
    </button>
  )
}

export default Button
