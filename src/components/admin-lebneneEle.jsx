import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import "../News.css";
import "./EditForm.css";
import "./admin-lebnenle.css";
import axios from "axios";
import EditLebneneEle from "./EditLebneneEle";

const AdminLebneneEleList = () => {
  const [showEditForm, setShowEditForm] = useState(false);
  const [selectedLebneneEle, setSelectedLebneneEle] = useState(null);

  const { lebneneleData, milestonesData } = useLoaderData();
  console.log("LebneneEle Data:", lebneneleData);
  console.log("milestone Data:", milestonesData);

  const lebneneEleArray = Array.isArray(lebneneleData) ? lebneneleData : [];

  const handleEdit = (lebneneEle) => {
    setShowEditForm(true);
    setSelectedLebneneEle(lebneneEle);
  };

  const handleDelete = async (lebneneEle) => {
    console.log("Deleting lebneneEle with id:", lebneneEle.id);

    try {
      // Delete each milestone individually
      await Promise.all(
        lebneneEle.milestones.map(async (milestone) => {
          await axios.delete(`http://localhost:4000/mileStone/${milestone.id}`);
        })
      );

      await axios.delete(`http://localhost:4000/lebeneneEle/${lebneneEle.id}`);

      console.log("LebneneEle and associated milestones deleted successfully");
    } catch (error) {
      console.error("Failed to delete LebneneEle and milestones", error.message);
    }
  };

  return (
    <>
      <div className="lebneneele-card-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Story</th>
              <th>Milestone Date</th>
              <th>Milestone Title</th>
              <th>Milestone Body</th>
              <th>Our Library</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {lebneneEleArray.map((lebneneEle) => (
              <tr key={lebneneEle.id}>
                <td>{lebneneEle.id}</td>
                <td>
                  <img src={`http://localhost:4000/uploads/${lebneneEle.image}`} alt="" />
                </td>
                <td>{lebneneEle.story}</td>
                {lebneneEle.milestones && lebneneEle.milestones.length > 0 ? (
                  lebneneEle.milestones.map((milestone, index) => (
                    <React.Fragment key={milestone.id}>
                      {index === 0 ? (
                        <>
                          <td>{milestone.date}</td>
                          <td>{milestone.title}</td>
                          <td>{milestone.body}</td>
                        </>
                      ) : (
                        <React.Fragment>
                          <td></td>
                          <td></td>
                          <td></td>
                        </React.Fragment>
                      )}
                    </React.Fragment>
                  ))
                ) : (
                  <td colSpan="3"></td>
                )}
                <td>{lebneneEle.ourLibrary}</td>
                <td>
                  <button onClick={() => handleEdit(lebneneEle)} className="admin-edit--button">
                    <p>Edit</p>
                  </button>
                  <button onClick={() => handleDelete(lebneneEle)} className="admin-delete--button">
                    <p>Delete</p>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className={`edit-formlebneneEle-modal ${showEditForm ? "active" : ""}`}>
          {showEditForm && (
            <EditLebneneEle lebneneEle={selectedLebneneEle} onClose={() => setShowEditForm(false)} />
          )}
        </div>
      </div>
    </>
  );
};

export default AdminLebneneEleList;

