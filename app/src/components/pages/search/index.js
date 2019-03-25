import React from "react";
import "./style.css";
// import Hero from "../../Hero";
// import Container from "../../Container";
// import Row from "../../Row";
// import Col from "../../Col";

function search() {
  return (
    <div>
      <div
        className="bgimg-1 w3-display-container"
        id="home"
        style={{
          backgroundImage:
            "url('https://media.blogto.com/articles/2017725-lake-superior.jpg?w=2048&cmd=resize_then_crop&height=1365&quality=70')",
          minHeight: "90vh",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
      >
        <div
          className="w3-content w3-container w3-padding-64"
          id="portfolio"
          style={{ backgroundColor: "rbga(255, 255, 255, 0.5)" }}
        >
          <h3 className="w3-center">IN-TENTS FAVORITES</h3>
          <p className="w3-center">
            <em>
              Here are some of In-Tents members favorite parks to visit!
              <br /> Click on the images for more info
            </em>
          </p>
          <br />

          {/* <!-- Responsive Grid. Four columns on tablets, laptops and desktops. Will stack on mobile devices/small screens (100% width) --> */}
          <div className="w3-row-padding w3-center">
            <div className="w3-col m3">
              <p>Yellowstone National Park</p>
              <img
                src="images/yellowstone.jpg"
                style={{ width: "100%", height: 150 }}
                onclick="onClick(this)"
                className="w3-hover-opacity"
                alt="Acadia National Park"
              />
            </div>
            <div className="w3-col m3">
              <p>Grand Canyon</p>
              <img
                src="images/grandcanyon.jpeg"
                style={{ width: "100%", height: 150 }}
                onclick="onClick(this)"
                className="w3-hover-opacity"
                alt="grand canyon"
              />
            </div>
            <div className="w3-col m3">
              <p>Grand Tetons National Park</p>
              <img
                src="images/Grand-Teton-National-Park.jpg"
                style={{ width: "100%", height: 150 }}
                onclick="onClick(this)"
                className="w3-hover-opacity"
                alt="Tetons"
              />
            </div>
            <div className="w3-col m3">
              <p>Acadia National Park</p>
              <img
                src="/images/Acadia.jpg"
                style={{ width: "100%", height: 150 }}
                onclick="onClick(this)"
                className="w3-hover-opacity"
                alt="Quiet ocean"
              />
            </div>
          </div>
          <div className="w3-row-padding w3-center w3-section">
            <div className="w3-col m3">
              <p>Zion National Park</p>
              <img
                src="images/zion.jpeg"
                style={{ width: "100%", height: 150 }}
                onclick="onClick(this)"
                className="w3-hover-opacity"
                alt="The mist"
              />
            </div>
            <div className="w3-col m3">
              <p>Glacier National Park</p>
              <img
                src="images/Glacier.jpg"
                style={{ width: "100%", height: 150 }}
                onclick="onClick(this)"
                className="w3-hover-opacity"
                alt="My beloved typewriter"
              />
            </div>
            <div className="w3-col m3">
              <p>Olympic National Park</p>
              <img
                src="images/Olympic.jpg"
                style={{ width: "100%", height: 150 }}
                onclick="onClick(this)"
                className="w3-hover-opacity"
                alt="Empty ghost train"
              />
            </div>
            <div className="w3-col m3">
              <p>Rocky Mountains</p>
              <img
                src="images/rockies.jpg"
                style={{ width: "100%", height: 150 }}
                onclick="onClick(this)"
                className="w3-hover-opacity"
                alt="Sailing"
              />
            </div>
            <button
              className="w3-button w3-padding-large w3-black"
              style={{ marginTop: "15px", opacity: "0.6" }}
            >
              Search your favorite national park
            </button>
          </div>

          {/* <!-- Modal for full size images on click--></div> */}
          <div
            id="modal01"
            className="w3-modal w3-black"
            onclick="this.style.display='none'"
          >
            <span
              className="w3-button w3-large w3-black w3-display-topright"
              title="Close Modal Image"
            >
              <i className="fa fa-remove" />
            </span>
            <div className="w3-modal-content w3-animate-zoom w3-center w3-transparent w3-padding-64">
              <img id="img01" className="w3-image" />
              <p id="caption" className="w3-opacity w3-large" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default search;
