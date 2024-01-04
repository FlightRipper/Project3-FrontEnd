import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import "../News.css";
import "./EditForm.css";
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
          {aboutUsData.map((aboutUs) => (
            <AdminAboutUsCard
              key={aboutUs.id}
              aboutUs={aboutUs}
              showEditForm={showEditForm}
              setShowEditForm={setShowEditForm}
              onEdit={() => handleEdit(aboutUs)}
            />
          ))}
  
          <div className="edit-form-container">
            {showEditForm && (
              <EditAboutUs aboutUs={selectedAboutUs} onClose={() => setShowEditForm(false)} />
            )}
          </div>
        </div>
      </>
    );
  };
  
  export const AdminAboutUsCard = ({ aboutUs, showEditForm, onEdit }) => {
    console.log("About Us Data:", aboutUs);
  
    const handleEditClick = () => {
      onEdit();
    };
  
    return (
      <div className={`aboutus-card ${showEditForm ? 'edit-form-open' : ''}`}>
        <aboutus>
          <div className="card-img">
            <img src={`http://localhost:4000/uploads/${aboutUs.image}`} alt="" />
          </div>
          <div className="aboutus-card--body">
            <p><b>Mission</b> {aboutUs.mission}</p>
            <p><b>Vision:</b> {aboutUs.vision}</p>
            <p><b>Story:</b> {aboutUs.story}</p>
            <div className="line-separator"></div>
            <div className="admin-aboutus-control">
              <button onClick={handleEditClick} className="admin-edit--button">
                <p>Edit</p>
              </button>
  
            
            </div>
          </div>
        </aboutus>
      </div>
    );
  };
  
  export default AdminAboutUs;
  