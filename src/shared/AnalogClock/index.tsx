import { useEffect, useLayoutEffect } from "react";
import "./clock.scss";

export const AnalogClock = () => {
  const hour = document.getElementById("hour");
  const minute = document.getElementById("minute");
  const seconds = document.getElementById("seconds");
  let interval: any;

  useEffect(() => {
    interval = setInterval(() => {
      clock();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [minute, seconds, hour]);

  function clock() {
    let dateNow = new Date();
    let hr = dateNow.getHours();
    let min = dateNow.getMinutes();
    let sec = dateNow.getSeconds();

    let calcSec = sec * 6 + 90;
    let calcMin = min * 6 + sec / 10 + 90;
    let calcHour = hr * 30 + min / 2 + 90;

    if (!hour || !minute || !seconds) return;

    hour.style.transform = `rotate(${calcHour}deg)`;
    minute.style.transform = `rotate(${calcMin}deg)`;
    seconds.style.transform = `rotate(${calcSec}deg)`;
  }

  return (
    <div className="clock">
      <div className="clock-glow large-glow highlight-background"></div>
      <div className="clock-center primary-background"></div>
      <div className="hand hour primary-background" id="hour"></div>
      <div className="hand minute primary-background" id="minute"></div>
      <div className="hand seconds highlight-background" id="seconds"></div>
    </div>
  );
};
