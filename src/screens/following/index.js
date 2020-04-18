import React, { useState, useEffect } from 'react';
import './style.css';
import axios from 'axios';
import AppBar from '../../components/app-bar';
import SearchBar from '../../components/search-bar';
import BadgeTitle from '../../components/badge-title';
import FollowCard from '../../components/follow-card';

function Following() {
  const [followings, setFollowings] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://api.github.com/users/feMoraes0/following').then((response) => {
      setFollowings((oldState) => [...oldState, ...response.data]);
    });
  }, []);

  return (
    <div className='following-container'>
      <AppBar />
      <div className='following-body'>
        <SearchBar
          value={search}
          setValue={setSearch}
          placeholder='Search Following'
        />
        <BadgeTitle title='Following' counter={followings.length} />
        <div className='following'>
          {
            followings.map((following) => {
              if (search === '' || following.login.toLowerCase().search(search.toLowerCase()) !== -1) {
                return (
                  <FollowCard
                    userUrl={following.html_url}
                    avatarUrl={following.avatar_url}
                    login={following.login}
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

export default Following;
