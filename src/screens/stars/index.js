import React, { useState, useEffect } from 'react';
import './style.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import AppBar from '../../components/app-bar';
import RepositoryCard from '../../components/repository-card';
import SearchBar from '../../components/search-bar';
import BadgeTitle from '../../components/badge-title';

function Stars() {
  const [starRepositories, setStarRepositories] = useState([]);
  const [search, setSearch] = useState('');
  const history = useHistory();

  useEffect(() => {
    const localUser = sessionStorage.getItem('user_github');
    if (localUser === null) {
      sessionStorage.clear();
      history.push('/');
    } else {
      axios.get('https://api.github.com/users/feMoraes0/starred').then((response) => {
        setStarRepositories((oldState) => [...oldState, ...response.data]);
        return null;
      });
    }
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
        <BadgeTitle title='Stars' counter={starRepositories.length} />
        <div className='repositories'>
          {
            starRepositories.map((repository) => {
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

export default Stars;
