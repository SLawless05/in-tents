import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./style.css";
import Modal from "../../modals";
// import Container from "../../Container";
import parks from "./parks";
import Axios from "axios";
// import Dropdown from "../../Dropdown";

// Axios.get("/api/search/" + "parkid" ).then(data => {
//   console.log(data.data);
// })

function search() {
  const [modalActive, showModal] = useState();
  const [modalData, setModalData] = useState({});
  const [parkData, setPark] = useState();
  const [userParks, setUserParks] = useState([]);

  function onImgClick(e) {
    setModalData({
      src: e.target.src,
      description: e.target.getAttribute("data-description")
    });
    showModal(true);
  }
  return (
    <div>
      <div
        className="bgimg-1 w3-display-container"
        id="home"
        style={{
          backgroundImage:
            "url('https://media.blogto.com/articles/2017725-lake-superior.jpg?w=2048&cmd=resize_then_crop&height=1365&quality=70')",
          minHeight: "75vh",
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
          <div>
            <h1
              style={{
                textAlign: "center",
                display: "block",
                fontFamily: "Sorts Mill Goudy",
                fontSize: "55px"
              }}
            >
              Adventure Time
            </h1>
          </div>
          <div>
            <h3
              style={{
                textAlign: "center",
                display: "block",
                fontFamily: "Sorts Mill Goudy",
                fontSize: "20px"
              }}
            >
              Search parks in the dropdown menu below
            </h3>
          </div>

          {/* Start Testing */}
          <div
            style={{
              textAlign: "center",
              display: "block",
              fontFamily: "Sorts Mill Goudy"
            }}
          >
            <label htmlFor="park">National Parks: </label>
            <input
              name="park"
              list="parks"
              type="text"
              className="form-control"
              value={parkData}
              onChange={e => setPark(e.target.value)}
              id="park"
            />
            <button
              onClick={() => {
                Axios.get("/api/users/search/" + parks[parkData]).then(({ data }) => {
                  console.log(data.parks.data);
                  console.log(data.parks.data[0].directionsinfo);
                  console.log(data.parks.data[0].weatherinfo);
                  console.log(data.parks.data[0].fullname);
                  console.log(data.alerts.data[0].category)
                  console.log(data.alerts.data[0].title)
                   // setUserParks([...userParks, data]);
                  // setPark("");
                })
              }}
              style={{ marginLeft: "10px" }}
            >
              Add Park
            </button>
            <div className="w3-row">
              <div className="w3-col s3 w3-center" id="alert" />
              <div className="w3-col s9 w3-center" id="parkInfo" />
            </div>
          </div>
          <datalist id="parks">
            {Object.keys(parks).map(park => (
              <option value={park} key={park} />
            ))}
          </datalist>
          {userParks.length !== 0 && userParks.map(park => <p>{park}</p>)}
          <hr />
          {/* <button onClick={() => console.log(parkData, parks[parkData])}>Testing</button> */}
          <br />
          {/* End Testing */}
          <h3 className="w3-center" style={{ fontFamily: "Sorts Mill Goudy" }}>
            NEED SOME IN-TENTS INSPIRATION?
          </h3>
          <p className="w3-center">
            <em>
              Not sure where to go on your next adventure? Check out some of our
              favorites below
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
                className="w3-hover-opacity"
                alt="Acadia National Park"
                data-description="Yellowstone National Park is a nearly 3,500-sq.-mile wilderness recreation area atop a volcanic hot spot. Mostly in Wyoming, the park spreads into parts of Montana and Idaho too. Yellowstone features dramatic canyons, alpine rivers, lush forests, hot springs and gushing geysers, including its most famous, Old Faithful. It's also home to hundreds of animal species, including bears, wolves, bison, elk and antelope."
                onClick={onImgClick}
              />
            </div>
            <div className="w3-col m3">
              <p>Grand Canyon</p>
              <img
                src="images/grandcanyon.jpeg"
                style={{ width: "100%", height: 150 }}
                className="w3-hover-opacity"
                alt="grand canyon"
                data-description="The Grand Canyon is a steep-sided canyon carved by the Colorado River in Arizona, United States. The Grand Canyon is 277 miles long, up to 18 miles wide and attains a depth of over a mile."
                onClick={onImgClick}
              />
            </div>
            <div className="w3-col m3">
              <p>Grand Tetons National Park</p>
              <img
                src="images/Grand-Teton-National-Park.jpg"
                style={{ width: "100%", height: 150 }}
                className="w3-hover-opacity"
                alt="Tetons"
                data-description="Grand Teton National Park is in the northwest of the U.S state of Wyoming. It encompasses the Teton mountain range, the 4,000-meter Grand Teton peak, and the valley known as Jackson Hole. It’s a popular destination in summer for mountaineering, hiking, backcountry camping and fishing, linked to nearby Yellowstone National Park by the John D. Rockefeller, Jr. Memorial Parkway."
                onClick={onImgClick}
              />
            </div>
            <div className="w3-col m3">
              <p>Acadia National Park</p>
              <img
                src="/images/Acadia.jpg"
                style={{ width: "100%", height: 150 }}
                className="w3-hover-opacity"
                alt="Acadia National Park"
                data-description="Acadia National Park is a 47,000-acre Atlantic coast recreation area primarily on Maine's Mount Desert Island. Its landscape is marked by woodland, rocky beaches and glacier-scoured granite peaks such as Cadillac Mountain, the highest point on the United States’ East Coast. Among the wildlife are moose, bear, whales and seabirds. The bayside town of Bar Harbor, with restaurants and shops, is a popular gateway."
                onClick={onImgClick}
              />
            </div>
          </div>
          <div className="w3-row-padding w3-center w3-section">
            <div className="w3-col m3">
              <p>Zion National Park</p>
              <img
                src="images/zion.jpeg"
                style={{ width: "100%", height: 150 }}
                className="w3-hover-opacity"
                alt="Zion"
                data-description="Zion National Park is a southwest Utah nature preserve distinguished by Zion Canyon’s steep red cliffs. Zion Canyon Scenic Drive cuts through its main section, leading to forest trails along the Virgin River. The river flows to the Emerald Pools, which have waterfalls and a hanging garden. Also along the river, partly through deep chasms, is Zion Narrows wading hike."
                onClick={onImgClick}
              />
            </div>
            <div className="w3-col m3">
              <p>Glacier National Park</p>
              <img
                src="images/Glacier.jpg"
                style={{ width: "100%", height: 150 }}
                className="w3-hover-opacity"
                alt="My beloved typewriter"
                data-description="Glacier National Park is a 1,583-sq.-mi. wilderness area in Montana's Rocky Mountains, with glacier-carved peaks and valleys running to the Canadian border. It's crossed by the mountainous Going-to-the-Sun Road. Among more than 700 miles of hiking trails, it has a route to photogenic Hidden Lake. Other activities include backpacking, cycling and camping. Diverse wildlife ranges from mountain goats to grizzly bears."
                onClick={onImgClick}
              />
            </div>
            <div className="w3-col m3">
              <p>Olympic National Park</p>
              <img
                src="images/Olympic.jpg"
                style={{ width: "100%", height: 150 }}
                className="w3-hover-opacity"
                alt="Empty ghost train"
                data-description="Olympic National Park is on Washington's Olympic Peninsula in the Pacific Northwest. The park sprawls across several different ecosystems, from the dramatic peaks of the Olympic Mountains to old-growth forests. The summit of glacier-clad Mt. Olympus is popular with climbers, and hiking and backpacking trails cut through the park's rainforests and along its Pacific coastline."
                onClick={onImgClick}
              />
            </div>
            <div className="w3-col m3">
              <p>Rocky Mountains</p>
              <img
                src="images/rockies.jpg"
                style={{ width: "100%", height: 150 }}
                className="w3-hover-opacity"
                alt="The Rocky Mountains"
                data-description="Rocky Mountain National Park in northern Colorado spans the Continental Divide and encompasses protected mountains, forests and alpine tundra. It's known for the Trail Ridge Road and the Old Fall River Road, drives that pass aspen trees and rivers. The Keyhole Route, a climb crossing vertical rock faces, leads up Longs Peak, the park’s tallest mountain. A trail surrounding Bear Lake offers views of the peaks."
                onClick={onImgClick}
              />
            </div>
            {/* <button
              className="w3-button w3-padding-large w3-black"
              style={{ marginTop: "15px", opacity: "0.6" }}
            >
              Search your favorite national park
            </button> */}
            {/* <UncontrolledDropdown></UncontrolledDropdown> */}

            {/* <div className="w3-dropdown-hover">
              <button className="w3-button">Hover Over Me!</button>
              <div className="w3-dropdown-content w3-bar-block w3-border">
                <a href="#" className="w3-bar-item w3-button">
                  Link 1
                </a>
                <a href="#" className="w3-bar-item w3-button">
                  Link 2
                </a>
                <a href="#" className="w3-bar-item w3-button">
                  Link 3
                </a>
              </div>
            </div> */}
          </div>

          {/* <!-- Modal for full size images on click--></div> */}
          <Modal show={modalActive} handleClose={() => showModal(false)}>
            <span
              className="w3-button w3-large w3-black w3-display-topright"
              title="Close Modal Image"
              onClick={() => showModal(false)}
            >
              <FontAwesomeIcon icon={faTimes} />
            </span>
            <div
              className="w3-modal-content w3-animate-zoom w3-center w3-black"
              style={{ padding: "10px" }}
            >
              <img
                id="img01"
                className="w3-image"
                src={modalData.src}
                style={{ maxWidth: "70%", height: "auto", marginTop: "10px" }}
              />
              <p id="caption" className="w3-opacity w3-large">
                {modalData.description}
              </p>
            </div>
          </Modal>
        </div>
        <div />
        <div />
      </div>
    </div>
  );
}
export default search;
