import { useState, useEffect } from "react";

// use ===> hook
function secToMin(sec) {
  const min = `${parseInt(sec / 60)}`.padStart(2, 0);
  let secs = `${parseInt(sec % 60)}`;
  secs = secs.length === 1 ? secs.padStart(2, 0) : secs;
  return `${min}:${secs}`;
}
function CountDown() {
  const [seconds, setSeconds] = useState(300);
  //   const [intervalKey, setIntervalKey] = useState(null);

   setInterval(() => setSeconds(seconds - 1), 1000)

  function stopCount() {
    if (seconds === 250) {
      //   clearInterval(intervalKey);
    }
  }
  stopCount();

  return (
    <section>
      <p>
        <strong> {secToMin(seconds)} </strong>
      </p>
    </section>
  );
}

export default CountDown;
