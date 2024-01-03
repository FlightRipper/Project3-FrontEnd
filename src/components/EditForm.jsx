// EditForm.jsx
import React, { useState } from 'react';
import axios from 'axios';


const EditForm = ({ article, onClose }) => {
  const [editedData, setEditedData] = useState({
    title: article.title,
    body: article.body,
    date: article.date,
    image: article.image,
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
    console.log("Article ID to be updated:", article.id); 
    console.log("Inside handleSubmit");
    const formData = new FormData();
    formData.append('title', editedData.title);
    formData.append('body', editedData.body);
    formData.append('date', editedData.date);
    formData.append('image', editedData.image);
    try {
      const response = await axios.patch(`http://localhost:4000/article/${article.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }, editedData});
      console.log('Article updated successfully', response.data);
    } catch (error) {
      console.error('Failed to update article', error.response ? error.response.data : error.message);
    }

    onClose(); // Close the form
  };

// ...


  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" name="title" value={editedData.title} onChange={handleChange} />
      </label>
      <label>
        Body:
        <textarea name="body" value={editedData.body} onChange={handleChange} />
      </label>
      <label>
  Date:
  <input type="text" name="date" value={editedData.date} onChange={handleChange} />
</label>
<label>
        Image:
        <input type="file" accept="image/*" onChange={(e) => setEditedData({...editedData, image:e.target.files[0]})}/>
      </label>
      <button type="submit">Save Changes</button>
      <button type="button" onClick={onClose}>
        Cancel
      </button>
    </form>
  );
};

export default EditForm;


