let playerTurn = document.getElementById("playerTurn");
const boxes = document.querySelectorAll(".box");
console.log(boxes);
const resetTheGame = document.getElementById("reset");

let icon = "X";

// Setup toggle Function an player message
function toggle() {
  if (icon === "X") {
    icon = "O";
    playerTurn.innerHTML("<p>Nought's turn</p>");
  } else {
    icon = "X";
    playerTurn.innerHTML("<p>Cross's turn</p>");
  }
}

// Check if elment is empty then asign X or O

boxes.forEach((element) => {
  element.addEventListener("click", () => {
    if (!element.innerHTML) {
      element.innerHTML = icon;
      toggle();
      playerTurn();
    }
  });
});
