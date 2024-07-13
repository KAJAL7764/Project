let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-button");  //Selects the new game button element by its ID "reset-button"
let newGameBtn = document.querySelector("#newbutton"); //Selects the new game button element by its ID "newbutton"
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

//winning pattern, when any player fills the cells in these patterns, they win the game.
let turnO = true;
let winList = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
//function for reset game
const resetGame = () => {
  turnO = true;
  enableBoxes();
  msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
//   Here, a click event listener to each box.
// When a box is clicked, if it's "O"'s turn,
//  it places "O" in the box; otherwise, it places "X"
  box.addEventListener("click", () => {
    console.log("Boxes was clicked");
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } 
    else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});
// These functions disable or enable all the boxes. 
// Used during game reset and initialization.
const disabledBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
    box.innerText = "";
  }
};
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
//This functions  displays a message declaring the winner.
const showWinner = (winner) => {
  msg.innerText = `Congratulation, winner is ${winner}`;
  msgContainer.classList.remove("hide");
};
// If a winning pattern is found with the same content in all cells, 
// it declares the winner.
const checkWinner = () => {
  for (let pattern of winList) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("winner", pos1Val);
        showWinner(pos1Val);
      }
    }
  }
};
// Adds click event listeners to the "New Game" button and "Reset" button.
//  Calls the resetGame function when clicked to reset the game.
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
// resetBtn.addEventListenm
