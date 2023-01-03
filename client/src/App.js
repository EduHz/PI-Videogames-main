import About from "./components/About/About.jsx";
import CreateVideogame from "./components/CreateVideogame/CreateVideogame.jsx";
import DetailVideogame from "./components/DetailVideogame/DetailVideogame";
import Home from "./components/Home/Home.jsx";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/create" component={CreateVideogame} />
      <Route exact path="/about" component={About} />
      <Route exact path="/detail/:id" component={DetailVideogame} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
