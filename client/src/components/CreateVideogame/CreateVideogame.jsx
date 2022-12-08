import Nav from "../Nav/Nav";
import "./CreateVideogame.css";

export default function CreateVideoGame() {
  return (
    <>
      <Nav />
      <div id="tv">
        <div className="name">
          <input type="text" name="name" required={true} placeholder="Name" />
        </div>
        <div className="released">
          <input type="date" name="Released" required={true} />
        </div>
        <div className="rating">
          <input type="number" placeholder="Rating" />
        </div>
        <div className="description">
          <input type="text" placeholder="Description"></input>
        </div>
        <div className="image">
          <input type="text" placeholder="Put url image" />
        </div>
        <div className="plataforms">
          <select>
            <option value="">PS5</option>
            <option> xBox</option>
            <option value="">Pc</option>
          </select>
        </div>
        <div className="genres">
          <select>
            <option value="">Action</option>
            <option value="">Adventure</option>
            <option value="">Horror</option>
          </select>
        </div>
        <button className="send" type="submit">
          Create Videogame
        </button>
      </div>
    </>
  );
}
