/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/purity */
import { useState, useEffect } from "react";

const Countdown = ({ target }) => {
  const targetTime =
    target instanceof Date ? target.getTime() : new Date(target).getTime();

  const calc = () => {
    const now = Date.now();
    const diff = Math.max(0, targetTime - now);

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      mins: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
      secs: Math.floor((diff % (1000 * 60)) / 1000),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calc());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calc());
    }, 1000);

    return () => clearInterval(interval);
  }, [targetTime]);

  const pad = (n) => String(n).padStart(2, "0");

  return (
    <p className="mt-2 text-2xl font-semibold">
      {timeLeft.days}d : {pad(timeLeft.hours)}h : {pad(timeLeft.mins)}m : {pad(timeLeft.secs)}s
    </p>
  );
};

export default Countdown;
