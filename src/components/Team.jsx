import React from 'react'

import './team.css'

// const Team = (props) => {
//   const  teamsData=props


  

//   return (
    
//       <div className='team-member'>
//         <div className='team-card'>
//       {/* <img src={`https://tpll-31oj.onrender.com/${teamsData.image}`} className='profile-picture' alt="profile picture"></img> */}
//       <img src={`https://localhost:4000/uploads/${teamsData.image}`} className='profile-picture' alt="profile picture"></img>
//       <p className='member-name'>{teamsData.name}</p>
//       <p className='member-position'>{teamsData.title}</p>
//       </div>
//       </div>
      
   
//   )
// }
const Team = (props) => {
  const { image, name, title } = props.teamsData || {};
  console.log(`Image URL: https://localhost:4000/uploads/${image}`);

  return (
    <div className='team-member'>
      <div className='team-card'>
        
        <img src={`http://localhost:4000/uploads/${image}`} className='profile-picture' alt="profile picture" />
        
        <p className='member-name'>{name}</p>
        <p className='member-position'>{title}</p>
      </div>
    </div>
  );
};

export default Team
