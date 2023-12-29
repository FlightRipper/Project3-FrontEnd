import React, { useState } from "react";
import Team from "../../components/Team/team.jsx";
import "./aboutus.css";

import { useLoaderData } from "react-router-dom";

const AboutUs = () => {
const {aboutusData,teamsData} = useLoaderData();
console.log(aboutusData)
console.log(teamsData)
  
  const teamsPerPage = 4;
  const totalTeams=teamsData.length;

  const [currentPage,setCurrentPage]=useState(0);

  const startTeam = currentPage*teamsPerPage;
  const endTeam = startTeam+teamsPerPage;
  const visibleTeams = teamsData.slice(startTeam,endTeam);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % (totalTeams / teamsPerPage));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalTeams / teamsPerPage) % (totalTeams / teamsPerPage));
  };


  return (
    <>
      <section className="body-section">
        <div className="image-section">
          <img className="aboutus-image" src={`https://tpll-31oj.onrender.com/${aboutusData.image}`}></img>
        </div>
        <br/>
        <br/>
        <div className="story-section">
          <div className="title">
            <h1>
              Our <span className="red">Story</span>
            </h1>
          </div>
          <div className="story-description">
            <p>
              {`${aboutusData.story}`}
            </p>
          </div>
        </div>
        <br/>
        <br/>

        <div className="mission-section">
          <div className="title">
            <h1>
              Our <span className="red">Mission</span>
            </h1>
          </div>
          <div className="mission-description">
            <p>
              {`${aboutusData.mission}`}
            </p>
          </div>
        </div>
        <br/>
        <br/>

        <div className="vision-section">
          <div className="title">
            <h1>
              Our <span className="red">Vision</span>
            </h1>
          </div>
          <div className="vision-description">
            
            <p>{aboutusData.vision}</p>
          </div>
        </div>
        
        <br/>
        <br/>
        <div className="team-section">
          <div className="title">
            <h1>
              Meet Our <span className="red">Team</span>
            </h1>
          </div>
          <div className="teams-container">
            <div className="teams">
              {visibleTeams.map((team) => (
                <Team key={team._id} image={team.image} name={team.name} title={team.title} />
              ))}
            </div>
            <div className="carousel-buttons">
              <button className='previous-button' onClick={handlePrevPage}>Previous</button>
              <button className='next-button' onClick={handleNextPage}>Next</button>
            </div>
          </div>
        </div>

      </section>
    
    </>
  );
};

export default AboutUs;
