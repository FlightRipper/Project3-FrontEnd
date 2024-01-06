import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import "../News.css";
import "./EditForm.css";
import "./admin-about.css"


const AdminMessages = () => {
  const {MessagesData} = useLoaderData();
  console.log("messages :", MessagesData);


  return (
    <>
      <div className="aboutus-card-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>name</th>
              <th>email</th>
              <th>messages</th>
              
            </tr>
          </thead>
          <tbody>
            {/* Check if MessagesData is an array before using map */}
            {Array.isArray(MessagesData) ? (
              MessagesData.map((message) => (
                <AdminMessage
                  key={message.id}
                  message={message}
                />
              ))
            ) : (
              <tr>
                <td colSpan="4">No messages available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    
    </>
  );
};

export const AdminMessage = ({ message }) => {
 

  return (
    <tr  key={message.id}>
      <td>{message.id}</td>
      <td>{message.name}</td>
      <td>{message.email}</td>
      <td>{message.message}</td>
    
    </tr>
  );
};

export default AdminMessages;
