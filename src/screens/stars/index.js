import React, { useState, useEffect } from 'react';
import './style.css';
import {
  FiSearch,
  FiGitBranch,
  FiStar,
  FiAlertOctagon,
  FiPaperclip,
} from 'react-icons/fi';
import axios from 'axios';
import AppBar from '../../components/app-bar';

function Stars() {
  const [starRepositories, setStarRepositories] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://api.github.com/users/feMoraes0/starred').then((response) => {
      setStarRepositories((oldState) => [...oldState, ...response.data]);
      return null;
    });
  }, []);

  return (
    <div className='repository-container'>
      <AppBar />
      <div className='repository-body'>
        <form>
          <FiSearch size={20} />
          <input
            type='text'
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder='Search repository'
          />
        </form>
        <h6 className='title'>
          Stars
          {' '}
          <span className='badge-count'>{starRepositories.length}</span>
        </h6>
        <div className='repositories'>
          {
            starRepositories.map((repository) => {
              if (search === '' || repository.name.toLowerCase().search(search.toLowerCase()) !== -1) {
                return (
                  <div className='repository-box'>
                    <div>
                      <h5 className='title'>
                        <a rel='noopener noreferrer' target='_blank' href={repository.owner.html_url}>{repository.owner.login}</a>
                        &nbsp; / &nbsp;
                        <a rel='noopener noreferrer' target='_blank' href={repository.html_url}>{repository.name}</a>
                      </h5>
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
                        <FiAlertOctagon />
                        {' '}
                        {`${repository.open_issues_count} open issues`}
                      </h6>
                      <h6>
                        <FiGitBranch />
                        {' '}
                        {`${repository.forks_count} forks`}
                      </h6>
                      { (repository.license)
                        ? (
                          <h6>
                            <FiPaperclip />
                            {' '}
                            { repository.license.name}
                          </h6>
                        )
                        : null }
                    </div>
                  </div>
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

export default Stars;
