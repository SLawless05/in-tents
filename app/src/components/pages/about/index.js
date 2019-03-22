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
          minHeight: "50vh",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
      />

      <div className="w3-content w3-container w3-padding-64" id="about">
        <h3 className="w3-center">ABOUT IN-TENTS</h3>
        <p className="w3-center">
          <em>We love the outdoors!</em>
        </p>
        <p className>
          At In-Tents, we're a bit intense about our love for all things outdoor
          and adventure! We know that when planning your great adventures it's
          important to make sure the national park you want to visit is open,
          trails are clear, and campsites are avilable for your tent, yurt,
          trailer or car (looking at you glampers!). In-Tents makes it easy for
          you to build a profile, search the park you plan to go to, and recieve
          real time alerts for weather, road closures, and campsite reservations
          so you can go confidently into the wild.
        </p>
        <p className="w3-center">
          Earth is beautiful, we want to help you explore it. Create a profile
          and start exploring!{" "}
        </p>
        <div className="w3-center">
        <button
          className="w3-button w3-padding-large"
          style={{textAlign: "center", margin: "auto", backgroundColor: "#825696"}}
        >
          Get started
        </button>
        </div>
      </div>
    </div>
  );
}

export default about;
