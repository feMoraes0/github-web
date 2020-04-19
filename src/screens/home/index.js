import React, { useState, useEffect } from 'react';
import './style.css';
import {
  FiLink,
  FiMapPin,
  FiGitBranch,
  FiStar,
} from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import AppBar from '../../components/app-bar';
import BadgeTitle from '../../components/badge-title';

function Home() {
  const [events, setEvents] = useState([]);
  const [user, setUser] = useState({});
  const history = useHistory();

  useEffect(() => {
    const localUser = sessionStorage.getItem('user_github');
    if (localUser === null) {
      sessionStorage.clear();
      history.push('/');
    } else {
      axios.get(`https://api.github.com/users/${localUser}`).then((response) => {
        setUser(response.data);
      });
      axios.get(`https://api.github.com/users/${localUser}/received_events`).then((response) => {
        setEvents((oldState) => [...oldState, ...response.data]);
      });
    }
  }, []);


  return (
    <div className='home-container'>
      <AppBar />
      <div className='body'>
        <div className='dashboard'>
          <div className='user-card'>
            <div className='image'>
              <img src={user.avatar_url} alt='user' />

            </div>
            <div className='user-card-infos'>
              <h4 className='text-primary'>{user.name}</h4>
              <h6>{user.login}</h6>
              <p className='bio'>{user.bio}</p>
              <ul className='infos'>
                <li>
                  <FiMapPin />
                  {' '}
                  {user.location}
                </li>
                <a
                  rel='noopener noreferrer'
                  target='_blank'
                  href={user.blog}
                  className='text-primary'
                >
                  <li>
                    <FiLink />
                    {' '}
                    Blog
                  </li>
                </a>
              </ul>
              <a
                rel='noopener noreferrer'
                target='_blank'
                href={user.html_url}
              >
                <button type='button' className='bg-secondary'>Full Profile</button>
              </a>
            </div>
          </div>
          <div className='resume'>
            <div className='resume-box'>
              <h6>Repositories</h6>
              <h3 className='text-primary'>{user.public_repos}</h3>
            </div>
            <div className='resume-box'>
              <h6>Gists</h6>
              <h3 className='text-primary'>{user.public_gists}</h3>
            </div>
            <div className='resume-box'>
              <h6>Followers</h6>
              <h3 className='text-primary'>{user.followers}</h3>
            </div>
            <div className='resume-box'>
              <h6>Following</h6>
              <h3 className='text-primary'>{user.following}</h3>
            </div>
          </div>
        </div>

        <div className='events-section'>
          <BadgeTitle title='Last Received Events' />
          <div className='events'>
            {
              events.map((event) => {
                const date = new Date(event.created_at);
                const options = {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: 'numeric',
                  minute: 'numeric',
                  second: 'numeric',
                };
                if (event.type === 'ForkEvent') {
                  return (
                    <div className='event-card'>
                      <h6 className='event-card-title'>
                        <FiGitBranch />
                        <span>
                          <a
                            rel='noopener noreferrer'
                            target='_blank'
                            href={`https://github.com/${event.actor.display_login}`}
                          >
                            <b className='text-primary'>{event.actor.display_login}</b>
                          </a>
                          {' '}
                          forked
                          {' '}
                          <a
                            rel='noopener noreferrer'
                            target='_blank'
                            href={event.payload.forkee.html_url}
                            className='text-primary'
                          >
                            <b>{event.payload.forkee.full_name}</b>
                          </a>
                          {' '}
                          from
                          {' '}
                          <a
                            rel='noopener noreferrer'
                            target='_blank'
                            href={`https://github.com/${event.repo.name}`}
                            className='text-primary'
                          >
                            <b>{event.repo.name}</b>
                          </a>
                        </span>
                      </h6>
                      <h6 className='event-card-subtitle'>{date.toLocaleDateString(undefined, options)}</h6>
                    </div>
                  );
                } if (event.type === 'WatchEvent') {
                  return (
                    <div className='event-card'>
                      <h6 className='event-card-title'>
                        <FiStar />
                        <span>
                          <a
                            rel='noopener noreferrer'
                            target='_blank'
                            href={`https://github.com/${event.actor.display_login}`}
                          >
                            <b className='text-primary'>{event.actor.display_login}</b>
                          </a>
                          {' '}
                          starred
                          {' '}
                          <a
                            rel='noopener noreferrer'
                            target='_blank'
                            href={event.repo.name}
                            className='text-primary'
                          >
                            <b>{event.repo.name}</b>
                          </a>
                        </span>
                      </h6>
                      <h6 className='event-card-subtitle'>{date.toLocaleDateString(undefined, options)}</h6>
                    </div>
                  );
                }
                return null;
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
