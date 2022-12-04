import "./Nav.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <ul>
      <li>
        <Link to="/home" className="links">HOME</Link>
      </li>
      <li>
        <Link to="/create" className="links">CREATE</Link>
      </li>
      <li>
        <Link to="/about" className="links">ABOUT</Link>
      </li>
    </ul>
  );
}
