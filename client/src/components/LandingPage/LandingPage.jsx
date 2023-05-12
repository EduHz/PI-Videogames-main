import { Link } from "react-router-dom";
import React from "react";
import "./LandingPage.css";

function LandingPage() {
  return (
    <>
    <div className="mylandingpage">
      <div className="container-landing">
        <h1 className="h1-landing">VideoGames</h1>
        <h4 className="h4-landing">
          Welcome to my Henry Academy solo project. You can search for video
          games and create your owm. Enjoy it
          <span>&#160;</span>
        </h4>
        <Link to="/home" style={{ textDecoration: "none" }}>
          <h4 className="parpadea">PRESS START</h4>
        </Link>
      </div>
    </div>
    </>
  );
}

export default LandingPage;

