import React from 'react';
import './style.css';
import {
  FiGitBranch,
  FiStar,
  FiAlertOctagon,
  FiPaperclip,
} from 'react-icons/fi';

function RepositoryCard({
  title, titleUrl, owner, ownerUrl, language, description, stars, issues, forks, license,
}) {
  return (
    <div className='repository-box'>
      <div>
        <h5 className='title text-primary'>
          <a rel='noopener noreferrer' className='text-primary' target='_blank' href={ownerUrl}>{owner}</a>
          {' '}
          &nbsp; / &nbsp;
          {' '}
          <a rel='noopener noreferrer' className='text-primary' target='_blank' href={titleUrl}>{title}</a>
        </h5>
        <h6 className='description'>{language}</h6>
        <h6 className='description'>{description}</h6>
      </div>
      <div className='repository-footer'>
        <h6 className='text-primary'>
          <FiStar />
          {' '}
          {`${stars} stars`}
        </h6>
        <h6 className='text-primary'>
          <FiAlertOctagon />
          {' '}
          {`${issues} open issues`}
        </h6>
        <h6 className='text-primary'>
          <FiGitBranch />
          {' '}
          {`${forks} forks`}
        </h6>
        <h6 className='text-primary'>
          <FiPaperclip />
          {' '}
          { license}
        </h6>
      </div>
    </div>
  );
}

export default RepositoryCard;
