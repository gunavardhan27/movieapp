import React from 'react'

const Button = ({children,className,toggle}) => {
  return (
    <button onClick={toggle} className={className}>{children}</button>
  )
}

export default Button