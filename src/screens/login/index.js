import React from 'react';
import './style.css';

function Login() {
  return (
    <div className='login-container'>
      <div className='login-box'>
        <img src='../assets/logo-security.png' alt='logo' />
        <div className='form'>
          <form action='/'>
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
