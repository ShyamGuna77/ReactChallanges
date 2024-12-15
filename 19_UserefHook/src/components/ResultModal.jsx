import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const ResultModal = forwardRef(function ResultModal(
  { targetTime, remainingTime, onReset },
  ref
) {
  const dialog = useRef(); // Reference for the dialog modal

  const userLost = remainingTime <= 0; // Check if the user lost
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2); // Format the remaining time
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100); // Calculate score

  // Expose a method to open the modal
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal(); // Show the modal
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className="result-modal">
      {userLost ? <h2>You lost</h2> : <h2>Your Score: {score}</h2>}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with{" "}
        <strong>{formattedRemainingTime} seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal") // Ensure the modal is rendered outside the main component
  );
});

export default ResultModal;
