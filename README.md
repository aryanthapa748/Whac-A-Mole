# Whac-A-Mole 🎯
A fun, interactive Whac-A-Mole game built using JavaScript! Try to test your reflexes by whacking the mole as it randomly appears on the grid.

## **📝 Game Description**
The game features a 3x3 grid where a mole randomly appears every second. The objective is to "whack" the mole by clicking on the square it appears in before it disappears and reappears elsewhere. Your score increases with each successful "whack"!

## **🚀 How to Play**
Start the game, and a mole will begin appearing randomly in one of the grid squares.
Quickly click on the square containing the mole before it moves to another square.
Each successful click increases your score.
Keep going to see how high you can score!

## **🛠️ Built With**
The game was developed using HTML, CSS, and JavaScript. Key JavaScript methods and functions used include:
- setInterval(): Moves the mole to a random position every 1000ms.
- clearInterval(): Stops the interval when the game ends.
- querySelector and querySelectorAll: Used to select and manage the grid squares.
- forEach: Loops through each grid square to add event listeners.
- Math.random: Randomizes the mole's position on the grid.
- classList.add and classList.remove: Toggles classes to show and hide the mole.

## **💡 Features**
- **Random Mole Positioning:** The mole appears in a new random position every second.
- **Scoring System:** Tracks the player's score based on successful whacks.
- **Responsive Layout:** Works well on various screen sizes.
- **Game Timer (optional):** Add a timer to limit the game duration for an extra challenge.

## **🤔 Future Enhancements**
- Add levels of difficulty to change the mole's speed.
- Include a high score board to track best scores.
- Implement sound effects when the mole is whacked.
- Add a timer to make the game even more challenging.

## **📜 License**
This project is licensed under the MIT License.
