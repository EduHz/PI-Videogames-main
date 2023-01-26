import { useState } from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

export default function LandingPage() {
  const [coin, setCoin] = useState(0);

  console.log(coin);

  return (
    <div className="mylandingpage">
      <div className="container-landing">
        <h1 className="h1-landing">VideoGames</h1>
        <h4 className="h4-landing">
          Welcome to my Henry Academy solo project. You can search for video
          games and create your owm. Enjoy it
          <span>&#160;</span>
        </h4>
        <Link to="/home" style={{ textDecoration: 'none' }}>
          <h4 className="parpadea">PRESS START</h4>
        </Link>
      </div>
    </div>
  );
}

//Insert coint, for start

// <div className="landing">
//   <h1>Soy la landing page</h1>
//   <Link to="/home">
//     <button>START PLAYER ONE</button>
//   </Link>
// </div>
