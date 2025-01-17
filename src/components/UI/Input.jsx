import React from 'react'

function Input({style,type,name, value,id, min,max ,step}) {
    // console.log(style);
    // console.log(type);
    // console.log(name);
    // console.log(name);
    // console.log(value);
    // console.log(id);
  return (
    <label className="radio-label">
    <input
      className="radio"
      type={type}
      name={name}
      value={value}
      id={id}
      min={min}
      max={max}
      step={step}
    />
    <span className="radio-title">{name}</span>
  </label>
  )
}

export default Input
