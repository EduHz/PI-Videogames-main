import Home from "./components/Home/Home.jsx"
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import { Route } from "react-router-dom";
import About from "./components/About/About.jsx";
import CreateVideogame from './components/CreateVideogame/CreateVideogame.jsx'
import DetailVideogame from './components/DetailVideogame/DetailVideogame'

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
      <CreateVideogame />
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
