import React from 'react';
import './style.css';
import {
  FiAtSign,
  FiLink,
  FiMapPin,
} from 'react-icons/fi';
import AppBar from '../../components/app-bar';

function Home() {
  return (
    <div className='home-container'>
      <AppBar />
      <div className='body'>
        <div className='dashboard'>
          <div className='user-card'>
            <div className='image'>
              <img src='https://avatars0.githubusercontent.com/u/23365401?v=4' alt='user' />

            </div>
            <div className='user-card-infos'>
              <h4 className='text-primary'>Fernando de Moraes</h4>
              <h6>feMoraes0</h6>
              <p className='bio'>PHP | Flutter | ReactJS | NodeJS developer.</p>
              <ul className='infos'>
                <li>
                  <FiMapPin />
                  {' '}
                  London, UK
                </li>
                <a href='/' className='text-primary'>
                  <li>
                    <FiAtSign />
                    {' '}
                    E-mail
                  </li>
                </a>
                <a href='/' className='text-primary'>
                  <li>
                    <FiLink />
                    {' '}
                    Blog
                  </li>
                </a>
              </ul>
              <button type='button' className='bg-secondary'>Full Profile</button>
            </div>
          </div>
          <div className='resume'>
            <div className='resume-box'>
              <h6>Commits</h6>
              <h3 className='text-primary'>100</h3>
            </div>
            <div className='resume-box'>
              <h6>Repositories</h6>
              <h3 className='text-primary'>100</h3>
            </div>
            <div className='resume-box'>
              <h6>Followers</h6>
              <h3 className='text-primary'>100</h3>
            </div>
            <div className='resume-box'>
              <h6>Following</h6>
              <h3 className='text-primary'>100</h3>
            </div>
          </div>
        </div>

        <div>
          <h6 className='title'>Repositories</h6>
        </div>
      </div>
    </div>
  );
}

export default Home;
