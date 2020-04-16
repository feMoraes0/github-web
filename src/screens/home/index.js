import React from 'react';
import './style.css';
import {
  FiGithub,
  FiFolder,
  FiUsers,
  FiTag,
  FiStar,
  FiEye,
  FiAtSign,
  FiLink,
  FiMapPin,
  FiLayers,
  FiSettings,
  FiLogOut,
} from 'react-icons/fi';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='home-container'>
      <div className='app-menu'>
        <img src='../assets/logo-common.png' alt='internal-logo' />
        <div className='menu-section'>
          <h6>main</h6>
          <ul>
            <Link to='/home'>
              <li>
                <FiGithub />
                {' '}
                overview
              </li>
            </Link>
            <Link to='/'>
              <li>
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
      <div className='local-menu'>
        <img src='https://avatars0.githubusercontent.com/u/23365401?v=4' alt='user' />
        <h4>Fernando de Moraes</h4>
        <h6>feMoraes0</h6>
        <p className='bio'>PHP | Flutter | ReactJS | NodeJS developer.</p>
        <ul className='infos'>
          <li>
            <FiMapPin />
            {' '}
            London, UK
          </li>
          <Link to='/'>
            <li>
              <FiAtSign />
              {' '}
              E-mail
            </li>
          </Link>
          <Link to='/'>
            <li>
              <FiLink />
              {' '}
              Blog
            </li>
          </Link>
        </ul>
        <button type='button'>Full Profile</button>
        <ul>
          <Link to='/'>
            <li>
              <FiLayers />
              {' '}
              Groups
            </li>
          </Link>
          <Link to='/'>
            <li>
              <FiSettings />
              {' '}
              Settings
            </li>
          </Link>
          <Link to='/'>
            <li className='logout'>
              <FiLogOut />
              {' '}
              Logout
            </li>
          </Link>
        </ul>
      </div>
      <div className='body' />
    </div>
  );
}

export default Home;
