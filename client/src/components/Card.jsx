import './Card.css'

export default function Card() {
  return (
    <div className="container">
      <div className="card">
        <div className="imgBx">
          <img src="https://i.blogs.es/dfbccc/trucosgtavps4/1366_2000.jpg" />
        </div>
        <div className="contentBx">
          <h2>Gta V</h2>
          
          <div className="size">
            <h3>Platforms :</h3>
            <span>PC</span>
            <span>XBOX</span>
            <span>PS5</span>
            
          </div>
          <div className="color">
            <h3>genres :</h3>
            <span></span>
            <span></span>
            <span></span>
            
          </div>
          <a href="#">DETAIL</a>
        </div>
      </div>
    </div>
  );
}
