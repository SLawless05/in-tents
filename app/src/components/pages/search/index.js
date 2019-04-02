import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./style.css";
import Modal from "../../modals";
import parks from "./parks";
import Axios from "axios";

class search extends React.Component {
  state = {
    parkIds: parks,
    isModalActive: false,
    modalData: {},
    parkName: "",
    userParks: [],
    showAlert: true
  };

  onImgClick = e => {
    this.setState({
      modalData: {
        src: e.target.src,
        description: e.target.getAttribute("data-description")
      },
      isModalActive: true
    });
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
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
                name="parkName"
                list="parks"
                type="text"
                className="form-control"
                value={this.state.parkName}
                onChange={this.handleInputChange}
                id="park"
              />
              <button
                onClick={() => {
                  const parkid = this.state.parkIds[this.state.parkName];
                  Axios.get("/api/users/search/" + parkid).then(results => {
                    this.setState({
                      userParks: [
                        results.data.parkResults,
                        ...this.state.userParks
                      ],
                      parkName: ""
                    });
                  });
                }}
                style={{ marginLeft: "10px" }}
              >
                Search Park
              </button>
            </div>
            <datalist id="parks">
              {Object.keys(this.state.parkIds).map(park => (
                <option value={park} key={park} />
              ))}
            </datalist>
            {/* conditional rendering format */}

            {this.state.userParks.length !== 0 &&
              this.state.userParks.map(park => (
                <div
                  key={park.fullName}
                  style={{ fontFamily: "Sorts Mill Goudy" }}
                >
                  <h3 style={{ fontFamily: "Sorts Mill Goudy" }}>
                    {park.fullName}
                  </h3>
                  <p>{park.description}</p>
                  <p>{park.weather}</p>
                  <a rel="noopener noreferrer" href={park.url} target="_blank">
                    Check out this Park
                  </a>
                  <h3 style={{ fontFamily: "Sorts Mill Goudy" }}>Alerts</h3>
                  {park.alerts ? (
                    park.alerts.map(alert => (
                      <div style={{ fontFamily: "Sorts Mill Goudy" }}>
                        <h3 style={{ fontFamily: "Sorts Mill Goudy" }}>
                          {alert.title}
                        </h3>
                        <p>{alert.description}</p>
                        <a target="_blank" href={alert.url}>
                          More info
                        </a>
                      </div>
                    ))
                  ) : (
                    <p>This park has no alerts at this time.</p>
                  )}
                  <br />
                  <button id="favoriteButton" value="">Add to profile</button>
                </div>
              ))}
            <hr />
            {/* <button onClick={() => console.log(parkData, parks[parkData])}>Testing</button> */}
            <br />
            {/* End Testing */}
            <h3
              className="w3-center"
              style={{ fontFamily: "Sorts Mill Goudy" }}
            >
              NEED SOME IN-TENTS INSPIRATION?
            </h3>
            <p className="w3-center">
              <em>
                Not sure where to go on your next adventure? Check out some of
                our favorites below
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
                  onClick={this.onImgClick}
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
                  onClick={this.onImgClick}
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
                  onClick={this.onImgClick}
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
                  onClick={this.onImgClick}
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
                  onClick={this.onImgClick}
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
                  onClick={this.onImgClick}
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
                  onClick={this.onImgClick}
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
                  onClick={this.onImgClick}
                />
              </div>
            </div>
            <div>
              <hr />
                <h3 className="w3-center" style={{ fontFamily: "Sorts Mill Goudy", textAlign: "center" }}>
                  Road tripping to your next adventure? 
                </h3>
                <h3 className="w3-center" style={{ fontFamily: "Sorts Mill Goudy", textAlign: "center" }}>Check out our friends
                  over at "Are We There Yet?" to help you get started</h3>
                  <div><a target="_blank" href={"https://lychee-sundae-50558.herokuapp.com/"}>
                  <button 
                  className="w3-button w3-padding-large w3-black"
                  style={{ opacity: "0.6", fontFamily: "Sorts Mill Goudy", textAlign: "center", marginLeft: "42%"}}
                  >
                  Plan my road trip
                  </button></a></div>
              </div>

            {/* <!-- Modal for full size images on click--></div> */}
            <Modal
              show={this.state.isModalActive}
              handleClose={() =>
                this.setState({
                  isModalActive: false
                })
              }
            >
              <span
                className="w3-button w3-large w3-black w3-display-topright"
                title="Close Modal Image"
                onClick={() =>
                  this.setState({
                    isModalActive: false
                  })
                }
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
                  src={this.state.modalData.src}
                  style={{ maxWidth: "70%", height: "auto", marginTop: "10px" }}
                />
                <p id="caption" className="w3-opacity w3-large">
                  {this.state.modalData.description}
                </p>
              </div>
            </Modal>
          </div>

          <div />
          <div />
          <div />
        </div>
      </div>
    );
  }
}
export default search;
