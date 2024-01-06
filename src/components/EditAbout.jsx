import React, { useState } from 'react';
import axios from 'axios';
import './EditForm.css';

const EditAboutUs = ({ aboutUs, onClose }) => {
  const [editedAboutUs, setEditedAboutUs] = useState({
    story: aboutUs.story,
    vision: aboutUs.vision,
    mission: aboutUs.mission,
    image: aboutUs.image,
  });

  const handleChange = (e) => {
    setEditedAboutUs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Aboutus ID to be updated:', aboutUs.id);

    const formData = new FormData();
    formData.append('story', editedAboutUs.story);
    formData.append('vision', editedAboutUs.vision);
    formData.append('mission', editedAboutUs.mission);
   

    try {
      const response = await axios.patch(`http://localhost:4000/aboutus/${aboutUs.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('About us updated successfully', response.data);
    } catch (error) {
      console.error('Failed to update aboutus', error.response ? error.response.data : error.message);
    }

    onClose(); // Close the form
  };

  return (
    <form onSubmit={handleSubmit} className='edit-form'>
      <label>
        Story:
        <input type="text" name="story" value={editedAboutUs.story} onChange={handleChange} />
      </label>
      <label>
        Vision:
        <textarea type="text" name="vision" value={editedAboutUs.vision} onChange={handleChange} />
      </label>
      <label>
        Mission:
        <input type="text" name="mission" value={editedAboutUs.mission} onChange={handleChange} />
      </label>
      {/* <label>
        Image:
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setEditedAboutUs({ ...editedAboutUs, image: e.target.files[0] })}
        />
      </label> */}
      <div className="button-container">
        <button type="submit">Save Changes</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditAboutUs;
