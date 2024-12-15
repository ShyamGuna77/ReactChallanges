# Timer Challenge Game

Welcome to the **Timer Challenge Game**! The objective of this challenge is to create a game where users have to start a timer, try to stop it as close as possible to a target time, and get scored based on how close they were. If they stop the timer before the target time, they get a score; if they don't, they lose.

## Features
- **Player Name Input**: Players can enter their name to personalize the welcome message.
- **Timer Challenge**: Players have a target time to stop the timer, and the goal is to stop it as close as possible to that time.
- **Score Calculation**: The score is based on how close the player stopped the timer to the target time.
- **Result Modal**: Displays whether the player won (with a score) or lost if they couldn't stop the timer in time.

## Task for Users

### 1. **Player Component**:
   - **Objective**: You need to manage the player's name input.
   - **Task**: 
     - Implement an input field for the player to enter their name.
     - Display the name in the welcome message (`Welcome [Name]`).
     - If no name is entered, default the message to `Welcome King`.

### 2. **Timer Challenge Component**:
   - **Objective**: Implement the timer countdown, start/stop functionality, and the handling of timer-related events.
   - **Task**:
     - Implement a timer that starts counting down from the target time when the "Start Challenge" button is clicked.
     - Implement a button to stop the timer and display the result in a modal.
     - If the timer is stopped, calculate the time remaining and display the score as a percentage of how close the player was to the target time.
     - If the time runs out (timer hits 0), stop the timer and display a "You lost" message.

### 3. **Result Modal Component**:
   - **Objective**: Show the result when the timer stops.
   - **Task**:
     - Display the result in a modal (`dialog` element).
     - If the user won, display their score (a percentage of how close they were to the target time).
     - If the user lost, display a "You lost" message.
     - Provide a "Close" button to reset the game and close the modal.

### 4. **Challenge Logic**:
   - The user should try to stop the timer as close as possible to the target time.
   - Score should be calculated based on the time left when the user stops the timer, or the message "You lost" should appear if the user fails to stop it in time.

## Instructions
1. Clone this repository.
2. Install the dependencies by running `npm install` in the terminal.
3. Run the app with `npm start`.
4. Work on the `Player`, `TimerChallenge`, and `ResultModal` components to make the game functional and improve it.

## Bonus Challenges (Optional):
- Improve the UI: Make the layout more interactive or visually appealing.
- Add animations: Use CSS or JavaScript to add a smooth timer effect or transition for the modal.
- Implement a high-score system: Track the highest score across multiple rounds and show it at the top of the page.

## Technologies Used
- **React.js**: The core of the application for building the user interface.
- **useState**, **useRef**, and **useImperativeHandle** hooks for state management and modal handling.

## Contributions
Feel free to fork this repository and submit a pull request if you would like to contribute to this project. Any improvements or ideas are welcome!

---

Happy coding and good luck with the challenge!
