const buttonRock = document.getElementById("button-rock");
const buttonPaper = document.getElementById("button-paper");
const buttonScissors = document.getElementById("button-scissors");
const results = document.querySelector(".main_result");

let resultPlayer = 0;
let resultComputer = 0;

function buttonClicked(buttonName) {
  let playerMove, computerMove;
  clearMessages();
  playerMove = buttonName;
  const randomNumber = Math.floor(Math.random() * 3 + 1);
  computerMove = getMoveName(randomNumber);
  displayResult(playerMove, computerMove);
}
//funckja potrzebna computerMove,arg to randomNumber
function getMoveName(moveId) {
  if (moveId == 1) {
    return "kamień";
  } else if (moveId == 2) {
    return "papier";
  } else if (moveId == 3) {
    return "nożyce";
  } else {
    printMessage(
      "Nie znam ruchu o id " + moveId + '. Zakładam, że chodziło o "kamień".'
    );
    return "kamień";
  }
}

function displayResult(playerOne, playerTwo) {
  if (
    (playerOne == "papier" && playerTwo == "kamień") ||
    (playerOne == "kamień" && playerTwo == "nożyce") ||
    (playerOne == "nożyce" && playerTwo == "papier")
  ) {
    printMessage("Zagrałem " + playerTwo + ", a Ty " + playerOne);
    printMessage("Wygrywasz!");
    resultPlayer++;
  } else if (playerOne == playerTwo) {
    printMessage("Zagrałem " + playerTwo + ", a Ty " + playerOne);
    printMessage("Remis");
  } else {
    printMessage("Zagrałem " + playerTwo + ", a Ty " + playerOne);
    printMessage("Przegrywasz :(");
    resultComputer++;
  }
  results.textContent = `wynik gracza to ${resultPlayer} wynik komputer: ${resultComputer}`;
}

buttonRock.addEventListener("click", function () {
  buttonClicked(`kamień`);
});
buttonPaper.addEventListener("click", function () {
  buttonClicked(`papier`);
});
buttonScissors.addEventListener("click", function () {
  buttonClicked(`nożyce`);
});
