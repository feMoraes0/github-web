import React from 'react';
import './style.css';

function BadgeTitle({ title, counter }) {
  return (
    <h6 className='badge-title text-primary'>
      {title}
      {' '}
      <span className='badge-count bg-secondary'>{counter}</span>
    </h6>
  );
}

export default BadgeTitle;
