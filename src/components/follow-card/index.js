import React from 'react';
import './style.css';

function FollowCard({ userUrl, avatarUrl, login }) {
  return (
    <a rel='noopener noreferrer' target='_blank' href={userUrl}>
      <div className='followers-box'>
        <img src={avatarUrl} alt='follower' />
        <h5 className='title'>{login}</h5>
      </div>
    </a>
  );
}

export default FollowCard;
