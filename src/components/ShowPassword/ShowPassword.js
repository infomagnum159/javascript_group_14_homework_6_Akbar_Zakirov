import React from "react";
import './ShowPassword.css';

const ShowPassword = ({value}) => {
  

  let changeClass = ['ShowPassword'];
  if (value === 'Access Granted') {
    changeClass.push('blue');
  } else if(value === 'Access Denied') {
    changeClass.push('red');
  } else {
    let password = ''; 
    while (password.length < value.length) password += '*';
    value = password;
  }

  return (
    <input className={changeClass.join(' ')} value={value} readOnly="readonly"></input>
  );
};

export default ShowPassword;