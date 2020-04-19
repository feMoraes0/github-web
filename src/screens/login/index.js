import React, { useState } from 'react';
import './style.css';

import { useHistory } from 'react-router-dom';

function Login() {
  const [user, setUser] = useState('');
  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    if (user.trim() !== '') {
      sessionStorage.setItem('user_github', user.trim());
      history.push('/overview');
    }
  }

  return (
    <div className='login-container bg-primary'>
      <div className='login-box'>
        <img src='../assets/logo-security.png' alt='logo' />
        <div className='form'>
          <form onSubmit={handleSubmit}>
            <input type='text' value={user} onChange={(event) => setUser(event.target.value)} placeholder='GitHub username' />
            <button type='submit' className='bg-secondary'>Enter</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
