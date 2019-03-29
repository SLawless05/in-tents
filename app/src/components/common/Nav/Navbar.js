import React from "react";
import { Link } from "react-router-dom";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <div className="w3-top">
      <div className="w3-row w3-padding w3-black" style={{ opacity: "0.6", fontFamily: "Sorts Mill Goudy" }}>
        <div className="w3-col s3" >
          <Link to="/" className="w3-button w3-block w3-black">HOME</Link>
        </div>
        <div className="w3-col s3">
          <Link to="/about" className="w3-button w3-block w3-black">ABOUT</Link>
        </div>
        <div className="w3-col s3">
          <Link to="/search" className="w3-button w3-block w3-black">SEARCH</Link>
        </div>
        <div className="w3-col s3">
          <Link to="/login" className="w3-button w3-block w3-black">LOG ON</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
