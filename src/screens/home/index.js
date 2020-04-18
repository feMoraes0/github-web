import React from 'react';
import './style.css';
import {
  FiAtSign,
  FiLink,
  FiMapPin,
} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import AppBar from '../../components/app-bar';

function Home() {
  return (
    <div className='home-container'>
      <AppBar />
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
      </div>
      <div className='body'>
        <div className='resume'>
          <div className='resume-box'>
            <h6>Commits</h6>
            <h3>100</h3>
          </div>
          <div className='resume-box'>
            <h6>Pull Requests</h6>
            <h3>100</h3>
          </div>
          <div className='resume-box'>
            <h6>Repositories</h6>
            <h3>100</h3>
          </div>
          <div className='resume-box'>
            <h6>Stars</h6>
            <h3>100</h3>
          </div>
          <div className='resume-box'>
            <h6>Followers</h6>
            <h3>100</h3>
          </div>
          <div className='resume-box'>
            <h6>Following</h6>
            <h3>100</h3>
          </div>
        </div>
        <h6 className='title'>Repositories</h6>
        <div className='repositories' />
      </div>
    </div>
  );
}

export default Home;
