import React, { Component } from "react";

const Modal = ({ handleClose, show, children }) => {
  
    return (
      <div className="w3-modal w3-black" style={{display: show ? "block" : "none"}}>
          {children}
      </div>
    );
  };

  export default Modal;