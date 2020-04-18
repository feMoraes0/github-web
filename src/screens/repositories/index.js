import React, { useState, useEffect } from 'react';
import './style.css';
import axios from 'axios';
import AppBar from '../../components/app-bar';
import RepositoryCard from '../../components/repository-card';
import SearchBar from '../../components/search-bar';

function Repositories() {
  const [repositories, setRepositories] = useState([]);
  const [stars, setStars] = useState(0);
  const [openIssues, setOpenIssues] = useState(0);
  const [forks, setForks] = useState(0);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://api.github.com/users/feMoraes0/repos?per_page=100').then((response) => {
      setRepositories((oldState) => [...oldState, ...response.data]);
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
      return null;
    });
  }, []);

  return (
    <div className='repository-container'>
      <AppBar />
      <div className='repository-body'>
        <SearchBar
          value={search}
          setValue={setSearch}
          placeholder='Search Repository'
        />
        <div className='resume'>
          <div className='resume-box'>
            <h6>Repositories</h6>
            <h3 className='text-primary'>{repositories.length}</h3>
          </div>
          <div className='resume-box'>
            <h6>Stars</h6>
            <h3 className='text-primary'>{stars}</h3>
          </div>
          <div className='resume-box'>
            <h6>Forks</h6>
            <h3 className='text-primary'>{forks}</h3>
          </div>
          <div className='resume-box'>
            <h6>Open Issues</h6>
            <h3 className='text-primary'>{openIssues}</h3>
          </div>
        </div>
        <div className='repositories'>
          {
            repositories.map((repository) => {
              if (search === '' || repository.name.toLowerCase().search(search.toLowerCase()) !== -1) {
                return (
                  <RepositoryCard
                    title={repository.name}
                    titleUrl={repository.html_url}
                    owner={repository.owner.login}
                    ownerUrl={repository.owner.html_url}
                    language={repository.language}
                    description={repository.description}
                    stars={repository.stargazers_count}
                    issues={repository.open_issues_count}
                    forks={repository.forks_count}
                    license={(repository.license) ? repository.license.name : 'No license'}
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

export default Repositories;
