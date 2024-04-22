let playerTurn = document.getElementById("playerTurn");
const boxes = document.querySelectorAll(".box");
const resetTheGame = document.getElementById("reset");
const winningArray = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let icon = "X";
let arrayX = [];
let arrayO = [];

// Check if elment is empty then asign X or O

boxes.forEach((element) => {
  element.addEventListener("click", () => {
    if (!element.innerHTML) {
      element.innerHTML = icon;
      if (icon == "X") {
        arrayX.push(element.id);
        console.log(arrayX);
      } else if (icon == "O") {
        arrayO.push(element.id);
        console.log(arrayO);
      }
      toggle();
      checkForWinner();
    }
  });
});

// Check for the winner

function checkForWinner(array) {
  for (let i = 0; i < winningArray.length; i++) {
    const winningCombo = winningArray[i];
    if (arraysEqual(array, winningCombo)) {
      playerTurn.innerText = "Cross's turn";

      return;
    }
  }
  return false;
}

// Setup toggle Function an player message

function toggle() {
  if (icon === "X") {
    icon = "O";
    playerTurn.innerText = "Nought's turn";
  } else {
    icon = "X";
    playerTurn.innerText = "Cross's turn";
  }
}

// Reseting the game

resetTheGame.addEventListener("click", () => {
  boxes.forEach((box.innerHTML = ""));
});
