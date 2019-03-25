import React from "react";
import { Link } from "react-router-dom";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <div className="w3-top">
      <div className="w3-row w3-padding w3-black" style={{opacity: "0.6"}}>
        <div className="w3-col s3" >
          <a href="/" className="w3-button w3-block w3-black">
            HOME
          </a>
        </div>
        <div className="w3-col s3">
          <a href="about" className="w3-button w3-block w3-black">
            ABOUT
          </a>
        </div>
        <div className="w3-col s3">
          <a href="search" className="w3-button w3-block w3-black">
            SEARCH
          </a>
        </div>
        <div className="w3-col s3">
          <a href="profile" className="w3-button w3-block w3-black">
            PROFILE
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
