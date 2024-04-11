let playerTurn = document.getElementById("playerTurn");
const boxes = document.querySelector(".box");
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

boxes.forEach((el) => {
  el.addEventListener("click", () => {
    if (!el.innerHTML) {
      el.innerHTML = icon;
      toggle();
      playerTurn();
    }
  });
});
