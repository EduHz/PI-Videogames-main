import { useState } from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

export default function LandingPage() {
  const [coin, setCoin] = useState(0);

  console.log(coin);

  return (
    <div className="mylandingpage">
      <h1 className="landing-h1">Welcome!</h1>
      <button className="coin" onClick={() => setCoin(coin + 1)}>
        Coin
      </button>
      <h3 className="credits">Credits : {coin}</h3>
     
      {coin >= 1 ? (
        <Link to="/home">
          <h3 className="box">START</h3>
        </Link>
      ) : (
        <h4 className="h4-coin">Please insert a coin!</h4>
      )}
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
