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
function getMoveName(MoveId) {
  if (MoveId == 1) {
    return "kamień";
  } else if (MoveId == 2) {
    return "papier";
  } else if (MoveId == 3) {
    return "nożyce";
  } else {
    printMessage(
      "Nie znam ruchu o id " + MoveId + '. Zakładam, że chodziło o "kamień".'
    );
    return "kamień";
  }
}

function displayResult(PlayerOne, PlayerTwo) {
  if (
    (PlayerOne == "papier" && PlayerTwo == "kamień") ||
    (PlayerOne == "kamień" && PlayerTwo == "nożyce") ||
    (PlayerOne == "nożyce" && PlayerTwo == "papier")
  ) {
    printMessage("Zagrałem " + PlayerTwo + ", a Ty " + PlayerOne);
    printMessage("Wygrywasz!");
    resultPlayer++;
  } else if (PlayerOne == PlayerTwo) {
    printMessage("Zagrałem " + PlayerTwo + ", a Ty " + PlayerOne);
    printMessage("Remis");
  } else {
    printMessage("Zagrałem " + PlayerTwo + ", a Ty " + PlayerOne);
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
