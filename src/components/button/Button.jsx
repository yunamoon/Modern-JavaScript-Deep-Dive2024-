import React from 'react'
import './Button.css';

const Button = ({id, text, onClick})=> {
  return (
    <button
    className={`btn btn_type_${id}`}
    onClick={onClick}
    >{text}</button>
  )
}

export default Button