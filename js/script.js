var computerMove, playerMove, playerInput, randomNumber;

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

function displayResult(PlayerMove, ComputerMove) {
  if (
    (PlayerMove == "papier" && ComputerMove == "kamień") ||
    (PlayerMove == "kamień" && ComputerMove == "nożyczki") ||
    (PlayerMove == "nożyczki" && ComputerMove == "papier")
  ) {
    printMessage("Wygrywasz!");
  } else if (PlayerMove == ComputerMove) {
    printMessage("Remis");
  } else {
    printMessage("Przegrywasz :(");
  }
  printMessage("Zagrałem " + ComputerMove + ", a Ty " + PlayerMove);
}

playerInput = prompt("Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.");
console.log("wybór ruchu gracza to: " + playerInput);
playerMove = getMoveName(playerInput);
console.log("ruch gracza to: " + playerMove);
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log("wylosowana liczba to: " + randomNumber);
computerMove = getMoveName(randomNumber);
console.log("ruch komputera to: " + computerMove);
displayResult(playerMove, computerMove);
