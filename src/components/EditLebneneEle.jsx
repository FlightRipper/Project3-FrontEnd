import React, { useState } from 'react';
import axios from 'axios';
import "./EditLebneneEle.css"

const EditLebneneEle = ({ lebneneEle, mileStone, onClose }) => {
  const [editedData, setEditedData] = useState({
    story: lebneneEle.story,
    date: mileStone?.date || '',
    title: mileStone?.title || '',
    body: mileStone?.body || '',
    ourLibrary: lebneneEle.ourLibrary,
    image: lebneneEle.image,
  });

  console.log('Rendering EditForm');

  const handleChange = (e) => {
    setEditedData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
console.log("lebneneEle ID to be updated:", lebneneEle.id);
console.log("milestone ID to be updated:", mileStone && mileStone.id);

    
    const formData = new FormData();
    formData.append('story', editedData.story);
    formData.append('date', editedData.date);
    formData.append('title', editedData.title);
    formData.append('body', editedData.body);
    formData.append('ourlibrary', editedData.ourLibrary);
    formData.append('image', editedData.image);

    try {
      // Update lebneneEle
      const response = await axios.patch(`http://localhost:4000/lebeneneEle/${lebneneEle.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('lebneneEle updated successfully', response.data);

      // Update milestone
      const milestoneResponse = await axios.patch(`http://localhost:4000/milestones/${mileStone.id}`, editedData);
      console.log('Milestone updated successfully', milestoneResponse.data);
    } catch (error) {
      console.error('Failed to update lebneneEle or milestone', error.response ? error.response.data : error.message);
    }

    onClose(); // Close the form
  };

  return (
    <form onSubmit={handleSubmit} className='edit-formlebneneEle'>
      <label>
        story:
        <input type="text" name="story" value={editedData.story} onChange={handleChange} />
      </label>
      <label>
        Date:
        <input type="text" name="date" value={editedData.date} onChange={handleChange} />
      </label>
      <label>
        Title:
        <input type="text" name="title" value={editedData.title} onChange={handleChange} />
      </label>
      <label>
        Body:
        <textarea name="body" value={editedData.body} onChange={handleChange} />
      </label>
      <label>
        ourLibrary:
        <textarea name="ourLibrary" value={editedData.ourLibrary} onChange={handleChange} />
      </label>
      <label>
        Image:
        <input type="file" accept="image/*" onChange={(e) => setEditedData({ ...editedData, image: e.target.files[0] })} />
      </label>
      <div className='button-container'>
        <button type="submit">Save Changes</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </div>
    </form>
  );
  
};

export default EditLebneneEle;
