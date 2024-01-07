import React, { useState } from "react";
import InputMask from "react-input-mask";
import axios from "axios";
import "./donation.css";
import "../Subscribe/subscribe.css";

const Donation = ({ onHide }) => {
  // State variables
  const [Email, setEmail] = useState("");
  const [Amount, setAmount] = useState("");
  const [CardHolder, setCardHolder] = useState("");
  const [CardNumber, setCardNumber] = useState("");
  const [ExpiryData, setExpiryData] = useState("");
  const [CVC, setCVC] = useState("");
  const [donationFinished, setDonationFinished] = useState(false);

  // Background colors for input fields
  const [EmailBackground, setEmailBackground] = useState("white");
  const [AmountBackground, setAmountBackground] = useState("white");
  const [CardHolderBackground, setCardHolderBackground] = useState("white");
  const [CardNumberBackground, setCardNumberBackground] = useState("white");
  const [ExpiryDataBackground, setExpiryDataBackground] = useState("white");
  const [CVCBackground, setCVCBackground] = useState("white");

  // Input change handlers
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };
  const handleAmountInput = (e) => {
    setAmount(e.target.value);
  };
  const handleCardHolderInput = (e) => {
    setCardHolder(e.target.value);
  };
  const handleCardNumberInput = (e) => {
    setCardNumber(e.target.value);
  };
  const handleExpiryDataInput = (e) => {
    setExpiryData(e.target.value);
  };
  const handleCVCInput = (e) => {
    setCVC(e.target.value);
  };

  // Form validation logic
  const handleFormValidation = async () => {
    if (Email === "" || !emailRegex.test(Email)) {
      setEmailBackground("notValid");
    } else {
      setEmailBackground("white");
    }
    if (Amount === "" || Number(Amount) < 1) {
      setAmountBackground("notValid");
    } else {
      setAmountBackground("white");
    }
    if (CardHolder === "") {
      setCardHolderBackground("notValid");
    } else {
      setCardHolderBackground("white");
    }
    if (CardNumber === "") {
      setCardNumberBackground("notValid");
    } else {
      setCardNumberBackground("white");
    }
    if (ExpiryData === "") {
      setExpiryDataBackground("notValid");
    } else {
      setExpiryDataBackground("white");
    }
    if (CVC === "") {
      setCVCBackground("notValid");
    } else {
      setCVCBackground("white");
    }

    // Proceed to make the donation if all fields are valid
    if (
      Email !== "" &&
      emailRegex.test(Email) &&
      Amount !== "" &&
      CardHolder !== "" &&
      CardNumber !== "" &&
      ExpiryData !== "" &&
      CVC !== ""
    ) {
      try {
        // Make an API request to the backend to create a new donation
        const response = await axios.post("http://localhost:4000/donation", {
          email: Email,
          amount: Amount,
          cardHolder: CardHolder,
          cardNumber: CardNumber,
          expiryDate: ExpiryData,
          cvc: CVC,
        });

        // Handle the response as needed
        setDonationFinished(true);
        // Optionally, you can close the modal or do other actions here
      } catch (error) {
        // Handle errors from the API request
        console.error("Error making donation:", error?.response?.data);
      }
    }
  };

  // Component rendering
  return (
    <div className="wrapper">
      <div className="payment">
        <div className="payment-logo">D</div>

        <h2>Donation</h2>
        {!donationFinished ? (
          <div className="form">
            {/* Form content */}
            <div className="card space icon-relative">
              <label className="label">Email:</label>
              <InputMask
                className={`popup-input ${EmailBackground}`}
                placeholder="donation@gmail.com"
                value={Email}
                onChange={handleEmailInput}
              />
              <i className="far fa-credit-card"></i>
            </div>
            <div className="card space icon-relative">
              <label className="label">Amount:</label>
              <InputMask
                className={`popup-input ${AmountBackground}`}
                placeholder="Donation Amount"
                value={Amount}
                type="number"
                min={1}
                onChange={handleAmountInput}
              />
              <i className="far fa-credit-card"></i>
            </div>

            {/* Card Holder */}
            <div className="card space icon-relative">
              <label className="label">Card holder:</label>
              <input
                type="text"
                className={`popup-input ${CardHolderBackground}`}
                placeholder="Coding Market"
                value={CardHolder}
                onChange={handleCardHolderInput}
              />
              <i className="fas fa-user"></i>
            </div>

            {/* Card Number */}
            <div className="card space icon-relative">
              <label className="label">Card number:</label>
              <InputMask
                mask="9999 9999 9999 9999"
                className={`popup-input ${CardNumberBackground}`}
                placeholder="Card Number"
                value={CardNumber}
                onChange={handleCardNumberInput}
              />
              <i className="far fa-credit-card"></i>
            </div>

            {/* Expiry Date and CVC */}
            <div className="card-grp space">
              <div className="card-item icon-relative">
                <label className="label">Expiry date:</label>
                <InputMask
                  mask="99 / 99"
                  name="expiry-date"
                  className={`popup-input ${ExpiryDataBackground}`}
                  placeholder="00 / 00"
                  value={ExpiryData}
                  onChange={handleExpiryDataInput}
                />
                <i className="far fa-calendar-alt"></i>
              </div>

              <div className="card-item icon-relative">
                <label className="label">CVC:</label>
                <InputMask
                  mask="999"
                  className={`popup-input ${CVCBackground}`}
                  placeholder="000"
                  value={CVC}
                  onChange={handleCVCInput}
                />
                <i className="fas fa-lock"></i>
              </div>
            </div>

            {/* Donate Button */}
            <div className="btn" onClick={handleFormValidation}>
              Donate
            </div>
          </div>
        ) : (
          <>
            <div className="payment-success">
              Thank you
              <svg
                height="32"
                width="32"
                fill="red"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0H24V24H0z" fill="none"></path>
                <path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z"></path>
              </svg>
            </div>
            <div className="btn" onClick={onHide}>
              Close
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Donation;
