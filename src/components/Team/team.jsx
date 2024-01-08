// Team.jsx
import React from 'react';
import './team.css';

const Team = (props) => {
  const { image, name, title, description } = props;

  return (
    <div className='team-member'>
      <div className='team-card'>
        <img src={`http://localhost:4000/uploads/${image}`} className='profile-picture' alt="profile picture" />
          <p className='member-name'>{name}</p>
          <p className='member-position'>{title}</p>
          <div className='member-details'>

          {description && <p className='member-description'>{description}</p>}
        </div>
      </div>
    </div>
  );
}

export default Team;
