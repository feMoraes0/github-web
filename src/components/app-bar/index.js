import React from 'react';
import './style.css';
import { Link, useLocation } from 'react-router-dom';
import {
  FiGithub,
  FiFolder,
  FiUsers,
  FiTag,
  FiStar,
  FiEye,
} from 'react-icons/fi';

function AppBar() {
  const { pathname } = useLocation();

  return (
    <div className='app-bar'>
      <img src='../assets/logo-common.png' alt='internal-logo' />
      <div className='menu-section'>
        <h6>main</h6>
        <ul>
          <Link to='/home'>
            <li className={(pathname === '/home') ? 'active' : ''}>
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
          <Link to='/'>
            <li>
              <FiTag />
              {' '}
              projects
            </li>
          </Link>
          <Link to='/'>
            <li>
              <FiStar />
              {' '}
              star
            </li>
          </Link>
          <Link to='/'>
            <li>
              <FiUsers />
              {' '}
              followers
            </li>
          </Link>
          <Link to='/'>
            <li>
              <FiEye />
              {' '}
              following
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default AppBar;
