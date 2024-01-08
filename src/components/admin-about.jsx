import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import "../News.css";
import "./EditForm.css";
import "./admin-about.css"
import EditAboutUs from "./EditAbout";

const AdminAboutUs = () => {
  const [showEditForm, setShowEditForm] = useState(false);
  const [selectedAboutUs, setSelectedAboutUs] = useState(null);

  const aboutUsData = useLoaderData();
  console.log("About Us Data:", aboutUsData);

  const handleEdit = (aboutUs) => {
    setShowEditForm(true);
    setSelectedAboutUs(aboutUs);
  };

  return (
    <>
      <div className="aboutus-card-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Mission</th>
              <th>Vision</th>
              <th>Story</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {aboutUsData.map((aboutUs) => (
              <AdminAboutUsCard
                key={aboutUs.id}
                aboutUs={aboutUs}
                showEditForm={showEditForm}
                setShowEditForm={setShowEditForm}
                onEdit={() => handleEdit(aboutUs)}
              />
            ))}
          </tbody>
        </table>
      </div>
      <div className={`edit-formAbout-modal ${showEditForm ? "active" : ""}`}>
        {showEditForm && (
          <EditAboutUs aboutUs={selectedAboutUs} onClose={() => setShowEditForm(false)} />
        )}
      </div>
    </>
  );
};

export const AdminAboutUsCard = ({ aboutUs, showEditForm, onEdit }) => {
  const handleEditClick = () => {
    onEdit();
  };

  return (
    <tr className={`aboutus-card ${showEditForm ? "edit-formAbout-open" : ""}`} key={aboutUs.id}>
      <td>{aboutUs.id}</td>
      <td>{aboutUs.mission}</td>
      <td>{aboutUs.vision}</td>
      <td>{aboutUs.story}</td>
      <td>
        <button onClick={handleEditClick} className="admin-edit--button">
          <p>Edit</p>
        </button>
      </td>
    </tr>
  );
};

export default AdminAboutUs;
