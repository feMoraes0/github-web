import React, { useState, useEffect } from 'react';
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
  FiSearch,
  FiGitBranch,
} from 'react-icons/fi';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    axios.get('https://api.github.com/users/feMoraes0/repos?per_page=100').then((response) => {
      setRepositories([...repositories, ...response.data]);
    });
  }, []);

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
      <div className='body'>
        <form>
          <FiSearch size={20} />
          <input type='text' placeholder='Search repository' />
        </form>
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
        <div className='repositories'>
          {
            repositories.map((repository) => (
              <div className='repository-box'>
                <div>
                  <h5 className='title'>{repository.name}</h5>
                  <h6 className='description'>{repository.language}</h6>
                  <h6 className='description'>{repository.description}</h6>
                </div>
                <div className='repository-footer'>
                  <h6>
                    <FiStar />
                    {' '}
                    {`${repository.stargazers_count} stars`}
                  </h6>
                  <h6>
                    <FiGitBranch />
                    {' '}
                    {`${repository.forks_count} forks`}
                  </h6>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Home;
