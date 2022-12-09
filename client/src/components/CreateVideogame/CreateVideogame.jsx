import Nav from "../Nav/Nav";
import "./CreateVideogame.css";
import logo from "../../assets/subzero.png";

export default function CreateVideoGame() {
  return (
    <>
      <Nav />
      <div className="form-container">
        <img className="subzero" src={logo} alt="" />
        <div className="formulario">Base de formulario</div>
      </div>
    </>
  );
}
