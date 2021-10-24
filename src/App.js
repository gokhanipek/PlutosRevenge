import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import './App.scss';
import BirdEyeView from "./home/BirdEyeView/BirdEyeView";
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


function App() {
  const spinwheelSlices = [
    {
      id: 1,
      sliceImageUrl: hp50,
      wonImageUrl:
        "https://cdn.wynnsports.com/uploaded-media/nj/Spin_Wheel_15/76c3d9a2-e772-466a-b009-23bc72afa9ed-final_insurannce_f.png",
      wonDescription:
        "If your wager loses, then we will refund your wager amount as a Free Bet.",
      backgroundImageUrl: Slice1,
    },
    {
      id: 2,
      sliceImageUrl: hp10,
      wonImageUrl:
        "https://cdn.wynnsports.com/uploaded-media/nj/Spin_Wheel_15/bafc5d1e-1b8b-45e9-9714-0bb1e024b6ad-new-ball-01__1_.png",
      wonDescription: "Your winnings will be boosted by 10%",
      backgroundImageUrl: Slice2,
    },
    {
      id: 3,
      sliceImageUrl: hp10minus,
      wonImageUrl:
        "https://cdn.wynnsports.com/uploaded-media/nj/Spin_Wheel_15/bafc5d1e-1b8b-45e9-9714-0bb1e024b6ad-new-ball-01__1_.png",
      wonDescription: "Your winnings will be boosted by 15%",
      backgroundImageUrl: Slice1,
    },
    {
      id: 4,
      sliceImageUrl: hp50minus,
      wonImageUrl:
        "https://cdn.wynnsports.com/uploaded-media/nj/Spin_Wheel_15/9db8e15d-02b9-4ad1-bb70-35c148dba6ef-final_insurannce_1.png",
      wonDescription:
        "If one event loses then we will refund your wager amount as a Free Bet.",
      backgroundImageUrl: Slice2,
    },
    {
      id: 5,
      sliceImageUrl: rockets,
      wonImageUrl:
        "https://cdn.wynnsports.com/uploaded-media/nj/Spin_Wheel_15/bafc5d1e-1b8b-45e9-9714-0bb1e024b6ad-new-ball-01__1_.png",
      wonDescription: "Your winnings will be boosted by 10%",
      backgroundImageUrl: Slice1,
    },
    {
      id: 6,
      sliceImageUrl: hp90minus,
      wonImageUrl:
        "https://cdn.wynnsports.com/uploaded-media/nj/Spin_Wheel_15/bafc5d1e-1b8b-45e9-9714-0bb1e024b6ad-new-ball-01__1_.png",
      wonDescription: "Your winnings will be boosted by 25%",
      backgroundImageUrl: Slice2,
    },
    {
      id: 7,
      sliceImageUrl: hp100,
      wonImageUrl:
        "https://cdn.wynnsports.com/uploaded-media/nj/Spin_Wheel_15/bafc5d1e-1b8b-45e9-9714-0bb1e024b6ad-new-ball-01__1_.png",
      wonDescription: "Your winnings will be boosted by 20%",
      backgroundImageUrl: Slice1,
    },
    {
      id: 8,
      sliceImageUrl: hp250,
      wonImageUrl:
        "https://cdn.wynnsports.com/uploaded-media/nj/Spin_Wheel_15/76c3d9a2-e772-466a-b009-23bc72afa9ed-final_insurannce_f.png",
      wonDescription:
        "If your wager loses, then we will refund your wager amount as a Free Bet.",
      backgroundImageUrl: Slice2,
    },
    {
      id: 9,
      sliceImageUrl: hp10,
      wonImageUrl:
        "https://cdn.wynnsports.com/uploaded-media/nj/Spin_Wheel_15/bafc5d1e-1b8b-45e9-9714-0bb1e024b6ad-new-ball-01__1_.png",
      wonDescription: "Your winnings will be boosted by 5%",
      backgroundImageUrl: Slice1,
    },
    {
      id: 10,
      sliceImageUrl: hp10minus,
      wonImageUrl:
        "https://cdn.wynnsports.com/uploaded-media/nj/Spin_Wheel_15/bafc5d1e-1b8b-45e9-9714-0bb1e024b6ad-new-ball-01__1_.png",
      wonDescription: "Your winnings will be boosted by 10%",
      backgroundImageUrl: Slice2,
    }
  ];
  return (
    <div className="app-wrapper">
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
              <Route path="/wheel">
                <Wheel items={spinwheelSlices} />
              </Route>
            </Switch>
          </div>
        </Router>
    </div>
  );
}

export default App;
