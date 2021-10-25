import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import './App.scss';
import BirdEyeView from "./home/BirdEyeView/Space";
import FullView from "./home/FullView/FullView";
import Home from "./home/Home";
import PlanetInfo from "./planets/PlanetInfo/PlanetInfo"
import Wheel from "./wheel/SpinWheel";
import Slice1 from './assets/images/slice1.png';
import Slice2 from './assets/images/slice2.png';
import hp50 from './assets/images/hp50.png';
import hp50minus from './assets/images/hp50minus.png';
import hp10 from './assets/images/hp10.png';
import hp100 from './assets/images/hp100.png';
import hp10minus from './assets/images/hp10minus.png';
import hp250 from './assets/images/hp250.png';
import hp90minus from './assets/images/hp90minus.png';
import rockets from './assets/images/rockets.png';
import BattleScreen from "./battle/BattleScreen/BattleScreen";
import Space from "./home/BirdEyeView/Space";


function App() {
  const spinwheelSlices = [
    {
      id: 1,
      sliceImageUrl: rockets,
      backgroundImageUrl: Slice1,
    },
    {
      id: 2,
      sliceImageUrl: hp10,
      backgroundImageUrl: Slice2,
    },
    {
      id: 3,
      sliceImageUrl: hp10minus,
      backgroundImageUrl: Slice1,
    },
    {
      id: 4,
      sliceImageUrl: hp50minus,
      backgroundImageUrl: Slice2,
    },
    {
      id: 5,
      sliceImageUrl: rockets,
      backgroundImageUrl: Slice1,
    },
    {
      id: 6,
      sliceImageUrl: hp90minus,
      backgroundImageUrl: Slice2,
    },
    {
      id: 7,
      sliceImageUrl: hp100,
      backgroundImageUrl: Slice1,
    },
    {
      id: 8,
      sliceImageUrl: hp250,
      backgroundImageUrl: Slice2,
    },
    {
      id: 9,
      sliceImageUrl: hp10,
      backgroundImageUrl: Slice1,
    },
    {
      id: 10,
      sliceImageUrl: hp10minus,
      backgroundImageUrl: Slice2,
    }
  ];
  return (
    <div className="app-wrapper">
        <Space />
        <Router>
          <div className="App">
            <Switch>
              <Route path="/fullview">
                <FullView />
              </Route>
              <Route path="/planetinfo">
                <PlanetInfo />
              </Route>
              <Route path="/wheel">
                <Wheel items={spinwheelSlices} />
              </Route>
              <Route path="/battle">
                <BattleScreen />
              </Route>
              <Route exact path="/">
                <FullView />
              </Route>
            </Switch>
          </div>
        </Router>
    </div>
  );
}

export default App;
