import Home from "./components/Home/Home.jsx"
import LandingPage from "./components/LandingPage";
import { Route } from "react-router-dom";
import DetailVideogame from "./components/DetailVideogame";
import About from "./components/About/About.jsx";
import CreateVideoGame from "./components/CreateVideoGame/CreateVideoGame.jsx";

function App() {
  return (
    <>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/create">
        <CreateVideoGame />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/videogame/:id">
        <DetailVideogame />
      </Route>
    </>
  );
}

export default App;
