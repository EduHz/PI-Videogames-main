import "./Card.css";

export function Card({ games }) {
  return (
    <div className="container">
      {games.map((res, index) => (
        <div className="card" key={index}>
          <img
            className="card-img"
            src={res.background_image}
            alt={res.name}
            title={res.name}
          />
          <div className="text">
            <h3>{res.name.slice(0, 20)}</h3>
            <h4>
              {/*De esta forma mostramos unicamente 3 generos*/}
              {res.genres.map((x) => x.name + " ").slice(0, 2)}
              <br />⭐{res.rating}
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
}
