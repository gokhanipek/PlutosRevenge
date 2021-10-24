import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import './App.scss';
import BirdEyeView from "./home/BirdEyeView/BirdEyeView";
import FullView from "./home/FullView/FullView";
import Home from "./home/Home";
import PlanetInfo from "./planets/PlanetInfo/PlanetInfo"

function App() {
  return (
        <Router>
          <div className="App">
            <Switch>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/birdeye">
                <BirdEyeView />
              </Route>
              <Route path="/fullview">
                <FullView />
              </Route>
              <Route path="/planetinfo">
                <PlanetInfo />
              </Route>
            </Switch>
          </div>
        </Router>
  );
}

export default App;
