var computerMove, playerMove, playerInput, randomNumber, buttonRock, buttonScissors, buttonPaper, resultPlayer, resultComputer;
buttonRock = document.getElementById('button-rock');
buttonPaper = document.getElementById('button-paper');
buttonScissors = document.getElementById('button-scissors');
resultPlayer = 0;
resultComputer = 0;
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
      printMessage("Zagrałem " + ComputerMove + ", a Ty " + PlayerMove);
      printMessage("Wygrywasz!");
      resultPlayer++;
      return resultPlayer;
    } else if (PlayerMove == ComputerMove) {
      printMessage("Zagrałem " + ComputerMove + ", a Ty " + PlayerMove);
      printMessage("Remis");
    } else {
      printMessage("Zagrałem " + ComputerMove + ", a Ty " + PlayerMove);
      printMessage("Przegrywasz :(");
      resultComputer++;
      return resultComputer;
    }
  }
  document.querySelector('#result').textContent = `wynik gracza to ${resultPlayer} wynik komputer: ${resultComputer}`;
  
}
console.log(`wynik gracza poza funkcją: ${resultPlayer} wynik komputera w funkcji ${resultComputer}`);
buttonRock.addEventListener('click', function(){buttonClicked(`kamień`)});
buttonPaper.addEventListener('click', function(){buttonClicked(`papier`)});
buttonScissors.addEventListener('click', function(){buttonClicked(`nożyce`)});


 