import React from "react";
import { Link } from "react-router-dom";
import Auth from '../../../modules/Auth';
import App from '../../../App';

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
        {Auth.isUserAuthenticated() ? (
          <div className="w3-col s3">
            <Link to="/profile" className="w3-button w3-block w3-black">PROFILE</Link>
          </div>
        ) : (
          <div className="w3-col s3">
            <Link to="/login" className="w3-button w3-block w3-black">LOG IN</Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
