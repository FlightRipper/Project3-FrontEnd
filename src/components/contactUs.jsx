import { useState } from "react";
import "./subscribe.css";
import "./contactUs.css";
import axios from "axios";
import { useLoaderData } from "react-router-dom";

const ContactUs = ({ onHide }) => {
  const loaderData = useLoaderData();
  console.log("Loader data in ContactUs:", loaderData);

  const { AddMessageData } = loaderData || {};
  console.log("messages", AddMessageData);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const[message,seMessage]=useState("");
  const [EmailBackground, setEmailBackground] = useState("white");
  const [UserNameBackground, setUserNameBackground] = useState("white");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };

  const handleUserNameInput = (e) => {
    setName(e.target.value);
  };

  const handleFormValidation = () => {
    if (email === "" || !emailRegex.test(email)) {
      setEmailBackground("notValid");
    } else {
      setEmailBackground("white");
    }

    if (name === "") {
      setUserNameBackground("notValid");
    } else {
      setUserNameBackground("white");
    }
  };
  const handleSendButtonClick = async () => {
    // ...
  
    // Get the value of the message textarea
    const messageValue = document.querySelector(".popup-textarea").value;
  
    // Check if form is valid before making the POST request
    if (email !== "" && emailRegex.test(email) && name !== "") {
      try {
        // Make POST request to your server endpoint
        const response = await axios.post("http://localhost:4000/contactUs", {
          email,
          name,
          message: messageValue, // Use the correct variable name
        });
  
        // Handle the response as needed
        console.log("Server response for contactus:", response.data);
  
        // Reset form fields after successful submission if needed
        setEmail("");
        setName("");
        seMessage("");  // Reset the message state
      } catch (error) {
        console.error("Error during POST request:", error.message);
        // Handle errors if necessary
      }
    }
  };
  

  return (
    <div className="subscribe-popup">
      <header className="popup-header">
        <button onClick={onHide} className="close-popup-btn">
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style={{
              display: "block",
              fill: "none",
              height: 16,
              width: 16,
              stroke: "currentcolor",
              strokeWidth: 3,
              overflow: "visible",
            }}
          >
            <path d="m6 6 20 20" />
            <path d="m26 6-20 20" />
          </svg>
        </button>
        {Array.isArray(AddMessageData) && AddMessageData.map((item, index) => (
        <div key={index}>
          <p>Email: {item.email}</p>
          <p>Name: {item.name}</p>
          <p>Message: {item.message}</p>
        </div>
      ))}
        <h1 className="popup-title">Contact Us</h1>
      </header>
      <div className="popup-body">
        <label htmlFor="name">Full name</label>
        <input
          type="text"
          value={name}
          className={`popup-input ${UserNameBackground} `}
          placeholder="user name"
          onChange={handleUserNameInput}
          autoFocus
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          value={email}
          className={`popup-input ${EmailBackground} `}
          placeholder="Email"
          onChange={handleEmailInput}
        />
        {/* Add other form fields as needed */}
        <label htmlFor="message">Message</label>
        <textarea rows={5} className={`popup-textarea`}></textarea>
        <button onClick={handleSendButtonClick} className="popup-send-btn">
          Send
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
