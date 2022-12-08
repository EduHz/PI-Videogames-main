import "./Card.css";

export function Card({ games }) {
  return (
    <div className="container">
      {games.map((resultadoDeMapeo, index) => (
        <div className="card">
          <img src={resultadoDeMapeo.background_image} alt={resultadoDeMapeo.name} title={resultadoDeMapeo.name}/>
          <div className="text">
            <h3>{resultadoDeMapeo.name.substring(0,20)}</h3>
            <h4>
              {resultadoDeMapeo.genres.map((x) => x.name.substring(0,10) + " ")} <br />⭐
              {resultadoDeMapeo.rating}
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
}
