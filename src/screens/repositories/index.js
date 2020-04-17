import React, { useState, useEffect } from 'react';
import './style.css';
import {
  FiSearch,
  FiGitBranch,
  FiStar,
  FiAlertOctagon,
} from 'react-icons/fi';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AppBar from '../../components/app-bar';

function Repositories() {
  const [repositories, setRepositories] = useState([]);
  const [stars, setStars] = useState(0);
  const [openIssues, setOpenIssues] = useState(0);
  const [forks, setForks] = useState(0);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://api.github.com/users/feMoraes0/repos?per_page=100').then((response) => {
      setRepositories([...repositories, ...response.data]);
      let starsCounter = 0;
      let OpenIssuesCounter = 0;
      let forksCounter = 0;
      response.data.map((repository) => {
        starsCounter += repository.stargazers_count;
        OpenIssuesCounter += repository.open_issues_count;
        forksCounter += repository.forks_count;
        return null;
      });
      setStars(starsCounter);
      setOpenIssues(OpenIssuesCounter);
      setForks(forksCounter);
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
        <div className='resume'>
          <div className='resume-box'>
            <h6>Repositories</h6>
            <h3>{repositories.length}</h3>
          </div>
          <div className='resume-box'>
            <h6>Stars</h6>
            <h3>{stars}</h3>
          </div>
          <div className='resume-box'>
            <h6>Forks</h6>
            <h3>{forks}</h3>
          </div>
          <div className='resume-box'>
            <h6>Open Issues</h6>
            <h3>{openIssues}</h3>
          </div>
        </div>
        <div className='repositories'>
          {
            repositories.map((repository) => {
              if (search === '' || repository.name.toLowerCase().search(search.toLowerCase()) !== -1) {
                return (
                  <div className='repository-box'>
                    <div>
                      <h5 className='title'>
                        <span className='label-status'>active</span>
                        {repository.name}
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
                    </div>
                  </div>
                );
              }
            })
          }
        </div>
      </div>
    </div>
  );
}

export default Repositories;
