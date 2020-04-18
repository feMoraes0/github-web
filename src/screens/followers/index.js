import React, { useState, useEffect } from 'react';
import './style.css';
import axios from 'axios';
import AppBar from '../../components/app-bar';
import SearchBar from '../../components/search-bar';
import BadgeTitle from '../../components/badge-title';
import FollowCard from '../../components/follow-card';

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
                  <FollowCard
                    userUrl={follower.html_url}
                    avatarUrl={follower.avatar_url}
                    login={follower.login}
                  />
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
