import "./App.scss";
import Countdown from "./DigitalClock/Countdown";
import DigitalClock from "./DigitalClock/DigitalClock";
import StopWatch from "./DigitalClock/StopWatch";

function App() {
  return (
    <div className="App">
      <DigitalClock />
      <Countdown />
      <StopWatch />
    </div>
  );
}

export default App;
