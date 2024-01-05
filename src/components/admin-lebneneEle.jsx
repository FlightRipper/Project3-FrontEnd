import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import "../News.css";
import "./EditForm.css";
import axios from "axios";
import EditLebneneEle from "./EditLebneneEle";

const AdminLebneneEleList = () => {
  const [showEditForm, setShowEditForm] = useState(false);
  const [selectedLebneneEle, setSelectedLebneneEle] = useState(null);

  const { lebneneleData, milestonesData } = useLoaderData();
  console.log("LebneneEle Data:", lebneneleData);
  console.log("milestone Data:", milestonesData);

  const lebneneEleArray = Array.isArray(lebneneleData) ? lebneneleData : [];

  const handleEdit = (lebneneEle, milestones) => {
    setShowEditForm(true);
    setSelectedLebneneEle({ lebneneEle, milestones });
  };
  const handleDelete = async (lebneneEle, milestones) => {
    console.log("Deleting lebneneEle with id:", lebneneEle.id);
  
    try {
      // Delete each milestone individually
      await Promise.all(milestones.map(async (milestone) => {
        await axios.delete(`http://localhost:4000/mileStone/${milestone.id}`);
      }));
  
    
      await axios.delete(`http://localhost:4000/lebeneneEle/${lebneneEle.id}`);
      
      console.log("LebneneEle and associated milestones deleted successfully");
  
    } catch (error) {
      console.error("Failed to delete LebneneEle and milestones", error.message);
    }
  };
  

  return (
    <>
      <div className="lebneneele-card-container">
        {lebneneEleArray.map((lebneneEle) => (
          <div className={`lebneneele-card ${showEditForm ? 'edit-form-open' : ''}`} key={lebneneEle.id}>
            <lebneneele>
              <div className="card-img">
                <img src={`http://localhost:4000/uploads/${lebneneEle.image}`} alt="" />
              </div>
              <div className="lebneneele-card--body">
                <p>
                  <b>Story:</b> {lebneneEle.story}
                </p>

                <div>
                  <b>Milestones:</b>
                  {milestonesData &&
                    milestonesData.map((milestone) => (
                      <div key={milestone.id}>
                        <p>Date: {milestone.date}</p>
                        <p>Title: {milestone.title}</p>
                        <p>Body: {milestone.body}</p>
                      </div>
                    ))}
                </div>

                <p>
                  <b>Our Library:</b> {lebneneEle.ourLibrary}
                </p>
                <div className="line-separator"></div>
                <div className="admin-lebneneele-control">
                  <button onClick={() => handleEdit(lebneneEle, milestonesData)} className="admin-edit--button">
                    <p>Edit</p>
                  </button>
                  <button onClick={() => handleDelete(lebneneEle,milestonesData)} className="admin-delete--button">
                    <p>Delete</p>
                  </button>
                </div>
              </div>
            </lebneneele>
          </div>
        ))}
        <div className="edit-form-container">
          {showEditForm && <EditLebneneEle lebneneEle={selectedLebneneEle.lebneneEle} milestones={selectedLebneneEle.milestones} onClose={() => setShowEditForm(false)} />}
        </div>
      </div>
    </>
  );
};

export default AdminLebneneEleList;
