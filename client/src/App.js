import Home from "./components/Home/Home.jsx";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import { Route } from "react-router-dom";
import About from "./components/About/About.jsx";
import CreateVideogame from "./components/CreateVideogame/CreateVideogame.jsx";
import DetailVideogame from "./components/DetailVideogame/DetailVideogame";

function App() {
  return (
    <>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/create" component={CreateVideogame} />
      <Route exact path="/about" component={About} />
      <Route exact path="/detail/:id" component={DetailVideogame}/>
    </>
  );
}

export default App;
