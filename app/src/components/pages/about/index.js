import React from "react";

function about() {
  return (
    <div>
      <div
        className="bgimg-1 w3-display-container"
        id="home"
        style={{
          backgroundImage:
            "url('https://media.blogto.com/articles/2017725-lake-superior.jpg?w=2048&cmd=resize_then_crop&height=1365&quality=70')",
          minHeight: "40vh",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
      />

      <div className="w3-content w3-container w3-padding-65" id="about">
        <h1 className="w3-center" style={{fontFamily: "Sorts Mill Goudy"}}>ABOUT IN-TENTS</h1>
        <p className="w3-center" style={{fontFamily: "Sorts Mill Goudy"}}>
          <h3 style={{fontFamily: "Sorts Mill Goudy"}}>We love the outdoors!</h3>
        </p>
        <p className style={{fontFamily: "Sorts Mill Goudy", fontSize: "20px"}} >
          At In-Tents, we're a bit intense about our love for all things outdoor
          and adventure! We know that when planning your great adventures it's
          important to make sure the national park you want to visit is open,
          trails are clear, and campsites are avilable for your tent, yurt,
          trailer or car (looking at you glampers!). In-Tents makes it easy for
          you to build a profile, search the park you plan to go to, and recieve
          real time alerts for weather, road closures, and campsite reservations
          so you can go confidently into the wild.
        </p>
        <p className="w3-center" style={{fontFamily: "Sorts Mill Goudy", fontSize: "20px"}}>
          Earth is beautiful, we want to help you explore it. Create a profile
          and start exploring!{" "}
        </p>
        <div className="w3-center">
        <div><a href={"/profile"}>
          <button
            className="w3-button w3-padding-large w3-black"
            style={{ opacity: "0.6", fontFamily: "Sorts Mill Goudy"}}
          >
            Get started
          </button></a></div>
        </div>
      </div>
    </div>
  );
}

export default about;
