import React, { useState, useEffect } from "react";
import "./Countdown.scss";

const Countdown = () => {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const getDate = (e) => {
    setDate(e.target.value);
  };
  useEffect(() => {
    if (isNaN(date)) {
      let countDownDate = new Date(date).getTime();
      console.log(countDownDate);
      let x = setInterval(() => {
        let now = new Date().getTime();
        let distance = countDownDate - now;

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTime(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");

        if (distance < 0) {
          clearInterval(x);
          setTime("COUNTDOWN FINISHED");
        }
      }, 1000);
    }
  }, [date]);

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="c-form__input">
          <label>
            <p>date</p>
            <input className="c-form__input__input" type="datetime-local" onInput={getDate} />
          </label>
          <button className="c-form__input__btn" type="submit">
            Start Countdown
          </button>
        </div>
      </form>

      <div className="countdown">
        <h2>{time}</h2>
      </div>
    </>
  );
};

export default Countdown;
