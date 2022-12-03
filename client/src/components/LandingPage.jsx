import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <>
      <h1>Soy la landing page</h1>
      <Link to="/home">
        <button>START PLAYER ONE</button>
      </Link>
    </>
  );
}

//Insert coint, for start
