import "./Card.css";
import { Link } from "react-router-dom";

export function Card({ name, rating, image, genres, id }) {
  return (
    <div className="container">
      <div className="card" key={id}>
        <Link to={`detail/${id}`}>
          <img className="card-img" src={image} alt={name} title={name} />
        </Link>
        <div className="text">
          <h3>{name.slice(0, 20)}</h3>
          <h4>
            {/*De esta forma mostramos unicamente 3 generos*/}
            {genres.split(",").slice(0, 2)}
            <br />⭐{rating}
          </h4>
        </div>
      </div>
    </div>
  );
}
