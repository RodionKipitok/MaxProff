import React from 'react';
import s from '../UI/Input.module.css';
function Input({
  className,
  type,
  name,
  value,
  id,
  checked,
  min,
  max,
  step,
  onChange,
}) {
  return (
    <label className="radio-label">
      <input
        className={s.real_radio}
        type={type}
        name={name}
        value={value}
        id={id}
        checked={checked}
        min={min}
        max={max}
        step={step}
        onChange={onChange}
      />
      <span className={s.custom_radio}></span>
      {type === 'radio' && <span>{value}</span>}
    </label>
  );
}

export default Input;
