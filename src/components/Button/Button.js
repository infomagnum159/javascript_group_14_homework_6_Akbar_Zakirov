import React from "react";
import './Button.css';

const Button = props => {

  let changeClass = ['Button'];
  if (props.value === '<') {
    changeClass.push('delete');
  }

  return (
    <input value={props.value} className={changeClass.join(' ')} type='button' onClick={props.click}></input>
  );
};

export default Button;