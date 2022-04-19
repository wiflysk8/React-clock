import { useEffect, useState } from "react";
import "./DigitalClock.scss";

const DigitalClock = () => {
  const [clockState, setClockState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);
  }, []);
  return (
    <div className="digital-clock">
      <h2 className="c-clock">{clockState}</h2>
    </div>
  );
};

export default DigitalClock;
