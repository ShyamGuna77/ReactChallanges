import { useState, useRef } from "react";
import ResultModal from "./ResultModal.jsx";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef(); // Reference for the timer
  const dialog = useRef(); // Reference for the result modal

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  // Check if the timer is active (running)
  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current); // Stop the timer when time is up
    dialog.current.open(); // Show the result modal
  }

  // Reset the timer
  function handleReset() {
    setTimeRemaining(targetTime * 1000);
  }

  // Start the timer
  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  }

  // Stop the timer
  function handleStop() {
    dialog.current.open(); // Open the result modal
    clearInterval(timer.current); // Stop the timer
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset={handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
