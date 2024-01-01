    // YourReactComponent.jsx

    import React from 'react';
    import './donation.css'; // Make sure to adjust the path if necessary

    const Donation = () => {
    return (
        <div className="modal">
        <form className="form">
            <div className="payment--options">
            <button name="paypal" type="button">
                <svg xml:space="preserve" viewBox="0 0 124 33" height="33px" width="124px" y="0px" x="0px" id="Layer_1" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
                {/* PayPal SVG content */}
                </svg>
            </button>
            <button name="apple-pay" type="button">
                <svg xml:space="preserve" viewBox="0 0 512 210.2" y="0px" x="0px" id="Layer_1" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
                {/* Apple Pay SVG content */}
                </svg>
            </button>
            <button name="google-pay" type="button">
                <svg fill="none" viewBox="0 0 80 39" height="39" width="80" xmlns="http://www.w3.org/2000/svg">
                {/* Google Pay SVG content */}
                </svg>
            </button>
            </div>
            <div className="separator">
            <hr className="line" />
            <p>or pay using credit card</p>
            <hr className="line" />
            </div>
            <div className="credit-card-info--form">
            <div className="input_container">
                <label htmlFor="cardholder_field" className="input_label">Card holder full name</label>
                <input id="cardholder_field" className="input_field" type="text" name="cardholder" placeholder="Enter your full name" />
            </div>
            <div className="input_container">
                <label htmlFor="cardnumber_field" className="input_label">Card Number</label>
                <input id="cardnumber_field" className="input_field" type="number" name="cardnumber" placeholder="0000 0000 0000 0000" />
            </div>
            <div className="input_container">
                <label htmlFor="expiry_field" className="input_label">Expiry Date / CVV</label>
                <div className="split">
                <input id="expiry_field" className="input_field" type="text" name="expiry" placeholder="01/23" />
                <input id="cvv_field" className="input_field" type="number" name="cvv" placeholder="CVV" />
                </div>
            </div>
            </div>
            <button className="purchase--btn">Checkout</button>
        </form>
        </div>
    );
    };

    export default Donation;
