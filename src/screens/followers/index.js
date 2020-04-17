import React, { useState, useEffect } from 'react';
import './style.css';
import { FiSearch } from 'react-icons/fi';
import axios from 'axios';
import AppBar from '../../components/app-bar';

function Followers() {
  const [followers, setFollowers] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://api.github.com/users/feMoraes0/followers').then((response) => {
      setFollowers((oldState) => [...oldState, ...response.data]);
    });
  }, []);

  return (
    <div className='followers-container'>
      <AppBar />
      <div className='followers-body'>
        <form>
          <FiSearch size={20} />
          <input
            type='text'
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder='Search follower'
          />
        </form>
        <h6 className='title'>
          Followers
          {' '}
          <span className='badge-count'>{followers.length}</span>
        </h6>
        <div className='repositories'>
          {
            followers.map((follower) => {
              if (search === '' || follower.login.toLowerCase().search(search.toLowerCase()) !== -1) {
                return (
                  <a rel='noopener noreferrer' target='_blank' href={follower.html_url}>
                    <div className='followers-box'>
                      <img src={follower.avatar_url} alt='follower' />
                      <h5 className='title'>{follower.login}</h5>
                    </div>
                  </a>
                );
              }
              return null;
            })
          }
        </div>
      </div>
    </div>
  );
}

export default Followers;
