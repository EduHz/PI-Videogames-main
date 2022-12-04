import { Link } from "react-router-dom";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div className="mylandingpage">
      <h1>Soy la landing page</h1>
      <Link to="/home">
        <button>START PLAYER ONE</button>
      </Link>
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
