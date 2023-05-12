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
      <Route path="/" component={LandingPage} />
      <Route path="/home" component={Home} />
      <Route path="/create" component={CreateVideogame} />
      <Route path="/about" component={About} />
      <Route path="/detail/:id" component={DetailVideogame} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
