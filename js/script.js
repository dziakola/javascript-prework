var computerMove, playerMove, playerInput, randomNumber, buttonRock, buttonScissors, buttonPaper;
buttonRock = document.getElementById('button-rock');
buttonPaper = document.getElementById('button-paper');
buttonScissors = document.getElementById('button-scissors');

function buttonClicked(buttonName){
  clearMessages();
  console.log(`Przycisk ${buttonName} został kliknięty`);  
  
  playerMove = buttonName;
  randomNumber = Math.floor(Math.random() * 3 + 1);
  computerMove = getMoveName(randomNumber);
  displayResult(playerMove, computerMove);

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
  
  function displayResult(PlayerMove, ComputerMove) {
    if (
      (PlayerMove == "papier" && ComputerMove == "kamień") ||
      (PlayerMove == "kamień" && ComputerMove == "nożyce") ||
      (PlayerMove == "nożyce" && ComputerMove == "papier")
    ) {
      printMessage("Wygrywasz!");
    } else if (PlayerMove == ComputerMove) {
      printMessage("Remis");
    } else {
      printMessage("Przegrywasz :(");
    }
    printMessage("Zagrałem " + ComputerMove + ", a Ty " + PlayerMove);
  }
  
}

buttonRock.addEventListener('click', function(){buttonClicked(`kamień`)});
buttonPaper.addEventListener('click', function(){buttonClicked(`papier`)});
buttonScissors.addEventListener('click', function(){buttonClicked(`nożyce`)});


