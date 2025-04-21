import React from "react";
import coin from "../assets/coin.png"; // make sure this path is correct

const Modal = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="custom-modal-overlay">
      <div className="custom-modal-box">
        <h2 className="custom-modal-title">Congrats!</h2>
        <img src={coin} alt="coin" className="custom-modal-icon" />
        <p className="custom-modal-text">
          You Have Donated for Humankind
          <br />
          <strong>Successfully</strong>
        </p>
        <button className="custom-modal-btn" onClick={onClose}>
          close confirmation
        </button>
      </div>
    </div>
  );
};

export default Modal;
