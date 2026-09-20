import { Redirect, Route, Switch } from "react-router-dom";
import FullView from "./home/FullView/FullView";
import Home from "./home/Home";
import PlanetInfo from "./planets/PlanetInfo/PlanetInfo"
import Wheel from "./wheel/SpinWheel";
import BattleScreen from "./battle/BattleScreen/BattleScreen";
import Space from "./home/BirdEyeView/Space";
import GameOver from "./home/GameOver";
import GameEnd from "./home/GameEnd";
import SessionGate from "./components/SessionGate";
import { WHEEL_SLICES } from "./store/awards";

function App() {
  return (
    <div className="app-frame">
      <div className="app-wrapper">
        <Space />
        <div className="App">
          <SessionGate>
            <Switch>
              <Route path="/fullview">
                <FullView />
              </Route>
              <Route path="/planetinfo/:name">
                <PlanetInfo />
              </Route>
              <Route path="/wheel">
                <Wheel items={WHEEL_SLICES} />
              </Route>
              <Route path="/battle">
                <BattleScreen />
              </Route>
              <Route path="/deepdarkness">
                <GameOver />
              </Route>
              <Route path="/endofstory">
                <GameEnd />
              </Route>
              <Route path="/home">
                <Home />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="*">
                <Redirect to="/" />
              </Route>
            </Switch>
          </SessionGate>
        </div>
      </div>
    </div>
  );
}

export default App;
