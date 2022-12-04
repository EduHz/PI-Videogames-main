import "./Card.css";

export default function Card() {
  return (
    <div className="card">
      <div className="column">
        <img
          src="https://compass-ssl.xbox.com/assets/a0/4f/a04f2744-74d9-4668-8263-e0261fbea869.jpg?n=GTA-V_GLP-Page-Hero-1084_1920x1080.jpg"
          alt=""
        />
        <div className="text">
          <h3>GTA V</h3>
          <h4>
            action-adventure <br />
            ⭐4.5
          </h4>
        </div>
      </div>
    </div>
  );
}
