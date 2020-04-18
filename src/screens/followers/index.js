import React, { useState, useEffect } from 'react';
import './style.css';
import axios from 'axios';
import AppBar from '../../components/app-bar';
import SearchBar from '../../components/search-bar';
import BadgeTitle from '../../components/badge-title';

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
        <SearchBar
          value={search}
          setValue={setSearch}
          placeholder='Search Follower'
        />
        <BadgeTitle title='Followers' counter={followers.length} />
        <div className='followers'>
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
