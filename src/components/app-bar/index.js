import React from 'react';
import './style.css';
import { Link, useLocation, useHistory } from 'react-router-dom';
import {
  FiGithub,
  FiFolder,
  FiUsers,
  FiStar,
  FiEye,
  FiLogOut,
} from 'react-icons/fi';

function AppBar() {
  const { pathname } = useLocation();
  const history = useHistory();

  function logout() {
    sessionStorage.clear();
    history.push('/');
  }

  return (
    <div className='app-bar bg-primary'>
      <img src='../assets/logo-common.png' alt='internal-logo' />
      <div className='menu-section'>
        <h6>main</h6>
        <ul>
          <Link to='/overview'>
            <li className={(pathname === '/overview') ? 'active' : ''}>
              <FiGithub />
              {' '}
              overview
            </li>
          </Link>
          <Link to='/repositories'>
            <li className={(pathname === '/repositories') ? 'active' : ''}>
              <FiFolder />
              {' '}
              repositories
            </li>
          </Link>
          <Link to='/stars'>
            <li className={(pathname === '/stars') ? 'active' : ''}>
              <FiStar />
              {' '}
              stars
            </li>
          </Link>
          <Link to='/followers'>
            <li className={(pathname === '/followers') ? 'active' : ''}>
              <FiUsers />
              {' '}
              followers
            </li>
          </Link>
          <Link to='/following'>
            <li className={(pathname === '/following') ? 'active' : ''}>
              <FiEye />
              {' '}
              following
            </li>
          </Link>
        </ul>
      </div>
      <div className='menu-section'>
        <h6>other</h6>
        <ul>
          <button type='button' onClick={logout}>
            <li>
              <FiLogOut />
              {' '}
              logout
            </li>
          </button>
        </ul>
      </div>
    </div>
  );
}

export default AppBar;
