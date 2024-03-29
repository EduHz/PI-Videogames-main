import React from "react";
import { Link } from "react-router-dom";
import audio from "../../assets/gta-sa-menu.mp3";

export default function Nav() {
  const playAudio = () => {
    new Audio(audio).play();
  };

  return (
    <ul>
      <li onMouseOver={playAudio}>
        <Link to="/home" className="links">
          HOME
        </Link>
      </li>
      <li onMouseOver={playAudio}>
        <Link to="/create" className="links">
          CREATE
        </Link>
      </li>
      <li onMouseOver={playAudio}>
        <Link to="/about" className="links">
          ABOUT
        </Link>
      </li>
    </ul>
  );
}
