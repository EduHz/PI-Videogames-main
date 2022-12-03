import "./Nav.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="navMenu">
      <Link to="/home">
        <span>HOME</span>
      </Link>

      <Link to="/create">
        <span>CREATE</span>
      </Link>

      <Link to="/about">
        <span>ABOUT</span>
      </Link>
    </nav>
  );
}
