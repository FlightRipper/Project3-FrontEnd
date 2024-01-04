import React, { useState } from "react";
import Team from "./components/Team";
import "./aboutus.css";

import { useLoaderData } from "react-router-dom";

const AboutUs = () => {
  const { aboutusData, teamsData } = useLoaderData();
  console.log(aboutusData);
  console.log(teamsData);
  
  const teamsPerPage = 2;
  const totalTeams = teamsData.length;

  const [currentPage, setCurrentPage] = useState(0);

  const startTeam = currentPage * teamsPerPage;
  const endTeam = startTeam + teamsPerPage;
  const visibleTeams = teamsData.slice(startTeam, endTeam);

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
          {aboutusData && aboutusData.length > 0 && (
            <>
              {aboutusData.map((item, index) => (
                <img key={index} className="aboutus-image" src={`http://localhost:4000/uploads/${item.image}`} alt={`About Us Image ${index}`} />
              ))}
            </>
          )}
        </div>
        <br />
        <br />
        {aboutusData && aboutusData.length > 0 && (
          <>
            <div className="story-section">
              <div className="title">
                <h1>
                  Our <span className="red">Story</span>
                </h1>
              </div>
              <div className="story-description">
                {aboutusData.map((item, index) => (
                  <p key={index}>{item.story}</p>
                ))}
              </div>
            </div>
            <br />
            <br />

            <div className="mission-section">
              <div className="title">
                <h1>
                  Our <span className="red">Mission</span>
                </h1>
              </div>
              <div className="mission-description">
                {aboutusData.map((item, index) => (
                  <p key={index}>{item.mission}</p>
                ))}
              </div>
            </div>
            <br />
            <br />

            <div className="vision-section">
              <div className="title">
                <h1>
                  Our <span className="red">Vision</span>
                </h1>
              </div>
              <div className="vision-description">
                {aboutusData.map((item, index) => (
                  <p key={index}>{item.vision}</p>
                ))}
              </div>
            </div>
          </>
        )}
        <br />
        <br />
        <div className="team-section">
          <div className="title">
            <h1>
              Meet Our <span className="red">Team</span>
            </h1>
          </div>
          <div className="teams-container">
            <div className="teams">
              {teamsData && teamsData.length > 0 && (
                <>
                  {visibleTeams.map((team) => (
                    <Team key={team._id} teamsData={team} />
                  ))}
                </>
              )}
            </div>
            <div className="carousel-buttons">
              <button className="previous-button" onClick={handlePrevPage}>
                Previous
              </button>
              <button className="next-button" onClick={handleNextPage}>
                Next
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
