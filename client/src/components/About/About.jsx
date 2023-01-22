import Nav from "../Nav/Nav";
import "./About.css";

export default function About() {
  return (
    <>
      <Nav />
      <div className="about-container">
        <h2 className="h2-about">Hi, this is my Individual Project</h2>
        <h4 className="about-h4">
          This project is part of the final stage of my studies at the Henry
          Academy. In my case, the project I had to carry out was a video game
          website. On this page you can filter the video games, create new video
          games, and see the details of each one of them <br /> Here I use all
          the technologies learned:
        </h4>
        <div className="list-about">
          <li>Javascript</li>
          <br />
          <li>React</li>
          <br />
          <li>React-Redux</li>
          <br />
          <li>React-Router</li>
          <br />
          <li>Postgresql</li>
          <br />
          <li>Express</li>
          <br />
          <li>Sequalize</li>
          <br />
          <li>Morgan</li>
        </div>
        <h3>I hope you enjoy it 👍</h3>
      </div>
      <div className="contact-container">
        <h5>Contact to me</h5>
        <a href="https://www.linkedin.com/in/edu-hz/" target="_blank" rel="noreferrer">
          <img src="https://img.icons8.com/glyph-neue/50/null/linkedin-circled.png" alt="linkedin-icon"/>
        </a>
        <a href="https://wa.me/541123989941" target="_blank" rel="noreferrer">
          <img src="https://img.icons8.com/ios-filled/45/null/whatsapp--v1.png" alt="whatsapp-icon"/>
        </a>
        <a href="https://github.com/EduHz" target={"_blank"} rel="noreferrer">
          <img src="https://img.icons8.com/sf-black-filled/60/null/github.png" alt="github-icon"/>
        </a>
      </div>
    </>
  );
}


