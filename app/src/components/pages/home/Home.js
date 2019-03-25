import React from "react";
import Hero from "../../Hero";
import Container from "../../Container";
import Row from "../../Row";
import Col from "../../Col";
// import logo from './logo.png';

function Home() {
  return (
    <div
      className="bgimg-1 w3-display-container"
      id="home"
      style={{
        backgroundImage:
          "url('https://media.blogto.com/articles/2017725-lake-superior.jpg?w=2048&cmd=resize_then_crop&height=1365&quality=70')",
        minHeight: "100vh",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
    >
      <div className="w3-display-middle" style={{ whiteSpace: "nowrap" }}>
        <img src="images/in-tentswhite.png" alt="logo" />
      </div>
    </div>
  );
}

export default Home;
