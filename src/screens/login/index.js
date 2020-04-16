import React from 'react';
import './style.css';

import { useHistory } from 'react-router-dom';

function Login() {
  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    history.push('/home');
  }

  return (
    <div className='login-container'>
      <div className='login-box'>
        <img src='../assets/logo-security.png' alt='logo' />
        <div className='form'>
          <form onSubmit={handleSubmit}>
            <input type='text' placeholder='login' />
            <input type='text' placeholder='password' />
            <button type='submit'>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
