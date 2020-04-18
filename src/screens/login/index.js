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
    <div className='login-container bg-primary'>
      <div className='login-box'>
        <img src='../assets/logo-security.png' alt='logo' />
        <div className='form'>
          <form onSubmit={handleSubmit}>
            <input type='text' placeholder='GitHub username' />
            <button type='submit' className='bg-secondary'>Enter</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
