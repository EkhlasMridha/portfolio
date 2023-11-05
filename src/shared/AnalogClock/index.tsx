import { useEffect, useLayoutEffect, useRef } from "react";
import "./clock.scss";

export const AnalogClock = () => {
  const hour = useRef<HTMLDivElement>(null);
  const minute = useRef<HTMLDivElement>(null);
  const seconds = useRef<HTMLDivElement>(null);
  let interval: any;

  useEffect(() => {
    clearInterval(interval);
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

    if (!hour.current || !minute.current || !seconds.current) return;
    hour.current.style.transform = `rotate(${calcHour}deg)`;
    minute.current.style.transform = `rotate(${calcMin}deg)`;
    seconds.current.style.transform = `rotate(${calcSec}deg)`;
  }

  return (
    <div className="clock">
      <div className="clock-glow large-glow highlight-background"></div>
      <div className="clock-center primary-background"></div>
      <div className="hand hour primary-background" id="hour" ref={hour}></div>
      <div
        className="hand minute primary-background"
        id="minute"
        ref={minute}
      ></div>
      <div
        className="hand seconds highlight-background"
        id="seconds"
        ref={seconds}
      ></div>
    </div>
  );
};
